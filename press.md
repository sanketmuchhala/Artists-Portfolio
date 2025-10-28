---
layout: page
title: Press
permalink: /press/
---

<div class="press-list">

{% assign press_by_year = site.data.press | group_by: "year" | sort: "name" | reverse %}

{% for year_group in press_by_year %}
  <section class="year-group">
    <h2 class="year-heading">{{ year_group.name }}</h2>

    {% for item in year_group.items %}
      <article class="press-item">
        {% if item.url and item.url != "" %}
          <h3 class="press-title">
            <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </h3>
        {% else %}
          <h3 class="press-title">{{ item.title }}</h3>
        {% endif %}

        <p class="press-meta">
          <em>{{ item.outlet }}</em>, {{ item.date }}
        </p>
      </article>
    {% endfor %}
  </section>
{% endfor %}

</div>

---

## Press Inquiries

For press materials, high-resolution images, or interview requests, please contact:

**Email:** [{{ site.author.email }}](mailto:{{ site.author.email }})

### Press Kit

Download the complete press kit including artist bio, CV, artist statement, and high-resolution images: [Press Kit (ZIP)](/assets/documents/press-kit.zip)

*Note: Press kit currently under development. Please email for materials.*
