---
layout: docs
title: Skeletons
description: Empty Elements
group: components
---
When an element has the `.skeleton` class applied, it will by default have a skeleton animation attached during its `:empty` state. This component does not exist in Bootstrap by default. 

Please refer to [these docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) for more info on the `:empty` pseudo-class.

Skeletons are applied to all `<img>` elements by default, because these register as "empty" since images have no children.

In addition, there are also skeleton elements with predetermined heights and widths for h1's (using `.h1-skeleton`) and descriptions (using `.p-skeleton`). We can add more as needed.

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

### Default skeleton for images
All images get skeletons by default, because these register as "empty" since images have no children. When building out certain skeleton images, you can give them a set height/width, or just allow them to fill the parent.
{% capture example %}
<img style="width:150px; height:150px;"/>
{% endcapture %}
{% include example.html content=example %}

You can also "opt out" of an `img` having a skeleton using the `.no-skeleton` class.

{% capture example %}
<img class="no-skeleton" style="width:150px; height:150px;"/>
{% endcapture %}
{% include example.html content=example %}

### Using the .skeleton class
Animation will be applied to any empty element with the `.skeleton` class.
{% capture example %}
<div class="skeleton my-1" style="width:100%; height:30px;"></div>
<div class="skeleton my-1" style="width:100%; height:30px;"></div>
{% endcapture %}
{% include example.html content=example %}

For example, `.skeleton` could be used to imitate a desktop leaderboard ad.
{% capture example %}
<div class="w-100 bg-800 justify-content-center align-items-center d-none d-lg-flex">
  <div class="leaderboard-center skeleton my-3" style="height: 90px; width: 728px;"></div>
</div>
{% endcapture %}
{% include example.html content=example %}
