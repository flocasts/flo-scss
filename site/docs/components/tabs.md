---
layout: docs
title: Tabs
description: A tabbed interface for showing and hiding content
group: components
toc: true
---

Build tabs by creating `input.tab-input`, `label.tab-label`, and
`.tab-content` for each desired tab. Put these elements in a `.tabs-container`
to create a tabbed interface based on flexbox and html inputs.

Pay attention to the html structure
with `.tabs-container`, as the ordering of `input[type="radio"].tab-input`,
`label.tab-label`, and `tab-content` is important.

## Example

{% capture example %}

<section class="tabs-container">
        <input
          id="tab-two"
          type="radio"
          name="example-tabs"
          checked="checked"
          class="tab-input"
        />
        <label for="tab-two" class="tab-label">Events</label>
        <div class="tab-content h-100 overflow-y-auto">
          <ol class="list-group list-group-flush">
            <li class="list-group-item hover-target hover-bg-300">
              <time>9 AM CST 3/11</time>
              <div class="d-flex flex-row justify-content-between">
                <span class="display-4 hover-text-primary">Minnesota</span>
                <span>0-0</span>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <span class="display-4 hover-text-primary">Michigan</span>
                <span>0-0</span>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <span class="caption">B10 Men's Basketball</span>
                <span class="caption">-3.5 ABC</span>
              </div>
            </li>

            <li class="list-group-item hover-target hover-bg-300">
              <time>9 AM CST 3/11</time>
              <div class="d-flex flex-row justify-content-between">
                <span class="display-4 hover-text-primary">Minnesota</span>
                <span>0-0</span>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <span class="display-4 hover-text-primary">Michigan</span>
                <span>0-0</span>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <span class="caption">B10 Men's Basketball</span>
                <span class="caption">-3.5 ABC</span>
              </div>
            </li>

            <li class="list-group-item hover-target hover-bg-300">
              <time>9 AM CST 3/11</time>
              <div class="d-flex flex-row justify-content-between">
                <span class="display-4 hover-text-primary">Minnesota</span>
                <span>0-0</span>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <span class="display-4 hover-text-primary">Michigan</span>
                <span>0-0</span>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <span class="caption">B10 Men's Basketball</span>
                <span class="caption">-3.5 ABC</span>
              </div>
            </li>

          </ol>
        </div>

        <input
          id="tab-one"
          type="radio"
          name="example-tabs"
          class="tab-input"
        />
        <label for="tab-one" class="tab-label">Videos</label>
        <div class="tab-content">
          <form class="form-inline d-md-block">
            <select class="form-control">
              <option>Level</option>
            </select>
            <select class="form-control">
              <option>Governing Body</option>
            </select>
            <select class="form-control">
              <option>Type</option>
            </select>
            <select class="form-control">
              <option>Conference</option>
            </select>
            <select class="form-control">
              <option>Gender</option>
            </select>
          </form>
          <form class="form-inline d-none d-md-block py-3">
            <button type="button" class="chip chip-light chip-close">
              Chip
            </button>
            <button type="button" class="chip chip-light chip-close">
              Chip
            </button>
            <button type="button" class="chip chip-light chip-close">
              Chip
            </button>
            <button type="button" class="chip chip-light chip-close">
              Chip
            </button>
          </form>
          <video
            class="w-100 img-fluid"
            controls
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can
            <a href="https://archive.org/details/BigBuckBunny_124"
              >download it</a
            >
            and watch it with your favorite video player!
          </video>
        </div>

        <input
          id="tab-three"
          type="radio"
          name="example-tabs"
          class="tab-input"
        />
        <label for="tab-three" class="tab-label">Matchups</label>
        <div class="tab-content">
        <h3>Matchups</h3>
          <div>
            Lorem delectus perferendis ipsam aperiam dolor Quidem ratione ipsum
            impedit eos odio. Maiores excepturi totam officiis officiis ducimus
            Officiis excepturi quos atque amet inventore Accusantium ipsum modi
            eius pariatur iste! Quibusdam nihil sed maxime eum mollitia sapiente
            Nihil ab libero voluptatum commodi nulla unde quasi veritatis
            perferendis. Dolor dolorem laboriosam assumenda eius debitis,
            dolorum nulla veniam. Laboriosam porro similique nam officia vitae?
            Mollitia officia iste architecto quaerat cumque Numquam doloremque
            sed perferendis ut incidunt Sit ducimus voluptatem necessitatibus
            voluptas inventore! Animi corrupti tempora placeat magni eos
            Pariatur quod quam iste minima iure omnis? Cupiditate voluptatibus
            ut quam soluta ex, fugit?
          </div>
        </div>

        <input
          id="tab-four"
          type="radio"
          name="example-tabs"
          class="tab-input"
        />
        <label for="tab-four" class="tab-label">News</label>
        <div class="tab-content">
          <h3>News</h3>
          <div class="row">
            <div class="card m-3 col">
              <img src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card m-3 col">
              <img src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card m-3 col">
              <img src="https://d2779tscntxxsw.cloudfront.net/5e31f3e4eb17c.png" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </section>

{% endcapture %}
{% include example.html content=example %}
