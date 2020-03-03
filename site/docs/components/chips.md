---
layout: docs
title: Chips
description: Chips are compact elements that represent an input, attribute, or action.
group: components
toc: true
---

Chips allow users to enter information, make selections, filter content, or
trigger actions. While buttons are expected to appear consistently and with
familiar calls to action, chips should appear dynamically as a group of
multiple interactive elements.

## Examples

Flo-SCSS includes several predefined chip styles, each serving its own semantic purpose, with a few extras thrown in for more control.

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="chip chip-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

## Chips with Close Icons

{% capture example %}
<button type="button" class="chip chip-close chip-light">Light</button>
<button type="button" class="chip chip-close chip-dark">Dark</button>
{% endcapture %}
{% include example.html content=example %}

## Disable text wrapping

If you don't want the chip text to wrap, you can add the `.text-nowrap` class to the chip. In Sass, you can set `$chip-white-space: nowrap` to disable text wrapping for each chip.

{% capture example %}

<div class="w-10">
  <button class="chip chip-primary" type="submit">Amet deleniti eum non inventore?</button>
  <button class="chip chip-primary text-nowrap" type="submit">Amet deleniti eum non inventore?</button>
</div>
{% endcapture %}
{% include example.html content=example %}

## chip tags

The `.chip` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using chip classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{% capture example %}
<a class="chip chip-primary" href="#" role="button">Link</a>
<button class="chip chip-primary" type="submit">Button</button>
<input class="chip chip-primary" type="button" value="Input">
<input class="chip chip-primary" type="submit" value="Submit">
<input class="chip chip-primary" type="reset" value="Reset">
{% endcapture %}
{% include example.html content=example %}

## Gray chips

{% capture example %}
{% for color in site.data.grays %}
<button type="button" class="chip chip-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Outline chips

In need of a chip, but not the hefty background colors they bring? Replace the default modifier classes with the `.chip-outline-*` ones to remove all background images and colors on any chip.

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="chip chip-outline-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Sizes

Fancy larger or smaller chips? Add `.chip-lg` or `.chip-sm` for additional sizes.

{% capture example %}
<button type="button" class="chip chip-primary chip-lg">Large chip</button>
<button type="button" class="chip chip-secondary chip-lg">Large chip</button>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button type="button" class="chip chip-primary chip-sm">Small chip</button>
<button type="button" class="chip chip-secondary chip-sm">Small chip</button>
{% endcapture %}
{% include example.html content=example %}

## Active state

chips will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{% capture example %}
<a href="#" class="chip chip-primary chip-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="chip chip-secondary chip-lg active" role="button" aria-pressed="true">Link</a>
{% endcapture %}
{% include example.html content=example %}

## Disabled state

Make chips look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% capture example %}
<button type="button" class="chip chip-lg chip-primary" disabled>Primary button</button>
<button type="button" class="chip chip-secondary chip-lg" disabled>Button</button>
{% endcapture %}
{% include example.html content=example %}

Disabled chips using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor chips. In browsers which support that property, you won't see the disabled cursor at all.
- Disabled chips should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.

{% capture example %}
<a href="#" class="chip chip-primary chip-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="chip chip-secondary chip-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}

##### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcapture %}
{% include callout.html content=callout type="warning" %}
