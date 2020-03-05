---
layout: docs
title: Video Tile
description: Preview tiles for videos
group: components
toc: true
---

## Basic example

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

{% capture example %}

<div class="row">
  <div class="video-tile col-4">
    <div class="video-thumbnail">
      <img class="video-thumbnail-image" src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" />
      <div class="video-thumbnail-duration">
        <span class="video-thumbnail-duration-icon">|></span>
        <time class="video-thumbnail-duration-time" datetime="PT3H01M58S">3:01:58</time>
      </div>
    </div>
    <span class="video-tile-title">Full Event Replay</span>
    <time class="video-tile-date" datetime="PT3H01M58S">June 12, 2019</time>
  </div><div class="video-tile col-4">
    <div class="video-thumbnail">
      <img class="video-thumbnail-image" src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" />
      <div class="video-thumbnail-duration">
        <span class="video-thumbnail-duration-icon">|></span>
        <time class="video-thumbnail-duration-time" datetime="PT3H01M58S">3:01:58</time>
      </div>
    </div>
    <span class="video-tile-title">Full Event Replay</span>
    <time class="video-tile-date" datetime="PT3H01M58S">June 12, 2019</time>
  </div>
  <div class="video-tile col-4">
    <div class="video-thumbnail">
      <img class="video-thumbnail-image" src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" />
      <div class="video-thumbnail-duration">
        <span class="video-thumbnail-duration-icon">|></span>
        <time class="video-thumbnail-duration-time" datetime="PT3H01M58S">3:01:58</time>
      </div>
    </div>
    <span class="video-tile-title">Full Event Replay</span>
    <time class="video-tile-date" datetime="PT3H01M58S">June 12, 2019</time>
  </div>

  <div class="video-tile col-4">
    <div class="video-thumbnail">
      <img class="video-thumbnail-image" src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" />
      <div class="video-thumbnail-duration">
        <span class="video-thumbnail-duration-icon">|></span>
        <time class="video-thumbnail-duration-time" datetime="PT3H01M58S">3:01:58</time>
      </div>
    </div>
    <span class="video-tile-title">Full Event Replay</span>
    <time class="video-tile-date" datetime="PT3H01M58S">June 12, 2019</time>
  </div><div class="video-tile col-4">
    <div class="video-thumbnail">
      <img class="video-thumbnail-image" src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" />
      <div class="video-thumbnail-duration">
        <span class="video-thumbnail-duration-icon">|></span>
        <time class="video-thumbnail-duration-time" datetime="PT3H01M58S">3:01:58</time>
      </div>
    </div>
    <span class="video-tile-title">Full Event Replay</span>
    <time class="video-tile-date" datetime="PT3H01M58S">June 12, 2019</time>
  </div>
  <div class="video-tile col-4">
    <div class="video-thumbnail">
      <img class="video-thumbnail-image" src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" />
      <div class="video-thumbnail-duration">
        <span class="video-thumbnail-duration-icon">|></span>
        <time class="video-thumbnail-duration-time" datetime="PT3H01M58S">3:01:58</time>
      </div>
    </div>
    <span class="video-tile-title">Full Event Replay</span>
    <time class="video-tile-date" datetime="PT3H01M58S">June 12, 2019</time>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
