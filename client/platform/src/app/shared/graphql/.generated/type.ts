import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  /** ^\[1\]\(\[3-9\]\)[0-9]{9}$ */
  ChinesePhoneNumberType: string;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: Date;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: BigInt;
  ObjectId: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}





export enum AppPermission {
  AuthorizationMutationAuthorize = 'authorization_mutation_authorize',
  IdentityMutationCreateOrg = 'identity_mutation_createOrg',
  IdentityMutationCreateRole = 'identity_mutation_createRole',
  IdentityMutationCreateUser = 'identity_mutation_createUser',
  IdentityMutationEditOrg = 'identity_mutation_editOrg',
  IdentityMutationEditRole = 'identity_mutation_editRole',
  IdentityMutationEditUser = 'identity_mutation_editUser',
  IdentityQueryOrgs = 'identity_query_orgs',
  IdentityQueryRoles = 'identity_query_roles',
  IdentityQueryUsers = 'identity_query_users',
  MultiTenantMutationCreateTenant = 'multiTenant_mutation_createTenant',
  MultiTenantMutationDeleteTenant = 'multiTenant_mutation_deleteTenant',
  MultiTenantMutationEditTenant = 'multiTenant_mutation_editTenant',
  MultiTenantQueryTenants = 'multiTenant_query_tenants',
  SettingsMutationEditSetting = 'settings_mutation_editSetting'
}

export enum AppSettings {
  AppAppMenu = 'AppAppMenu',
  AppAppName = 'AppAppName',
  AppPermissions = 'AppPermissions'
}

export enum ApplyPolicy {
  BeforeResolver = 'BEFORE_RESOLVER',
  AfterResolver = 'AFTER_RESOLVER',
  Validation = 'VALIDATION'
}

export interface AssignOrgRequestInput {
  userOrgsMap: Array<UserOrgMapItemInput>;
}

export interface AssignRoleRequestInput {
  userIds: Array<Scalars['String']>;
  roles: Array<Scalars['String']>;
}

export enum AuditStatus {
  /** 待上报/默认 */
  Default = 'DEFAULT',
  /** 已上报 */
  Submitted = 'SUBMITTED',
  /** 已审批 */
  Audited = 'AUDITED'
}

export interface AuthenticateInput {
  userIdentifier: Scalars['String'];
  password: Scalars['String'];
}

export enum AuthorizationPermission {
  AuthorizationMutationAuthorize = 'authorization_mutation_authorize'
}

export interface AuthorizeInput {
  authorizeTargetType: AuthorizeTargetType;
  allowedPermissions: Array<AppPermission>;
  /**
   * 授权目标:
   * 用户or角色id
   */
  target: Scalars['String'];
}

