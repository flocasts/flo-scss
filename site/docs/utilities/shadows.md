---
layout: docs
title: Shadows
description: Add or remove shadows to elements with box-shadow utilities.
group: utilities
---

## Examples

While shadows on components are disabled by default in Bootstrap and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

{% capture example %}

<div class="shadow-none p-3 mb-5 bg-light rounded">shadow-none</div>
<div class="shadow-xs p-3 mb-5 bg-white rounded">shadow-xs</div>
<div class="shadow-sm p-3 mb-5 bg-white rounded">shadow-sm</div>
<div class="shadow p-3 mb-5 bg-white rounded">shadow</div>
<div class="shadow-lg p-3 mb-5 bg-white rounded">shadow-lg</div>
<div class="shadow-xl p-3 mb-5 bg-white rounded">shadow-xl</div>
{% endcapture %}
{% include example.html content=example %}
