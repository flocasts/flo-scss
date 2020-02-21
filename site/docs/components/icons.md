---
layout: docs
title: Icons
description: Use SVG Icons in HTML
group: components
toc: true
---

## Examples

Icons

{% capture example %}
<div class="row">
{% for icon in site.data.icons %}
<div class="col-6 col-md-2 d-flex flex-column align-items-center justify-content-center">
  <svg class="icon">
    <use xlink:href="#{{ icon.name }}" />
  </svg>
  <p class="caption">{{ icon.name }}</p>
</div>
{% endfor %}
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<section>

{% endcapture %}
{% include example.html content=example %}