export enum AuthorizeTargetType {
  Role = 'Role',
  User = 'User'
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface BlobObject extends IBlobObject, IEntityBase {
  __typename?: 'BlobObject';
  fileName: Scalars['String'];
  md5: Scalars['String'];
  url: Scalars['String'];
  fileSize: Scalars['Long'];
  mimeType: Scalars['String'];
  storageType: BlobStorageType;
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

/** A segment of a collection. */
export interface BlobObjectsCollectionSegment {
  __typename?: 'BlobObjectsCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<BlobObject>>>;
  totalCount: Scalars['Int'];
}

export enum BlobStorageSettings {
  BlobStorageModuleName = 'BlobStorageModuleName'
}

export enum BlobStorageType {
  AliyunOss = 'AliyunOss',
  Db = 'Db',
  RedisCache = 'RedisCache'
}

export interface BooleanOperationFilterInput {
  eq?: Maybe<Scalars['Boolean']>;
  neq?: Maybe<Scalars['Boolean']>;
}

/** 缓存数据变更类型 */
export enum CacheDataType {
  Org = 'Org'
}

export interface Captcha {
  __typename?: 'Captcha';
  captchaType: CaptchaType;
  key: Scalars['String'];
  bitmap?: Maybe<Scalars['String']>;
}

export enum CaptchaProvider {
  Image = 'Image',
  Sms = 'Sms'
}

export enum CaptchaType {
  Number = 'NUMBER',
  English = 'ENGLISH',
  NumberAndLetter = 'NUMBER_AND_LETTER',
  Chinese = 'CHINESE'
}

export interface ChangePasswordRequestInput {
  /** 原密码 */
  originPassword: Scalars['String'];
  /** 新密码(建议前端二次确认) */
  newPassword: Scalars['String'];
}


export interface ClassEnumOperationFilterInputOfBlobStorageTypeFilterInput {
  eq?: Maybe<BlobStorageType>;
  neq?: Maybe<BlobStorageType>;
  in?: Maybe<Array<Maybe<BlobStorageType>>>;
  nin?: Maybe<Array<Maybe<BlobStorageType>>>;
}

export interface ClassEnumOperationFilterInputOfOrgTypeEnumFilterInput {
  eq?: Maybe<OrgTypeEnum>;
  neq?: Maybe<OrgTypeEnum>;
  in?: Maybe<Array<Maybe<OrgTypeEnum>>>;
  nin?: Maybe<Array<Maybe<OrgTypeEnum>>>;
}

/** Information about the offset pagination. */
export interface CollectionSegmentInfo {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
}

export enum CommercialSettings {
  CommercialModuleName = 'CommercialModuleName'
}

export interface CreateBlobObjectRequestInput {
  file: Scalars['Upload'];
  storageType: BlobStorageType;
  md5: Scalars['String'];
}

export interface CreateMessageRequestInput {
  text: Scalars['String'];
  severity: MessageSeverityType;
}

export interface CreateOrderInput {
  name: Scalars['String'];
}

export interface CreateOrgInput {
  name: Scalars['String'];
  code: Scalars['String'];
  orgType?: Maybe<OrgTypeEnum>;
  createUserId?: Maybe<Scalars['String']>;
}

export interface CreateRoleInput {
  roleCode: Scalars['String'];
  roleName: Scalars['String'];
  isDefault?: Maybe<Scalars['Boolean']>;
  isStatic?: Maybe<Scalars['Boolean']>;
}

export interface CreateTenantRequestInput {
  code: Scalars['String'];
  name: Scalars['String'];
  externalInfo?: Maybe<Scalars['Any']>;
}

export interface CreateUserRequestInput {
  username: Scalars['String'];
  isEnable: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  roleIds?: Maybe<Array<Scalars['String']>>;
  orgCodes?: Maybe<Array<Scalars['String']>>;
  avatarFileId?: Maybe<Scalars['String']>;
  claims?: Maybe<Array<UserClaimInput>>;
  phoneNumber?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  openId?: Maybe<Scalars['String']>;
  provider?: Maybe<LoginProviderEnum>;
}


export interface DateTimeOperationFilterInput {
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  gt?: Maybe<Scalars['DateTime']>;
  ngt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  ngte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  nlt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  nlte?: Maybe<Scalars['DateTime']>;
}

export interface DeleteBlobObjectRequestInput {
  ids: Array<Scalars['String']>;
  storageType: BlobStorageType;
}

export interface DeleteMessageDistributionsInput {
  messageId: Scalars['String'];
  userIds: Array<Scalars['String']>;
}

export interface EditMessageRequestInput {
  text?: Maybe<Scalars['String']>;
  severity?: Maybe<MessageSeverityType>;
  id: Scalars['String'];
  messageType?: Maybe<MessageType>;
}

export interface EditOrderInput {
  name?: Maybe<Scalars['String']>;
}

export interface EditSettingRequestInput {
  name?: Maybe<SettingDefinition>;
  value?: Maybe<Scalars['Any']>;
  scopedKey?: Maybe<Scalars['String']>;
  scope?: Maybe<SettingScopeEnumeration>;
}

export interface EditTenantRequestInput {
  code: Scalars['String'];
  name: Scalars['String'];
}

export interface EditUserRequestInput {
  id: Scalars['String'];
  isEnable?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  roleIds: Array<Scalars['String']>;
  orgCodes: Array<Scalars['String']>;
  avatarFileId?: Maybe<Scalars['String']>;
  claims: Array<UserClaimInput>;
  phoneNumber?: Maybe<Scalars['String']>;
  username: Scalars['String'];
}

/** 版本 */
export enum Edition {
  Enterprise = 'Enterprise',
  Free = 'Free',
  Pro = 'Pro'
}

export interface FederateAuthenticateInput {
  /** 登陆提供方 */
  loginProvider: LoginProviderEnum;
  /** OAuth Code */
  code: Scalars['String'];
}

export interface FrontendCall extends IFrontendCall {
  __typename?: 'FrontendCall';
  data?: Maybe<Scalars['Any']>;
  frontendCallType: FrontendCallType;
}

export enum FrontendCallType {
  CacheDataChange = 'CacheDataChange',
  NewMessage = 'NewMessage'
}

export enum GeexClaimType {
  ClientId = 'ClientId',
  Expires = 'Expires',
  FullName = 'FullName',
  Nickname = 'Nickname',
  Org = 'Org',
  Provider = 'Provider',
  Role = 'Role',
  Sub = 'Sub',
  Tenant = 'Tenant'
}

/** inherit this enumeration to customise your own business exceptions */
export enum GeexExceptionType {
  Conflict = 'Conflict',
  ExternalError = 'ExternalError',
  NotFound = 'NotFound',
  OnPurpose = 'OnPurpose',
  Unknown = 'Unknown',
  ValidationFailed = 'ValidationFailed'
}

export interface GeexPlatformOrg extends IEntityBase, IOrg {
  __typename?: 'GeexPlatformOrg';
  /** 所有者 */
  ownerUser?: Maybe<User>;
  /** 企业介绍 */
  introduction?: Maybe<Scalars['String']>;
  users: Array<User>;
  userIds: Array<Scalars['String']>;
  /** 名称 */
  name: Scalars['String'];
  /** 地址 */
  address?: Maybe<Scalars['String']>;
  /** 电话 */
  phone?: Maybe<Scalars['String']>;
  /** 联系人 */
  contactName?: Maybe<Scalars['String']>;
  /** 企业logoUrl */
  logoUrl?: Maybe<Scalars['String']>;
  ownerUserId: Scalars['String'];
  activeEdition?: Maybe<Edition>;
  editionExpireAt?: Maybe<Scalars['DateTime']>;
  isEditionExpired: Scalars['Boolean'];
  /** 是否认证 */
  isCertificated: Scalars['Boolean'];
  /** 企业认证(申请企业认证才有企业认证信息) */
  orgCertification: OrgCertification;
  /** 企业最后更新时间, 包括企业角色相关变更 */
  lastUpdateTime?: Maybe<Scalars['DateTime']>;
  /** 所有父组织编码 */
  allParentOrgCodes: Array<Scalars['String']>;
  /** 所有父组织 */
  allParentOrgs: Array<IOrg>;
  /** 所有子组织编码 */
  allSubOrgCodes: Array<Scalars['String']>;
  /** 所有子组织 */
  allSubOrgs: Array<IOrg>;
  /** 直系子组织编码 */
  directSubOrgCodes: Array<Scalars['String']>;
  /** 直系子组织 */
  directSubOrgs: Array<IOrg>;
  /** 父组织 */
  parentOrg: IOrg;
  /** 父组织编码 */
  parentOrgCode: Scalars['String'];
  /** 编码 */
  code: Scalars['String'];
  /** 组织类型 */
  orgType: OrgTypeEnum;
  /** 租户编码, 为null时为宿主数据 */
  tenantCode?: Maybe<Scalars['String']>;
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface GeexPlatformOrgUpdateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  activeEdition?: Maybe<Edition>;
  editionExpireAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
}

export interface GetSettingsInput {
  scope?: Maybe<SettingScopeEnumeration>;
  settingDefinitions?: Maybe<Array<SettingDefinition>>;
  filterByName?: Maybe<Scalars['String']>;
  _?: Maybe<Scalars['String']>;
}

export interface GetUnreadMessagesInput {
  _: Scalars['String'];
}

export interface HintType {
  __typename?: 'HintType';
  _: Scalars['String'];
}

export interface IAuditEntity {
  /** 对象审批状态 */
  auditStatus: AuditStatus;
  /** 是否满足提交条件 */
  submittable: Scalars['Boolean'];
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface IBlobObject {
  fileName?: Maybe<Scalars['String']>;
  md5?: Maybe<Scalars['String']>;
  fileSize: Scalars['Long'];
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  storageType?: Maybe<BlobStorageType>;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface IBlobObjectFilterInput {
  and?: Maybe<Array<IBlobObjectFilterInput>>;
  or?: Maybe<Array<IBlobObjectFilterInput>>;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id?: Maybe<StringOperationFilterInput>;
  md5?: Maybe<StringOperationFilterInput>;
  mimeType?: Maybe<StringOperationFilterInput>;
  storageType?: Maybe<ClassEnumOperationFilterInputOfBlobStorageTypeFilterInput>;
  fileSize?: Maybe<LongOperationFilterInput>;
  fileName?: Maybe<StringOperationFilterInput>;
}

/** The contract for Entity classes */
export interface IEntityBase {
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface IFrontendCall {
  data?: Maybe<Scalars['Any']>;
  frontendCallType: FrontendCallType;
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface IMessage {
  fromUserId?: Maybe<Scalars['String']>;
  messageType: MessageType;
  content: IMessageContent;
  toUserIds: Array<Scalars['String']>;
  severity: MessageSeverityType;
  title: Scalars['String'];
  time: Scalars['DateTime'];
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface IMessageContent {
  __typename?: 'IMessageContent';
  _: Scalars['String'];
}

export interface IMessageContentFilterInput {
  and?: Maybe<Array<IMessageContentFilterInput>>;
  or?: Maybe<Array<IMessageContentFilterInput>>;
  _?: Maybe<StringOperationFilterInput>;
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface IMessageFilterInput {
  and?: Maybe<Array<IMessageFilterInput>>;
  or?: Maybe<Array<IMessageFilterInput>>;
  messageType?: Maybe<MessageTypeOperationFilterInput>;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id?: Maybe<StringOperationFilterInput>;
  fromUserId?: Maybe<StringOperationFilterInput>;
  content?: Maybe<IMessageContentFilterInput>;
  toUserIds?: Maybe<ListStringOperationFilterInput>;
  severity?: Maybe<MessageSeverityTypeOperationFilterInput>;
  title?: Maybe<StringOperationFilterInput>;
  time?: Maybe<DateTimeOperationFilterInput>;
}

export interface IOrg {
  /** 所有父组织编码 */
  allParentOrgCodes: Array<Scalars['String']>;
  /** 所有子组织编码 */
  allSubOrgCodes: Array<Scalars['String']>;
  /** 直系子组织编码 */
  directSubOrgCodes: Array<Scalars['String']>;
  /** 父组织编码 */
  parentOrgCode: Scalars['String'];
  /** 以.作为分割线的编码 */
  code: Scalars['String'];
  name: Scalars['String'];
  /** 组织类型 */
  orgType: OrgTypeEnum;
  /** 所有父组织 */
  allParentOrgs: Array<IOrg>;
  /** 所有子组织 */
  allSubOrgs: Array<IOrg>;
  /** 直系子组织 */
  directSubOrgs: Array<IOrg>;
  /** 父组织 */
  parentOrg: IOrg;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface IPagedList {
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPage: Scalars['Int'];
  totalCount: Scalars['Int'];
}

export interface IRole {
  name: Scalars['String'];
  code: Scalars['String'];
  users: Array<IUser>;
  permissions: Array<Scalars['String']>;
  isDefault: Scalars['Boolean'];
  isStatic: Scalars['Boolean'];
  isEnabled: Scalars['Boolean'];
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface ISetting {
  scope: SettingScopeEnumeration;
  scopedKey?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Any']>;
  name: SettingDefinition;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface ISettingFilterInput {
  and?: Maybe<Array<ISettingFilterInput>>;
  or?: Maybe<Array<ISettingFilterInput>>;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id?: Maybe<StringOperationFilterInput>;
  name?: Maybe<SettingDefinitionOperationFilterInput>;
  scope?: Maybe<SettingScopeEnumerationOperationFilterInput>;
  scopedKey?: Maybe<StringOperationFilterInput>;
}

export interface ITenant {
  code: Scalars['String'];
  name: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface ITenantFilterInput {
  and?: Maybe<Array<ITenantFilterInput>>;
  or?: Maybe<Array<ITenantFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  isEnabled?: Maybe<BooleanOperationFilterInput>;
}

export interface IUser {
  phoneNumber?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  loginProvider: LoginProviderEnum;
  openId?: Maybe<Scalars['String']>;
  isEnable: Scalars['Boolean'];
  roleIds: Array<Scalars['String']>;
  orgCodes: Array<Scalars['String']>;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface IUserFilterInput {
  and?: Maybe<Array<IUserFilterInput>>;
  or?: Maybe<Array<IUserFilterInput>>;
  username?: Maybe<StringOperationFilterInput>;
  nickname?: Maybe<StringOperationFilterInput>;
  isEnable?: Maybe<BooleanOperationFilterInput>;
  phoneNumber?: Maybe<StringOperationFilterInput>;
  orgCodes?: Maybe<ListStringOperationFilterInput>;
  roleIds?: Maybe<ListStringOperationFilterInput>;
  /**
   * The Id property for this entity type.
   * 注意: dbcontext会根据entity是否有id值来判断当前entity是否为新增
   */
  id?: Maybe<StringOperationFilterInput>;
}

export enum IdentityPermission {
  IdentityMutationCreateOrg = 'identity_mutation_createOrg',
  IdentityMutationCreateRole = 'identity_mutation_createRole',
  IdentityMutationCreateUser = 'identity_mutation_createUser',
  IdentityMutationEditOrg = 'identity_mutation_editOrg',
  IdentityMutationEditRole = 'identity_mutation_editRole',
  IdentityMutationEditUser = 'identity_mutation_editUser',
  IdentityQueryOrgs = 'identity_query_orgs',
  IdentityQueryRoles = 'identity_query_roles',
  IdentityQueryUsers = 'identity_query_users'
}

export interface ListFilterInputTypeOfIUserFilterInput {
  all?: Maybe<IUserFilterInput>;
  none?: Maybe<IUserFilterInput>;
  some?: Maybe<IUserFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
}

export interface ListStringOperationFilterInput {
  all?: Maybe<StringOperationFilterInput>;
  none?: Maybe<StringOperationFilterInput>;
  some?: Maybe<StringOperationFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
}

export enum LocalizationSettings {
  LocalizationData = 'LocalizationData',
  LocalizationLanguage = 'LocalizationLanguage'
}

export enum LoginProviderEnum {
  Geex = 'Geex',
  Local = 'Local',
  Trusted = 'Trusted'
}


export interface LongOperationFilterInput {
  eq?: Maybe<Scalars['Long']>;
  neq?: Maybe<Scalars['Long']>;
  in?: Maybe<Array<Maybe<Scalars['Long']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Long']>>>;
  gt?: Maybe<Scalars['Long']>;
  ngt?: Maybe<Scalars['Long']>;
  gte?: Maybe<Scalars['Long']>;
  ngte?: Maybe<Scalars['Long']>;
  lt?: Maybe<Scalars['Long']>;
  nlt?: Maybe<Scalars['Long']>;
  lte?: Maybe<Scalars['Long']>;
  nlte?: Maybe<Scalars['Long']>;
}

export interface MarkMessagesReadInput {
  messageIds: Array<Scalars['String']>;
  userId: Scalars['String'];
}

/** 普通message */
export interface Message extends IMessage, IEntityBase {
  __typename?: 'Message';
  distributions: Array<MessageDistribution>;
  content: IMessageContent;
  fromUserId?: Maybe<Scalars['String']>;
  messageType: MessageType;
  severity: MessageSeverityType;
  time: Scalars['DateTime'];
  title: Scalars['String'];
  toUserIds: Array<Scalars['String']>;
  tenantCode?: Maybe<Scalars['String']>;
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface MessageDistribution extends IEntityBase {
  __typename?: 'MessageDistribution';
  toUserId: Scalars['String'];
  messageId: Scalars['String'];
  /**
   * 是否已读
   * bug: 未读消息最好放入redis, 避免全表遍历
   */
  isRead: Scalars['Boolean'];
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export enum MessageSeverityType {
  /** Info. */
  Info = 'INFO',
  /** Success. */
  Success = 'SUCCESS',
  /** Warn. */
  Warn = 'WARN',
  /** Error. */
  Error = 'ERROR',
  /** Fatal. */
  Fatal = 'FATAL'
}

export interface MessageSeverityTypeOperationFilterInput {
  eq?: Maybe<MessageSeverityType>;
  neq?: Maybe<MessageSeverityType>;
  in?: Maybe<Array<MessageSeverityType>>;
  nin?: Maybe<Array<MessageSeverityType>>;
}

export enum MessageType {
  /**
   * 通知, 告知某个信息的消息
   * 区别于单独的toast, 这个消息会留档
   */
  Notification = 'NOTIFICATION',
  /** 待办, 带有链接跳转/当前状态等交互功能的消息 */
  Todo = 'TODO',
  /** 用户交互消息, 通常有一个非系统的触发者 */
  Interact = 'INTERACT'
}

export interface MessageTypeOperationFilterInput {
  eq?: Maybe<MessageType>;
  neq?: Maybe<MessageType>;
  in?: Maybe<Array<MessageType>>;
  nin?: Maybe<Array<MessageType>>;
}

/** A segment of a collection. */
export interface MessagesCollectionSegment {
  __typename?: 'MessagesCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<Message>>>;
  totalCount: Scalars['Int'];
}

export enum MessagingSettings {
  MessagingModuleName = 'MessagingModuleName'
}

export enum MultiTenantPermission {
  MultiTenantMutationCreateTenant = 'multiTenant_mutation_createTenant',
  MultiTenantMutationDeleteTenant = 'multiTenant_mutation_deleteTenant',
  MultiTenantMutationEditTenant = 'multiTenant_mutation_editTenant',
  MultiTenantQueryTenants = 'multiTenant_query_tenants'
}

export interface Mutation {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']>;
  authenticate: UserToken;
  federateAuthenticate: UserToken;
  cancelAuthentication: Scalars['Boolean'];
  /** 创建Tenant */
  createTenant: ITenant;
  /** 编辑Tenant */
  editTenant: Scalars['Boolean'];
  /**
   * 切换Tenant可用状态
   *
   *
   * **Returns:**
   * 当前租户的可用性
   */
  toggleTenantAvailability: Scalars['Boolean'];
  /** 校验Tenant可用性 */
  checkTenant?: Maybe<ITenant>;
  /** 更新设置 */
  changePassword: Scalars['Boolean'];
  register: Scalars['Boolean'];
  assignRoles: Scalars['Boolean'];
  assignOrgs: Scalars['Boolean'];
  editUser: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  createOrg: Org;
  fixUserOrg: Scalars['Boolean'];
  createRole: Role;
  setRoleDefault: Scalars['Boolean'];
  /** 标记消息已读 */
  markMessagesRead: Scalars['Boolean'];
  /** 删除消息分配 */
  deleteMessageDistributions: Scalars['Boolean'];
  /** 发送消息 */
  sendMessage: Scalars['Boolean'];
  /** 创建消息 */
  createMessage: IMessage;
  /** 编辑消息 */
  editMessage: Scalars['Boolean'];
  /** 创建BlobObject */
  createBlobObject: IBlobObject;
  /** 删除BlobObject */
  deleteBlobObject: Scalars['Boolean'];
  /** 更新设置 */
  editSetting: ISetting;
  authorize: Scalars['Boolean'];
  generateCaptcha: Captcha;
  validateCaptcha: Scalars['Boolean'];
  /** 新增企业用户 */
  addGeexPlatformOrgUser: User;
  geexPlatformOrgUpdate: GeexPlatformOrg;
  /** 创建Order */
  createOrder: Order;
  /** 编辑Order */
  editOrder: Scalars['Boolean'];
  /** 删除Order */
  deleteOrder: Scalars['Boolean'];
}


export interface MutationAuthenticateArgs {
  input: AuthenticateInput;
}


export interface MutationFederateAuthenticateArgs {
  input: FederateAuthenticateInput;
}


export interface MutationCreateTenantArgs {
  input: CreateTenantRequestInput;
}


export interface MutationEditTenantArgs {
  input: EditTenantRequestInput;
}


export interface MutationToggleTenantAvailabilityArgs {
  input: ToggleTenantAvailabilityRequestInput;
}


export interface MutationCheckTenantArgs {
  code: Scalars['String'];
}


export interface MutationChangePasswordArgs {
  input: ChangePasswordRequestInput;
}


export interface MutationRegisterArgs {
  input: RegisterUserRequestInput;
}


export interface MutationAssignRolesArgs {
  input: AssignRoleRequestInput;
}


export interface MutationAssignOrgsArgs {
  input: AssignOrgRequestInput;
}


export interface MutationEditUserArgs {
  input: EditUserRequestInput;
}


export interface MutationCreateUserArgs {
  input: CreateUserRequestInput;
}


export interface MutationResetUserPasswordArgs {
  input: ResetUserPasswordRequestInput;
}


export interface MutationCreateOrgArgs {
  input: CreateOrgInput;
}


export interface MutationCreateRoleArgs {
  input: CreateRoleInput;
}


export interface MutationSetRoleDefaultArgs {
  input: SetRoleDefaultInput;
}


export interface MutationMarkMessagesReadArgs {
  input: MarkMessagesReadInput;
}


export interface MutationDeleteMessageDistributionsArgs {
  input: DeleteMessageDistributionsInput;
}


export interface MutationSendMessageArgs {
  input: SendNotificationMessageRequestInput;
}


export interface MutationCreateMessageArgs {
  input: CreateMessageRequestInput;
}


export interface MutationEditMessageArgs {
  input: EditMessageRequestInput;
}


export interface MutationCreateBlobObjectArgs {
  input: CreateBlobObjectRequestInput;
}


export interface MutationDeleteBlobObjectArgs {
  input: DeleteBlobObjectRequestInput;
}


export interface MutationEditSettingArgs {
  input: EditSettingRequestInput;
}


export interface MutationAuthorizeArgs {
  input: AuthorizeInput;
}


export interface MutationGenerateCaptchaArgs {
  input: SendCaptchaInput;
}


export interface MutationValidateCaptchaArgs {
  input: ValidateCaptchaInput;
}


export interface MutationAddGeexPlatformOrgUserArgs {
  orgId: Scalars['String'];
  userId: Scalars['String'];
}


export interface MutationGeexPlatformOrgUpdateArgs {
  id: Scalars['String'];
  input: GeexPlatformOrgUpdateInput;
}


export interface MutationCreateOrderArgs {
  input: CreateOrderInput;
}


export interface MutationEditOrderArgs {
  id: Scalars['String'];
  input: EditOrderInput;
}


export interface MutationDeleteOrderArgs {
  ids: Array<Scalars['String']>;
}


/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface Order extends IEntityBase {
  __typename?: 'Order';
  name: Scalars['String'];
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface OrderFilterInput {
  and?: Maybe<Array<OrderFilterInput>>;
  or?: Maybe<Array<OrderFilterInput>>;
  name?: Maybe<StringOperationFilterInput>;
  modifiedOn?: Maybe<DateTimeOperationFilterInput>;
  id?: Maybe<StringOperationFilterInput>;
  createdOn?: Maybe<DateTimeOperationFilterInput>;
}

/** this is a aggregate root of this module, we name it the same as the module feel free to change it to its real name */
export interface OrderSortInput {
  name?: Maybe<SortEnumType>;
  modifiedOn?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdOn?: Maybe<SortEnumType>;
}

/** A segment of a collection. */
export interface OrdersCollectionSegment {
  __typename?: 'OrdersCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<Order>>>;
  totalCount: Scalars['Int'];
}

export interface Org extends IEntityBase, IOrg {
  __typename?: 'Org';
  /** 所有父组织编码 */
  allParentOrgCodes: Array<Scalars['String']>;
  /** 所有父组织 */
  allParentOrgs: Array<IOrg>;
  /** 所有子组织编码 */
  allSubOrgCodes: Array<Scalars['String']>;
  /** 所有子组织 */
  allSubOrgs: Array<IOrg>;
  /** 直系子组织编码 */
  directSubOrgCodes: Array<Scalars['String']>;
  /** 直系子组织 */
  directSubOrgs: Array<IOrg>;
  /** 父组织 */
  parentOrg: IOrg;
  /** 父组织编码 */
  parentOrgCode: Scalars['String'];
  /** 编码 */
  code: Scalars['String'];
  name: Scalars['String'];
  /** 组织类型 */
  orgType: OrgTypeEnum;
  /** 租户编码, 为null时为宿主数据 */
  tenantCode?: Maybe<Scalars['String']>;
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export interface OrgCacheItem {
  __typename?: 'OrgCacheItem';
  orgType?: Maybe<OrgTypeEnum>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentOrgCode: Scalars['String'];
}

export interface OrgCertification {
  __typename?: 'OrgCertification';
  isCertificated: Scalars['Boolean'];
  certificationImages: Array<Scalars['String']>;
}

export interface OrgFilterInput {
  and?: Maybe<Array<OrgFilterInput>>;
  or?: Maybe<Array<OrgFilterInput>>;
  name?: Maybe<StringOperationFilterInput>;
  /** 编码 */
  code?: Maybe<StringOperationFilterInput>;
  /** 父组织编码 */
  parentOrgCode?: Maybe<StringOperationFilterInput>;
  /** 组织类型 */
  orgType?: Maybe<ClassEnumOperationFilterInputOfOrgTypeEnumFilterInput>;
}

export enum OrgPermission {
  IdentityMutationCreateOrg = 'identity_mutation_createOrg',
  IdentityMutationEditOrg = 'identity_mutation_editOrg',
  IdentityQueryOrgs = 'identity_query_orgs'
}

export enum OrgTypeEnum {
  Default = 'Default'
}

/** A segment of a collection. */
export interface OrgsCollectionSegment {
  __typename?: 'OrgsCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<Org>>>;
  totalCount: Scalars['Int'];
}

export enum PlatformFrontCallType {
  CacheDataChange = 'CacheDataChange'
}

export enum PlatformLoginProviderEnum {
  Geex = 'Geex'
}

export interface Query {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  /** 列表获取Tenant */
  tenants?: Maybe<TenantsCollectionSegment>;
  /** 列表获取User */
  users?: Maybe<UsersCollectionSegment>;
  currentUser: IUser;
  orgs?: Maybe<OrgsCollectionSegment>;
  roles?: Maybe<RolesCollectionSegment>;
  /** 列表获取message */
  messages?: Maybe<MessagesCollectionSegment>;
  /** 列表获取message */
  unreadMessages: Array<IMessage>;
  /** 列表获取BlobObject */
  blobObjects?: Maybe<BlobObjectsCollectionSegment>;
  /** 根据provider获取全量设置 */
  settings?: Maybe<SettingsCollectionSegment>;
  /** 获取初始化应用所需的settings */
  initSettings: Array<ISetting>;
  myPermissions: Array<Scalars['String']>;
  /** 列表获取order */
  orders?: Maybe<OrdersCollectionSegment>;
  /** 列表获取order */
  orderById: Order;
  _hint?: Maybe<HintType>;
  orgsCache: Array<OrgCacheItem>;
}


export interface QueryTenantsArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ITenantFilterInput>;
}


export interface QueryUsersArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IUserFilterInput>;
}


export interface QueryOrgsArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrgFilterInput>;
}


export interface QueryRolesArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RoleFilterInput>;
}


export interface QueryMessagesArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IMessageFilterInput>;
}


export interface QueryUnreadMessagesArgs {
  input: GetUnreadMessagesInput;
}


export interface QueryBlobObjectsArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IBlobObjectFilterInput>;
}


export interface QuerySettingsArgs {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  input: GetSettingsInput;
  where?: Maybe<ISettingFilterInput>;
}


export interface QueryOrdersArgs {
  input: QueryOrderInput;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderFilterInput>;
  order?: Maybe<Array<OrderSortInput>>;
}


export interface QueryOrderByIdArgs {
  id: Scalars['String'];
}

export interface QueryOrderInput {
  name?: Maybe<Scalars['String']>;
  _?: Maybe<Scalars['String']>;
}

export interface RegisterUserRequestInput {
  password: Scalars['String'];
  username: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}

export interface ResetUserPasswordRequestInput {
  /** 用户ID */
  userId: Scalars['String'];
  /** 新密码 */
  password: Scalars['String'];
}

/** role为了方便和string的相互转化, 采用class的形式 */
export interface Role extends IEntityBase, IRole {
  __typename?: 'Role';
  name: Scalars['String'];
  code: Scalars['String'];
  users: Array<IUser>;
  permissions: Array<Scalars['String']>;
  tenantCode?: Maybe<Scalars['String']>;
  isDefault: Scalars['Boolean'];
  isStatic: Scalars['Boolean'];
  isEnabled: Scalars['Boolean'];
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

/** role为了方便和string的相互转化, 采用class的形式 */
export interface RoleFilterInput {
  and?: Maybe<Array<RoleFilterInput>>;
  or?: Maybe<Array<RoleFilterInput>>;
  name?: Maybe<StringOperationFilterInput>;
  id?: Maybe<StringOperationFilterInput>;
  users?: Maybe<ListFilterInputTypeOfIUserFilterInput>;
}

export enum RolePermission {
  IdentityMutationCreateRole = 'identity_mutation_createRole',
  IdentityMutationEditRole = 'identity_mutation_editRole',
  IdentityQueryRoles = 'identity_query_roles'
}

/** A segment of a collection. */
export interface RolesCollectionSegment {
  __typename?: 'RolesCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<Role>>>;
  totalCount: Scalars['Int'];
}

export interface SendCaptchaInput {
  captchaProvider: CaptchaProvider;
  smsCaptchaPhoneNumber?: Maybe<Scalars['ChinesePhoneNumberType']>;
}

export interface SendNotificationMessageRequestInput {
  toUserIds: Array<Scalars['String']>;
  messageId: Scalars['String'];
}

export interface SetRoleDefaultInput {
  roleId: Scalars['String'];
}

export interface Setting extends ISetting, IEntityBase {
  __typename?: 'Setting';
  id: Scalars['String'];
  name: SettingDefinition;
  validScopes: Array<SettingScopeEnumeration>;
  scope: SettingScopeEnumeration;
  scopedKey?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Any']>;
  modifiedOn: Scalars['DateTime'];
  createdOn: Scalars['DateTime'];
}

export enum SettingDefinition {
  AppAppMenu = 'AppAppMenu',
  AppAppName = 'AppAppName',
  AppPermissions = 'AppPermissions',
  BlobStorageModuleName = 'BlobStorageModuleName',
  CommercialModuleName = 'CommercialModuleName',
  LocalizationData = 'LocalizationData',
  LocalizationLanguage = 'LocalizationLanguage',
  MessagingModuleName = 'MessagingModuleName'
}

export interface SettingDefinitionOperationFilterInput {
  eq?: Maybe<SettingDefinition>;
  neq?: Maybe<SettingDefinition>;
  in?: Maybe<Array<Maybe<SettingDefinition>>>;
  nin?: Maybe<Array<Maybe<SettingDefinition>>>;
}

export enum SettingScopeEnumeration {
  Global = 'Global',
  Tenant = 'Tenant',
  User = 'User'
}

export interface SettingScopeEnumerationOperationFilterInput {
  eq?: Maybe<SettingScopeEnumeration>;
  neq?: Maybe<SettingScopeEnumeration>;
  in?: Maybe<Array<Maybe<SettingScopeEnumeration>>>;
  nin?: Maybe<Array<Maybe<SettingScopeEnumeration>>>;
}

/** A segment of a collection. */
export interface SettingsCollectionSegment {
  __typename?: 'SettingsCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<Setting>>>;
  totalCount: Scalars['Int'];
}

export enum SettingsPermission {
  SettingsMutationEditSetting = 'settings_mutation_editSetting'
}

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface StringOperationFilterInput {
  and?: Maybe<Array<StringOperationFilterInput>>;
  or?: Maybe<Array<StringOperationFilterInput>>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  ncontains?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
  nstartsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  nendsWith?: Maybe<Scalars['String']>;
}

export interface Subscription {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['String']>;
  /** 订阅服务器对单个用户的前端调用 */
  onFrontendCall: IFrontendCall;
  /** 订阅广播 */
  onBroadcast: IFrontendCall;
  /** 测试 */
  echo: Scalars['String'];
  onCacheDataChange: IFrontendCall;
}


export interface SubscriptionEchoArgs {
  text: Scalars['String'];
}

export interface Tenant extends ITenant, IEntityBase {
  __typename?: 'Tenant';
  code: Scalars['String'];
  name: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  /** 额外信息 */
  externalInfo?: Maybe<Scalars['Any']>;
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}

export enum TenantPermission {
  MultiTenantMutationCreateTenant = 'multiTenant_mutation_createTenant',
  MultiTenantMutationDeleteTenant = 'multiTenant_mutation_deleteTenant',
  MultiTenantMutationEditTenant = 'multiTenant_mutation_editTenant',
  MultiTenantQueryTenants = 'multiTenant_query_tenants'
}

/** A segment of a collection. */
export interface TenantsCollectionSegment {
  __typename?: 'TenantsCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<ITenant>>;
  totalCount: Scalars['Int'];
}

export interface ToggleTenantAvailabilityRequestInput {
  code: Scalars['String'];
}


export interface User extends IUser, IEntityBase {
  __typename?: 'User';
  avatarFile?: Maybe<IBlobObject>;
  claims: Array<UserClaim>;
  phoneNumber?: Maybe<Scalars['String']>;
  isEnable: Scalars['Boolean'];
  username: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  orgs: Array<IOrg>;
  orgCodes: Array<Scalars['String']>;
  permissions: Array<Scalars['String']>;
  roleIds: Array<Scalars['String']>;
  avatarFileId?: Maybe<Scalars['String']>;
  roles: Array<IRole>;
  roleNames: Array<Scalars['String']>;
  loginProvider: LoginProviderEnum;
  openId?: Maybe<Scalars['String']>;
  tenantCode?: Maybe<Scalars['String']>;
  modifiedOn: Scalars['DateTime'];
  id: Scalars['String'];
  createdOn: Scalars['DateTime'];
}


export interface UserClaimsArgs {
  where?: Maybe<UserClaimFilterInput>;
}

export interface UserClaim {
  __typename?: 'UserClaim';
  claimType: Scalars['String'];
  claimValue: Scalars['String'];
}

export interface UserClaimFilterInput {
  and?: Maybe<Array<UserClaimFilterInput>>;
  or?: Maybe<Array<UserClaimFilterInput>>;
  claimType?: Maybe<StringOperationFilterInput>;
  claimValue?: Maybe<StringOperationFilterInput>;
}

export interface UserClaimInput {
  claimType: Scalars['String'];
  claimValue: Scalars['String'];
}

export interface UserOrgMapItemInput {
  userId: Scalars['String'];
  orgCodes: Array<Scalars['String']>;
}

export enum UserPermission {
  IdentityMutationCreateUser = 'identity_mutation_createUser',
  IdentityMutationEditUser = 'identity_mutation_editUser',
  IdentityQueryUsers = 'identity_query_users'
}

export interface UserToken {
  __typename?: 'UserToken';
  token?: Maybe<Scalars['String']>;
  user: IUser;
  loginProvider?: Maybe<LoginProviderEnum>;
  userId: Scalars['String'];
  name: Scalars['String'];
}

/** A segment of a collection. */
export interface UsersCollectionSegment {
  __typename?: 'UsersCollectionSegment';
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<User>>>;
  totalCount: Scalars['Int'];
}

export interface ValidateCaptchaInput {
  captchaKey: Scalars['String'];
  captchaProvider: CaptchaProvider;
  captchaCode: Scalars['String'];
}

export type RoleBriefFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'createdOn' | 'name' | 'id' | 'isStatic' | 'isDefault'>
);

export type RoleDetailFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'permissions' | 'name'>
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
  & RoleBriefFragment
);

export type RoleMinimalFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'id' | 'name'>
);

export type OrgBriefFragment = (
  { __typename?: 'Org' }
  & Pick<Org, 'code' | 'name' | 'orgType' | 'parentOrgCode' | 'id'>
);

export type OrgDetailFragment = (
  { __typename?: 'Org' }
  & { allSubOrgs: Array<(
    { __typename?: 'GeexPlatformOrg' }
    & Pick<GeexPlatformOrg, 'name' | 'code'>
  ) | (
    { __typename?: 'Org' }
    & Pick<Org, 'name' | 'code'>
  )>, directSubOrgs: Array<(
    { __typename?: 'GeexPlatformOrg' }
    & Pick<GeexPlatformOrg, 'name' | 'code'>
  ) | (
    { __typename?: 'Org' }
    & Pick<Org, 'name' | 'code'>
  )> }
  & OrgBriefFragment
);

export type UserBriefFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'nickname' | 'phoneNumber' | 'email' | 'isEnable' | 'openId' | 'loginProvider' | 'roleNames' | 'roleIds'>
);

export type UserListFragment = (
  { __typename?: 'User' }
  & Pick<User, 'createdOn' | 'orgCodes'>
  & UserBriefFragment
);

export type UserCacheDtoFragment = (
  { __typename?: 'User' }
  & { avatarFile?: Maybe<(
    { __typename?: 'BlobObject' }
    & Pick<BlobObject, 'url'>
  )> }
  & UserBriefFragment
);

export type UserMinimalFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'openId' | 'username' | 'nickname'>
);

export type OrgRecursiveParentFragment = (
  { __typename?: 'Org' }
  & { parentOrg: (
    { __typename?: 'GeexPlatformOrg' }
    & { parentOrg: (
      { __typename?: 'GeexPlatformOrg' }
      & { parentOrg: (
        { __typename?: 'GeexPlatformOrg' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
      ) | (
        { __typename?: 'Org' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
        & OrgBriefFragment
      ) }
    ) | (
      { __typename?: 'Org' }
      & { parentOrg: (
        { __typename?: 'GeexPlatformOrg' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
      ) | (
        { __typename?: 'Org' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
        & OrgBriefFragment
      ) }
      & OrgBriefFragment
    ) }
  ) | (
    { __typename?: 'Org' }
    & { parentOrg: (
      { __typename?: 'GeexPlatformOrg' }
      & { parentOrg: (
        { __typename?: 'GeexPlatformOrg' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
      ) | (
        { __typename?: 'Org' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
        & OrgBriefFragment
      ) }
    ) | (
      { __typename?: 'Org' }
      & { parentOrg: (
        { __typename?: 'GeexPlatformOrg' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
      ) | (
        { __typename?: 'Org' }
        & { parentOrg: (
          { __typename?: 'GeexPlatformOrg' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
        ) | (
          { __typename?: 'Org' }
          & { parentOrg: (
            { __typename?: 'GeexPlatformOrg' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
          ) | (
            { __typename?: 'Org' }
            & { parentOrg: (
              { __typename?: 'GeexPlatformOrg' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
            ) | (
              { __typename?: 'Org' }
              & { parentOrg: (
                { __typename?: 'GeexPlatformOrg' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
              ) | (
                { __typename?: 'Org' }
                & { parentOrg: (
                  { __typename?: 'GeexPlatformOrg' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                ) | (
                  { __typename?: 'Org' }
                  & { parentOrg: (
                    { __typename?: 'GeexPlatformOrg' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                  ) | (
                    { __typename?: 'Org' }
                    & { parentOrg: { __typename?: 'GeexPlatformOrg' } | (
                      { __typename?: 'Org' }
                      & OrgBriefFragment
                    ) }
                    & OrgBriefFragment
                  ) }
                  & OrgBriefFragment
                ) }
                & OrgBriefFragment
              ) }
              & OrgBriefFragment
            ) }
            & OrgBriefFragment
          ) }
          & OrgBriefFragment
        ) }
        & OrgBriefFragment
      ) }
      & OrgBriefFragment
    ) }
    & OrgBriefFragment
  ) }
);

export type UserDetailFragment = (
  { __typename?: 'User' }
  & Pick<User, 'isEnable' | 'permissions' | 'orgCodes' | 'avatarFileId'>
  & { orgs: Array<(
    { __typename?: 'GeexPlatformOrg' }
    & Pick<GeexPlatformOrg, 'name' | 'code'>
    & { allParentOrgs: Array<(
      { __typename?: 'GeexPlatformOrg' }
      & Pick<GeexPlatformOrg, 'code' | 'name'>
    ) | (
      { __typename?: 'Org' }
      & Pick<Org, 'code' | 'name'>
    )> }
  ) | (
    { __typename?: 'Org' }
    & Pick<Org, 'name' | 'code'>
    & { allParentOrgs: Array<(
      { __typename?: 'GeexPlatformOrg' }
      & Pick<GeexPlatformOrg, 'code' | 'name'>
    ) | (
      { __typename?: 'Org' }
      & Pick<Org, 'code' | 'name'>
    )> }
  )>, claims: Array<(
    { __typename?: 'UserClaim' }
    & Pick<UserClaim, 'claimType' | 'claimValue'>
  )>, avatarFile?: Maybe<(
    { __typename?: 'BlobObject' }
    & BlobObjectBriefFragment
  )> }
  & UserBriefFragment
);

export type UserListsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IUserFilterInput>;
}>;


export type UserListsQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<(
    { __typename?: 'UsersCollectionSegment' }
    & Pick<UsersCollectionSegment, 'totalCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & UserListFragment
    )>>>, pageInfo: (
      { __typename?: 'CollectionSegmentInfo' }
      & PageInfoFragment
    ) }
  )> }
);

export type UserByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type UserByIdQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<(
    { __typename?: 'UsersCollectionSegment' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & UserDetailFragment
    )>>> }
  )> }
);

export type UserMenusQueryVariables = Exact<{
  where?: Maybe<IUserFilterInput>;
}>;


export type UserMenusQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<(
    { __typename?: 'UsersCollectionSegment' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & UserMinimalFragment
    )>>> }
  )> }
);

export type EditUserMutationVariables = Exact<{
  input: EditUserRequestInput;
}>;


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editUser'>
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserRequestInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createUser'>
);

export type ResetUserPasswordMutationVariables = Exact<{
  input: ResetUserPasswordRequestInput;
}>;


export type ResetUserPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetUserPassword'>
);

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordRequestInput;
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type RoleListsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RoleFilterInput>;
}>;


export type RoleListsQuery = (
  { __typename?: 'Query' }
  & { roles?: Maybe<(
    { __typename?: 'RolesCollectionSegment' }
    & Pick<RolesCollectionSegment, 'totalCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Role' }
      & RoleBriefFragment
    )>>>, pageInfo: (
      { __typename?: 'CollectionSegmentInfo' }
      & PageInfoFragment
    ) }
  )> }
);

export type RoleMenusQueryVariables = Exact<{
  where?: Maybe<RoleFilterInput>;
}>;


export type RoleMenusQuery = (
  { __typename?: 'Query' }
  & { roles?: Maybe<(
    { __typename?: 'RolesCollectionSegment' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Role' }
      & RoleMinimalFragment
    )>>> }
  )> }
);

export type RoleByNameQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type RoleByNameQuery = (
  { __typename?: 'Query' }
  & { roles?: Maybe<(
    { __typename?: 'RolesCollectionSegment' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Role' }
      & RoleDetailFragment
    )>>> }
  )> }
);

export type RoleByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type RoleByIdQuery = (
  { __typename?: 'Query' }
  & { roles?: Maybe<(
    { __typename?: 'RolesCollectionSegment' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Role' }
      & RoleDetailFragment
    )>>> }
  )> }
);

