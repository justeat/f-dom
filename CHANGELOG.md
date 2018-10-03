# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v1.1.0
------------------------------
*October 3, 2018*

### Changed
- Updated module dependencies.


v1.0.0
------------------------------
*September 25, 2018*

### Added
- Snyk badge to readme.

### Changed
- Bumped to version 1.0.0 as this repo is public.
- Upgraded to babel 7.
- Updated module dependencies.
- Using eslint and jest directory rather than `gulp-build-fozzie` to improve install time.
- Clean `/dist` directory before compiling.
- Travis uses node v8 & v10 to run builds.
- License year updated.
- Danger file updated.
- Travis build results published to slack channel.
- Jest config updated.
- Readme layout updated.


v0.4.0
------------------------------
*March 9, 2018*

### Added
- Dangerfile check to validate PR titles with respect to version numbers


v0.3.0
------------------------------
*February 1, 2018*

### Added
- Dangerfile setup on travis builds

### Changed
- Updated gulp-build-fozzie version


v0.2.1
------------------------------
*January 30, 2018*

### Added
- :bear:


v0.2.0
------------------------------
*January 29, 2018*

### Changed
- Updated `browserlist` in `package.json`
- Updated to use `babel-preset-env`
- Updated gulp-build-fozzie version


v0.1.2
------------------------------
*January 17, 2018*

### Added
- Added concurrently to run npm scripts concurrently...!

### Removed
- Removed duplicate `gulp-build-fozzie` reference in `dependencies`.


v0.1.1
------------------------------
*November 22, 2017*

### Added
- Added "files" property to `package.json` so that only the necessary files are published to npm.


v0.1.0
------------------------------
*November 16, 2017*

### Added
- Added initial project files.
- DOM module and unit tests
