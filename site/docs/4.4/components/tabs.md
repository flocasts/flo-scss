---
layout: docs
title: Tabs (FloSports)
description: A tabbed interface for showing and hiding content
group: components
toc: true
---

Build tabs by creating  `input.tab-input`, `label.tab-label`, and
`.tab-content` for each desired tab. Put these elements in a `.tabs-container`
to create a tabbed interface based on flexbox and html inputs.

Pay attention to the html structure
with `.tabs-container`, as the ordering of `input[type="radio"].tab-input`,
`label.tab-label`, and `tab-content` is important.

## Example

{% capture example %}
<section class="tabs-container">

  <input id="tab-one" type="radio" name="example-tabs" checked="checked" class="tab-input"/>
  <label for="tab-one" class="tab-label">Tab One</label>
  <div class="tab-content"> Tab 1 Content 
    <div> Elit eaque nihil adipisci quos laborum, velit Libero repudiandae necessitatibus ex delectus impedit. Quae placeat placeat voluptas nam voluptatum at odit? Laborum excepturi ut excepturi obcaecati corrupti doloribus Voluptas rerum quae tenetur dicta dignissimos? Consequuntur perspiciatis ex explicabo ipsam rerum quidem Eos nostrum animi pariatur aut similique? Quia provident ut molestiae quidem cumque minima! Magni tenetur tenetur corporis cupiditate quas! Praesentium aliquam voluptate deserunt illo fugit Rerum asperiores obcaecati nulla nulla quaerat iusto? Ipsa placeat sit corporis earum id Corporis molestias quasi magni quos possimus? Odit est optio cumque recusandae voluptate Aliquid cumque perspiciatis error doloremque suscipit! Ratione facilis officiis.  </div>
  </div>

  <input id="tab-two" type="radio" name="example-tabs" class="tab-input"/>
  <label for="tab-two" class="tab-label">Tab Two</label>
  <div class="tab-content"> Tab 2 Content 
    <div> Elit cumque rem harum reiciendis veniam nam nostrum ea. Dolor aut tempora vero culpa saepe Ratione nemo reprehenderit possimus libero earum Quas atque temporibus fuga quibusdam mollitia! Odit architecto possimus debitis aliquid optio Quidem consectetur nostrum fuga magni quia cumque placeat? Quis sapiente iusto saepe debitis adipisci? Tempore similique maiores commodi labore rerum possimus nisi explicabo. Voluptate at sapiente laborum consequatur sunt sint Ipsa reiciendis dolor error quisquam tenetur! Aut eum repudiandae nostrum sint nostrum! Nobis illo mollitia officiis placeat nihil nostrum Quod eum ratione deleniti possimus maiores Dicta neque molestias delectus sit quos Veritatis quaerat culpa aspernatur excepturi aspernatur </div>
  </div>

  <input id="tab-three" type="radio" name="example-tabs" class="tab-input"/>
  <label for="tab-three" class="tab-label">Tab Three</label>
  <div class="tab-content"> Tab 3 Content 
    <div> Lorem delectus perferendis ipsam aperiam dolor Quidem ratione ipsum impedit eos odio. Maiores excepturi totam officiis officiis ducimus Officiis excepturi quos atque amet inventore Accusantium ipsum modi eius pariatur iste! Quibusdam nihil sed maxime eum mollitia sapiente Nihil ab libero voluptatum commodi nulla unde quasi veritatis perferendis. Dolor dolorem laboriosam assumenda eius debitis, dolorum nulla veniam. Laboriosam porro similique nam officia vitae? Mollitia officia iste architecto quaerat cumque Numquam doloremque sed perferendis ut incidunt Sit ducimus voluptatem necessitatibus voluptas inventore! Animi corrupti tempora placeat magni eos Pariatur quod quam iste minima iure omnis? Cupiditate voluptatibus ut quam soluta ex, fugit?  </div>
  </div>

</section>
{% endcapture %}
{% include example.html content=example %}


