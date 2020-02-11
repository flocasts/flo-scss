---
layout: docs
title: Hover (FloSports)
description: Quickly and easily show and hide content when a user hovers over certain elements
group: utilities
---

Select an element to show on hover using `.hover-toggle-$display`

Select a hover target with `.hover-target`

Note: Hover Elements and Hover Targets must be in the same parent and be general siblings, or the hover element may be a child of the hover target (ie css `~` or `` selector )

Change the colors on hover using `.hover-text-$color` and `.hover-bg-$color`

{% capture example %}
<span class="text-dark hover-target hover-text-primary">What's this?</span>

{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<span class="text-dark hover-target hover-bg-primary">What's this?</span>

{% endcapture %}
{% include example.html content=example %}

`.hover-toggle-flex`
{% capture example %}
<button class="btn btn-primary hover-target">What's this?</button>

<div class="hover-toggle-flex position-absolute bg-tint text-light w-100 justify-content-around">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}

`.hover-toggle-block`
{% capture example %}
<button class="btn btn-primary hover-target">What's this?</button>

<div class="hover-toggle-block position-absolute bg-tint text-light">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}

`.hover-toggle-inline`
{% capture example %}
<button class="btn btn-primary hover-target">What's this?</button>

<div class="hover-toggle-inline position-absolute bg-tint text-light">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}

`.hover-toggle-inline-block`
{% capture example %}
<button class="btn btn-primary hover-target">What's this?</button>

<div class="hover-toggle-inline-block position-absolute bg-tint text-light">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}
