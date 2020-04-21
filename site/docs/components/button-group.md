---
layout: docs
title: Button group
description: Group a series of buttons together on a single line with the button group.
group: components
toc: true
---
Styling options for button groups, checkout button groups in web-app storybook to add to the site.

## Two Buttons

<div class="btn-group w-100" role="group" aria-label="Basic example two buttons">
  <button type="button" class="btn btn-outline-secondary active">Left</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>

## Three Buttons

<div class="btn-group w-100" role="group" aria-label="Basic example three buttons">
  <button type="button" class="btn btn-outline-secondary active">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>

<!-- Bootstrap 4 -->

***

## System Extras
​
Settings inherited from forking Bootstrap 4. These are not part of the design system, yet could be beneficial in the future.

### Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

{% capture example %}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-dark">1</button>
    <button type="button" class="btn btn-dark">2</button>
    <button type="button" class="btn btn-dark">3</button>
    <button type="button" class="btn btn-dark">4</button>
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-dark">5</button>
    <button type="button" class="btn btn-dark">6</button>
    <button type="button" class="btn btn-dark">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-dark">8</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you'll likely need some utilities though to space things properly.

{% capture example %}
<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-dark">1</button>
    <button type="button" class="btn btn-dark">2</button>
    <button type="button" class="btn btn-dark">3</button>
    <button type="button" class="btn btn-dark">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-dark">1</button>
    <button type="button" class="btn btn-dark">2</button>
    <button type="button" class="btn btn-dark">3</button>
    <button type="button" class="btn btn-dark">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon2">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<div class="bd-example">
  <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" class="btn btn-dark">Left</button>
    <button type="button" class="btn btn-dark">Middle</button>
    <button type="button" class="btn btn-dark">Right</button>
  </div>
  <br>
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-dark">Left</button>
    <button type="button" class="btn btn-dark">Middle</button>
    <button type="button" class="btn btn-dark">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-dark">Left</button>
    <button type="button" class="btn btn-dark">Middle</button>
    <button type="button" class="btn btn-dark">Right</button>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
{% endhighlight %}

### Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

{% capture example %}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-dark">1</button>
  <button type="button" class="btn btn-dark">2</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

<div class="bd-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
  </div>
</div>


<div class="bd-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop1" type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
        <a class="dropdown-item" href="#">Dropdown link</a>
        <a class="dropdown-item" href="#">Dropdown link</a>
      </div>
    </div>
    <button type="button" class="btn btn-dark">Button</button>
    <button type="button" class="btn btn-dark">Button</button>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop2" type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
        <a class="dropdown-item" href="#">Dropdown link</a>
        <a class="dropdown-item" href="#">Dropdown link</a>
      </div>
    </div>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop3" type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
        <a class="dropdown-item" href="#">Dropdown link</a>
        <a class="dropdown-item" href="#">Dropdown link</a>
      </div>
    </div>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop4" type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
        <a class="dropdown-item" href="#">Dropdown link</a>
        <a class="dropdown-item" href="#">Dropdown link</a>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="btn-group-vertical">
  ...
</div>
{% endhighlight %}
