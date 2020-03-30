<p align="center">
  <a href="https://flo-scss.flo.center/">
    <img src="https://flo-scss.flo.center/docs/assets/brand/bootstrap-solid.svg" alt="Bootstrap logo" width="72" height="72">
  </a>
</p>

<h3 align="center">Flo-SCSS</h3>

<p align="center">
  Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br>
  <a href="https://flo-scss.flo.center/docs/"><strong>Explore Bootstrap docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/twbs/bootstrap/issues/new?template=bug.md">Report bug</a>
  ·
  <a href="https://github.com/twbs/bootstrap/issues/new?template=feature.md&labels=feature">Request feature</a>
  ·
  <a href="https://themes.flo-scss.flo.center/">Themes</a>
  ·
  <a href="https://blog.flo-scss.flo.center/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)


## Quick start

### WARNING

    Make sure you follow these instructions for installing Ruby on macOS. Mistakes made in the process of installing
    Ruby on macOS can result in the operating system failing to boot.
    
### Install Ruby on macOS

 1. Install `gpg` and `curl`
      * `brew install gpg curl`
      
 2. Install RVM by following the instructions [here](https://rvm.io/rvm/install)
      * If you have an issue installing the GPG keys, contact your sysadmin
          * @Sysadmins, this could be a DNS issue. Try switching to 8.8.8.8 temporarily.
      * Avoid doing a multi-user install. You should not have to `sudo`
      * Install the stable version with `\curl -sSL https://get.rvm.io | bash -s stable`

 3. Run the RVM startup script and restart your terminals
      * Run `source ~/.rvm/scripts/rvm`
      
 4. Install the correct version of ruby for the project
      * The version can be found in the [Gemfile](./Gemfile)
      * Run `rvm install x.x.x` replacing Xs with the correct version
 
 5. Run `rvm use x.x.x` to set your ruby version, and you're ready to go!
      
### Install flo-scss

Several quick start options are available:

- Clone the repo:
```
git clone git@github.com:flocasts/flo-scss && cd flo-scss && bundle install && npm i && npm run release && npm start
```
- OR [download the latest release](https://github.com/flocasts/flo-scss/archive/vflo-scss.zip)
- OR install with [npm](https://www.npmjs.com/): `npm install flocasts/flo-scss`

Read the [Getting started page](https://flo-scss.flo.center/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.


## Status

[![Slack](https://bootstrap-slack.herokuapp.com/badge.svg)](https://bootstrap-slack.herokuapp.com/)
[![Build Status](https://github.com/twbs/bootstrap/workflows/Tests/badge.svg)](https://github.com/twbs/bootstrap/actions?workflow=Tests)
[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![Gem version](https://img.shields.io/gem/v/bootstrap.svg)](https://rubygems.org/gems/bootstrap)
[![Meteor Atmosphere](https://img.shields.io/badge/meteor-twbs%3Abootstrap-blue.svg)](https://atmospherejs.com/twbs/bootstrap)
[![Packagist Prerelease](https://img.shields.io/packagist/vpre/twbs/bootstrap.svg)](https://packagist.org/packages/twbs/bootstrap)
[![NuGet](https://img.shields.io/nuget/vpre/bootstrap.svg)](https://www.nuget.org/packages/bootstrap/absoluteLatest)
[![peerDependencies Status](https://img.shields.io/david/peer/twbs/bootstrap.svg)](https://david-dm.org/twbs/bootstrap?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/twbs/bootstrap.svg)](https://david-dm.org/twbs/bootstrap?type=dev)
[![Coverage Status](https://img.shields.io/coveralls/github/twbs/bootstrap/v4-dev.svg)](https://coveralls.io/github/twbs/bootstrap?branch=v4-dev)
[![CSS gzip size](https://img.badgesize.io/twbs/bootstrap/v4-dev/dist/css/bootstrap.min.css?compression=gzip&label=CSS+gzip+size)](https://github.com/twbs/bootstrap/tree/v4-dev/dist/css/bootstrap.min.css)
[![JS gzip size](https://img.badgesize.io/twbs/bootstrap/v4-dev/dist/js/bootstrap.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/twbs/bootstrap/tree/v4-dev/dist/js/bootstrap.min.js)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=SkxZcStBeExEdVJqQ2hWYnlWckpkNmNEY213SFp6WHFETWk2bGFuY3pCbz0tLXhqbHJsVlZhQnRBdEpod3NLSDMzaHc9PQ==--3d0b75245708616eb93113221beece33e680b229)](https://www.browserstack.com/automate/public-build/SkxZcStBeExEdVJqQ2hWYnlWckpkNmNEY213SFp6WHFETWk2bGFuY3pCbz0tLXhqbHJsVlZhQnRBdEpod3NLSDMzaHc9PQ==--3d0b75245708616eb93113221beece33e680b229)
[![Backers on Open Collective](https://opencollective.com/bootstrap/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/bootstrap/sponsors/badge.svg)](#sponsors)

## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://flo-scss.flo.center/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/docs/assets/js/src/search.js` file.

### Running documentation locally

1. Run through the [tooling setup](https://flo-scss.flo.center/docs/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).


## Contributing

Please read through our [contributing guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/bootstrap/releases) for changelogs for each release version of Bootstrap. Release announcement posts on [the official Bootstrap blog](https://blog.getbootstrap.com/) contain summaries of the most noteworthy changes made in each release.

## Copyright and license

Code and documentation copyright 2011-2020 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
