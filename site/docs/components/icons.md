---
layout: docs
title: Icons
description: Use SVG Icons in HTML
group: components
toc: true
---

## Icons

### Size

Apply `.icon`, `.icon-sm`, and `.icon-lg` to size icons

{% capture example %}
<div class="row row-cols-3">
  <svg class="icon-sm">
    <use xlink:href="#flo_hawk" />
  </svg>
  <svg class="icon">
    <use xlink:href="#flo_hawk" />
  </svg>
  <svg class="icon-lg">
    <use xlink:href="#flo_hawk" />
  </svg>
</div>
{% endcapture %}
{% include example.html content=example %}


### Color

add `.text-$color` classes to apply colors to icons and select logos

{% capture example %}
<svg>
  <use xlink:href="#flosports_logo" />
</svg>
<svg class="text-primary">
  <use xlink:href="#flosports_logo" />
</svg>
<svg class="text-primary bg-black">
  <use xlink:href="#flosports_logo" />
</svg>
{% endcapture %}
{% include example.html content=example %}

#### Brand Colors

The following brand-specific color classes are provided

{% capture example %}
<svg class="icon color-amex">
  <use xlink:href="#cc_amex" />
</svg>
<svg class="icon color-android">
  <use xlink:href="#android_logo_stacked" />
</svg>
<svg class="icon color-apple">
  <use xlink:href="#apple_logo" />
</svg>
<svg class="icon color-discover">
  <use xlink:href="#cc_discover" />
</svg>
<svg class="icon color-visa">
  <use xlink:href="#cc_visa" />
</svg>
<svg class="icon color-fire-tv">
  <use xlink:href="#fire-tv" />
</svg>
<svg class="icon color-outlook">
  <use xlink:href="#outlook_logo" />
</svg>
<svg class="icon color-roku">
  <use xlink:href="#roku_logo" />
</svg>
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
