import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type BlobObjectKeySpecifier = ('fileName' | 'md5' | 'url' | 'fileSize' | 'mimeType' | 'storageType' | 'modifiedOn' | 'id' | 'createdOn' | BlobObjectKeySpecifier)[];
export type BlobObjectFieldPolicy = {
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	md5?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	storageType?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlobObjectsCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | BlobObjectsCollectionSegmentKeySpecifier)[];
export type BlobObjectsCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CaptchaKeySpecifier = ('captchaType' | 'key' | 'bitmap' | CaptchaKeySpecifier)[];
export type CaptchaFieldPolicy = {
	captchaType?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	bitmap?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatKeySpecifier = ('messages' | 'title' | 'aiModel' | 'sessionToken' | 'userId' | 'lastMessageDate' | 'meterial' | 'status' | 'modifiedOn' | 'id' | 'createdOn' | ChatKeySpecifier)[];
export type ChatFieldPolicy = {
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	aiModel?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionToken?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMessageDate?: FieldPolicy<any> | FieldReadFunction<any>,
	meterial?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageKeySpecifier = ('chat' | 'audio' | 'messageType' | 'imageFileId' | 'image' | 'audioFileId' | 'chatId' | 'chatMessageRole' | 'isHidden' | 'text' | 'videoFileId' | 'video' | 'summary' | 'modifiedOn' | 'id' | 'createdOn' | ChatMessageKeySpecifier)[];
export type ChatMessageFieldPolicy = {
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	audio?: FieldPolicy<any> | FieldReadFunction<any>,
	messageType?: FieldPolicy<any> | FieldReadFunction<any>,
	imageFileId?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	audioFileId?: FieldPolicy<any> | FieldReadFunction<any>,
	chatId?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessageRole?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	videoFileId?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatsCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | ChatsCollectionSegmentKeySpecifier)[];
export type ChatsCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionSegmentInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | CollectionSegmentInfoKeySpecifier)[];
export type CollectionSegmentInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FrontendCallKeySpecifier = ('data' | 'frontendCallType' | FrontendCallKeySpecifier)[];
export type FrontendCallFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	frontendCallType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeexPlatformOrgKeySpecifier = ('ownerUser' | 'introduction' | 'users' | 'userIds' | 'name' | 'address' | 'phone' | 'contactName' | 'logoUrl' | 'ownerUserId' | 'activeEdition' | 'editionExpireAt' | 'isEditionExpired' | 'isCertificated' | 'orgCertification' | 'lastUpdateTime' | 'allParentOrgCodes' | 'allParentOrgs' | 'allSubOrgCodes' | 'allSubOrgs' | 'directSubOrgCodes' | 'directSubOrgs' | 'parentOrg' | 'parentOrgCode' | 'code' | 'orgType' | 'tenantCode' | 'modifiedOn' | 'id' | 'createdOn' | GeexPlatformOrgKeySpecifier)[];
export type GeexPlatformOrgFieldPolicy = {
	ownerUser?: FieldPolicy<any> | FieldReadFunction<any>,
	introduction?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	userIds?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	contactName?: FieldPolicy<any> | FieldReadFunction<any>,
	logoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	activeEdition?: FieldPolicy<any> | FieldReadFunction<any>,
	editionExpireAt?: FieldPolicy<any> | FieldReadFunction<any>,
	isEditionExpired?: FieldPolicy<any> | FieldReadFunction<any>,
	isCertificated?: FieldPolicy<any> | FieldReadFunction<any>,
	orgCertification?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdateTime?: FieldPolicy<any> | FieldReadFunction<any>,
	allParentOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allParentOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HintTypeKeySpecifier = ('_' | HintTypeKeySpecifier)[];
export type HintTypeFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IAuditEntityKeySpecifier = ('auditStatus' | 'submittable' | 'id' | 'createdOn' | IAuditEntityKeySpecifier)[];
export type IAuditEntityFieldPolicy = {
	auditStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	submittable?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IBlobObjectKeySpecifier = ('fileName' | 'md5' | 'fileSize' | 'mimeType' | 'url' | 'storageType' | 'id' | 'createdOn' | IBlobObjectKeySpecifier)[];
export type IBlobObjectFieldPolicy = {
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	md5?: FieldPolicy<any> | FieldReadFunction<any>,
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	storageType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IEntityBaseKeySpecifier = ('id' | 'createdOn' | IEntityBaseKeySpecifier)[];
export type IEntityBaseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IFrontendCallKeySpecifier = ('data' | 'frontendCallType' | IFrontendCallKeySpecifier)[];
export type IFrontendCallFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	frontendCallType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IMessageKeySpecifier = ('fromUserId' | 'messageType' | 'content' | 'toUserIds' | 'severity' | 'title' | 'time' | 'id' | 'createdOn' | IMessageKeySpecifier)[];
export type IMessageFieldPolicy = {
	fromUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageType?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	toUserIds?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IMessageContentKeySpecifier = ('_' | IMessageContentKeySpecifier)[];
export type IMessageContentFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IOrgKeySpecifier = ('allParentOrgCodes' | 'allSubOrgCodes' | 'directSubOrgCodes' | 'parentOrgCode' | 'code' | 'name' | 'orgType' | 'allParentOrgs' | 'allSubOrgs' | 'directSubOrgs' | 'parentOrg' | 'id' | 'createdOn' | IOrgKeySpecifier)[];
export type IOrgFieldPolicy = {
	allParentOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	allParentOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IPagedListKeySpecifier = ('pageIndex' | 'pageSize' | 'totalPage' | 'totalCount' | IPagedListKeySpecifier)[];
export type IPagedListFieldPolicy = {
	pageIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IRoleKeySpecifier = ('name' | 'code' | 'users' | 'permissions' | 'isDefault' | 'isStatic' | 'isEnabled' | 'id' | 'createdOn' | IRoleKeySpecifier)[];
export type IRoleFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	isStatic?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ISettingKeySpecifier = ('scope' | 'scopedKey' | 'value' | 'name' | 'id' | 'createdOn' | ISettingKeySpecifier)[];
export type ISettingFieldPolicy = {
	scope?: FieldPolicy<any> | FieldReadFunction<any>,
	scopedKey?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ITenantKeySpecifier = ('code' | 'name' | 'isEnabled' | 'id' | 'createdOn' | ITenantKeySpecifier)[];
export type ITenantFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IUserKeySpecifier = ('phoneNumber' | 'username' | 'nickname' | 'email' | 'loginProvider' | 'openId' | 'isEnable' | 'roleIds' | 'orgCodes' | 'id' | 'createdOn' | IUserKeySpecifier)[];
export type IUserFieldPolicy = {
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	loginProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	openId?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnable?: FieldPolicy<any> | FieldReadFunction<any>,
	roleIds?: FieldPolicy<any> | FieldReadFunction<any>,
	orgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('distributions' | 'content' | 'fromUserId' | 'messageType' | 'severity' | 'time' | 'title' | 'toUserIds' | 'tenantCode' | 'modifiedOn' | 'id' | 'createdOn' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	distributions?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	fromUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageType?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	toUserIds?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageDistributionKeySpecifier = ('toUserId' | 'messageId' | 'isRead' | 'modifiedOn' | 'id' | 'createdOn' | MessageDistributionKeySpecifier)[];
export type MessageDistributionFieldPolicy = {
	toUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageId?: FieldPolicy<any> | FieldReadFunction<any>,
	isRead?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessagesCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | MessagesCollectionSegmentKeySpecifier)[];
export type MessagesCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_' | 'authenticate' | 'federateAuthenticate' | 'cancelAuthentication' | 'createTenant' | 'editTenant' | 'toggleTenantAvailability' | 'checkTenant' | 'changePassword' | 'register' | 'assignRoles' | 'assignOrgs' | 'editUser' | 'createUser' | 'resetUserPassword' | 'createOrg' | 'fixUserOrg' | 'createRole' | 'setRoleDefault' | 'markMessagesRead' | 'deleteMessageDistributions' | 'sendMessage' | 'createMessage' | 'editMessage' | 'createBlobObject' | 'deleteBlobObject' | 'editSetting' | 'authorize' | 'generateCaptcha' | 'validateCaptcha' | 'addGeexPlatformOrgUser' | 'geexPlatformOrgUpdate' | 'createOrder' | 'orderPay' | 'editOrder' | 'deleteOrder' | 'sendTextMessage' | 'sendMediaMessage' | 'createChat' | 'deleteChat' | 'sendMetaMessage' | 'fixMessageAudio' | 'generateTemplate' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticate?: FieldPolicy<any> | FieldReadFunction<any>,
	federateAuthenticate?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelAuthentication?: FieldPolicy<any> | FieldReadFunction<any>,
	createTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	editTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	toggleTenantAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	checkTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	assignRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	assignOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	editUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	resetUserPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	fixUserOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	setRoleDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	markMessagesRead?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMessageDistributions?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	editMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createBlobObject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBlobObject?: FieldPolicy<any> | FieldReadFunction<any>,
	editSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	authorize?: FieldPolicy<any> | FieldReadFunction<any>,
	generateCaptcha?: FieldPolicy<any> | FieldReadFunction<any>,
	validateCaptcha?: FieldPolicy<any> | FieldReadFunction<any>,
	addGeexPlatformOrgUser?: FieldPolicy<any> | FieldReadFunction<any>,
	geexPlatformOrgUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	orderPay?: FieldPolicy<any> | FieldReadFunction<any>,
	editOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	sendTextMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMediaMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createChat?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteChat?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMetaMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	fixMessageAudio?: FieldPolicy<any> | FieldReadFunction<any>,
	generateTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('orderType' | 'commerceSnapshot' | 'orderStatus' | 'amount' | 'payment' | 'modifiedOn' | 'id' | 'createdOn' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	orderType?: FieldPolicy<any> | FieldReadFunction<any>,
	commerceSnapshot?: FieldPolicy<any> | FieldReadFunction<any>,
	orderStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrdersCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | OrdersCollectionSegmentKeySpecifier)[];
export type OrdersCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgKeySpecifier = ('allParentOrgCodes' | 'allParentOrgs' | 'allSubOrgCodes' | 'allSubOrgs' | 'directSubOrgCodes' | 'directSubOrgs' | 'parentOrg' | 'parentOrgCode' | 'code' | 'name' | 'orgType' | 'tenantCode' | 'modifiedOn' | 'id' | 'createdOn' | OrgKeySpecifier)[];
export type OrgFieldPolicy = {
	allParentOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allParentOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgCacheItemKeySpecifier = ('orgType' | 'code' | 'name' | 'parentOrgCode' | OrgCacheItemKeySpecifier)[];
export type OrgCacheItemFieldPolicy = {
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgCertificationKeySpecifier = ('isCertificated' | 'certificationImages' | OrgCertificationKeySpecifier)[];
export type OrgCertificationFieldPolicy = {
	isCertificated?: FieldPolicy<any> | FieldReadFunction<any>,
	certificationImages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgsCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | OrgsCollectionSegmentKeySpecifier)[];
export type OrgsCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentKeySpecifier = ('paymentNumber' | 'paymentType' | 'amount' | 'qrCode' | 'qrCodeExpireTime' | 'payTime' | PaymentKeySpecifier)[];
export type PaymentFieldPolicy = {
	paymentNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	qrCode?: FieldPolicy<any> | FieldReadFunction<any>,
	qrCodeExpireTime?: FieldPolicy<any> | FieldReadFunction<any>,
	payTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_' | 'tenants' | 'users' | 'currentUser' | 'orgs' | 'roles' | 'messages' | 'unreadMessages' | 'blobObjects' | 'settings' | 'initSettings' | 'myPermissions' | 'orders' | 'orderById' | '_hint' | 'orgsCache' | 'quotas' | 'myQuota' | 'quotaById' | 'chats' | 'chatById' | 'templateUpdateDate' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	tenants?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	blobObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	initSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	myPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	orderById?: FieldPolicy<any> | FieldReadFunction<any>,
	_hint?: FieldPolicy<any> | FieldReadFunction<any>,
	orgsCache?: FieldPolicy<any> | FieldReadFunction<any>,
	quotas?: FieldPolicy<any> | FieldReadFunction<any>,
	myQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	quotaById?: FieldPolicy<any> | FieldReadFunction<any>,
	chats?: FieldPolicy<any> | FieldReadFunction<any>,
	chatById?: FieldPolicy<any> | FieldReadFunction<any>,
	templateUpdateDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QuotaKeySpecifier = ('userId' | 'totalUnits' | 'remainingUnits' | 'activeUntil' | 'lastRefreshTime' | 'utilizedUnits' | 'modifiedOn' | 'id' | 'createdOn' | QuotaKeySpecifier)[];
export type QuotaFieldPolicy = {
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	totalUnits?: FieldPolicy<any> | FieldReadFunction<any>,
	remainingUnits?: FieldPolicy<any> | FieldReadFunction<any>,
	activeUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	lastRefreshTime?: FieldPolicy<any> | FieldReadFunction<any>,
	utilizedUnits?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('name' | 'code' | 'users' | 'permissions' | 'tenantCode' | 'isDefault' | 'isStatic' | 'isEnabled' | 'modifiedOn' | 'id' | 'createdOn' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	isStatic?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RolesCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | RolesCollectionSegmentKeySpecifier)[];
export type RolesCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingKeySpecifier = ('id' | 'name' | 'validScopes' | 'scope' | 'scopedKey' | 'value' | 'modifiedOn' | 'createdOn' | SettingKeySpecifier)[];
export type SettingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	validScopes?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>,
	scopedKey?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | SettingsCollectionSegmentKeySpecifier)[];
export type SettingsCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SpeechToTextItemKeySpecifier = ('newText' | 'type' | 'replaceRange' | SpeechToTextItemKeySpecifier)[];
export type SpeechToTextItemFieldPolicy = {
	newText?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	replaceRange?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('_' | 'onFrontendCall' | 'onBroadcast' | 'echo' | 'onCacheDataChange' | 'onNewMessage' | 'onNewAudio' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	onFrontendCall?: FieldPolicy<any> | FieldReadFunction<any>,
	onBroadcast?: FieldPolicy<any> | FieldReadFunction<any>,
	echo?: FieldPolicy<any> | FieldReadFunction<any>,
	onCacheDataChange?: FieldPolicy<any> | FieldReadFunction<any>,
	onNewMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	onNewAudio?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TenantKeySpecifier = ('code' | 'name' | 'isEnabled' | 'externalInfo' | 'modifiedOn' | 'id' | 'createdOn' | TenantKeySpecifier)[];
export type TenantFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	externalInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TenantsCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | TenantsCollectionSegmentKeySpecifier)[];
export type TenantsCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsageRecordKeySpecifier = ('userId' | 'timestamp' | 'units' | 'modifiedOn' | 'id' | 'createdOn' | UsageRecordKeySpecifier)[];
export type UsageRecordFieldPolicy = {
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	units?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatarFile' | 'claims' | 'phoneNumber' | 'isEnable' | 'username' | 'nickname' | 'email' | 'password' | 'orgs' | 'orgCodes' | 'permissions' | 'roleIds' | 'avatarFileId' | 'roles' | 'roleNames' | 'loginProvider' | 'openId' | 'tenantCode' | 'modifiedOn' | 'id' | 'createdOn' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatarFile?: FieldPolicy<any> | FieldReadFunction<any>,
	claims?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnable?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	roleIds?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarFileId?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	roleNames?: FieldPolicy<any> | FieldReadFunction<any>,
	loginProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	openId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserClaimKeySpecifier = ('claimType' | 'claimValue' | UserClaimKeySpecifier)[];
export type UserClaimFieldPolicy = {
	claimType?: FieldPolicy<any> | FieldReadFunction<any>,
	claimValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTokenKeySpecifier = ('token' | 'user' | 'loginProvider' | 'userId' | 'name' | UserTokenKeySpecifier)[];
export type UserTokenFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	loginProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersCollectionSegmentKeySpecifier = ('pageInfo' | 'items' | 'totalCount' | UsersCollectionSegmentKeySpecifier)[];
export type UsersCollectionSegmentFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	BlobObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlobObjectKeySpecifier | (() => undefined | BlobObjectKeySpecifier),
		fields?: BlobObjectFieldPolicy,
	},
	BlobObjectsCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlobObjectsCollectionSegmentKeySpecifier | (() => undefined | BlobObjectsCollectionSegmentKeySpecifier),
		fields?: BlobObjectsCollectionSegmentFieldPolicy,
	},
	Captcha?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CaptchaKeySpecifier | (() => undefined | CaptchaKeySpecifier),
		fields?: CaptchaFieldPolicy,
	},
	Chat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatKeySpecifier | (() => undefined | ChatKeySpecifier),
		fields?: ChatFieldPolicy,
	},
	ChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageKeySpecifier | (() => undefined | ChatMessageKeySpecifier),
		fields?: ChatMessageFieldPolicy,
	},
	ChatsCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatsCollectionSegmentKeySpecifier | (() => undefined | ChatsCollectionSegmentKeySpecifier),
		fields?: ChatsCollectionSegmentFieldPolicy,
	},
	CollectionSegmentInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionSegmentInfoKeySpecifier | (() => undefined | CollectionSegmentInfoKeySpecifier),
		fields?: CollectionSegmentInfoFieldPolicy,
	},
	FrontendCall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FrontendCallKeySpecifier | (() => undefined | FrontendCallKeySpecifier),
		fields?: FrontendCallFieldPolicy,
	},
	GeexPlatformOrg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeexPlatformOrgKeySpecifier | (() => undefined | GeexPlatformOrgKeySpecifier),
		fields?: GeexPlatformOrgFieldPolicy,
	},
	HintType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HintTypeKeySpecifier | (() => undefined | HintTypeKeySpecifier),
		fields?: HintTypeFieldPolicy,
	},
	IAuditEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IAuditEntityKeySpecifier | (() => undefined | IAuditEntityKeySpecifier),
		fields?: IAuditEntityFieldPolicy,
	},
	IBlobObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IBlobObjectKeySpecifier | (() => undefined | IBlobObjectKeySpecifier),
		fields?: IBlobObjectFieldPolicy,
	},
	IEntityBase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IEntityBaseKeySpecifier | (() => undefined | IEntityBaseKeySpecifier),
		fields?: IEntityBaseFieldPolicy,
	},
	IFrontendCall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IFrontendCallKeySpecifier | (() => undefined | IFrontendCallKeySpecifier),
		fields?: IFrontendCallFieldPolicy,
	},
	IMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IMessageKeySpecifier | (() => undefined | IMessageKeySpecifier),
		fields?: IMessageFieldPolicy,
	},
	IMessageContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IMessageContentKeySpecifier | (() => undefined | IMessageContentKeySpecifier),
		fields?: IMessageContentFieldPolicy,
	},
	IOrg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IOrgKeySpecifier | (() => undefined | IOrgKeySpecifier),
		fields?: IOrgFieldPolicy,
	},
	IPagedList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IPagedListKeySpecifier | (() => undefined | IPagedListKeySpecifier),
		fields?: IPagedListFieldPolicy,
	},
	IRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IRoleKeySpecifier | (() => undefined | IRoleKeySpecifier),
		fields?: IRoleFieldPolicy,
	},
	ISetting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ISettingKeySpecifier | (() => undefined | ISettingKeySpecifier),
		fields?: ISettingFieldPolicy,
	},
	ITenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ITenantKeySpecifier | (() => undefined | ITenantKeySpecifier),
		fields?: ITenantFieldPolicy,
	},
	IUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IUserKeySpecifier | (() => undefined | IUserKeySpecifier),
		fields?: IUserFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	MessageDistribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageDistributionKeySpecifier | (() => undefined | MessageDistributionKeySpecifier),
		fields?: MessageDistributionFieldPolicy,
	},
	MessagesCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessagesCollectionSegmentKeySpecifier | (() => undefined | MessagesCollectionSegmentKeySpecifier),
		fields?: MessagesCollectionSegmentFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrdersCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrdersCollectionSegmentKeySpecifier | (() => undefined | OrdersCollectionSegmentKeySpecifier),
		fields?: OrdersCollectionSegmentFieldPolicy,
	},
	Org?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgKeySpecifier | (() => undefined | OrgKeySpecifier),
		fields?: OrgFieldPolicy,
	},
	OrgCacheItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgCacheItemKeySpecifier | (() => undefined | OrgCacheItemKeySpecifier),
		fields?: OrgCacheItemFieldPolicy,
	},
	OrgCertification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgCertificationKeySpecifier | (() => undefined | OrgCertificationKeySpecifier),
		fields?: OrgCertificationFieldPolicy,
	},
	OrgsCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgsCollectionSegmentKeySpecifier | (() => undefined | OrgsCollectionSegmentKeySpecifier),
		fields?: OrgsCollectionSegmentFieldPolicy,
	},
	Payment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentKeySpecifier | (() => undefined | PaymentKeySpecifier),
		fields?: PaymentFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Quota?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QuotaKeySpecifier | (() => undefined | QuotaKeySpecifier),
		fields?: QuotaFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	RolesCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RolesCollectionSegmentKeySpecifier | (() => undefined | RolesCollectionSegmentKeySpecifier),
		fields?: RolesCollectionSegmentFieldPolicy,
	},
	Setting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingKeySpecifier | (() => undefined | SettingKeySpecifier),
		fields?: SettingFieldPolicy,
	},
	SettingsCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsCollectionSegmentKeySpecifier | (() => undefined | SettingsCollectionSegmentKeySpecifier),
		fields?: SettingsCollectionSegmentFieldPolicy,
	},
	SpeechToTextItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SpeechToTextItemKeySpecifier | (() => undefined | SpeechToTextItemKeySpecifier),
		fields?: SpeechToTextItemFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Tenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TenantKeySpecifier | (() => undefined | TenantKeySpecifier),
		fields?: TenantFieldPolicy,
	},
	TenantsCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TenantsCollectionSegmentKeySpecifier | (() => undefined | TenantsCollectionSegmentKeySpecifier),
		fields?: TenantsCollectionSegmentFieldPolicy,
	},
	UsageRecord?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsageRecordKeySpecifier | (() => undefined | UsageRecordKeySpecifier),
		fields?: UsageRecordFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserClaim?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserClaimKeySpecifier | (() => undefined | UserClaimKeySpecifier),
		fields?: UserClaimFieldPolicy,
	},
	UserToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTokenKeySpecifier | (() => undefined | UserTokenKeySpecifier),
		fields?: UserTokenFieldPolicy,
	},
	UsersCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersCollectionSegmentKeySpecifier | (() => undefined | UsersCollectionSegmentKeySpecifier),
		fields?: UsersCollectionSegmentFieldPolicy,
	}
};