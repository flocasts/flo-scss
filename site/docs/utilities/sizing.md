---
layout: docs
title: Sizing
description: Easily make an element as wide or as tall with our width and height utilities.
group: utilities
toc: true
---

## Relative to the parent

Width and height utilities are generated from the `$sizes` Sass map in `_variables.scss`. Includes support for `10%`, `25%`, `33%`, `50%`, `66%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different utilities here.

    10: 10%,
    25: 25%,
    33: 33%,
    50: 50%,
    66: 66%,
    75: 75%,
    100: 100%,
    auto: auto

{% capture example %}
<div class="w-10 p-3" style="background-color: #eee;">Width 10%</div>
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-33 p-3" style="background-color: #eee;">Width 33%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-66 p-3" style="background-color: #eee;">Width 66%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
{% endcapture %}
{% include example.html content=example %}

Use responsive width classes to adjust widths to various breakpoint with  `.w-$breakpoint-$size`

{% capture example %}
<div class="w-lg-10 w-md-100 p-3 bg-300">w-lg 10% / w-md 100%</div>
<div class="w-lg-25 w-md-75 p-3 bg-300">w-lg 25% / w-md 75%</div>
<div class="w-lg-33 w-md-66 p-3 bg-300 bg-300">w-lg 33% / w-md 66%</div>
<div class="w-lg-50 w-md-50 p-3 bg-300">w-lg 50% / w-md 50%</div>
<div class="w-lg-66 w-md-33 p-3 bg-300">w-lg 66% / w-md 33%</div>
<div class="w-lg-75 w-md-25 p-3 bg-300">w-lg 75% / w-md 25%</div>
<div class="w-lg-100 w-md-10 p-3 bg-300">w-lg 100% / w-md 10%</div>
<div class="w-lg-auto w-md-auto p-3 bg-300">Width auto</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="h-10 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 10%</div>
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
  <div class="h-33 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 33%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
  <div class="h-66 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 66%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can also use `max-width: 100%;` and `max-height: 100%;` utilities as needed.

{% capture example %}
{% include icons/placeholder.svg width="100%" height="100" class="mw-100" text="Max-width 100%" %}
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Relative to the viewport

You can also use utilities to set the width and height relative to the viewport.

{% highlight html %}
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
{% endhighlight %}
