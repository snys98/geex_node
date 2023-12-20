import { Injectable, Injector } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { merge } from "lodash";
import { Observable } from "rxjs";

import { RoutedComponentResolveBase } from "../../../shared/resolvers/route-component.resolver.base";
import { GenerationPageParams } from "./generation.page";

@Injectable({
  providedIn: "root",
})
export class GenerationPageResolve extends RoutedComponentResolveBase<GenerationPageParams> {
  override normalizeParams(queryParams: GenerationPageParams): GenerationPageParams {
    let resolvedParams: GenerationPageParams = {};
    return resolvedParams;
  }
  constructor(injector: Injector) {
    super(injector);
  }
}
