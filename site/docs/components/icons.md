---
layout: docs
title: Icons
description: Use SVG Icons in HTML
group: components
toc: true
---

We use svgs in the design system and not a font library to display icons.  Add a SVG's icon by calling it [INSERT STEPS ].  

`<use xlink:href="#close_circle" />`  link to the sprite page `xlink:href=` then identify the svg name `#close_circle` 

  Complete list of SVG icons and names in the [Icons](#icons).

Look here for details on [Brand Logos]({{ site.baseurl }}/docs/components/logos) or [Badges]({{ site.baseurl }}/docs/components/badge).
 
## Manipulating SVG's

### Sizing
Icons inherit width and height from the parent container, so the parent container can set its dimensions.  

#### Modify Class
Apply `.icon`, `.icon-sm`, and `.icon-lg` to size icons

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


### Color

Setting `fill=currentColor` in the SVG allows the SVG's colors to be controlled by CSS and added classes. Below you can see the SVG's color changing by adding `.color- classes` to the svg tag.

{% capture example %}
<div class="row row-cols-4">
  <svg class="icon color-ignite">
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


### Transform

Transform icons with [transform utilities](/docs/utilities/transform)

{% capture example %}
<div class="row row-cols-4">
  <svg class="icon-sm rotate-180">
    <use xlink:href="#bell_regular" />
  </svg>
    <svg class="icon-sm rotate-45">
    <use xlink:href="#bell_regular" />
  </svg>
    <svg class="icon-sm rotate-135">
    <use xlink:href="#bell_regular" />
  </svg>
</div>
{% endcapture %}
{% include example.html content=example %}

## Icons
A complete list of all the SVG icons in the system.

{% capture example %}
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
{% endcapture %}
{% include example.html content=example %}### Brands in colors

The following brand-specific color classes are provided:

{% capture example %}

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
    <svg class="icon color-android h-50">
      <use xlink:href="#android_logo" />
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

{% endcapture %}
{% include example.html content=example %}
