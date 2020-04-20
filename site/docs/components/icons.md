---
layout: docs
title: Icons
description: SVG Icons in HTML
group: components
toc: true
---

This page contains a list of all SVG icons available and utility classes to support them. Not included are  [Brand Logos]({{ site.baseurl }}/docs/components/logos) or [Badges]({{ site.baseurl }}/docs/components/badge).

## SVG

Each icon in the Flo-SCSS system is a formatted SVG with a `viewBox="0 0 500 500"`, a path fill="currentColor" and a descriptive class name.

The SVG is created on a 500px x 500px art board. SVG were created in a design program such as Adobe Illustrator or Sketch and cleaned up with an [online tool](https://jakearchibald.github.io/svgomg/). When using SVG, make sure there are no extra `g` `tags`, `masks`, or `nested paths` present as these uncessarily increase file size.

Format Guidelines
* `fill=currentColor` is set
* `viewBox="0 0 500 500"` is present
* no inline width, height, or colors
* use of classes to reference the SVG
* the svg is flat with only a path tag. No `g` `tags`, `masks`, or `nested paths`

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="icon-cog">
<path fill="currentColor" d="M346.382,250.246A96.882,96.882,0,1,0,249.5,347.128,96.992,96.992,0,0,0,346.382,250.246Zm93.428,35.383,42.96,24.8a12.121,12.121,0,0,1,5.5,14.1,249.617,249.617,0,0,1-55.13,95.348,12.113,12.113,0,0,1-14.952,2.273l-42.927-24.794a193.113,193.113,0,0,1-61.249,35.413v49.579a12.1,12.1,0,0,1-9.453,11.812,251.979,251.979,0,0,1-110.1.008,12.123,12.123,0,0,1-9.479-11.818V432.764a193.083,193.083,0,0,1-61.249-35.413L80.808,422.145a12.113,12.113,0,0,1-14.952-2.273,249.63,249.63,0,0,1-55.13-95.348,12.122,12.122,0,0,1,5.5-14.1l42.961-24.8a195.04,195.04,0,0,1,0-70.765l-42.96-24.8a12.121,12.121,0,0,1-5.5-14.1A249.621,249.621,0,0,1,65.857,80.62a12.113,12.113,0,0,1,14.952-2.272l42.927,24.793a193.131,193.131,0,0,1,61.249-35.413V18.149a12.108,12.108,0,0,1,9.453-11.813,252,252,0,0,1,110.1-.007,12.121,12.121,0,0,1,9.479,11.817V67.727a193.1,193.1,0,0,1,61.249,35.413l42.927-24.793a12.113,12.113,0,0,1,14.952,2.272,249.634,249.634,0,0,1,55.13,95.349,12.122,12.122,0,0,1-5.5,14.1l-42.961,24.8A195.045,195.045,0,0,1,439.81,285.629Z"/>
</svg>
```

## Manipulating SVG's
<p class="text-ignite"><strong>Note:</strong> These examples below reference Flo-SCSS's SVG sprite sheet and may not reflect how your application references SVG. The names of the SVG icons should remain the same.</p>



#### Modify Class
Apply `.icon`, `.icon-sm`, and `.icon-lg` to size icons directly.

{% capture example %}
<div class="row row-cols-4 align-items-center">
  <svg class="icon-sm">
    <use xlink:href="#close_circle" />
  </svg>
  <svg class="icon">
    <use xlink:href="#close_circle" />
  </svg>
  <svg class="icon-lg">
    <use xlink:href="#close_circle" />
  </svg>
</div>
{% endcapture %}
{% include example.html content=example %}

If SVG are added to the site dynamically, icons can inherit width and height from their parent container.

{% capture example %}
<div class="row row-cols-4 align-items-center">
  <svg>
    <use xlink:href="#close_circle" />
  </svg>
  <svg>
    <use xlink:href="#close_circle" />
  </svg>
  <svg>
    <use xlink:href="#close_circle" />
  </svg>
</div>
{% endcapture %}

### Color

Setting `fill=currentColor` in the SVG allows the SVG colors to be controlled by CSS. Below you can see the SVG color changing by adding `.color-class` to the SVG or parent tag.

{% capture example %}
<div class="row row-cols-4 color-ignite">
  <svg class="icon">
    <use xlink:href="#close_circle" />
  </svg>
  <svg class="icon color-500">
    <use xlink:href="#close_circle" />
  </svg>
  <svg class="bg-black icon color-100">
    <use xlink:href="#close_circle" />
  </svg>
</div>
{% endcapture %}
{% include example.html content=example %}

### Non-FLO Brand Colors 
The following brand-specific color classes are provided:

<div class="row">
  <div class="col-3 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-amex h-50">
      <use xlink:href="#cc_amex" />
    </svg>
    <p class="caption mt-1">class="color-amex"</p>
  </div>
  <div class="col-3 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-android h-50">
      <use xlink:href="#android_logo_stacked" />
    </svg>
    <p class="caption mt-1">class="color-android"</p>
  </div>
  <div class="col-3 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-apple h-50">
      <use xlink:href="#apple_logo" />
    </svg>
    <p class="caption mt-1">class="color-apple"</p>
  </div>
  <div class="col-3 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-discover h-50">
      <use xlink:href="#cc_discover" />
    </svg>
    <p class="caption mt-1">class="color-discover"</p>
  </div>
</div>
<div class="row">
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-visa h-50">
      <use xlink:href="#cc_visa" />
    </svg>
    <p class="caption mt-1">class="color-visa"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-fire-tv h-50">
      <use xlink:href="#fire_tv_logo" />
    </svg>
    <p class="caption mt-1">class="color-fire-tv"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-outlook h-50">
      <use xlink:href="#outlook_logo" />
    </svg>
    <p class="caption mt-1">class="color-outlook"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-roku h-50">
      <use xlink:href="#roku_logo" />
    </svg>
    <p class="caption mt-1">class="color-roku"</p>
  </div>
</div>

### Transform

Transform icons with [transform utilities](/docs/utilities/transform)

{% capture example %}
<div class="row row-cols-4">
  <svg class="icon-md rotate-180">
    <use xlink:href="#bell_regular" />
  </svg>
    <svg class="icon-md rotate-45">
    <use xlink:href="#bell_regular" />
  </svg>
    <svg class="icon-md rotate-135">
    <use xlink:href="#bell_regular" />
  </svg>
</div>
{% endcapture %}
{% include example.html content=example %}

## Icon List
A complete list of all the SVG icons in the system.

<div class="row">
{% for icon in site.data.icons %}
<div class="col-4 col-md-4 d-flex flex-column align-items-center justify-content-center color-500">
  <svg class="icon-lg">
    <use xlink:href="#{{ icon.name }}" />
  </svg>
  <p class="caption">{{ icon.name }}</p>
</div>
{% endfor %}
</div>



#### Adding an SVG to the Flo-SCSS Sprite Sheet

FLO-SCSS svg icons are displayed in a grid list generated using `svg-sprite`, is a module that takes a bunch of SVG files, optimizes them and puts them all into one svg sprite which is located here,` _includes/icon-sprite.svg`, in this app. with their names referenced in `site/_data/icons.yml.` The "All icons" section of icons.md loops through these names to presents the full svg list.

To add or remove an svg, update the name in the `icons.yml` and run `npm run process-svg`