---
layout: docs
title: List group
description: List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
group: components
toc: true
---

## Basic example

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

{% capture example %}

<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Active items

Add `.active` to a `.list-group-item` to indicate the current active selection.

{% capture example %}

<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Disabled items

Add `.disabled` to a `.list-group-item` to make it _appear_ disabled. Note that some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).

{% capture example %}

<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Links and buttons

Use `<a>`s or `<button>`s to create _actionable_ list group items with hover, disabled, and active states by adding `.list-group-item-action`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

Be sure to **not use the standard `.btn` classes here**.

{% capture example %}

<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>
{% endcapture %}
{% include example.html content=example %}

With `<button>`s, you can also make use of the `disabled` attribute instead of the `.disabled` class. Sadly, `<a>`s don't support the disabled attribute.

{% capture example %}

<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>
{% endcapture %}
{% include example.html content=example %}

## Flush

Add `.list-group-flush` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

{% capture example %}

<ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Headings

Use `.list-group-heading` with `.list-group-item`s to add bold headings to lists

{% capture example %}

<ul class="list-group">
  <li class="list-group-heading">Events</li>
  <li class="list-group-item">Beat the Streets</li>
  <li class="list-group-item">Final X</li>
  <li class="list-group-item">Giro</li>
  <li class="list-group-item">CheerWorld</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}

<ul class="list-group list-group-flush">
  <li class="list-group-heading">Events</li>
  <li class="list-group-item">Beat the Streets</li>
  <li class="list-group-item">Final X</li>
  <li class="list-group-item">Giro</li>
  <li class="list-group-item">CheerWorld</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Horizontal

Add `.list-group-horizontal` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.list-group-horizontal-{sm|md|lg|xl}` to make a list group horizontal starting at that breakpoint's `min-width`. Currently **horizontal list groups cannot be combined with flush list groups.**

**ProTip:** Want equal-width list group items when horizontal? Add `.flex-fill` to each list group item.

{% for bp in site.data.breakpoints %}
{% capture example %}

<ul class="list-group list-group-horizontal{{ bp.abbr }}">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
</ul>
{% endcapture %}
{% include example.html content=example %}{% endfor %}

## Contextual classes

Use contextual classes to style list items with a stateful background and color.

{% capture example %}

<ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>

{% for color in site.data.theme-colors %}

  <li class="list-group-item list-group-item-{{ color.name }}">A simple {{ color.name }} list group item</li>{% endfor %}
</ul>
{% endcapture %}
{% include example.html content=example %}

Contextual classes also work with `.list-group-item-action`. Note the addition of the hover styles here not present in the previous example. Also supported is the `.active` state; apply it to indicate an active selection on a contextual list group item.

{% capture example %}

<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

{% for color in site.data.theme-colors %}
<a href="#" class="list-group-item list-group-item-action list-group-item-{{ color.name }}">A simple {{ color.name }} list group item</a>{% endfor %}

</div>
{% endcapture %}
{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

## With badges

Add badges to any list group item to show unread counts, activity, and more with the help of some [utilities]({{ site.baseurl }}/docs/utilities/flex/).

{% capture example %}

<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary text-uppercase">Live</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

## Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities]({{ site.baseurl }}/docs/utilities/flex/).

{% capture example %}

<div class="list-group">
  <div class="list-group-heading">Events</div>
  <a href="#" class="list-group-item list-group-item-action active">
    <div class="row">
      <div class="col-4">
        <img
          src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png"
          class="img-fluid"
          alt="..."
        />
      </div>

      <div class="col-8">
        <h5>Final X</h5>
        <time class="text-muted">May 8, 2019</time>
      </div>
    </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="row">
      <div class="col-4">
        <img
          src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png"
          class="img-fluid"
          alt="..."
        />
      </div>

      <div class="col-8">
        <h5>Final X</h5>
        <time class="text-muted">May 8, 2019</time>
      </div>
    </div>

  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="row">
      <div class="col-4">
        <img
          src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png"
          class="img-fluid"
          alt="..."
        />
      </div>

      <div class="col-8">
        <h5>Final X</h5>
        <time class="text-muted">May 8, 2019</time>
      </div>
    </div>

  </a>
</div>
{% endcapture %}
{% include example.html content=example %}
