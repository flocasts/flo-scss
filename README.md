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
- OR [download the latest release](https://github.com/flocasts/flo-scss/archive/vflo-scss.zip)
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

Please read through our [contributing guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.


### SVG

#### Formatting a new SVG

Each icon in the system is a formatted svg with a `viewBox="0 0 500 500"`, a path fill="currentColor" and a descriptive class name.

The SVG is created on a 500px x 500px art board. SVG's created in a design program such as Adobe Illustrator or Sketch. Clean up an svg with this online tool https://jakearchibald.github.io/svgomg/. Make sure no extra `g` `tags`, `masks`, or `nested paths` are present.

Format Guidelines
* `fill=currentColor` is set
* `viewBox= 0 0 500 500` is present
* no inline width, height, or colors
* use of classes to reference the SVG
* the svg is flat with only a path tag. No `g` `tags`, `masks`, or `nested paths`
 
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="icon-cog">
<path fill="currentColor" d="M346.382,250.246A96.882,96.882,0,1,0,249.5,347.128,96.992,96.992,0,0,0,346.382,250.246Zm93.428,35.383,42.96,24.8a12.121,12.121,0,0,1,5.5,14.1,249.617,249.617,0,0,1-55.13,95.348,12.113,12.113,0,0,1-14.952,2.273l-42.927-24.794a193.113,193.113,0,0,1-61.249,35.413v49.579a12.1,12.1,0,0,1-9.453,11.812,251.979,251.979,0,0,1-110.1.008,12.123,12.123,0,0,1-9.479-11.818V432.764a193.083,193.083,0,0,1-61.249-35.413L80.808,422.145a12.113,12.113,0,0,1-14.952-2.273,249.63,249.63,0,0,1-55.13-95.348,12.122,12.122,0,0,1,5.5-14.1l42.961-24.8a195.04,195.04,0,0,1,0-70.765l-42.96-24.8a12.121,12.121,0,0,1-5.5-14.1A249.621,249.621,0,0,1,65.857,80.62a12.113,12.113,0,0,1,14.952-2.272l42.927,24.793a193.131,193.131,0,0,1,61.249-35.413V18.149a12.108,12.108,0,0,1,9.453-11.813,252,252,0,0,1,110.1-.007,12.121,12.121,0,0,1,9.479,11.817V67.727a193.1,193.1,0,0,1,61.249,35.413l42.927-24.793a12.113,12.113,0,0,1,14.952,2.272,249.634,249.634,0,0,1,55.13,95.349,12.122,12.122,0,0,1-5.5,14.1l-42.961,24.8A195.045,195.045,0,0,1,439.81,285.629Z"/>
</svg>
```

#### Sprite sheet

FLO-SCSS svg icons are displayed in a grid list generated using `svg-sprite`, is a module that takes a bunch of SVG files, optimizes them and puts them all into one svg sprite which is located here,` _includes/icon-sprite.svg`, in this app. with their names referenced in `site/_data/icons.yml.` The "All icons" section of icons.md loops through these names to presents the full svg list.

To add or remove an svg, update the name in the `icons.yml` and run `npm run process-svg`

Currently we are not using a sprite sheet in the web app.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

## Copyright and license

Code and documentation copyright 2011-2020 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
