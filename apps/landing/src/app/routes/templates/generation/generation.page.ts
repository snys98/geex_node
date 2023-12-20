import { Component, Injector, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, TypedFormGroup, Validators } from "@angular/forms";
import { deepCopy } from "@delon/util";
import { isEqual } from "lodash-es";

import { RoutedComponent } from "../../../shared/components/routed-components/routed.component.base";
import {
  ClientUiTemplateArgsInput,
  GenerateTemplateGql,
  GenerateTemplateMutation,
  GenerateTemplateMutationVariables,
  Template,
  TemplateArgsInput,
} from "../../../shared/graphql/.generated/type";

export type GenerationPageParams = {};
type GenerationPageContext = {
  form: TypedFormGroup<{
    template?: Template;
    args?: TemplateArgsInput;
  }>;
};
@Component({
  templateUrl: "./generation.page.html",
  styles: [],
})
export class GenerationPage extends RoutedComponent<GenerationPageParams, GenerationPageContext> {
  context: GenerationPageContext;
  Template = Template;
  constructor(injector: Injector) {
    super(injector);
  }

  async fetchData() {
    let params = this.params.value;
    let fb = new FormBuilder();
    let form = fb.build<{
      template: Template;
      args: TemplateArgsInput;
    }>({
      template: Template.Solution,
      args: {
        clientUiTemplate: {
          org: undefined,
        },
        moduleTemplate: {
          org: undefined,
        },
        solutionTemplate: {
          org: undefined,
          projectName: undefined,
          defaultModuleName: undefined,
          defaultAggregateName: undefined,
        },
        schematicsTemplate: {
          aggregateManageUIModule: {
            module: undefined,
            aggregateName: new FormControl(undefined),
          },
        },
      },
    });
    let result: GenerationPageContext = {
      form,
    };
    return result;
  }

  async submit(): Promise<void> {
    let response = await this.apollo
      .mutate<GenerateTemplateMutation, GenerateTemplateMutationVariables>({
        mutation: GenerateTemplateGql,
        variables: {
          template: this.context.form.value.template,
          args: this.context.form.value.args.removeEmptyProperties(),
        },
      })
      .toPromise();
    this.msgSrv.success("generation success");
    setTimeout(() => {
      window.open(response.data.generateTemplate.url);
    }, 500);
  }
}
