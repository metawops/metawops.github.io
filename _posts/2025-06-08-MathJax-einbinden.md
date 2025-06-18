---
title: "MathJax für Github Pages konfigurieren"
date: 2025-06-08
categories:
  - GithubPages
tags:
  - mathjax
  - mathematik
excerpt: "Dieser Artikel beschreibt, wie man mathematische Formeln in sein Github Pages Blog einbauen kann."
description: "Dieser Artikel beschreibt, wie man mathematische Formeln in sein Github Pages Blog einbauen kann."
mathjax: true
last_modified_at: 2025-06-09
header:
  teaser: /assets/images/mathjax.png
---

Damit man in seinem Github Pages basierten Blog (und unter Benutzung des beliebten Themes _minimal mistakes_) auch hübsche, LaTeX-like Formeln einbauen kann, bietet sich z.B. MathJax an, da der Standard Markdown Interpreter _kramdown_ damit schon von Haus aus umgehen kann. Dazu sind folgende Schritte notwendig.

## Konfiguration

1. Sollte man in seinem Github Pages Repository noch keine Datei `_includes/scripts.html` haben, muss man diese aus dem [_minimal mistakes_ Repository](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/scripts.html) in sein eigenes Repository kopieren.
2. In der Kopie von `scripts.html` im eigenen Repository fügt man den folgenden Code _nach_ dem Include von Analytics (und Comments, falls konfiguriert) und vor dem `site.after_footer_scripts` Abschnitt ein:
 
   {% raw %} 
   ```html
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
   ```
   {% endraw %}
   
3. Meine komplette `scripts.html` sieht dann so aus – ich habe mal den neuen Block für MathJax mit HTML Kommentaren kenntlich gemacht:

   {% raw %}
   ```liquid
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
   {% endraw %}

4. Will man nun in einem Post auch mathematische Formeln benutzen, hat man zwei Optionen:
   1. MathJax global für alle Posts aktivieren, egal, ob man sie nutzt oder nicht.  
   Dafür in der `_config.yml` bei den Defaults für Posts einfach `mathjax: true` erägnzen.
   2. MathJax nur pro Post, in dem auch Formeln vorkommen aktivieren.  
   Dafür einfach im Front Matter des Posts eine Zeile mit `mathjax: true` hinzufügen.

Fertig ist die Laube. Zumindest hat es bei mir so geklappt.

## Ein paar Testformeln

Wichtig ist noch zu erwähnen, dass man nun Formeln _nicht_ über einen Markdown Codeblock, also mit Backticks, einbaut!

Vielmehr schreibt man entweder direkt im Text ("inline") die Formel innerhalb von zwei $ Zeichen, also `$f(x) = x^2$`. Das ergibt dann z.B. diese inline Formel: $f(x) = x^2$.

Oder, wenn man abgesetzte Formeln will ("Blockformel"), dann schreibt man das ganze in doppelte $$ Zeichen, also so:
```
$$
    f(n) =
      \begin{cases}
      n/2,  & \text{if $n$ is even} \\
      3n+1, & \text{if $n$ is odd}
      \end{cases}
$$
```

Das ergibt dann dieses:

$$
    f(n) =
      \begin{cases}
      n/2,  & \text{if $n$ is even} \\
      3n+1, & \text{if $n$ is odd}
      \end{cases}
$$

🔲
{: style="text-align: right" }