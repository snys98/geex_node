import { Injector } from "@angular/core";
import {
  AbstractControl,
  AbstractControlOptions,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  TypedFormGroup,
  ValueOrTypedAbstractControl,
} from "@angular/forms";
import { ActivatedRouteSnapshot, NavigationExtras, Router, ActivatedRoute } from "@angular/router";
import { ReuseTabService } from "@delon/abc/reuse-tab";
import _ from "lodash";
import { flatMapDeep, isObject } from "lodash-es";
import { Observable } from "rxjs";

function getResolvedUrl(this: ActivatedRouteSnapshot): string {
  return this["_routerState"].url;
}

function getConfiguredUrl(this: ActivatedRouteSnapshot): string {
  return `/${this.pathFromRoot
    .filter(v => v.routeConfig)
    .map(v => v.routeConfig!.path)
    .where(x => x != "")
    .join("/")}`;
}

ActivatedRouteSnapshot.prototype.getResolvedUrl = getResolvedUrl;
ActivatedRouteSnapshot.prototype.getConfiguredUrl = getConfiguredUrl;

declare module "@angular/router" {
  interface ActivatedRouteSnapshot {
    getResolvedUrl(): string;
    getConfiguredUrl(): string;
  }
  interface RouteData extends Data {
    singleton?: boolean;
    reuse?: boolean;
    title?: string;
  }

  interface NavigationExtras extends UrlCreationOptions, NavigationBehaviorOptions {
    forceReload?: boolean;
  }

  type GeexRoutes = GeexRoute[];
  interface GeexRoute extends Route {
    data?: RouteData;
  }

  interface Router {
    navigationStart$: Observable<NavigationStart>;
    navigationEnd$: Observable<NavigationEnd>;
    virtualNavigate(commands: any[], extras?: NavigationExtras): void;
  }
}

// 强类型表单

declare module "@angular/forms" {
  export type TypedAbstractControl<TValue> = TValue extends object
    ? TValue extends Array<infer U>
      ? TypedFormArray<U> // If TValue is an array type
      : TypedFormGroup<TValue> // If TValue is an object type
    : FormControl<TValue>;

  export interface TypedFormGroup<TValue> extends FormGroup {
    controls: {
      [key in keyof TValue]: TypedAbstractControl<TValue[key]>; // Otherwise (simple type)
    };
    value: TValue;
  }

  export interface TypedFormArray<TValue> extends FormArray {
    controls: Array<TypedAbstractControl<TValue>>; // Otherwise (simple type)>;
    value: TValue[];
  }

  export type ValueOrTypedAbstractControl<T> = {
    [key in keyof T]: FormControl<T[key]> | ValueOrTypedAbstractControl<T[key]>;
  };
  export interface FormBuilder {
    build<T>(controls: ValueOrTypedAbstractControl<T>, options?: AbstractControlOptions | null): TypedFormGroup<T>;
  }
}

function transformObjectToForm(fb: FormBuilder, obj: any, options: AbstractControlOptions): any {
  if (obj instanceof Object && !(obj instanceof Date)) {
    const result: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] instanceof AbstractControl) {
          result[key] = obj[key];
          continue;
        }
        if (obj[key] instanceof Object && !(obj[key] instanceof Array)) {
          result[key] = transformObjectToForm(fb, obj[key], options);
        } else if (obj[key] instanceof Array) {
          result[key] = fb.array(
            obj[key].map(item => transformObjectToForm(fb, item, options)),
            options,
          );
        } else {
          result[key] = new FormControl(obj[key], options);
        }
      }
    }
    return fb.group(result, options);
  } else {
    return obj;
  }
}

FormBuilder.prototype.build = function <T>(
  this: FormBuilder,
  controls: ValueOrTypedAbstractControl<T>,
  options?: AbstractControlOptions | null,
): TypedFormGroup<T> {
  let updated = transformObjectToForm(this, controls, options);
  return updated as TypedFormGroup<T>;
};
