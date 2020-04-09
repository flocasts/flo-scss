---
layout: docs
title: Icons
description: Use SVG Icons in HTML
group: components
toc: true
---

TODO:
 - explain how svgs should not have set width or height so the parent container can set its dimensions
 - explain how it shold not have inline styles or colors, so colors can be changed through CSS and added classes

#### Utility Classes for Icons

### Size

Apply `.icon`, `.icon-sm`, and `.icon-lg` to size icons

{% capture example %}
<div class="row row-cols-3 p-1">
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


### Color

Add `.text-$color` classes to apply colors to icons and select logos

{% capture example %}
<svg class="icon">
  <use xlink:href="#close_circle" />
</svg>
<svg class="icon text-primary">
  <use xlink:href="#close_circle" />
</svg>
<svg class="icon text-primary bg-black">
  <use xlink:href="#close_circle" />
</svg>
{% endcapture %}
{% include example.html content=example %}

#### Other Brand Colors

The following brand-specific color classes are provided:

{% capture example %}
<div class="row">
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-amex">
      <use xlink:href="#cc_amex" />
    </svg>
    <p class="caption mt-1">class="color-amex"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-android">
      <use xlink:href="#android_logo_stacked" />
    </svg>
    <p class="caption mt-1">class="color-android"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-apple">
      <use xlink:href="#apple_logo" />
    </svg>
    <p class="caption mt-1">class="color-apple"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-discover">
      <use xlink:href="#cc_discover" />
    </svg>
    <p class="caption mt-1">class="color-discover"</p>
  </div>
</div>
<div class="row">
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-visa">
      <use xlink:href="#cc_visa" />
    </svg>
    <p class="caption mt-1">class="color-visa"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-fire-tv">
      <use xlink:href="#fire_tv_logo" />
    </svg>
    <p class="caption mt-1">class="color-fire-tv"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-outlook">
      <use xlink:href="#outlook_logo" />
    </svg>
    <p class="caption mt-1">class="color-outlook"</p>
  </div>
  <div class="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon color-roku">
      <use xlink:href="#roku_logo" />
    </svg>
    <p class="caption mt-1">class="color-roku"</p>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Transform

Transform icons with [transform utilities](/docs/utilities/transform)

{% capture example %}
<svg class="rotate-180">
  <use xlink:href="#right_arrow" />
</svg>
{% endcapture %}
{% include example.html content=example %}

## All Icons

{% capture example %}
<div class="row">
{% for icon in site.data.icons %}
<div class="col-6 col-md-2 d-flex flex-column align-items-center justify-content-center">
  <svg class="icon">
    <use xlink:href="#{{ icon.name }}" />
  </svg>
  <p class="caption">{{ icon.name }}</p>
</div>
{% endfor %}
</div>
<div class="row text-white bg-black">
{% for icon in site.data.icons %}
<div class="col-6 col-md-2 d-flex flex-column align-items-center justify-content-center">
  <svg class="icon">
    <use xlink:href="#{{ icon.name }}" />
  </svg>
  <p class="caption">{{ icon.name }}</p>
</div>
{% endfor %}
</div>

{% endcapture %}
{% include example.html content=example %}
