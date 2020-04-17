---
layout: docs
title: Alerts
description: Provide contextual feedback to users or user actions.
group: components
redirect_from:
  - "/components/"
  - "/docs/components/"
toc: true
---
<!-- FloSports Brand  --> 

## Message
Message Alerts communicate information to users on the site.




## Status
Status Alerts provide feedback to user actions with color.

### 1 Line 

{% capture example %}
{% for color in site.data.alert-status %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert with <a href="#" class="alert-link">An example link</a>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <svg class="alert-close"><use xlink:href="#close"/></svg>
  </button>
</div>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Header + 1 Line

Alerts used to provide a message to users on the site. 

{% capture example %}

<div class="alert-heading alert-msg-default" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <svg class="alert-close"><use xlink:href="#close"/></svg>
  </button>
  <h4 class="font-family-bold">Well done!</h4>
  <p class="mb-0">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
</div>

<div class="alert-heading alert-msg-info" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <svg class="alert-close"><use xlink:href="#close"/></svg>
  </button>
  <h4 class="font-family-bold"><svg><use xlink:href="#cog"/></svg> Well done!</h4>
  <p class="mb-0">Aww yeah, you successfully read this important alert message with an icon. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
</div>

{% endcapture %}
{% include example.html content=example %}




<!-- Bootstrap 4 -->

***

## System Extras
​
Settings inherited from forking Bootstrap 4 and custom designs not part of the design system, yet could be beneficial in the future.

{% capture example %}
<div class="alert alert-stripped" role="alert">
  A simple stripped alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
{% endcapture %}
{% include example.html content=example %}

