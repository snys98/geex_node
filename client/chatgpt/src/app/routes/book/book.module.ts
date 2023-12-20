import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "@shared";

import { BookRoutingModule } from './book-routing.module';

import { BookListPage } from './list/list.page';
import { BookEditPage } from './edit/edit.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    BookRoutingModule
  ],
  declarations: [BookListPage,BookEditPage]
})
export class BookModule {}
