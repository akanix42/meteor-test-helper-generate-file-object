'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateFileObject;
exports.generatePreprocessedFileObject = generatePreprocessedFileObject;

var _meteorBuildPluginHelperPathHelpers = require('meteor-build-plugin-helper-path-helpers');

var _meteorBuildPluginHelperPathHelpers2 = _interopRequireDefault(_meteorBuildPluginHelperPathHelpers);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateFileObject(filePath, rawContents) {
  var packageName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var file = {
    fileOptions: {},
    rawContents: rawContents,
    referencedImportPaths: [],
    arch: 'web',
    getPackageName: function getPackageName() {
      return packageName;
    },
    getPathInPackage: function getPathInPackage() {
      return filePath;
    },
    getBasename: function getBasename() {
      return _path2.default.basename(filePath);
    },
    getExtension: function getExtension() {
      return _path2.default.extname(filePath);
    }
  };

  file.getFileOptions = function () {
    return file.fileOptions;
  };

  file.getContentsAsString = function () {
    return file.rawContents;
  };

  file.getArch = function () {
    return file.arch;
  };

  file.importPath = _meteorBuildPluginHelperPathHelpers2.default.getPathInPackage(file);

  return file;
}

function generatePreprocessedFileObject(filePath, rawContents) {
  var packageName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var file = generateFileObject(filePath, rawContents, packageName = null);
  file.contents = file.rawContents;
  return file;
}
//# sourceMappingURL=generate-file-object.js.map
