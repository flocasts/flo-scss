---
layout: docs
title: Skeleton
description: Empty Elements
group: components
---
When an element has the `.skeleton` class applied, it will by default have a skeleton animation attached during its `:empty` state. This component does not exist in Bootstrap by default. 

Please refer to [these docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) for more info on the `:empty` pseudo-class.

Skeletons are applied to all `<img>` elements by default, because these register as "empty" while they are loading.

In addition, there are also skeleton elements with predetermined heights and widths for h1's (using `.h1-skeleton`), descriptions (using `.p-skeleton`), and hero images (using `.hero-skeleton`). We can add more as needed.

You could make a skeleton for any element using the `.skeleton` class (to get the animation) and then manually declaring the height and width.

## Examples

### H1 Skeleton
{% capture example %}
<h1 class="h1-skeleton"></h1>
{% endcapture %}
{% include example.html content=example %}

### Description Skeleton
{% capture example %}
<div class="col-12 col-lg-8">
  <p class="p-skeleton"></p>
</div>
{% endcapture %}
{% include example.html content=example %}

### Hero Image Skeleton
{% capture example %}
<div class="col-12 col-lg-8">
  <img class="hero-skeleton"/>
</div>
{% endcapture %}
{% include example.html content=example %}

### Default skeleton for images
{% capture example %}
<img style="width:150px; height:150px;" class="skeleton"/>
{% endcapture %}
{% include example.html content=example %}

Animation will be applied to any empty element with the .skeleton class
{% capture example %}
<div class="skeleton my-1" style="width:100%; height:30px;"></div>
<div class="skeleton my-1" style="width:100%; height:30px;"></div>
{% endcapture %}
{% include example.html content=example %}

---

**Note:** 
