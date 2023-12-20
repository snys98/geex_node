import { OrgCacheItemFragment, CacheDataType, CreateChatInput, ChatMessageType } from "../graphql/.generated/type";
import { UserDataStateModel } from "./user-data.state";

export namespace AppActions {
  export class TenantChanged {
    static readonly type = "[Tenant] TenantChanged";
    constructor(public tenantCode?: string) {}
  }

  export class LoadCacheData {
    static readonly type = "[CacheData] LoadCacheData";
    constructor() {}
  }

  export class UserDataLoaded {
    static readonly type = "[UserData] LoadUserData";
    constructor(public data: UserDataStateModel) {}
  }

  export class CacheDataUpdated {
    static readonly type = "[CacheData] CacheDataUpdated";
    data: OrgCacheItemFragment[];
    constructor(public type: CacheDataType) {}
  }

  export namespace Chat {
    export class Init {
      static readonly type = "[ChatState] Init";
      constructor() {}
    }
    export class SwitchChat {
      static readonly type = "[ChatState] SwitchChat";
      constructor(public chatId: string) {}
    }

    export class DeleteChat {
      static readonly type = "[ChatState] DeleteChat";
      constructor(public chatId: string) {}
    }

    export class CreateChat {
      static readonly type = "[ChatState] CreateChat";
      constructor(public createChatInput: CreateChatInput) {}
    }

    export class SendMessage {
      static readonly type = "[ChatState] SendMessage";
      constructor(public messageType: ChatMessageType, public text?: string, public content?: string) {}
    }

    export class UpdateQuota {
      static readonly type = "[ChatState] UpdateQuota";
      constructor() {}
    }
  }
}
export type AppActions = AllNamespaceClasses<typeof AppActions>;