export type CreateRoleMutationVariables = Exact<{
  input: CreateRoleInput;
}>;


export type CreateRoleMutation = (
  { __typename?: 'Mutation' }
  & { createRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'id' | 'createdOn' | 'name' | 'permissions'>
    & { users: Array<(
      { __typename?: 'User' }
      & Pick<User, 'permissions' | 'id' | 'username' | 'email' | 'phoneNumber'>
    )> }
  ) }
);

export type AuthorizeMutationVariables = Exact<{
  input: AuthorizeInput;
}>;


export type AuthorizeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'authorize'>
);

export type OrgsQueryVariables = Exact<{
  where?: Maybe<OrgFilterInput>;
}>;


export type OrgsQuery = (
  { __typename?: 'Query' }
  & { orgs?: Maybe<(
    { __typename?: 'OrgsCollectionSegment' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Org' }
      & OrgBriefFragment
    )>>> }
  )> }
);

export type CreateOrgMutationVariables = Exact<{
  input: CreateOrgInput;
}>;


export type CreateOrgMutation = (
  { __typename?: 'Mutation' }
  & { createOrg: (
    { __typename?: 'Org' }
    & OrgBriefFragment
  ) }
);

export type AssignOrgsMutationVariables = Exact<{
  input: AssignOrgRequestInput;
}>;


