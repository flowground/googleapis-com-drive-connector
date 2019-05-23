/**
 * Auto-generated action file for "Drive" API.
 *
 * Generated at: 2019-05-23T09:13:21.859Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-drive-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'drive.files.update'
 * Endpoint Path: '/files/{fileId}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "addParents",
    "fileId",
    "keepRevisionForever",
    "ocrLanguage",
    "removeParents",
    "supportsTeamDrives",
    "useContentAsIndexableText"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "addParents": "addParents",
    "fileId": "fileId",
    "keepRevisionForever": "keepRevisionForever",
    "ocrLanguage": "ocrLanguage",
    "removeParents": "removeParents",
    "supportsTeamDrives": "supportsTeamDrives",
    "useContentAsIndexableText": "useContentAsIndexableText",
    "appProperties": "appProperties",
    "canAddChildren": "canAddChildren",
    "canChangeCopyRequiresWriterPermission": "canChangeCopyRequiresWriterPermission",
    "canChangeViewersCanCopyContent": "canChangeViewersCanCopyContent",
    "canComment": "canComment",
    "canCopy": "canCopy",
    "canDelete": "canDelete",
    "canDeleteChildren": "canDeleteChildren",
    "canDownload": "canDownload",
    "canEdit": "canEdit",
    "canListChildren": "canListChildren",
    "canMoveChildrenOutOfTeamDrive": "canMoveChildrenOutOfTeamDrive",
    "canMoveChildrenWithinTeamDrive": "canMoveChildrenWithinTeamDrive",
    "canMoveItemIntoTeamDrive": "canMoveItemIntoTeamDrive",
    "canMoveItemOutOfTeamDrive": "canMoveItemOutOfTeamDrive",
    "canMoveItemWithinTeamDrive": "canMoveItemWithinTeamDrive",
    "canMoveTeamDriveItem": "canMoveTeamDriveItem",
    "canReadRevisions": "canReadRevisions",
    "canReadTeamDrive": "canReadTeamDrive",
    "canRemoveChildren": "canRemoveChildren",
    "canRename": "canRename",
    "canShare": "canShare",
    "canTrash": "canTrash",
    "canTrashChildren": "canTrashChildren",
    "canUntrash": "canUntrash",
    "capabilities": "capabilities",
    "indexableText": "indexableText",
    "image": "image",
    "mimeType": "mimeType",
    "thumbnail": "thumbnail",
    "contentHints": "contentHints",
    "copyRequiresWriterPermission": "copyRequiresWriterPermission",
    "createdTime": "createdTime",
    "description": "description",
    "explicitlyTrashed": "explicitlyTrashed",
    "exportLinks": "exportLinks",
    "fileExtension": "fileExtension",
    "folderColorRgb": "folderColorRgb",
    "fullFileExtension": "fullFileExtension",
    "hasAugmentedPermissions": "hasAugmentedPermissions",
    "hasThumbnail": "hasThumbnail",
    "headRevisionId": "headRevisionId",
    "iconLink": "iconLink",
    "id": "id",
    "aperture": "aperture",
    "cameraMake": "cameraMake",
    "cameraModel": "cameraModel",
    "colorSpace": "colorSpace",
    "exposureBias": "exposureBias",
    "exposureMode": "exposureMode",
    "exposureTime": "exposureTime",
    "flashUsed": "flashUsed",
    "focalLength": "focalLength",
    "height": "height",
    "isoSpeed": "isoSpeed",
    "lens": "lens",
    "altitude": "altitude",
    "latitude": "latitude",
    "longitude": "longitude",
    "location": "location",
    "maxApertureValue": "maxApertureValue",
    "meteringMode": "meteringMode",
    "rotation": "rotation",
    "sensor": "sensor",
    "subjectDistance": "subjectDistance",
    "time": "time",
    "whiteBalance": "whiteBalance",
    "width": "width",
    "imageMediaMetadata": "imageMediaMetadata",
    "isAppAuthorized": "isAppAuthorized",
    "kind": "kind",
    "displayName": "displayName",
    "emailAddress": "emailAddress",
    "me": "me",
    "permissionId": "permissionId",
    "photoLink": "photoLink",
    "lastModifyingUser": "lastModifyingUser",
    "md5Checksum": "md5Checksum",
    "modifiedByMe": "modifiedByMe",
    "modifiedByMeTime": "modifiedByMeTime",
    "modifiedTime": "modifiedTime",
    "name": "name",
    "originalFilename": "originalFilename",
    "ownedByMe": "ownedByMe",
    "owners": "owners",
    "parents": "parents",
    "permissionIds": "permissionIds",
    "permissions": "permissions",
    "properties": "properties",
    "quotaBytesUsed": "quotaBytesUsed",
    "shared": "shared",
    "sharedWithMeTime": "sharedWithMeTime",
    "sharingUser": "sharingUser",
    "size": "size",
    "spaces": "spaces",
    "starred": "starred",
    "teamDriveId": "teamDriveId",
    "thumbnailLink": "thumbnailLink",
    "thumbnailVersion": "thumbnailVersion",
    "trashed": "trashed",
    "trashedTime": "trashedTime",
    "trashingUser": "trashingUser",
    "version": "version",
    "durationMillis": "durationMillis",
    "videoMediaMetadata": "videoMediaMetadata",
    "viewedByMe": "viewedByMe",
    "viewedByMeTime": "viewedByMeTime",
    "viewersCanCopyContent": "viewersCanCopyContent",
    "webContentLink": "webContentLink",
    "webViewLink": "webViewLink",
    "writersCanShare": "writersCanShare",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/octet-stream';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'drive.files.update',
        pathName: '/files/{fileId}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}