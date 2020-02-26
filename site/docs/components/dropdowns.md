---
layout: docs
title: Dropdowns
description: Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
group: components
toc: true
---

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and
more. They're toggled by clicking, not by hovering; this is [an intentional
design
decision](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

## Accessibility

The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr
title="Accessible Rich Internet
Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an
actual [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu), but
this is specific to application-like menus which trigger actions or functions.
<abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only
contain menu items, checkbox menu items, radio button menu items, radio button
groups, and sub-menus.

Bootstrap's dropdowns, on the other hand, are designed to be generic and
applicable to a variety of situations and markup structures. For instance, it
is possible to create dropdowns that contain additional inputs and form
controls, such as search fields or login forms. For this reason, Bootstrap does
not expect (nor automatically add) any of the `role` and `aria-` attributes
required for true <abbr title="Accessible Rich Internet
Applications">ARIA</abbr> menus. Authors will have to include these more
specific attributes themselves.

However, Bootstrap does add built-in support for most standard keyboard menu
interactions, such as the ability to move through individual `.dropdown-item`
elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key.

## Examples

Wrap the dropdown's toggle (your label) and the dropdown menu within
`.dropdown`, or another element that declares `position: relative;`. Dropdowns
can be triggered from `<a>` or `<button>` elements to better fit your potential
needs.

### Single button

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either `<button>` elements:

{% capture example %}
<div class="dropdown">
  <label class="btn btn-secondary" for="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </label>
  <input class="d-none dropdown-toggle" id="dropdownMenuButton" type="checkbox">
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

The best part is you can do this with any button variant, too:

{% capture example %}
<div class="bd-example">
  <div class="btn-group">
    <label class="btn btn-primary dropdown-toggle" aria-haspopup="true" aria-expanded="false" for="toggle1">Primary</label>
    <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle1"/>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
    <label class="btn btn-primary dropdown-toggle" aria-haspopup="true" aria-expanded="false" for="toggle2">Primary</label>
    <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle3"/>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
    <label class="btn btn-primary dropdown-toggle" aria-haspopup="true" aria-expanded="false" for="toggle3">Primary</label>
    <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle3"/>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>
{% endcapture %}
{% include example.html content=example %}

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.

{% capture example %}
<div class="bd-example">
  <div class="btn-group">
    <label class="btn btn-primary">Primary</label>
    <label class="btn btn-primary dropdown-toggle-split" aria-haspopup="true" aria-expanded="false" for="toggle4">
      <span class="sr-only">Toggle Dropdown</span>
    </label>
    <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle4"/>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <label class="btn btn-secondary">Secondary</label>
    <label class="btn btn-secondary dropdown-toggle-split" aria-haspopup="true" aria-expanded="false" for="toggle5">
      <span class="sr-only">Toggle Dropdown</span>
    </label>
    <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle5"/>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>
{% endcapture %}
{% include example.html content=example %}

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

{% capture example %}
<div class="bd-example">
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <label class="btn btn-secondary btn-lg" aria-haspopup="true" aria-expanded="false" for="toggle6">
        Large button
      </label>
      <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle6"/>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
    <div class="btn-group ml-2">
      <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
      <label class="btn btn-lg btn-secondary dropdown-toggle-split" aria-haspopup="true" aria-expanded="false" for="toggle7">
        <div class="invisible">x</div>
        <span class="sr-only">Toggle Dropdown</span>
      </label>
      <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle7"/>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
  </div><!-- /btn-toolbar -->
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <label class="btn btn-secondary btn-sm" aria-haspopup="true" aria-expanded="false" for="toggle8">
        Small button
      </label>
      <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle8"/>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
    <div class="btn-group ml-2">
      <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
      <label type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false" for="toggle9">
        <div class="invisible">x</div>
        <span class="sr-only">Toggle Dropdown</span>
      </label>
      <input class="d-none dropdown-toggle" aria-haspopup="true" aria-expanded="false" type="checkbox" id="toggle9"/>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
  </div><!-- /btn-toolbar -->
</div><!-- /example -->
{% endcapture %}
{% include example.html content=example %}

## Directions

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.

<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
      Dropup
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

{% highlight html %}
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
    Dropup
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
{% endhighlight %}

### Dropright

Trigger dropdown menus at the right of the elements by adding `.dropright` to the parent element.

<div class="bd-example">
  <div class="btn-group dropright">
    <button type="button" class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
      Dropright
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group dropright">
    <button type="button" class="btn btn-secondary">
      Split dropright
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropright</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

{% highlight html %}
<!-- Default dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary">
    Split dropright
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropright</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
{% endhighlight %}

### Dropleft

Trigger dropdown menus at the left of the elements by adding `.dropleft` to the parent element.

<div class="bd-example">
  <div class="btn-group dropleft">
    <button type="button" class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
      Dropleft
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group">
    <div class="btn-group dropleft" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropleft</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <button type="button" class="btn btn-secondary">
      Split dropleft
    </button>
  </div>
</div>

{% highlight html %}
<!-- Default dropleft button -->
<div class="btn-group dropleft">
  <button type="button" class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
    Dropleft
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropleft button -->
<div class="btn-group">
  <div class="btn-group dropleft" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropleft</span>
    </button>
    <div class="dropdown-menu">
      <!-- Dropdown menu links -->
    </div>
  </div>
  <button type="button" class="btn btn-secondary">
    Split dropleft
  </button>
</div>
{% endhighlight %}

## Menu items

Historically dropdown menu contents *had* to be links, but that's no longer the case with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

{% capture example %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.

{% capture example %}
<div class="dropdown-menu">
  <span class="dropdown-item-text">Dropdown item text</span>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Active

Add `.active` to items in the dropdown to **style them as active**.

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Disabled

Add `.disabled` to items in the dropdown to **style them as disabled**.

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{% endcapture %}
{% include example.html content=example %}


## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

{% capture example %}
<div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Dividers

Separate groups of related menu items with a divider.

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Text

Place any freeform text within a dropdown menu with text and use [spacing utilities]({{ site.baseurl }}/docs/utilities/spacing/). Note that you'll likely need additional sizing styles to constrain the menu width.

{% capture example %}
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
{% endcapture %}
{% include example.html content=example %}

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use [margin or padding utilities]({{ site.baseurl }}/docs/utilities/spacing/) to give it the negative space you require.

{% capture example %}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form class="dropdown-menu p-4">
  <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
  </div>
  <div class="form-group">
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
  </div>
  <div class="form-group">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck2">
      <label class="form-check-label" for="dropdownCheck2">
        Remember me
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}

