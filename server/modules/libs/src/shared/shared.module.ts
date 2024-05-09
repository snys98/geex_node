import { DynamicModule, ForwardReference, Global, Module, Provider, Type } from '@nestjs/common';

export class SharedModule {
  static forRoot({ reExports, providers }: { reExports: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>, providers: Provider[] }): DynamicModule {
    return {
      global: true,
      module: SharedModule,
      imports: reExports,
      providers: providers,
      exports: [...reExports, ...providers],
    }
  }
}  
