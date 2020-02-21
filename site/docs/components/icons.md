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
{% for icon in site.data.icons %}
<svg class="icon">
  <use xlink:href="#{{ icon.svg }}" />
</svg>{% endfor %}
{% endcapture %}
{% include example.html content=example %}
