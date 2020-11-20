<p align="center">
  <a href="https://flo-scss.flo.center/">
    <img src="https://flo-scss.flo.center/docs/assets/brand/bootstrap-solid.svg" alt="Bootstrap logo" width="72" height="72">
  </a>
</p>

<h3 align="center">Flo-SCSS</h3>

<p align="center">
  Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br>
  <a href="https://flo-scss.flo.center/docs/"><strong>Explore Flo-SCSS docs »</strong></a>
  <br>
  <br>
  ·
  <a href="https://themes.flo-scss.flo.center/">Themes</a>
  ·
  <a href="https://blog.flo-scss.flo.center/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Install Ruby](#install-ruby)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)

## Quick start

### Install Flo-SCSS
Several quick start options are available:

- Clone the repo: `git clone git@github.com:flocasts/flo-scss`
- OR [download the latest release](https://github.com/flocasts/flo-scss/archive/v0.7.2.zip)
- OR install with [npm](https://www.npmjs.com/): `npm install flocasts/flo-scss`

### Running documentation locally

1. `cd flo-scss`
2. Run through the [tooling setup](https://flo-scss.flo.center/docs/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`. WARNING - read installing [ruby instructions](#install-ruby) for mac OS
3. Run `npm install` to install Node.js dependencies.
4. Run `npm run release && npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
5. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

## Install Ruby on macOS

### WARNING

    Make sure you follow these instructions for installing Ruby on macOS. Mistakes made in the process of installing
    Ruby on macOS can result in the operating system failing to boot.


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

## Documentation

Flo-SCSS's documentation is built off of bootstrap's and can be found: <https://flo-scss.flo.center/>.

Read the [Getting started page](https://flo-scss.flo.center/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/docs/assets/js/src/search.js` file.


## Contributing

Commit messages should follow semantic versioning.

```
build: (no change - e.g. build script changes that do not affect the final output for the user)
docs: (no change - e.g. changes to the documentation)
fix: (patch change - bug fix for the user, not a fix to a build script)
feat: (minor change - e.g. new feature for the user, not a new feature for build script)
breaking: (major breaking change - e.g. changing or removing class names or functionality. Changes that break parity with mainline bootstrap documentation.
```

Using `docs` will not update the npm version.

## Releasing

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

## Copyright and license

Code and documentation copyright 2011-2020 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
