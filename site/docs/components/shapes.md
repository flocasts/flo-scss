---
layout: docs
title: Shapes (FloSports)
description: Simple Scalable Shapess
group: components
redirect_from:
  - "/components/"
  - "/docs/4.4/components/"
toc: true
---

More inspiration [here](https://css-tricks.com/the-shapes-of-css/)

## Examples

Ensure responsive shapes with a `.square`, or `.circle` container and and `.position-absolute` or `.shape-content`

### Square

{% capture example %}

<div class="square bg-primary">
  <div class="shape-content">
    default 25% width
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}

<div class="square bg-primary w-10">
  <div class="shape-content">
    10% width
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}

<div class="square bg-primary w-33">
  <div class="position-absolute center-x center-y text-white">
    33% width
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}

<div class="circle bg-primary w-33">
  <div class="position-absolute center-x center-y text-white">
    33% width
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


