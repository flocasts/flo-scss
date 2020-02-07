---
layout: docs
title: Position
description: Use these shorthand utilities for quickly configuring the position of an element.
group: utilities
toc: true
---

## Common values

Quick positioning classes are available, though they are not responsive.

{% highlight html %}

<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endhighlight %}

## Positions

Position elements with `.center-x`, `.center-y`, `.top`, `.right`, `.bottom`, `.left`, `.above`, and `.below`

{% capture example %}

<div class="position-relative border m-5" style="height:200px;width:200px;">
  <div class="position-absolute center-x center-y bg-primary">Center-X Center-Y</div>
</div>
{% endcapture %}
{% include example.html content=example %}
{% capture example %}
<div class="position-relative border m-5" style="height:200px;width:200px;">
  <div class="position-absolute right center-y bg-primary">Right Center-y</div>
</div>
{% endcapture %}
{% include example.html content=example %}
{% capture example %}
<div class="position-relative border m-5" style="height:200px;width:200px;">
  <div class="position-absolute above center-x bg-primary">Above Center-x</div>
</div>
{% endcapture %}
{% include example.html content=example %}
{% capture example %}
<div class="position-relative border m-5" style="height:200px;width:200px;">
  <div class="position-absolute below bg-primary">Below</div>
</div>
{% endcapture %}
{% include example.html content=example %}
{% capture example %}
<div class="position-relative border m-5" style="height:200px;width:200px;">
  <div class="position-absolute bottom left bg-primary">Bottom Left</div>
</div>
{% endcapture %}
{% include example.html content=example %}
{% capture example %}
<div class="position-relative border m-5" style="height:200px;width:200px;">
  <div class="position-absolute top right bg-primary">top Right</div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Fixed top

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

{% highlight html %}

<div class="fixed-top">...</div>
{% endhighlight %}

## Fixed bottom

Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

{% highlight html %}

<div class="fixed-bottom">...</div>
{% endhighlight %}

## Sticky top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The `.sticky-top` utility uses CSS's `position: sticky`, which isn't fully supported in all browsers.

**IE11 and IE10 will render `position: sticky` as `position: relative`.** As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that can render it properly.

{% highlight html %}

<div class="sticky-top">...</div>
{% endhighlight %}
