---
layout: page
title: Exhibitions
permalink: /exhibitions/
---

<div class="exhibitions-list">

{% for year_group in site.data.exhibitions %}
  <section class="year-group">
    <h2 class="year-heading">{{ year_group.year }}</h2>

    {% for exhibition in year_group.exhibitions %}
      <article class="exhibition-item">
        <h3 class="exhibition-title">{{ exhibition.title }}</h3>
        <p class="exhibition-meta">
          {{ exhibition.venue }}, {{ exhibition.city }}<br>
          {{ exhibition.date }}
        </p>
        <p class="exhibition-type">{{ exhibition.type }}</p>
      </article>
    {% endfor %}
  </section>
{% endfor %}

</div>

---

## Exhibition Inquiries

For exhibition opportunities or to request exhibition history details, please [contact us](/contact/).
