// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AuthConfig } from "angular-oauth2-oidc";
//! 此文件会在运行时被assets/appconfig.jsonc中的配置覆盖
export const environment = {
  production: false,
  useHash: false,
  appUrl: "https://chatgpt.geexbox.tech",
  api: {
    baseUrl: "https://platform.api.geexbox.tech",
    refreshTokenEnabled: false,
    refreshTokenType: "auth-refresh" as "auth-refresh" | "re-request",
  },
  auth: {
    geex: {
      //https://dev.api.account.geex.com/idsvr/authorize?client_id=platform&redirect_uri=https%3A%2F%2Fdev.account.geex.com%2Fsignin-oidc&response_type=code%20id_token&scope=openid%20profile%20api&response_mode=form_post&nonce=637817992708955686.OGQ0NmE4YTgtNWQwNy00YzY1LTk2ZjQtZTc3NmQ0ODc1NzQ3MzAxMmExNmUtZDNmNC00NDlhLWExMzgtZWQ3NWI4ZWYwYWU3&state=CfDJ8Fg33fNk-oBMoeO85bTUbBTVAmYHEqFwB0uVc3gwrIl_qpFEL2tCDQX9SsBCB9_HIp0VDrDZD2aLdRRfNPKeL4NRlBIsdWmGADMwRODzkg-cHV9lJ8uIiwLYb5JAkEI3d5GYeEPDmSF3tC6T0Vl5Zy5sYQtBpXBh3y5_8-0fv80nN-mNrj4ewmW-etwLWy5ajsbb8iNzm40oxaADpYrzN6S71bEsnHv1uo4IHHFLgdQBMopJ7mBhSjTAz2BwgaMvd6tdBfsUm5cieINztEkoT022RhatTXgu7LKKtbGc0M5N&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.7.1.0
      issuer: "https://platform.api.geexbox.tech/",
      loginUrl: "https://platform.api.geexbox.tech/idsvr/authorize",
      redirectUri: "https://chatgpt.geexbox.tech",
      userinfoEndpoint: "https://platform.api.geexbox.tech/idsvr/userinfo",
      clientId: "chatgpt",
      dummyClientSecret: process.env.CLIENT_SECRET,
      responseType: "code",
      scope: "openid profile",
      logoutUrl: "https://platform.api.geexbox.tech/idsvr/endsession",
      sessionCheckIFrameUrl: "https://platform.api.geexbox.tech/idsvr/checksession",
      sessionChecksEnabled: true,
      silentRefreshTimeout: 3000,
    } as AuthConfig,
  },
  modules: [],
  menus: [
    {
      i18n: null,
      group: true,
      hideInBreadcrumb: true,
      children: [
        {
          i18n: null,
          group: false,
          hideInBreadcrumb: false,
          children: null,
          text: "看板",
          icon: "anticon-dashboard",
          shortcutRoot: false,
          link: "./dashboard",
          badge: 0,
          // acl: "dataAnalysis_mutation_dashBoardReport",
          shortcut: false,
        },
        {
          i18n: null,
          group: false,
          hideInBreadcrumb: false,
          children: [
            {
              i18n: null,
              group: false,
              hideInBreadcrumb: false,
              children: null,
              text: "Book列表",
              icon: "anticon anticon-solution",
              shortcutRoot: false,
              link: "/book",
              badge: 0,
              // acl: "contracts_query_contracts",
              shortcut: false,
            },
          ],
          text: "Book",
          icon: "anticon-solution",
          shortcutRoot: false,
          link: null,
          badge: 0,
          // acl: "contracts_query_contracts",
          shortcut: false,
        },
      ],
      text: "业务操作",
      icon: null,
      shortcutRoot: false,
      link: null,
      badge: 0,
      acl: null,
      shortcut: false,
    },
    {
      i18n: null,
      group: true,
      hideInBreadcrumb: true,
      children: [
        {
          i18n: null,
          group: false,
          hideInBreadcrumb: false,
          children: [
            {
              i18n: null,
              group: false,
              hideInBreadcrumb: false,
              children: null,
              text: "组织架构管理",
              icon: "anticon anticon-apartment",
              shortcutRoot: false,
              link: "/identity/org",
              badge: 0,
              acl: "identity_query_orgs",
              shortcut: false,
            },
            {
              i18n: null,
              group: false,
              hideInBreadcrumb: false,
              children: null,
              text: "角色管理",
              icon: "anticon anticon-share-alt",
              shortcutRoot: false,
              link: "/identity/role",
              badge: 0,
              acl: "identity_query_roles",
              shortcut: false,
            },
            {
              i18n: null,
              group: false,
              hideInBreadcrumb: false,
              children: null,
              text: "用户管理",
              icon: "anticon anticon-user",
              shortcutRoot: false,
              link: "/identity/user",
              badge: 0,
              acl: "identity_query_users",
              shortcut: false,
            },
          ],
          text: "用户身份管理",
          icon: "anticon anticon-team",
          shortcutRoot: false,
          link: null,
          badge: 0,
          acl: ["identity_query_orgs", "identity_query_roles", "identity_query_users"],
          shortcut: false,
        },
        {
          i18n: null,
          group: false,
          hideInBreadcrumb: false,
          children: [
            {
              i18n: null,
              group: false,
              hideInBreadcrumb: false,
              children: null,
              text: "Settings参数",
              icon: "anticon-control",
              shortcutRoot: false,
              link: "/setting",
              badge: 0,
              acl: "settings_mutation_editSetting",
              shortcut: false,
            },
          ],
          text: "系统设置",
          icon: "anticon anticon-tool",
          shortcutRoot: false,
          link: null,
          badge: 0,
          acl: "settings_query_settings",
          shortcut: false,
        },
        {
          i18n: null,
          group: false,
          hideInBreadcrumb: false,
          visibility: "horizontal",
          children: null,
          text: "租户配置",
          icon: "anticon-control",
          shortcutRoot: false,
          link: "/saas",
          badge: 0,
          acl: "multiTenant_query_tenants",
          shortcut: false,
        },
      ],
      text: "系统及配置",
      icon: null,
      shortcutRoot: false,
      link: null,
      badge: 0,
      shortcut: false,
    },
  ],
  connectedClients: {
    app: "https://app.geexbox.tech",
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Generated by https://quicktype.io