export type AssignOrgsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'assignOrgs'>
);

export type SetRoleDefaultMutationVariables = Exact<{
  roleId: Scalars['String'];
}>;


export type SetRoleDefaultMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setRoleDefault'>
);

export type MessageBriefFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'fromUserId' | 'id' | 'messageType' | 'severity' | 'time' | 'title'>
);

export type MessageDetailFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'toUserIds' | 'createdOn'>
  & { content: (
    { __typename?: 'IMessageContent' }
    & Pick<IMessageContent, '_'>
  ) }
);

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageRequestInput;
}>;


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & { createMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id'>
  ) }
);

export type EditMessageMutationVariables = Exact<{
  input: EditMessageRequestInput;
}>;


export type EditMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editMessage'>
);

export type SendMessageMutationVariables = Exact<{
  input: SendNotificationMessageRequestInput;
}>;


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendMessage'>
);

export type MessagesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IMessageFilterInput>;
  includeDetail: Scalars['Boolean'];
}>;


export type MessagesQuery = (
  { __typename?: 'Query' }
  & { messages?: Maybe<(
    { __typename?: 'MessagesCollectionSegment' }
    & Pick<MessagesCollectionSegment, 'totalCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Message' }
      & MessageBriefFragment
      & MessageDetailFragment
    )>>>, pageInfo: (
      { __typename?: 'CollectionSegmentInfo' }
      & PageInfoFragment
    ) }
  )> }
);

