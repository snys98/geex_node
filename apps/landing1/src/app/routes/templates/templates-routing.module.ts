import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GenerationPage } from "./generation/generation.page";
import { GenerationPageResolve } from "./generation/generation.resolve";

const routes: Routes = [
  {
    path: "",
    component: GenerationPage,
    resolve: { params: GenerationPageResolve },
    runGuardsAndResolvers: "always",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
