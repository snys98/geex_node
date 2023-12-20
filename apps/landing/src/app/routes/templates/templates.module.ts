import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared";

import { GenerationPage } from "./generation/generation.page";
import { TemplatesRoutingModule } from "./templates-routing.module";

@NgModule({
  imports: [SharedModule, CommonModule, FormsModule, TemplatesRoutingModule],
  declarations: [GenerationPage],
})
export class TemplateModule {}
