/* eslint-disable @angular-eslint/directive-class-suffix */
import { Directive, EmbeddedViewRef, Input, Optional, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[formGroup]",
})
export class FormGroupExtend<T = unknown> {
  private _context: FormGroupExtendContext<T> = new FormGroupExtendContext<T>();
  private _viewRef: EmbeddedViewRef<FormGroupExtendContext<T>> | null = null;

  @Input()
  set formGroup(context: T) {
    this._context.$implicit = this._context.formGroup = context;

    if (!this._viewRef) {
      this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
    }
  }

  // https://github.com/angular/angular/blob/main/packages/common/src/directives/ng_if.ts

  /**
   * Assert the correct type of the expression bound to the `ngIf` input within the template.
   *
   * The presence of this static field is a signal to the Ivy template type check compiler that
   * when the `NgIf` structural directive renders its template, the type of the expression bound
   * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
   * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
   */

  static ngTemplateGuard_ngVar: "binding";

  /**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   */

  // Passing down variable Type
  static ngTemplateContextGuard<T>(dir: FormGroupExtend<T>, ctx: any): ctx is FormGroupExtendContext<T> {
    return true;
  }

  constructor(private _viewContainer: ViewContainerRef, @Optional() private _templateRef: TemplateRef<FormGroupExtendContext<T>>) {}
}

export class FormGroupExtendContext<T = unknown> {
  public $implicit: T = null!;
  public formGroup: T = null!;
}
