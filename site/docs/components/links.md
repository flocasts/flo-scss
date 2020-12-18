---
layout: docs
title: Links
description: Anchor tags
group: components
---
This component does not exist in bootstrap by default. 


## Examples

By default, a href tags inherit the primary theme color. 

{% capture example %}
<a href="#">Default link</a>
{% endcapture %}
{% include example.html content=example %}

Secondary links help differentiate from the primary call to action.

{% capture example %}
<a href="#" class="link-secondary">Secondary link</a>
{% endcapture %}
{% include example.html content=example %}

---

**Note:** 
We could have overidden `text-secondary` in `Colors` but that would have affected all the components that use `text-secondary`, like `Buttons`. So we created a new var `$link-color-secondary` and a new class `link-secondary`.