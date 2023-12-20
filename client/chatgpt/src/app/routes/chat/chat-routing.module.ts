import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChatWindowComponent } from "./chat-window/chat-window.component";

const routes: Routes = [
  { path: "", component: ChatWindowComponent },
  { path: ":chatId", component: ChatWindowComponent },
  { path: "*", redirectTo: "", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
