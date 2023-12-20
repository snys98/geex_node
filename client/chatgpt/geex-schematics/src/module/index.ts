import { strings } from "@angular-devkit/core";
import type { Rule, Tree } from "@angular-devkit/schematics";
import {
  SchematicsException,
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  template,
  url,
} from "@angular-devkit/schematics";
import { parseName } from "@schematics/angular/utility/parse-name";
import { validateHtmlSelector } from "@schematics/angular/utility/validation";
import { buildDefaultPath, getWorkspace } from "@schematics/angular/utility/workspace";

import { buildSelector } from "../util";
import { addRoute, addRouteToNgModule, findRoutingModuleFromOptions } from "./route-utils";
import type { Schema as PageOptions } from "./schema";

export function module(options: PageOptions): Rule {
  return async (host: Tree) => {
    if (!options.project) {
      throw new SchematicsException("Option (project) is required.");
    }

    const { execSync } = require("child_process");
    // 在项目根路径下执行自定义npm命令
    execSync("yarn", { cwd: host.root.path, stdio: "inherit" });
    execSync("yarn", { cwd: `..${host.root.path}\\PlatformChatGPTApp`, stdio: "inherit" });

    const workspace = await getWorkspace(host);
    const project = workspace.projects.get(options.project);
    if (project && options.path === undefined) {
      options.path = buildDefaultPath(project);
    }

    if (!options.standalone) {
      options.module = findRoutingModuleFromOptions(host, options);
    }

    const parsedPath = parseName(options.path as string, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;
    options.selector = options.selector ? options.selector : buildSelector(options, project?.prefix ?? "app");

    validateHtmlSelector(options.selector);

    const templateSource = apply(url("./files"), [
      options.spec ? noop() : filter(p => !p.endsWith(".spec.ts")),
      options.standalone ? filter(p => !p.endsWith("module.ts")) : noop(),
      template({
        ...strings,
        ...options,
      }),
      move(parsedPath.path),
    ]);

    setTimeout(() => {
      execSync("yarn gqlgen", { cwd: `..${host.root.path}\\PlatformChatGPTApp`, stdio: "inherit" });
    }, 2000);

    return chain([
      branchAndMerge(chain([options.standalone ? addRoute(options) : addRouteToNgModule(options), mergeWith(templateSource)])),
    ]);
  };
}
