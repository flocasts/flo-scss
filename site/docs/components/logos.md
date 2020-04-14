---
layout: docs
title: Logos
description: FloSports Brands and Co-Brands
group: components
toc: true
---
<style type="text/css" rel="stylesheet">
.bjflo-svg-logo-graphic { color: #ff140f; }
</style>


## SVG 101
All logos are SVG files Scalable Vector Graphics. Logos inherit width and height from the parent container, so the parent container can set its dimensions.

## Add Logo
Logos are stored on AWS library, and accessed with the API.
- Step 1
- step 2
- step 3

### Sizing
Icons inherit width and height from the parent container, so the parent container can set its dimensions.  

### Color
Logos can have one color or variant colors. Descriptive classes can change the icon(hawk) or the brand name colors. Setting `fill=currentColor` in the SVG allows the SVG's colors to be controlled by CSS and added classes. 

#### One Color
Below you can see the SVG's color changing by adding `.color-class` to the svg or parent tag.

{% capture example %}
<div class="row row-cols-4 color-ignite">
  <svg class="icon-lg">
    <use xlink:href="#flo_hawk" />
  </svg>
  <svg class="icon-lg color-500">
    <use xlink:href="#flo_hawk" />
  </svg>
  <svg class="icon-lg color-800">
    <use xlink:href="#flo_hawk" />
  </svg>
</div>
{% endcapture %}
{% include example.html content=example %}


#### Variant Colors
Use a class to color teh hawk or text. In the Examples below `class="flo-svg-logo-graphic"` is targeted to color the hawk red independently of the logo graphic.

- `class="flo-svg-logo-title"` will change the color of the text
- `class="flo-svg-logo-graphic"` will change the color of the icon(hawk)

## FloSports 
Corporate Logo
<div class="row mb-3">
  
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flosports-hawk" />
    </svg>
    <p class="caption mt-1">flosports-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flosports-hawk" />
    </svg>
    <p class="caption mt-1">flosports-hawk</p>
  </div>
</div>

<div class="row mb-3">

</div>


## Brands
FloSports brand logos for each vertical.
#### Main Logo and use cases

#### Dark logo

#### Main logo/alternate

#### Dark logo/alternate

#### Hawks, used on live player

## Co-brands
Other brands part of FloSports

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


<div class="row bg-black color-100 mb-3">
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

#### Variants

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


### Dirt on Dirt
Co-brand not part of design system. https://www.dirtondirt.com/
