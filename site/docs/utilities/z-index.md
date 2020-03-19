---
layout: docs
title: Z-index (FloSports)
description: Control the z-index of elements with utility classes.
group: utilities
---

Set the `z-index` of elements with our z-index utilities. It is generally
recommended that these classes be used sparingly in applications as they create
new **[stacking contexts][1]** which can lead to difficult situations in complex
apps; restructuring html is usually prefered

Apply `.z-$value`

{% highlight html %}

<div class="z-hover">z-hover</div>
<div class="z-focus">z-focus</div>
<div class="z-active">z-active</div>
<div class="z-dropdown">z-dropdown</div>
<div class="z-sticky">z-sticky</div>
<div class="z-fixed">z-fixed</div>
<div class="z-modal-backdrop">z-modal-backdrop</div>
<div class="z-modal">z-modal</div>
<div class="z-popover">z-popover</div>
<div class="z-tooltip">z-tooltip</div>
{% endhighlight %}

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
