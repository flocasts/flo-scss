---
layout: docs
title: Click Toggle (FloSports)
description: Quickly and easily show and hide content when a user clicks on certain elements
group: utilities
---

Select an element to toggle via click using `.click-toggle-$dispay`

Select a click target with `input[type="checkbox"].click-target` and optionally one or more `<label>`s

Have the label disappear after bing toggled with `.click-toggle-once`

Note: click Elements and click Targets must be in the same parent and be general siblings(ie css `~` selector )

`.click-toggle-flex`
`.click-toggle-once`
{% capture example %}
<label for="click-toggle-flex-example" class="btn btn-primary click-toggle-once">Click Me</label>
<input id="click-toggle-flex-example" class="click-toggle-input d-none" type="checkbox">

<div class="click-toggle-flex position-absolute bg-tint text-light w-50 justify-content-around flex-column">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}

`.click-toggle-block`
{% capture example %}
<label for="click-toggle-block-example" class="btn btn-primary">Click Me</label>
<input id="click-toggle-block-example" class="click-toggle-input d-none" type="checkbox">
<div class="click-toggle-block bg-tint text-light">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}

`.click-toggle-inline`
{% capture example %}
<label for="click-toggle-inline-example" class="btn btn-primary">Click Me</label>
<input id="click-toggle-inline-example" class="click-toggle-input d-none" type="checkbox">
<div class="click-toggle-inline bg-tint text-light">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endcapture %}
{% include example.html content=example %}

`.click-toggle-inline-block`
{% capture example %}
<label for="click-toggle-inline-block-example" class="btn btn-primary">Click Me
<input id="click-toggle-inline-block-example" class="click-toggle-input d-none" type="checkbox">

  <div class="click-toggle-inline-block position-absolute bg-tint text-light w-50 justify-content-around">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </div>
</label>
{% endcapture %}
{% include example.html content=example %}
