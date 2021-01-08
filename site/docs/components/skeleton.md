---
layout: docs
title: Skeleton
description: Empty Elements
group: components
---
When a element has the class .skeleton applied to it it will by default have an animation attached to it during its :empty state. This component does not exist in bootstrap by default. 

empty psedo-class docs =>  https://developer.mozilla.org/en-US/docs/Web/CSS/:empty

There are existing height and widths for Header elements. h1,h2,h3,h4,h5 have predetermined heights and widths for empty states.
Can add more base elements to this such as img but for now having it opt in by adding the skeleton class.

Currently can add skeleton class onto any element to get the animation. You will need to specify what the height and width are
for the element when it is in its empty state. In your scss file add div-skeleton:empty { height and width here }.

## Examples

Empty H1 skeleton
{% capture example %}
<h1 class="h1-skeleton"></h1>
{% endcapture %}
{% include example.html content=example %}

Empty img
{% capture example %}
<img style="width:150px; height:150px;" class="skeleton"/>
{% endcapture %}
{% include example.html content=example %}

Animation will be applyied to any empty element with the .skeleton class
Empty h1 and empty divs
{% capture example %}
<h1 class="h1-skeleton"></h1>
<div class="skeleton my-1" style="width:100%; height:30px;"></div>
<div class="skeleton my-1" style="width:100%; height:30px;"></div>
{% endcapture %}
{% include example.html content=example %}

---

**Note:** 
