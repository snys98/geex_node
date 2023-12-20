import { Component, Injector, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { deepCopy } from "@delon/util";
import { isEqual } from "lodash-es";

import { EditDataContext, RoutedEditComponent } from "../../../shared/components/routed-components/routed-edit.component.base";
import {
  BookByIdQuery,
  BookByIdQueryVariables,
  BookByIdGql,
  CreateBooksGql,
  CreateBookInput,
  EditBookInput,
  EditBooksGql,
  Book,
  BookDetailFragment,
} from "../../../shared/graphql/.generated/type";
import { EditMode } from "../../../shared/types/common";

type EntityEditablePart = Pick<Book, "name">;

export type BookEditPageParams = {
  id: string;
  name: string;
};
type BookEditPageContext = EditDataContext<BookDetailFragment, keyof EntityEditablePart> & {
  disabled: boolean;
};

@Component({
  selector: "app-book-edit",
  templateUrl: "./edit.page.html",
  styles: [],
})
export class BookEditPage extends RoutedEditComponent<BookEditPageParams, BookDetailFragment, keyof EntityEditablePart> {
  mode: EditMode;
  context: BookEditPageContext;

  constructor(injector: Injector) {
    super(injector);
  }

  override close() {
    return super.close();
  }

  async fetchData() {
    let params = this.params.value;
    const id = params.id;
    this.mode = id ? "edit" : "create";
    let result: BookEditPageContext={
      id,
      disabled: false,
    }
    let fb: FormBuilder = new FormBuilder();

    let formConfig: { [key in keyof EntityEditablePart]: FormControl };
    if (id) {
      let res = await this.apollo
        .query<BookByIdQuery, BookByIdQueryVariables>({
          query: BookByIdGql,
          variables: {
            id: id,
          },
        })
        .toPromise();
      let entity = res.data.bookById;
      result.entity = entity;
      formConfig = { name: new FormControl(entity.name) };
    } else {
      formConfig = { name: new FormControl("") };
    }
    let entityForm = fb.group(formConfig);
    result.entityForm = entityForm;
    result.originalValue = entityForm.value;
    return result;
  }

  async submit(): Promise<void> {
    if (this.mode === "create") {
      await this.apollo
        .mutate({
          mutation: CreateBooksGql,
          variables: {
            input: {
              name: this.context.entityForm.value.name,
            } as CreateBookInput,
          },
        })
        .toPromise();
      this.msgSrv.success("添加成功");
      await this.back(true);
    } else {
      if (this.mode === "edit") {
        await this.apollo
          .mutate({
            mutation: EditBooksGql,
            variables: {
              id: this.context.id,
              input: {
                name: this.context.entityForm.value.name,
              } as EditBookInput,
            },
          })
          .toPromise();
        this.msgSrv.success("修改成功");
        await this.back(true);
      }
    }
  }
}
