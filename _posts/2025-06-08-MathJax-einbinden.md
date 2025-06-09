---
title: "MathJax für Github Pages konfigurieren"
date: 2025-06-08
categories: GithubPages
tags: mathjax mathematik
excerpt: "Dieser Artikel beschreibt, wie man mathematische Formeln in sein Github Pages Blog einbauen kann."
---

Damit man in seinem Github Pages basierten Blog (und unter Benutzung des beliebten Themes _minimal mistakes_) auch hübsche, LaTeX-like Formeln einbauen kann, bietet sich z.B. MathJax an, da der Standard Markdown Interpreter _kramdown_ damit schon von Haus aus umgehen kann. Dazu sind folgende Schritte notwendig.

## Konfiguration

1. Sollte man in seinem Github Pages Repository noch keine Datei `_includes/scripts.html` haben, muss man diese aus dem [_minmal mistakes_ Repository](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/scripts.html) in sein eigenes Repository kopieren.
2. In der Kopie von `scripts.html` im eigenen Repository fügt man den folgenden Code _nach_ Analytics (und Comments, falls konfiguriert) und vor dem "after.footer" Abschnitt ein. Meine komplette `scripts.html` sieht dann so aus:

```html
{% if site.footer_scripts %}
  {% for script in site.footer_scripts %}
    <script src="{{ script | relative_url }}"></script>
  {% endfor %}
{% else %}
  <script src="{{ '/assets/js/main.min.js' | relative_url }}"></script>
{% endif %}

{% if site.search == true or page.layout == "search" %}
  {%- assign search_provider = site.search_provider | default: "lunr" -%}
  {%- case search_provider -%}
    {%- when "lunr" -%}
      {% include_cached search/lunr-search-scripts.html %}
    {%- when "google" -%}
      {% include_cached search/google-search-scripts.html %}
    {%- when "algolia" -%}
      {% include_cached search/algolia-search-scripts.html %}
  {%- endcase -%}
{% endif %}

{% include analytics.html %}
{% include /comments-providers/scripts.html %}

<!-- MathJax einbinden: -->
{% if page.mathjax %}
<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    processEscapes: true
  }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
{% endif %}
<!-- Ende MathJax Einbindung -->

{% if site.after_footer_scripts %}
  {% for script in site.after_footer_scripts %}
    <script src="{{ script | relative_url }}"></script>
  {% endfor %}
{% endif %}
```

3. Will man nun in einem Post auch mathematische Formeln benutzen, hat man zwei Optionen:
   1. MathJax global für alle Posts aktivieren, egal, ob man sie nutzt oder nicht.
   2. MathJax nur pro Post, in dem auch Formeln vorkommen aktivieren.

## Ein paar Testformeln

Formeltest, inline: $f(x) = x^2$

Formeltest im Block:
$$
    f(n) =
      \begin{cases}
      n/2,  & \text{if $n$ is even} \\
      3n+1, & \text{if $n$ is odd}
      \end{cases}
$$