export type AuthenticateResultFragmentFragment = (
  { __typename?: 'UserToken' }
  & Pick<UserToken, 'userId' | 'token'>
  & { user: (
    { __typename?: 'User' }
    & UserDetailFragment
  ) }
);

export type AuthenticateMutationVariables = Exact<{
  input: AuthenticateInput;
}>;


export type AuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { authenticate: (
    { __typename?: 'UserToken' }
    & AuthenticateResultFragmentFragment
  ) }
);

export type FederateAuthenticateMutationVariables = Exact<{
  code: Scalars['String'];
  loginProvider: LoginProviderEnum;
}>;


export type FederateAuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { federateAuthenticate: (
    { __typename?: 'UserToken' }
    & AuthenticateResultFragmentFragment
  ) }
);

export type RegisterAndSignInMutationVariables = Exact<{
  registerInput: RegisterUserRequestInput;
  authenticateInput: AuthenticateInput;
}>;


export type RegisterAndSignInMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
  & { authenticate: (
    { __typename?: 'UserToken' }
    & Pick<UserToken, 'userId' | 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'roleNames' | 'roleIds' | 'permissions' | 'id' | 'phoneNumber' | 'email' | 'username'>
      & { avatarFile?: Maybe<(
        { __typename?: 'BlobObject' }
        & Pick<BlobObject, 'url'>
      )> }
    ) }
  ) }
);

