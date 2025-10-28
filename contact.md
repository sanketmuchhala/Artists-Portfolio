---
layout: page
title: Contact
permalink: /contact/
---

For inquiries about available works, commissions, exhibitions, or press, please get in touch:

<div class="contact-info">

<div class="contact-email">
  <strong>Email:</strong><br>
  <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
</div>

{% if site.author.instagram or site.author.twitter %}
<div class="contact-social">
  <strong>Follow:</strong>
  <ul>
    {% if site.author.instagram %}
      <li>
        <a href="https://instagram.com/{{ site.author.instagram }}" target="_blank" rel="noopener noreferrer">
          Instagram: @{{ site.author.instagram }}
        </a>
      </li>
    {% endif %}

    {% if site.author.twitter %}
      <li>
        <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank" rel="noopener noreferrer">
          Twitter: @{{ site.author.twitter }}
        </a>
      </li>
    {% endif %}
  </ul>
</div>
{% endif %}

</div>

---

## Representation

For gallery representation inquiries, please contact directly via email.

## Studio Visits

Studio visits are available by appointment. Please email to schedule a visit.

## Newsletter

Sign up for occasional updates about new work, exhibitions, and events:

*Newsletter signup currently under development. Please email to be added to the mailing list.*
