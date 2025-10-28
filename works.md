---
layout: page
title: Works
permalink: /works/
---

{% include filters.html %}

<div class="works-grid" role="list">
  {% assign all_works = site.works | sort: "order" %}
  {% for work in all_works %}
    {% include work-card.html work=work %}
  {% endfor %}
</div>

<style>
  /* Override page layout for works grid */
  .page-content {
    max-width: none;
    padding: 0;
  }

  .page-header {
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem 1.5rem 2rem;
  }

  .works-grid {
    padding-top: 0;
  }
</style>