export type SendSmsCaptchaMutationVariables = Exact<{
  phoneOrEmail: Scalars['ChinesePhoneNumberType'];
}>;


export type SendSmsCaptchaMutation = (
  { __typename?: 'Mutation' }
  & { generateCaptcha: (
    { __typename?: 'Captcha' }
    & Pick<Captcha, 'captchaType' | 'key'>
  ) }
);

export type ValidateSmsCaptchaMutationVariables = Exact<{
  captchaKey: Scalars['String'];
  captchaCode: Scalars['String'];
}>;


export type ValidateSmsCaptchaMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'validateCaptcha'>
);

export type TenantsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ITenantFilterInput>;
}>;


export type TenantsQuery = (
  { __typename?: 'Query' }
  & { tenants?: Maybe<(
    { __typename?: 'TenantsCollectionSegment' }
    & Pick<TenantsCollectionSegment, 'totalCount'>
    & { items?: Maybe<Array<(
      { __typename?: 'Tenant' }
      & Pick<Tenant, 'code' | 'name' | 'isEnabled' | 'id'>
    )>>, pageInfo: (
      { __typename?: 'CollectionSegmentInfo' }
      & PageInfoFragment
    ) }
  )> }
);

export type ToggleTenantAvailabilityMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type ToggleTenantAvailabilityMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleTenantAvailability'>
);

export type EditTenantMutationVariables = Exact<{
  code: Scalars['String'];
  name: Scalars['String'];
}>;


export type EditTenantMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'editTenant'>
);

export type CreateTenantMutationVariables = Exact<{
  code: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateTenantMutation = (
  { __typename?: 'Mutation' }
  & { createTenant: (
    { __typename?: 'Tenant' }
    & Pick<Tenant, 'code' | 'isEnabled' | 'name' | 'id'>
  ) }
);

export type SettingBriefFragment = (
  { __typename?: 'Setting' }
  & Pick<Setting, 'id' | 'name' | 'value'>
);

export type SettingDetailFragment = (
  { __typename?: 'Setting' }
  & Pick<Setting, 'scope' | 'scopedKey'>
);

export type EditSettingMutationVariables = Exact<{
  input: EditSettingRequestInput;
}>;


export type EditSettingMutation = (
  { __typename?: 'Mutation' }
  & { editSetting: (
    { __typename?: 'Setting' }
    & Pick<Setting, 'name' | 'value'>
  ) }
);

export type SettingsQueryVariables = Exact<{
  input: GetSettingsInput;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ISettingFilterInput>;
  includeDetail: Scalars['Boolean'];
}>;


export type SettingsQuery = (
  { __typename?: 'Query' }
  & { settings?: Maybe<(
    { __typename?: 'SettingsCollectionSegment' }
    & Pick<SettingsCollectionSegment, 'totalCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Setting' }
      & SettingBriefFragment
      & SettingDetailFragment
    )>>>, pageInfo: (
      { __typename?: 'CollectionSegmentInfo' }
      & PageInfoFragment
    ) }
  )> }
);

export type InitSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type InitSettingsQuery = (
  { __typename?: 'Query' }
  & { initSettings: Array<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'name' | 'value'>
  )> }
);

export type PageInfoFragment = (
  { __typename?: 'CollectionSegmentInfo' }
  & Pick<CollectionSegmentInfo, 'hasPreviousPage' | 'hasNextPage'>
);

export type BlobObjectBriefFragment = (
  { __typename?: 'BlobObject' }
  & Pick<BlobObject, 'id' | 'createdOn' | 'fileSize' | 'mimeType' | 'storageType' | 'fileName' | 'md5' | 'url'>
);

export type BlobObjectDetailFragment = (
  { __typename?: 'BlobObject' }
  & Pick<BlobObject, 'url'>
);

export type CreateBlobObjectMutationVariables = Exact<{
  input: CreateBlobObjectRequestInput;
}>;


export type CreateBlobObjectMutation = (
  { __typename?: 'Mutation' }
  & { createBlobObject: (
    { __typename?: 'BlobObject' }
    & Pick<BlobObject, 'id' | 'md5' | 'fileName' | 'url' | 'mimeType' | 'fileSize' | 'storageType'>
  ) }
);

