---
layout: docs
title: Logos
description: FloSports Brands and Co-Brands
group: components
toc: true
---

<style type="text/css" rel="stylesheet">
 .bjflo-svg-logo-graphic, .bkflo-svg-logo-graphic, .blflo-svg-logo-graphic,.bmflo-svg-logo-graphic, .bnflo-svg-logo-graphic, .boflo-svg-logo-graphic, .bpflo-svg-logo-graphic, .bqflo-svg-logo-graphic, .brflo-svg-logo-graphic, .bsflo-svg-logo-graphic, .btflo-svg-logo-graphic, .bqflo-svg-logo-graphic, .brflo-svg-logo-graphic, .bsflo-svg-logo-graphic, .btflo-svg-logo-graphic, .buflo-svg-logo-graphic, .bvflo-svg-logo-graphic, .bwflo-svg-logo-graphic, .bxflo-svg-logo-graphic, .byflo-svg-logo-graphic, .bzflo-svg-logo-graphic, .caflo-svg-logo-graphic, .cbflo-svg-logo-graphic, .ccflo-svg-logo-graphic, .cdflo-svg-logo-graphic, 
 .ceflo-svg-logo-graphic, .cfflo-svg-logo-graphic, .cgflo-svg-logo-graphic, .chflo-svg-logo-graphic { color: #ff140f; }
    /* .cc-hawk .bkflo-svg-logo-graphic {color:white} */ 
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
    <svg id="cc-hawk">
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

## Brands

<div class="row mb-3">
<!-- baseball bj -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg class="cc-hawk">
      <use xlink:href="#flobaseball-hawk" />
    </svg>
    <p class="caption mt-1">fflobaseball-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flobaseball-hawk" />
    </svg>
    <p class="caption mt-1">flobaseball-hawk</p>
  </div>
<!-- bikes bk-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flobikes-hawk" />
    </svg>
    <p class="caption mt-1">flobikes-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flobikes-hawk" />
    </svg>
    <p class="caption mt-1">flobikes-hawk</p>
  </div>
<!--bowling bl-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flobowling-hawk" />
    </svg>
    <p class="caption mt-1">flobowling-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flobowling-hawk" />
    </svg>
    <p class="caption mt-1">flobowling-hawk</p>
  </div>
<!-- cheer bm -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flocheer-hawk" />
    </svg>
    <p class="caption mt-1">flocheer-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flocheer-hawk" />
    </svg>
    <p class="caption mt-1">flocheer-hawk</p>
  </div>
<!-- combat bn -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flocombat-hawk" />
    </svg>
    <p class="caption mt-1">flocombat-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flocombat-hawk" />
    </svg>
    <p class="caption mt-1">flocombat-hawk</p>
  </div>
  <!-- dance bo -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flodance-hawk" />
    </svg>
    <p class="caption mt-1">flodance-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flodance-hawk" />
    </svg>
    <p class="caption mt-1">flodance-hawk</p>
  </div>
<!-- elite bp-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#floelite-hawk" />
    </svg>
    <p class="caption mt-1">floelite-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#floelite-hawk" />
    </svg>
    <p class="caption mt-1">floelite-hawk</p>
  </div>
<!-- fc bq -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flofc-hawk" />
    </svg>
    <p class="caption mt-1">flofc-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flofc-hawk" />
    </svg>
    <p class="caption mt-1">flofc-hawk</p>
  </div>
<!-- football br-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flofootball-hawk" />
    </svg>
    <p class="caption mt-1">flofootball-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flofootball-hawk" />
    </svg>
    <p class="caption mt-1">flofootball-hawk</p>
  </div>
  <!-- grappling bs-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flograppling-hawk" />
    </svg>
    <p class="caption mt-1">flograppling-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flograppling-hawk" />
    </svg>
    <p class="caption mt-1">flograppling-hawk</p>
  </div>
<!-- gymnastics bt-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flogymnastics-hawk" />
    </svg>
    <p class="caption mt-1">flogymnastics-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flogymnastics-hawk" />
    </svg>
    <p class="caption mt-1">flogymnastics-hawk</p>
  </div>
<!-- hockey bu -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flohockey-hawk" />
    </svg>
    <p class="caption mt-1">flohockey-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flohockey-hawk" />
    </svg>
    <p class="caption mt-1">flohockey-hawk</p>
  </div>
<!-- hoops bv -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flohoops-hawk" />
    </svg>
    <p class="caption mt-1">flohoops-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flohoops-hawk" />
    </svg>
    <p class="caption mt-1">flohoops-hawk</p>
  </div>
<!-- live bw -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flolive-hawk" />
    </svg>
    <p class="caption mt-1">flolive-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flolive-hawk" />
    </svg>
    <p class="caption mt-1">flolive-hawk</p>
  </div>
<!-- marching bx -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flomarching-hawk" />
    </svg>
    <p class="caption mt-1">flomarching-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flomarching-hawk" />
    </svg>
    <p class="caption mt-1">flomarching-hawk</p>
  </div>
<!-- racing by -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#floracing-hawk" />
    </svg>
    <p class="caption mt-1">floracing-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#floracing-hawk" />
    </svg>
    <p class="caption mt-1">floracing-hawk</p>
  </div>
  <!-- rodeo bz -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#florodeo-hawk" />
    </svg>
    <p class="caption mt-1">florodeo-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#florodeo-hawk" />
    </svg>
    <p class="caption mt-1">florodeo-hawk</p>
  </div>
  <!-- softball ca -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flosoftball-hawk" />
    </svg>
    <p class="caption mt-1">flosoftball-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flosoftball-hawk" />
    </svg>
    <p class="caption mt-1">flosoftball-hawk</p>
  </div>
<!-- swimming cb-->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#floswimming-hawk" />
    </svg>
    <p class="caption mt-1">floswimming-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#floswimming-hawk" />
    </svg>
    <p class="caption mt-1">floswimming-hawk</p>
  </div>
  <!--track cc  -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flotrack-hawk" />
    </svg>
    <p class="caption mt-1">flotrack-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flotrack-hawk" />
    </svg>
    <p class="caption mt-1">flotrack-hawk</p>
  </div>
<!-- voice cb -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flovoice-hawk" />
    </svg>
    <p class="caption mt-1">flovoice-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flovoice-hawk" />
    </svg>
    <p class="caption mt-1">flovoice-hawk</p>
  </div>
<!-- volleyball ce -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flovolleyball-hawk" />
    </svg>
    <p class="caption mt-1">flovolleyball-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flovolleyball-hawk" />
    </svg>
    <p class="caption mt-1">flovolleyball-hawk</p>
  </div>
<!-- wrestling cf -->
  <div class="col-md-6 d-flex flex-column bg-black color-100 align-items-center justify-content-center">
    <svg>
      <use xlink:href="#flowrestling-hawk" />
    </svg>
    <p class="caption mt-1">flowrestling-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="color-900">
      <use xlink:href="#flowrestling-hawk" />
    </svg>
    <p class="caption mt-1">flowrestling-hawk</p>
  </div>

 </div> <!-- end row -->


#### Live player
A one color white logo is used on the Live player.

<div class="row color-100">
   <div class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-black px-5">
    <svg>
      <use xlink:href="#flo_hawk" />
    </svg>
    <p class="caption mt-1">flo_hawk</p>
  </div>
 </div>


## Co-brands
Other brands part of FloSports network


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


#### Live player
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
