---
layout: docs
title: Buttons
description: FloSports Brand has three button styles; primary, secondary, & over image. In addition the brand has three button sizes; btn-sm, btn, btn-lg. 
group: components
toc: true
---

<!-- FloSports Brand  -->

## Button Tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.


## Primary

Primary buttons are are Ignite Red with White text.

{% capture example %}
<button class="btn btn-primary" type="submit">Button</button>
<a class="btn btn-primary" href="#" role="button">Link</a>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endcapture %}
{% include example.html content=example %}


### Sizes

Heights are set by adding `.btn`, `.btn-lg` or `.btn-sm`.  Small buttons `.btn-sm` have a height of 32px. Base btns `.btn` have a height of 40px. Large buttons `.btn-lg` have a height of 52px. Buttons have min-width of 154px, then have a dynamic width based on character counts and padding. Buttons widths can also be adjusted by adding a `.col-span-#` (# = 1-12) or by adding `.w-100`, to take up 100% of the parent element. 

#### Height and Min-width

{% capture example %}
<button type="button" class="btn btn-sm btn-primary">Small button</button>
<button type="button" class="btn btn-primary">Button</button>
<button type="button" class="btn btn-lg btn-primary">Large button</button>
{% endcapture %}
{% include example.html content=example %}

#### Width Span Columns

{% capture example %}
<button type="button" class="btn btn-sm btn-primary col-6">Small button col-6</button>
<button type="button" class="btn btn-primary col-3">Button col-3</button>
<button type="button" class="btn btn-lg btn-primary col-8">Large button co-8</button>
{% endcapture %}
{% include example.html content=example %}

#### Width Span 100%

{% capture example %}
<button type="button" class="btn btn-lg btn-primary w-100">Large button w-100</button>
{% endcapture %}
{% include example.html content=example %}

## Secondary
Secondary buttons are are White with Ignite Red text. 

{% capture example %}
<button class="btn btn-secondary" type="submit">Button</button>
<a class="btn btn-secondary" href="#" role="button">Link</a>
<input class="btn btn-secondary" type="button" value="Input">
<input class="btn btn-secondary" type="submit" value="Submit">
<input class="btn btn-secondary" type="reset" value="Reset">
{% endcapture %}
{% include example.html content=example %}

### Sizes

Heights are set by adding `.btn`, `.btn-lg` or `.btn-sm`.  Small buttons `.btn-sm` have a height of 32px. Base btns `.btn` have a height of 40px. Large buttons `.btn-lg` have a height of 52px. Buttons have min-width of 154px, then have a dynamic width based on character counts and padding. Buttons widths can also be adjusted by adding a `.col-span-#` (# = 1-12) or by adding `.w-100`, to take up 100% of the parent element.

#### Height and Min-width 

{% capture example %}
<button type="button" class="btn btn-sm btn-secondary">Small button</button>
<button type="button" class="btn btn-secondary">Button</button>
<button type="button" class="btn btn-lg btn-secondary">Large button</button>
{% endcapture %}
{% include example.html content=example %}

#### Width Span Columns

{% capture example %}
<button type="button" class="btn btn-sm btn-secondary col-3">Small button col-3</button>
<button type="button" class="btn btn-secondary col-4">Button col-4</button>
<button type="button" class="btn btn-lg btn-secondary col-4">Large button col-4</button>
{% endcapture %}
{% include example.html content=example %}

#### Width Span 100%

{% capture example %}
<button type="button" class="btn btn-secondary w-100">Small button w-100</button>
{% endcapture %}
{% include example.html content=example %}

## Over Image
These buttons are used on top of an image. Transparent background with a white border and white text. On hover the background is white and the text is dark.

[TODO: Add Outline Button FLO-11207](https://flocasts.atlassian.net/browse/FLO-11207)


### Sizes

Heights are set by adding `.btn`, `.btn-lg` or `.btn-sm`.  Small buttons `.btn-sm` have a height of 32px. Base btns `.btn` have a height of 40px. Large buttons `.btn-lg` have a height of 52px. Buttons have min-width of 154px, then have a dynamic width based on character counts and padding. Buttons widths can also be adjusted by adding a `.col-span-#` (# = 1-12) or by adding `.w-100`, to take up 100% of the parent element.

[TODO: Add Outline Button FLO-11207](https://flocasts.atlassian.net/browse/FLO-11207)

## Block Level Buttons

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

{% capture example %}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
{% endcapture %}
{% include example.html content=example %}

## States

### Disabled
Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% capture example %}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>

<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
##### Link functionality caveat
The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcapture %}
{% include callout.html content=callout type="primary" %}

#### Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.


### Active

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{% capture example %}
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
{% endcapture %}
{% include example.html content=example %}


<!-- Bootstrap 4 -->

***

## System Extras
​
Settings inherited from forking Bootstrap 4. These are not part of the design system, yet could be beneficial in the future.

### Solid
{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}

<button type="button" class="btn btn-link">Link</button>
{% endcapture %}
{% include example.html content=example %}

### Outline buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

###  Font-based sizing
{% capture example %}
<button type="button" class="btn btn-primary display-1 d-block">Display 1 Button</button>
<button type="button" class="btn btn-primary display-2 d-block">Display 2 Button</button>
<button type="button" class="btn btn-primary display-3 d-block">Display 3 Button</button>
<button type="button" class="btn btn-primary btn-lg display-4 d-block">Display 4 Large Button</button>
<button type="button" class="btn btn-primary btn-sm h3 d-block">H3 Small Button</button>
{% endcapture %}
{% include example.html content=example %}