export type CheckTenantMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type CheckTenantMutation = (
  { __typename?: 'Mutation' }
  & { checkTenant?: Maybe<(
    { __typename?: 'Tenant' }
    & Pick<Tenant, 'code' | 'name' | 'isEnabled' | 'id' | 'createdOn'>
  )> }
);

export type BlobObjectsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IBlobObjectFilterInput>;
  includeDetail: Scalars['Boolean'];
}>;


export type BlobObjectsQuery = (
  { __typename?: 'Query' }
  & { blobObjects?: Maybe<(
    { __typename?: 'BlobObjectsCollectionSegment' }
    & Pick<BlobObjectsCollectionSegment, 'totalCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'BlobObject' }
      & BlobObjectBriefFragment
      & BlobObjectDetailFragment
    )>>>, pageInfo: (
      { __typename?: 'CollectionSegmentInfo' }
      & PageInfoFragment
    ) }
  )> }
);

export type OrgCacheItemFragment = (
  { __typename?: 'OrgCacheItem' }
  & Pick<OrgCacheItem, 'orgType' | 'code' | 'name' | 'parentOrgCode'>
);

export type OrgsCacheQueryVariables = Exact<{ [key: string]: never; }>;


export type OrgsCacheQuery = (
  { __typename?: 'Query' }
  & { orgsCache: Array<(
    { __typename?: 'OrgCacheItem' }
    & OrgCacheItemFragment
  )> }
);

export type OnFrontendCallSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnFrontendCallSubscription = (
  { __typename?: 'Subscription' }
  & { onFrontendCall: (
    { __typename?: 'FrontendCall' }
    & Pick<FrontendCall, 'frontendCallType' | 'data'>
  ) }
);

export type OnBroadcastSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnBroadcastSubscription = (
  { __typename?: 'Subscription' }
  & { onBroadcast: (
    { __typename?: 'FrontendCall' }
    & Pick<FrontendCall, 'frontendCallType' | 'data'>
  ) }
);

export const RoleBriefGql = gql`
    fragment RoleBrief on Role {
  createdOn
  name
  id
  isStatic
  isDefault
}
    ` as unknown as DocumentNode<RoleBriefFragment, unknown>;
export const RoleDetailGql = gql`
    fragment RoleDetail on Role {
  ...RoleBrief
  permissions
  name
  users {
    id
  }
}
    ${RoleBriefGql}` as unknown as DocumentNode<RoleDetailFragment, unknown>;
export const RoleMinimalGql = gql`
    fragment RoleMinimal on Role {
  id
  name
}
    ` as unknown as DocumentNode<RoleMinimalFragment, unknown>;
export const OrgBriefGql = gql`
    fragment OrgBrief on Org {
  code
  name
  orgType
  parentOrgCode
  id
}
    ` as unknown as DocumentNode<OrgBriefFragment, unknown>;
export const OrgDetailGql = gql`
    fragment OrgDetail on Org {
  ...OrgBrief
  allSubOrgs {
    name
    code
  }
  directSubOrgs {
    name
    code
  }
}
    ${OrgBriefGql}` as unknown as DocumentNode<OrgDetailFragment, unknown>;
export const UserBriefGql = gql`
    fragment UserBrief on User {
  id
  username
  nickname
  phoneNumber
  email
  isEnable
  openId
  loginProvider
  roleNames
  roleIds
}
    ` as unknown as DocumentNode<UserBriefFragment, unknown>;
export const UserListGql = gql`
    fragment UserList on User {
  ...UserBrief
  createdOn
  orgCodes
}
    ${UserBriefGql}` as unknown as DocumentNode<UserListFragment, unknown>;
export const UserCacheDtoGql = gql`
    fragment UserCacheDto on User {
  ...UserBrief
  avatarFile {
    url
  }
}
    ${UserBriefGql}` as unknown as DocumentNode<UserCacheDtoFragment, unknown>;
export const UserMinimalGql = gql`
    fragment UserMinimal on User {
  id
  openId
  username
  nickname
}
    ` as unknown as DocumentNode<UserMinimalFragment, unknown>;
export const OrgRecursiveParentGql = gql`
    fragment OrgRecursiveParent on Org {
  parentOrg {
    ...OrgBrief
    parentOrg {
      ...OrgBrief
      parentOrg {
        ...OrgBrief
        parentOrg {
          ...OrgBrief
          parentOrg {
            ...OrgBrief
            parentOrg {
              ...OrgBrief
              parentOrg {
                ...OrgBrief
                parentOrg {
                  ...OrgBrief
                  parentOrg {
                    ...OrgBrief
                    parentOrg {
                      ...OrgBrief
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${OrgBriefGql}` as unknown as DocumentNode<OrgRecursiveParentFragment, unknown>;
export const MessageBriefGql = gql`
    fragment MessageBrief on Message {
  fromUserId
  id
  messageType
  severity
  time
  title
}
    ` as unknown as DocumentNode<MessageBriefFragment, unknown>;
export const MessageDetailGql = gql`
    fragment MessageDetail on Message {
  toUserIds
  createdOn
  content {
    _
  }
}
    ` as unknown as DocumentNode<MessageDetailFragment, unknown>;
export const BlobObjectBriefGql = gql`
    fragment BlobObjectBrief on BlobObject {
  id
  createdOn
  fileSize
  mimeType
  storageType
  fileName
  md5
  url
}
    ` as unknown as DocumentNode<BlobObjectBriefFragment, unknown>;
export const UserDetailGql = gql`
    fragment UserDetail on User {
  ...UserBrief
  isEnable
  permissions
  orgs {
    allParentOrgs {
      code
      name
    }
    name
    code
  }
  claims {
    claimType
    claimValue
  }
  orgCodes
  avatarFileId
  avatarFile {
    ...BlobObjectBrief
  }
}
    ${UserBriefGql}
${BlobObjectBriefGql}` as unknown as DocumentNode<UserDetailFragment, unknown>;
export const AuthenticateResultFragmentGql = gql`
    fragment AuthenticateResultFragment on UserToken {
  userId
  user {
    ...UserDetail
  }
  token
}
    ${UserDetailGql}` as unknown as DocumentNode<AuthenticateResultFragmentFragment, unknown>;
export const SettingBriefGql = gql`
    fragment SettingBrief on Setting {
  id
  name
  value
}
    ` as unknown as DocumentNode<SettingBriefFragment, unknown>;
export const SettingDetailGql = gql`
    fragment SettingDetail on Setting {
  scope
  scopedKey
}
    ` as unknown as DocumentNode<SettingDetailFragment, unknown>;
export const PageInfoGql = gql`
    fragment PageInfo on CollectionSegmentInfo {
  hasPreviousPage
  hasNextPage
}
    ` as unknown as DocumentNode<PageInfoFragment, unknown>;
export const BlobObjectDetailGql = gql`
    fragment BlobObjectDetail on BlobObject {
  url
}
    ` as unknown as DocumentNode<BlobObjectDetailFragment, unknown>;
export const OrgCacheItemGql = gql`
    fragment OrgCacheItem on OrgCacheItem {
  orgType
  code
  name
  parentOrgCode
}
    ` as unknown as DocumentNode<OrgCacheItemFragment, unknown>;
export const UserListsGql = gql`
    query userLists($skip: Int, $take: Int, $where: IUserFilterInput) {
  users(skip: $skip, take: $take, where: $where) {
    items {
      ...UserList
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${UserListGql}
${PageInfoGql}` as unknown as DocumentNode<UserListsQuery, UserListsQueryVariables>;
export const UserByIdGql = gql`
    query userById($id: String) {
  users(skip: 0, take: 1, where: {id: {eq: $id}}) {
    items {
      ...UserDetail
    }
  }
}
    ${UserDetailGql}` as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;
export const UserMenusGql = gql`
    query userMenus($where: IUserFilterInput) {
  users(skip: 0, take: 999, where: $where) {
    items {
      ...UserMinimal
    }
  }
}
    ${UserMinimalGql}` as unknown as DocumentNode<UserMenusQuery, UserMenusQueryVariables>;
export const EditUserGql = gql`
    mutation editUser($input: EditUserRequestInput!) {
  editUser(input: $input)
}
    ` as unknown as DocumentNode<EditUserMutation, EditUserMutationVariables>;
export const CreateUserGql = gql`
    mutation createUser($input: CreateUserRequestInput!) {
  createUser(input: $input)
}
    ` as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const ResetUserPasswordGql = gql`
    mutation resetUserPassword($input: ResetUserPasswordRequestInput!) {
  resetUserPassword(input: $input)
}
    ` as unknown as DocumentNode<ResetUserPasswordMutation, ResetUserPasswordMutationVariables>;
export const ChangePasswordGql = gql`
    mutation changePassword($input: ChangePasswordRequestInput!) {
  changePassword(input: $input)
}
    ` as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const RoleListsGql = gql`
    query roleLists($skip: Int, $take: Int, $where: RoleFilterInput) {
  roles(skip: $skip, take: $take, where: $where) {
    items {
      ...RoleBrief
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${RoleBriefGql}
${PageInfoGql}` as unknown as DocumentNode<RoleListsQuery, RoleListsQueryVariables>;
export const RoleMenusGql = gql`
    query roleMenus($where: RoleFilterInput) {
  roles(skip: 0, take: 999, where: $where) {
    items {
      ...RoleMinimal
    }
  }
}
    ${RoleMinimalGql}` as unknown as DocumentNode<RoleMenusQuery, RoleMenusQueryVariables>;
