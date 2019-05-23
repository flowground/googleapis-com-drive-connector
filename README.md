# ![LOGO](logo.png) Drive **flow**ground Connector

## Description

A generated **flow**ground connector for the Drive API (version v3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json<br/>
Generated at: 2019-05-23T12:13:21+03:00

## API Description

Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Gets information about the user, the user's Drive, and system capabilities.

*Tags:* `about`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists the changes for a user or Team Drive.

*Tags:* `changes`

#### Input Parameters
* `includeCorpusRemovals` - _optional_ - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
* `includeRemoved` - _optional_ - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
* `includeTeamDriveItems` - _optional_ - Whether Team Drive files or changes should be included in results.
* `pageSize` - _optional_ - The maximum number of changes to return per page.
* `pageToken` - _required_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
* `restrictToMyDrive` - _optional_ - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
* `spaces` - _optional_ - A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `teamDriveId` - _optional_ - The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.

### Gets the starting pageToken for listing future changes.

*Tags:* `changes`

#### Input Parameters
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `teamDriveId` - _optional_ - The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Subscribes to changes for a user.

*Tags:* `changes`

#### Input Parameters
* `includeCorpusRemovals` - _optional_ - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
* `includeRemoved` - _optional_ - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
* `includeTeamDriveItems` - _optional_ - Whether Team Drive files or changes should be included in results.
* `pageSize` - _optional_ - The maximum number of changes to return per page.
* `pageToken` - _required_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
* `restrictToMyDrive` - _optional_ - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
* `spaces` - _optional_ - A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `teamDriveId` - _optional_ - The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.

### Stop watching resources through this channel

*Tags:* `channels`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists or searches files.

*Tags:* `files`

#### Input Parameters
* `corpora` - _optional_ - Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency.
* `corpus` - _optional_ - The source of files to list. Deprecated: use 'corpora' instead.
    Possible values: domain, user.
* `includeTeamDriveItems` - _optional_ - Whether Team Drive items should be included in results.
* `orderBy` - _optional_ - A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
* `pageSize` - _optional_ - The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* `q` - _optional_ - A query for filtering the file results. See the "Search for Files" guide for supported syntax.
* `spaces` - _optional_ - A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `teamDriveId` - _optional_ - ID of Team Drive to search.

### Creates a new file.

*Tags:* `files`

#### Input Parameters
* `ignoreDefaultVisibility` - _optional_ - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
* `keepRevisionForever` - _optional_ - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
* `ocrLanguage` - _optional_ - A language hint for OCR processing during image import (ISO 639-1 code).
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `useContentAsIndexableText` - _optional_ - Whether to use the uploaded content as indexable text.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Generates a set of file IDs which can be provided in create requests.

*Tags:* `files`

#### Input Parameters
* `count` - _optional_ - The number of IDs to return.
* `space` - _optional_ - The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes all of the user's trashed files.

*Tags:* `files`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.

*Tags:* `files`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a file's metadata or content by ID.

*Tags:* `files`

#### Input Parameters
* `acknowledgeAbuse` - _optional_ - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
* `fileId` - _required_ - The ID of the file.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a file's metadata and/or content with patch semantics.

*Tags:* `files`

#### Input Parameters
* `addParents` - _optional_ - A comma-separated list of parent IDs to add.
* `fileId` - _required_ - The ID of the file.
* `keepRevisionForever` - _optional_ - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
* `ocrLanguage` - _optional_ - A language hint for OCR processing during image import (ISO 639-1 code).
* `removeParents` - _optional_ - A comma-separated list of parent IDs to remove.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `useContentAsIndexableText` - _optional_ - Whether to use the uploaded content as indexable text.

### Lists a file's comments.

*Tags:* `comments`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `includeDeleted` - _optional_ - Whether to include deleted comments. Deleted comments will not include their original content.
* `pageSize` - _optional_ - The maximum number of comments to return per page.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* `startModifiedTime` - _optional_ - The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new comment on a file.

*Tags:* `comments`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a comment.

*Tags:* `comments`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a comment by ID.

*Tags:* `comments`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `includeDeleted` - _optional_ - Whether to return deleted comments. Deleted comments will not include their original content.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a comment with patch semantics.

*Tags:* `comments`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists a comment's replies.

*Tags:* `replies`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `includeDeleted` - _optional_ - Whether to include deleted replies. Deleted replies will not include their original content.
* `pageSize` - _optional_ - The maximum number of replies to return per page.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new reply to a comment.

*Tags:* `replies`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a reply.

*Tags:* `replies`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `replyId` - _required_ - The ID of the reply.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a reply by ID.

*Tags:* `replies`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `includeDeleted` - _optional_ - Whether to return deleted replies. Deleted replies will not include their original content.
* `replyId` - _required_ - The ID of the reply.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a reply with patch semantics.

*Tags:* `replies`

#### Input Parameters
* `commentId` - _required_ - The ID of the comment.
* `fileId` - _required_ - The ID of the file.
* `replyId` - _required_ - The ID of the reply.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a copy of a file and applies any requested updates with patch semantics.

*Tags:* `files`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `ignoreDefaultVisibility` - _optional_ - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
* `keepRevisionForever` - _optional_ - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
* `ocrLanguage` - _optional_ - A language hint for OCR processing during image import (ISO 639-1 code).
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.

*Tags:* `files`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `mimeType` - _required_ - The MIME type of the format requested for this export.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists a file's or Team Drive's permissions.

*Tags:* `permissions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file or Team Drive.
* `pageSize` - _optional_ - The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a permission for a file or Team Drive.

*Tags:* `permissions`

#### Input Parameters
* `emailMessage` - _optional_ - A plain text custom message to include in the notification email.
* `fileId` - _required_ - The ID of the file or Team Drive.
* `sendNotificationEmail` - _optional_ - Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `transferOwnership` - _optional_ - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a permission.

*Tags:* `permissions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file or Team Drive.
* `permissionId` - _required_ - The ID of the permission.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a permission by ID.

*Tags:* `permissions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `permissionId` - _required_ - The ID of the permission.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a permission with patch semantics.

*Tags:* `permissions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file or Team Drive.
* `permissionId` - _required_ - The ID of the permission.
* `removeExpiration` - _optional_ - Whether to remove the expiration date.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `transferOwnership` - _optional_ - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the item belongs.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists a file's revisions.

*Tags:* `revisions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `pageSize` - _optional_ - The maximum number of revisions to return per page.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

*Tags:* `revisions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `revisionId` - _required_ - The ID of the revision.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a revision's metadata or content by ID.

*Tags:* `revisions`

#### Input Parameters
* `acknowledgeAbuse` - _optional_ - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
* `fileId` - _required_ - The ID of the file.
* `revisionId` - _required_ - The ID of the revision.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a revision with patch semantics.

*Tags:* `revisions`

#### Input Parameters
* `fileId` - _required_ - The ID of the file.
* `revisionId` - _required_ - The ID of the revision.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Subscribes to changes to a file

*Tags:* `files`

#### Input Parameters
* `acknowledgeAbuse` - _optional_ - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
* `fileId` - _required_ - The ID of the file.
* `supportsTeamDrives` - _optional_ - Whether the requesting application supports Team Drives.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists the user's Team Drives.

*Tags:* `teamdrives`

#### Input Parameters
* `pageSize` - _optional_ - Maximum number of Team Drives to return.
* `pageToken` - _optional_ - Page token for Team Drives.
* `q` - _optional_ - Query string for searching Team Drives.
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new Team Drive.

*Tags:* `teamdrives`

#### Input Parameters
* `requestId` - _required_ - An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.

*Tags:* `teamdrives`

#### Input Parameters
* `teamDriveId` - _required_ - The ID of the Team Drive
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a Team Drive's metadata by ID.

*Tags:* `teamdrives`

#### Input Parameters
* `teamDriveId` - _required_ - The ID of the Team Drive
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a Team Drive's metadata

*Tags:* `teamdrives`

#### Input Parameters
* `teamDriveId` - _required_ - The ID of the Team Drive
* `useDomainAdminAccess` - _optional_ - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-drive-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
