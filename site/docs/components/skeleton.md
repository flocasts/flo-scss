---
layout: docs
title: Skeleton
description: Empty Elements
group: components
---
This component does not exist in bootstrap by default. 


## Examples

When a element has the class skeleton applied to it it will by default have an animation attached to it during its :empty state. 
empty psedo-class docs =>  https://developer.mozilla.org/en-US/docs/Web/CSS/:empty

Empty H1 skeleton
{% capture example %}
<h1 class="h1-skeleton"></h1>
{% endcapture %}
{% include example.html content=example %}

Empty img

{% capture example %}
<img style="width:150px; height:150px;" class="img-skeleton"/>
{% endcapture %}
{% include example.html content=example %}

---

**Note:** 
