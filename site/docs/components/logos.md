---
layout: docs
title: Logos
description: SVG Logos
group: components
toc: true
---

#### How to use these svgs and change their colors

### FloSports

#### Color

TODO: either add `.text-$color` classes to apply colors to logos, or use custom class names to define these four variants.

#### Main Logo and use cases

#### Dark logo

#### Main logo/alternate

#### Dark logo/alternate

#### Hawks, used on live player

### Varsity
Varsity has one color and multiple color svg options. 

**One color SVGs**
* `varsity_stacked.svg`
* `varsity_white_logo.svg`

**Multiple Color SVGs**
These have additional class to control color independently.
- `varsity_stacked_color.svg`
   - change the V color with `class="varsity_stacked_v"`
   - change teh pill color with `class="varsity_stacked_pill"`
   - change the text color with `class="varsity_stacked_pill_text"`
- `varsity_logo`
   - change the V color with `class="varsity_logo_v"`
   - change the text color with `class="varsity_logo_text"`
- `varsity_logo_pill`
   - change the V color with `class="varsity_logo_pill_v`
   - change the text with `class="varsity_logo_pill_text"`
   - change the pill with `class="varsity_logo_pill"`

{% capture example %}

<div class="row bg-black color-100">
  <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_stacked" />
    </svg>
    <p class="caption mt-1">varsity_stacked</p>
  </div>
   <div class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_white_logo" />
    </svg>
    <p class="caption mt-1">varsity_white_logo</p>
  </div>
   <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_stacked_color" />
    </svg>
    <p class="caption mt-1">varsity_stacked_color</p>
  </div>
    <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_logo" />
    </svg>
    <p class="caption mt-1">varsity_logo</p>
  </div>
  <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_logo_pill" />
    </svg>
    <p class="caption mt-1">varsity_logo_pill</p>
  </div>
</div>

{% endcapture %}
{% include example.html content=example %}

#### Variants

{% capture example %}
<div class="row">
  <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_stacked" />
    </svg>
    <p class="caption mt-1">varsity_stacked</p>
  </div>
   <div class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_white_logo" />
    </svg>
    <p class="caption mt-1">varsity_white_logo</p>
  </div>
   <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_stacked_color" />
    </svg>
    <p class="caption mt-1">varsity_stacked_color</p>
  </div>
    <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_logo" />
    </svg>
    <p class="caption mt-1">varsity_logo</p>
  </div>
  <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#varsity_logo_pill" />
    </svg>
    <p class="caption mt-1">varsity_logo_pill</p>
  </div>
</div>

{% endcapture %}
{% include example.html content=example %}

#### Logo for live player
A one color white logo is used on the Live player.
<div class="row color-100">
   <div class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-black px-5">
    <svg>
      <use xlink:href="#varsity_white_logo" />
    </svg>
    <p class="caption mt-1">varsity_white_logo</p>
  </div>




### MileSplit - are we still using?
