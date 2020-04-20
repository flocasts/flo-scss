---
layout: docs
title: Logos
description: FloSports Brands and Co-Brands
group: components
toc: true
---

## Modifiers
### Sizing
Logos inherit width and height from the parent container, so the parent container can set the SVG dimensions.

{% capture example %}
<div class="row row-cols-6 align-items-center">  <!-- reference size in parent -->
  <svg>
    <use xlink:href="#flofc-hawk" />
  </svg>
</div>

<div class="row row-cols-12 align-items-center"> 
  <svg class="h-50">  <!-- reference size in parent -->
    <use xlink:href="#flofc-hawk" />
  </svg>
</div>

<div class="row row-cols-2 align-items-center text-800"> <!-- reference size in parent -->
  <svg>
    <use xlink:href="#flofc-hawk" />
  </svg>
</div> 


{% endcapture %}
{% include example.html content=example %}


## FloSports 
There are four color variations of the corporate logos.

<div class="row mb-3">
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center pt-3 mb-3">
    <svg class="text-900 icon">
      <use xlink:href="#flosports-hawk" />
    </svg>
    <p class="caption mt-1">flosports-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column bg-black text-100 align-items-center justify-content-center pt-3 mb-3">
    <svg class="text-100 icon">
      <use xlink:href="#flosports-hawk" />
    </svg>
    <p class="caption mt-1">flosports-hawk</p>
  </div>
  <div class="alternate-logo col-md-6 d-flex flex-column bg-black text-100 align-items-center justify-content-center pt-3 mb-3">
    <svg class="text-100 icon">
      <use xlink:href="#flosports-hawk" />
    </svg>
    <p class="caption mt-1">flosports-hawk</p>
  </div>
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center pt-3 mb-3">
    <svg class="icon text-900">
      <use xlink:href="#flosports-hawk" />
    </svg>
    <p class="caption mt-1">flosports-hawk</p>
  </div>
</div>

#### Multiple Colors
Targeted class are available to color the hawk or text independent of each other. In the FloSports logo below `class="flo-svg-logo-graphic"` is targeted to color the hawk red independently of the logo title.

- `class="flo-svg-logo-title"` will change the color of the text
- `class="flo-svg-logo-graphic"` will change the color of the icon(hawk)

## Brands
FloSports network of brands (verticals).

<div class="row mb-3 text-500">
<!-- baseball bj -->
  <div class="col-md-6  d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flobaseball-hawk" />
    </svg>
    <p class="caption mt-1">flobaseball-hawk</p>
  </div>
<!-- bikes bk-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flobikes-hawk" />
    </svg>
    <p class="caption mt-1">flobikes-hawk</p>
  </div>
<!--bowling bl-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flobowling-hawk" />
    </svg>
    <p class="caption mt-1">flobowling-hawk</p>
  </div>
<!-- cheer bm -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flocheer-hawk" />
    </svg>
    <p class="caption mt-1">flocheer-hawk</p>
  </div>
<!-- combat bn -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flocombat-hawk" />
    </svg>
    <p class="caption mt-1">flocombat-hawk</p>
  </div>
  <!-- dance bo -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flodance-hawk" />
    </svg>
    <p class="caption mt-1">flodance-hawk</p>
  </div>
<!-- elite bp-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#floelite-hawk" />
    </svg>
    <p class="caption mt-1">floelite-hawk</p>
  </div>
<!-- b bq -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flofc-hawk" />
    </svg>
    <p class="caption mt-1">flofc-hawk</p>
  </div>
<!-- football br-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flofootball-hawk" />
    </svg>
    <p class="caption mt-1">flofootball-hawk</p>
  </div>
  <!-- grappling bs-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flograppling-hawk" />
    </svg>
    <p class="caption mt-1">flograppling-hawk</p>
  </div>
<!-- gymnastics bt-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flogymnastics-hawk" />
    </svg>
    <p class="caption mt-1">flogymnastics-hawk</p>
  </div>
<!-- hockey bu -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flohockey-hawk" />
    </svg>
    <p class="caption mt-1">flohockey-hawk</p>
  </div>
<!-- hoops bv -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flohoops-hawk" />
    </svg>
    <p class="caption mt-1">flohoops-hawk</p>
  </div>
<!-- live bw -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flolive-hawk" />
    </svg>
    <p class="caption mt-1">flolive-hawk</p>
  </div>
<!-- marching bx -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flomarching-hawk" />
    </svg>
    <p class="caption mt-1">flomarching-hawk</p>
  </div>
<!-- racing by -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#floracing-hawk" />
    </svg>
    <p class="caption mt-1">floracing-hawk</p>
  </div>
  <!-- rodeo bz -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#florodeo-hawk" />
    </svg>
    <p class="caption mt-1">florodeo-hawk</p>
  </div>
  <!-- softball ca -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flosoftball-hawk" />
    </svg>
    <p class="caption mt-1">flosoftball-hawk</p>
  </div>
<!-- swimming cb-->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#floswimming-hawk" />
    </svg>
    <p class="caption mt-1">floswimming-hawk</p>
  </div>
  <!--track cc  -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flotrack-hawk" />
    </svg>
    <p class="caption mt-1">flotrack-hawk</p>
  </div>
<!-- voice cb -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flovoice-hawk" />
    </svg>
    <p class="caption mt-1">flovoice-hawk</p>
  </div>
<!-- volleyball ce -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flovolleyball-hawk" />
    </svg>
    <p class="caption mt-1">flovolleyball-hawk</p>
  </div>
<!-- wrestling cf -->
  <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
    <svg class="icon-sm">
      <use xlink:href="#flowrestling-hawk" />
    </svg>
    <p class="caption mt-1">flowrestling-hawk</p>
  </div>
 </div> <!-- end row -->


#### Live player
A one color white logo is used on the Live player.

<div class="row text-100">
   <div class="col-md-6 d-flex flex-column align-items-center justify-content-center bg-black px-5">
    <svg>
      <use xlink:href="#flo_hawk" />
    </svg>
    <p class="caption mt-1">flo_hawk</p>
  </div>
 </div>


## Co-brands
Other brands part of FloSports network


### Varsity
Varsity has one color and multiple color SVG options. 

**One color SVG**
* `varsity_stacked.svg`
* `varsity_white_logo.svg`

**Multiple Color SVG**
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


<div class="row bg-black text-100 mb-3">
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

<div class="row text-100">
   <div class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-black px-5">
    <svg>
      <use xlink:href="#varsity_white_logo" />
    </svg>
    <p class="caption mt-1">varsity_white_logo</p>
  </div>
</div>


### MileSplit
<div class="row">
   <div class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
    <svg>
      <use xlink:href="#milesplit" />
    </svg>
    <p class="caption mt-1">milesplit</p>
  </div>
 </div>

### Dirt on Dirt

Co-brand not part of design system. [DirtOnDirt.com](https://www.dirtondirt.com/ "Dirt on Dirt")