export const RoleByNameGql = gql`
    query roleByName($name: String) {
  roles(skip: 0, take: 1, where: {name: {eq: $name}}) {
    items {
      ...RoleDetail
    }
  }
}
    ${RoleDetailGql}` as unknown as DocumentNode<RoleByNameQuery, RoleByNameQueryVariables>;
export const RoleByIdGql = gql`
    query roleById($id: String) {
  roles(skip: 0, take: 1, where: {id: {eq: $id}}) {
    items {
      ...RoleDetail
    }
  }
}
    ${RoleDetailGql}` as unknown as DocumentNode<RoleByIdQuery, RoleByIdQueryVariables>;
export const CreateRoleGql = gql`
    mutation createRole($input: CreateRoleInput!) {
  createRole(input: $input) {
    id
    createdOn
    name
    users {
      id
      username
      email
      phoneNumber
      ... on User {
        permissions
      }
    }
    permissions
  }
}
    ` as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const AuthorizeGql = gql`
    mutation authorize($input: AuthorizeInput!) {
  authorize(input: $input)
}
    ` as unknown as DocumentNode<AuthorizeMutation, AuthorizeMutationVariables>;
export const OrgsGql = gql`
    query orgs($where: OrgFilterInput) {
  orgs(skip: 0, take: 999, where: $where) {
    items {
      ...OrgBrief
    }
  }
}
    ${OrgBriefGql}` as unknown as DocumentNode<OrgsQuery, OrgsQueryVariables>;
export const CreateOrgGql = gql`
    mutation createOrg($input: CreateOrgInput!) {
  createOrg(input: $input) {
    ...OrgBrief
  }
}
    ${OrgBriefGql}` as unknown as DocumentNode<CreateOrgMutation, CreateOrgMutationVariables>;
export const AssignOrgsGql = gql`
    mutation assignOrgs($input: AssignOrgRequestInput!) {
  assignOrgs(input: $input)
}
    ` as unknown as DocumentNode<AssignOrgsMutation, AssignOrgsMutationVariables>;
export const SetRoleDefaultGql = gql`
    mutation setRoleDefault($roleId: String!) {
  setRoleDefault(input: {roleId: $roleId})
}
    ` as unknown as DocumentNode<SetRoleDefaultMutation, SetRoleDefaultMutationVariables>;
export const CreateMessageGql = gql`
    mutation createMessage($input: CreateMessageRequestInput!) {
  createMessage(input: $input) {
    ... on Message {
      id
    }
  }
}
    ` as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const EditMessageGql = gql`
    mutation editMessage($input: EditMessageRequestInput!) {
  editMessage(input: $input)
}
    ` as unknown as DocumentNode<EditMessageMutation, EditMessageMutationVariables>;
export const SendMessageGql = gql`
    mutation sendMessage($input: SendNotificationMessageRequestInput!) {
  sendMessage(input: $input)
}
    ` as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const MessagesGql = gql`
    query messages($skip: Int, $take: Int, $where: IMessageFilterInput, $includeDetail: Boolean!) {
  messages(skip: $skip, take: $take, where: $where) {
    items {
      ...MessageBrief
      ...MessageDetail @include(if: $includeDetail)
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${MessageBriefGql}
${MessageDetailGql}
${PageInfoGql}` as unknown as DocumentNode<MessagesQuery, MessagesQueryVariables>;
export const AuthenticateGql = gql`
    mutation authenticate($input: AuthenticateInput!) {
  authenticate(input: $input) {
    ...AuthenticateResultFragment
  }
}
    ${AuthenticateResultFragmentGql}` as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const FederateAuthenticateGql = gql`
    mutation federateAuthenticate($code: String!, $loginProvider: LoginProviderEnum!) {
  federateAuthenticate(input: {code: $code, loginProvider: $loginProvider}) {
    ...AuthenticateResultFragment
  }
}
    ${AuthenticateResultFragmentGql}` as unknown as DocumentNode<FederateAuthenticateMutation, FederateAuthenticateMutationVariables>;
export const RegisterAndSignInGql = gql`
    mutation registerAndSignIn($registerInput: RegisterUserRequestInput!, $authenticateInput: AuthenticateInput!) {
  register(input: $registerInput)
  authenticate(input: $authenticateInput) {
    userId
    user {
      id
      ... on User {
        roleNames
        roleIds
        permissions
        avatarFile {
          url
        }
      }
      phoneNumber
      email
      username
    }
    token
  }
}
    ` as unknown as DocumentNode<RegisterAndSignInMutation, RegisterAndSignInMutationVariables>;
export const SendSmsCaptchaGql = gql`
    mutation sendSmsCaptcha($phoneOrEmail: ChinesePhoneNumberType!) {
  generateCaptcha(
    input: {captchaProvider: Sms, smsCaptchaPhoneNumber: $phoneOrEmail}
  ) {
    captchaType
    key
  }
}
    ` as unknown as DocumentNode<SendSmsCaptchaMutation, SendSmsCaptchaMutationVariables>;
export const ValidateSmsCaptchaGql = gql`
    mutation validateSmsCaptcha($captchaKey: String!, $captchaCode: String!) {
  validateCaptcha(
    input: {captchaProvider: Sms, captchaKey: $captchaKey, captchaCode: $captchaCode}
  )
}
    ` as unknown as DocumentNode<ValidateSmsCaptchaMutation, ValidateSmsCaptchaMutationVariables>;
export const TenantsGql = gql`
    query tenants($skip: Int, $take: Int, $where: ITenantFilterInput) {
  tenants(skip: $skip, take: $take, where: $where) {
    items {
      code
      name
      isEnabled
      id
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${PageInfoGql}` as unknown as DocumentNode<TenantsQuery, TenantsQueryVariables>;
export const ToggleTenantAvailabilityGql = gql`
    mutation toggleTenantAvailability($code: String!) {
  toggleTenantAvailability(input: {code: $code})
}
    ` as unknown as DocumentNode<ToggleTenantAvailabilityMutation, ToggleTenantAvailabilityMutationVariables>;
export const EditTenantGql = gql`
    mutation editTenant($code: String!, $name: String!) {
  editTenant(input: {code: $code, name: $name})
}
    ` as unknown as DocumentNode<EditTenantMutation, EditTenantMutationVariables>;
export const CreateTenantGql = gql`
    mutation createTenant($code: String!, $name: String!) {
  createTenant(input: {code: $code, name: $name}) {
    code
    isEnabled
    name
    id
  }
}
    ` as unknown as DocumentNode<CreateTenantMutation, CreateTenantMutationVariables>;
export const EditSettingGql = gql`
    mutation editSetting($input: EditSettingRequestInput!) {
  editSetting(input: $input) {
    name
    value
  }
}
    ` as unknown as DocumentNode<EditSettingMutation, EditSettingMutationVariables>;
export const SettingsGql = gql`
    query settings($input: GetSettingsInput!, $skip: Int, $take: Int, $where: ISettingFilterInput, $includeDetail: Boolean!) {
  settings(input: $input, skip: $skip, take: $take, where: $where) {
    items {
      ...SettingBrief
      ...SettingDetail @include(if: $includeDetail)
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${SettingBriefGql}
${SettingDetailGql}
${PageInfoGql}` as unknown as DocumentNode<SettingsQuery, SettingsQueryVariables>;
export const InitSettingsGql = gql`
    query initSettings {
  initSettings {
    name
    value
  }
}
    ` as unknown as DocumentNode<InitSettingsQuery, InitSettingsQueryVariables>;
export const CreateBlobObjectGql = gql`
    mutation createBlobObject($input: CreateBlobObjectRequestInput!) {
  createBlobObject(input: $input) {
    id
    md5
    fileName
    url
    mimeType
    fileSize
    storageType
  }
}
    ` as unknown as DocumentNode<CreateBlobObjectMutation, CreateBlobObjectMutationVariables>;
export const CheckTenantGql = gql`
    mutation checkTenant($code: String!) {
  checkTenant(code: $code) {
    code
    name
    isEnabled
    id
    createdOn
  }
}
    ` as unknown as DocumentNode<CheckTenantMutation, CheckTenantMutationVariables>;
export const BlobObjectsGql = gql`
    query blobObjects($skip: Int, $take: Int, $where: IBlobObjectFilterInput, $includeDetail: Boolean!) {
  blobObjects(skip: $skip, take: $take, where: $where) {
    items {
      ...BlobObjectBrief
      ...BlobObjectDetail @include(if: $includeDetail)
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${BlobObjectBriefGql}
${BlobObjectDetailGql}
${PageInfoGql}` as unknown as DocumentNode<BlobObjectsQuery, BlobObjectsQueryVariables>;
export const OrgsCacheGql = gql`
    query orgsCache {
  orgsCache {
    ...OrgCacheItem
  }
}
    ${OrgCacheItemGql}` as unknown as DocumentNode<OrgsCacheQuery, OrgsCacheQueryVariables>;
export const OnFrontendCallGql = gql`
    subscription onFrontendCall {
  onFrontendCall {
    frontendCallType
    data
  }
}
    ` as unknown as DocumentNode<OnFrontendCallSubscription, OnFrontendCallSubscriptionVariables>;
export const OnBroadcastGql = gql`
    subscription onBroadcast {
  onBroadcast {
    frontendCallType
    data
  }
}
    ` as unknown as DocumentNode<OnBroadcastSubscription, OnBroadcastSubscriptionVariables>;