---
layout: docs
title: Typography
description: Uni Neue is the main font-family. Interstate Mono is the mono font-family. The system has 26 type options, 3 text-alignment modifiers, 10 color modifiers, and 5 font-family modifiers for Une Neue font-weight variants.
group: content
toc: true
---

## Typeramp

### Display
Starting with the largest fonts in the system, displays. When you need a heading to stand out. Keep in mind these headings are responsive by default.

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ "`.display-1`" | markdownify }}</td>
      <td><span class="display-1">Display 1</span></td>
    </tr>
    <tr>
      <td>{{ "`.display-2`" | markdownify }}</td>
      <td><span class="display-2">Display 2</span></td>
    </tr>
    <tr>
      <td>{{ "`.display-3`" | markdownify }}</td>
      <td><span class="display-3">Display 3</span></td>
    </tr>
    <tr>
      <td>{{ "`.display-4`" | markdownify }}</td>
      <td><span class="display-4">Display 4</span></td>
    </tr>
  </tbody>
</table>

### Headings
All HTML headings, `<h1>` through `<h6>` and `.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Example</th>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ "`<h1></h1>`" | markdownify }}</td>
      <td><h1>h1 heading</h1></td>
      <td>{{ "`.h1`" | markdownify }}</td>
      <td><span class="h1">.h1 heading</span></td>
    </tr>
    <tr>
      <td>{{ "`<h2></h2>`" | markdownify }}</td>
      <td><span class="h2">h2 Heading</span></td>
      <td>{{ "`.h2`" | markdownify }}</td>
      <td><span class="h2"> .h2 heading</span></td>
    </tr>
    <tr>
      <td>{{ "`<h3></h3>`" | markdownify }}</td>
      <td><span class="h3">h3 heading</span></td>
      <td>{{ "`.h3`" | markdownify }}</td>
      <td><span class="h3">.h3 heading</span></td>
    </tr>
    <tr>
      <td>{{ "`<h4></h4>`" | markdownify }}</td>
      <td><span class="h4">h4 heading</span></td>
      <td>{{ "`.h4`" | markdownify }}</td>
      <td><span class="h4">.h4 heading</span></td>
    </tr>
    <tr>
      <td>{{ "`<h5></h5>`" | markdownify }}</td>
      <td><h5>h5. heading</h5></td>
      <td>{{ "`.h5`" | markdownify }}</td>
      <td><span class="h5">.h5 heading</span></td>
    </tr>
    <tr>
      <td>{{ "`<h6></h6>`" | markdownify }}</td>
      <td><h6>h6. heading</h6></td>
      <td>{{ "`.h6`" | markdownify }}</td>
      <td><span class="h6">.h6 heading</span></td>
    </tr>
  </tbody>
</table>

### Additional Classes
In addition the system has specific named classes.

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> {{ "`body`" | markdownify }}</td>
      <td><p>Body font</p></td>
    </tr>
    <tr>
      <td>{{ "`class='text-data' `" | markdownify }}</td>
      <td><span class="text-data">Sport Data Score</span></td>
    </tr>
    <tr>
      <td>{{ "`class='headline' `" | markdownify }}</td>
      <td><span class="headline">Headline</span></td>
    </tr>
    <tr>
      <td>{{ "`class='headline font-family-bold' `" | markdownify }}</td>
      <td><span class="headline font-family-bold">Headline Bold</span></td>
    </tr>
    <tr>
      <td>{{ "`class='subhead' `" | markdownify }}</td>
      <td><span class="subhead">Subhead</span></td>
    </tr>
    <tr>
      <td>{{ "`class='subhead font-family-bold' `" | markdownify }}</td>
      <td><span class="subhead font-family-bold">Subhead bold</span></td>
    </tr>
    <tr>
      <td>{{ "`class='footnote' `" | markdownify }}</td>
      <td><span class="footnote">Footnote</span></td>
    </tr>
    <tr>
      <td>{{ "`class='footnote font-family-bold' `" | markdownify }}</td>
      <td><span class="footnote font-family-bold">Footnote Bold</span></td>
    </tr>
    <tr>
      <td>{{ "`class='overtext' `" | markdownify }}</td>
      <td><span class="overtext">Overtext</span></td>
    </tr>
    <tr>
      <td>{{ "`class='overtext font-family-bold' `" | markdownify }}</td>
      <td><span class="overtext font-family-bold">Overtext Bold</span></td>
    </tr>
    <tr>
      <td> {{ "`class='caption' `" | markdownify }}</td>
      <td><span class="caption">caption</span></td>
    </tr>
    <tr>
      <td>{{ "`class='mono' `" | markdownify }}</td>
      <td><span class="mono">mono</span></td>
    </tr>
  </tbody>
</table>

### Button Type

Font sizes for buttons. Complete font styling documented in [buttons]({{ site.baseurl }}/docs/components/buttons/).

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ "` class='btn-lg' `" | markdownify }}</td>
      <td><span class="btn-lg">Button Large</span></td>
    </tr>
    <tr>
      <td>{{ "`class='btn' `" | markdownify }}</td>
      <td><span class="btn">Button Base</span></td>
    </tr>
    <tr>
      <td>{{ "`class='btn-sm' `" | markdownify }}</td>
      <td><span class="btn-sm">Button Small</span></td>
    </tr>
  </tbody>
</table>

## Modifiers

### Color 

Here is a list of all modifier class to change text color to any brand color.

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ "`.color-100`" | markdownify }}
      </td>
      <td style="background:#0C0C0C"><h1 class="color-100">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-200`" | markdownify }}
      </td>
      <td><h1 class="color-200">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-300`" | markdownify }}
      </td>
      <td><h1 class="color-300">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-400`" | markdownify }}
      </td>
      <td><h1 class="color-400">Change text Color</h1></td>
    </tr>
        <tr>
      <td>
        {{ "`.color-500`" | markdownify }}
      </td>
      <td><h1 class="color-500">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-600`" | markdownify }}
      </td>
      <td><h1 class="color-600">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-700`" | markdownify }}
      </td>
      <td><h1 class="color-700">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-800`" | markdownify }}
      </td>
      <td><h1 class="color-800">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-900`" | markdownify }}
      </td>
      <td><h1 class="color-900">Change text Color</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.color-ignite`" | markdownify }}
      </td>
      <td><h1 class="color-ignite">Change text Color</h1></td>
    </tr>
  </tbody>
</table>

### Font-weight

Here is a list of all modifier class to change font weight for the Uni Neue web font.

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ "`.font-family-thin`" | markdownify }}
      </td>
      <td><h1 class="font-family-thin">Change font family weight</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.font-family-book`" | markdownify }}
      </td>
      <td><h1 class="font-family-book">Change font family weight</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.font-family-regular`" | markdownify }}
      </td>
      <td><h1 class="font-family-regular">Change font family weight</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.font-family-bold`" | markdownify }}
      </td>
      <td><h1 class="font-family-bold">Change font family weight</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.font-family-heavy`" | markdownify }}
      </td>
      <td><h1 class="font-family-heavy">Change font family weight</h1></td>
    </tr>
  </tbody>
</table>

### Alignment

Easily realign text to components with text alignment classes.

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ "`.text-left`" | markdownify }}
      </td>
      <td><h1 class="text-left">Text aligns to the left.</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.text-center`" | markdownify }}
      </td>
      <td><h1 class="text-center">Text aligns to the center.</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.text-right`" | markdownify }}
      </td>
      <td><h1 class="text-right">Text aligns to the right.</h1></td>
    </tr>
    <tr>
      <td>
        {{ "`.text-justify`" | markdownify }}
      </td>
      <td><h1 class="text-justify">Text aligns to the justify.</h1></td>
    </tr>
  </tbody>
</table>

### Text decoration

Remove a text decoration with a `.text-decoration-none` class.

{% capture example %}
<a href="#" class="text-decoration-none">Non-underlined link</a>
{% endcapture %}
{% include example.html content=example %}

<br/>

<!-- Bootstrap 4 -->

***
​
## System Extras
​
Setting inherited from forking Bootstrap 4. These are not part of the design system, yet could be beneficial in the future.

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

{% capture example %}

<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endcapture %}
{% include example.html content=example %}

### Responsive fonts

Bootstrap v4.3 ships with the option to enable responsive font sizes, allowing text to scale more naturally across device and viewport sizes. <abbr title="Responsive font sizes">RFS</abbr> can be enabled by changing the `$enable-responsive-font-sizes` Sass variable to `true` and recompiling Bootstrap.

To support <abbr title="Responsive font sizes">RFS</abbr>, we use a Sass mixin to replace our normal `font-size` properties. Responsive font sizes will be compiled into `calc()` functions with a mix of `rem` and viewport units to enable the responsive scaling behavior. More about <abbr title="Responsive font sizes">RFS</abbr> and its configuration can be found on its [GitHub repository](https://github.com/twbs/rfs/tree/v8.0.4).

### Custom Headings
{% capture example %}

<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{% endcapture %}
{% include example.html content=example %}

### Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.

{% capture example %}

<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{% endcapture %}
{% include example.html content=example %}

### Inline text

Styling for common inline HTML5 elements.

{% capture example %}

<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endcapture %}
{% include example.html content=example %}

`.mark` and `.small` classes are also available to apply the same styles as `<mark>` and `<small>` while avoiding any unwanted semantic implications that the tags would bring.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.

### Wrapping and overflow

Wrap text with a `.text-wrap` class.

{% capture example %}

<div class="badge badge-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
{% endcapture %}
{% include example.html content=example %}

Prevent text from wrapping with a `.text-nowrap` class.

{% capture example %}

<div class="text-nowrap bd-highlight" style="width: 8rem;">
  This text should overflow the parent.
</div>
{% endcapture %}
{% include example.html content=example %}

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

{% capture example %}

<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
{% endcapture %}
{% include example.html content=example %}

### Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `overflow-wrap: break-word` (and `word-break: break-word` for IE & Edge compatibility).

{% capture example %}

<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
{% endcapture %}
{% include example.html content=example %}

### Dates and Times

The HTML `<time>` element represents a specific period in time. It may include
the datetime attribute to translate dates into machine-readable format,
allowing for better search engine results or custom features such as reminders.

It may represent one of the following:

- A time on a 24-hour clock.
- A precise date in the Gregorian calendar (with optional time and timezone information).
- A valid time duration.

The `<time>` element in flo-scss recieves some default styling, but can be customized using any type classes.

{% capture example %}

<p>The event starts at <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
<p>The event took place on <time
  datetime="2001-05-15T19:00">May 15</time>.</p>
{% endcapture %}
{% include example.html content=example %}

[see more on HTML time element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

### Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{% capture example %}

<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endcapture %}
{% include example.html content=example %}

### Monospace

Change a selection to our monospace font stack with `.text-monospace`.

{% capture example %}

<p class="text-monospace">This is in monospace</p>
{% endcapture %}
{% include example.html content=example %}

### Text transform

Transform text in components with text capitalization classes.

{% capture example %}

<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endcapture %}
{% include example.html content=example %}

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

### Font weight and italics

Quickly change the weight (boldness) of text or italicize text.

{% capture example %}

<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
<p class="font-italic">Italic text.</p>
{% endcapture %}
{% include example.html content=example %}

### Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

{% capture example %}

<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endcapture %}
{% include example.html content=example %}

#### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

{% capture example %}

<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endcapture %}
{% include example.html content=example %}

### Lists

#### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

{% capture example %}

<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{% capture example %}

<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

#### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

{% capture example %}

<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{% endcapture %}
{% include example.html content=example %}

