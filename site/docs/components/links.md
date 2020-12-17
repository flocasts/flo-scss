---
layout: docs
title: Links
description: Anchor tags
group: components
---
This component does not exist in bootstrap by defeault. We could have overidden `text-secondary` in `Colors` but that would have affected all the components that use `text-secondary`, like `Buttons`.


## Examples

By default, a href tags are the primary theme color. 

{% capture example %}
<a href="#">Default link</a>
{% endcapture %}
{% include example.html content=example %}

Secondary links are anchor tags that have a secondary call to action.

{% capture example %}
<a href="#" class="link-secondary">Secondary link</a>
{% endcapture %}
{% include example.html content=example %}