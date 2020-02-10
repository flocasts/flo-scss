---
layout: docs
title: Close icon
description: Use a generic close icon for dismissing content like modals and alerts.
group: utilities
---

**Be sure to include text for screen readers**, as we've done with `aria-label`.

<div class="row">
  <div class="col">
    {% capture example %}

    <svg viewBox="0 0 500 500" class="text-primary w-10">
      <use xlink:href="#android-flo-tomahawk"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 3283.215 500" class="text-primary w-10">
      <use xlink:href="#android-logo"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 500 500" class="text-500 w-10">
      <use xlink:href="#android-logo-stacked"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="-50 -137 604 604" class="text-500 w-10">
      <use xlink:href="#apple-logo"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 1050 500" class="text-500 w-10">
      <use xlink:href="#apple-tv-logo"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

  </div>
  <div class="col">
    {% capture example %}

    <svg viewBox="0 0 5000 500" class="text-primary">
      <use xlink:href="#logo"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 24 24" class="text-primary w-10">
      <use xlink:href="#close"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 500 500" class="text-500 w-10">
      <use xlink:href="#close-circle"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 16 16" class="w-10">
      <use xlink:href="#cog"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

    {% capture example %}

    <svg viewBox="0 0 22 16" class="w-10">
      <use xlink:href="#cog-hd"></use>
    </svg>
    {% endcapture %}
    {% include example.html content=example %}

  </div>
</div>
