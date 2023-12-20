import { ChangeDetectionStrategy, Component, Inject, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { ACLService } from "@delon/acl";
import { DA_SERVICE_TOKEN, ITokenService } from "@delon/auth";
import { SettingsService, User } from "@delon/theme";
import { Select, Store } from "@ngxs/store";
import { OAuthService } from "angular-oauth2-oidc";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import { LoginProviderEnum } from "../../../shared/graphql/.generated/type";
import { AppStates } from "../../../shared/states/AppStates";
import { TenantState } from "../../../shared/states/tenant.state";
import { UserDataState, UserDataStateModel } from "../../../shared/states/user-data.state";
@Component({
  selector: "header-user",
  template: `
    <ng-container *ngIf="user?.username; else noAuthTemplate">
      <li class="dropdown">
        <a href="#">
          <nz-avatar
            nzIcon="user"
            style="color:#f56a00; background-color:#fde3cf;"
            [nzSrc]="user.avatar"
            nzSize="small"
            class="mr-sm"
          ></nz-avatar>
          {{ tenantCode }}:{{ user.username }}<i class="bi bi-chevron-down"></i>
        </a>
        <ul>
          <li>
            <a routerLink="/personal-center"><i nz-icon nzType="user" class="mr-sm"></i>个人中心</a>
          </li>
          <!-- <li routerLink="/account/settings">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          个人设置
        </li> -->
          <li nz-menu-divider></li>
          <li>
            <a (click)="logout()"><i nz-icon nzType="logout" class="mr-sm"></i>退出登录</a>
          </li>
        </ul>
      </li>
    </ng-container>

    <ng-template #noAuthTemplate>
      <li><a routerLink="/passport/login" routerLinkActive="active">Login</a></li>
      <li><a routerLink="/passport/register" routerLinkActive="active">Register</a></li>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {
  get user(): User {
    return this.settings.user;
  }
  get tenantCode(): string {
    return this.store.selectSnapshot(AppStates.TenantState).code;
  }
  @Select(UserDataState)
  user$: Observable<UserDataStateModel>;
  constructor(
    private settings: SettingsService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private aclService: ACLService,
    private apiClient: Apollo,
    private router: Router,
    private oAuthSrv: OAuthService,
    private store: Store,
  ) {}
  async logout(): Promise<void> {
    await this.apiClient
      .mutate({
        mutation: gql`
          mutation cancelAuthenticate {
            cancelAuthentication
          }
        `,
      })
      .toPromise();
    this.tokenService.clear();
    this.settings.setUser({});
    this.aclService.set({});
    let user = await this.user$.pipe(take(1)).toPromise();
    switch (user.loginProvider) {
      /*  case LoginProviderEnum.XOrgX:
        clearHistory();
        break; */
      default:
        await this.router.navigateByUrl(this.tokenService.login_url!).then(() => {
          clearHistory();
        });
        break;
    }
  }
}
