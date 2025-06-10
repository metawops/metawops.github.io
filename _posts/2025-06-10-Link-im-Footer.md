---
title: "Github Pages: Verlinkter Lizenz-Hinweis im Footer"
date: 2025-06-10
last_modified_at: 2025-06-10
categories: GithubPages
tags: blog
excerpt: Im Artikel wird erklärt, wie man in seinem Github Pages Blog im Footer einen verlinkten Lizenz Hinweis unterbringen kann.
---

## Aufgabenstellung 
Meinem neuen Blog wollte ich einen Lizenz Hinweis hinzufügen und das am besten im Footer, der ja auf jeder Seite zu sehen ist.

Nachdem ich mir eine passende Lizenz – CC BY-SA – ausgesucht hatte, ging es darum, wie man die nun verlinkt im Footer meines auf dem Theme _minimal mistakes_ basierenden Github Pages Blogs unterbringen kann.

Der naive erste Versuch, ob das genauso wie beim [Link im Bio Bereich](https://metawops.github.io/githubpages/Link-im-Bio-Feld/) geht, schlug leider fehl. Eine neue Strategie musste her. Kurz die K.I. befragt und die Lösung war auf dem Tisch.

## Lösung
In unserem eigenen Github Pages Repository müssen wir im Ordner `_includes` (wenn noch nicht vorhanden: anlegen) eine Kopie der Datei `footer.html` aus dem [minimal mistakes Repository](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/footer.html) anlegen.

Das `<div>` Element in der letzten Zeile dieser Datei wollen wir jetzt um unseren Lizenz-Text und einen zugehörigen Link erweitern. Statt den Text und den Link aber hard-coded hier einzutragen, legen wir uns einfach dadurch, dass wir sie benutzen zwei neue Variablen in unserer `_config.yml` Datei an. Ich habe sie `license` und `license_url` genannt und damit sieht der entsprechende Teil in meiner `_config.yml` so aus (Ausschnitt):

```yaml
license: "CC BY-SA"
license_url: https://creativecommons.org/licenses/by-sa/4.0/deed.de
```

Diese beiden neuen Variablen, die wir uns gerade ausgedacht und mit Werten belegt haben, werden wir jetzt in der letzten Zeile unserer eigenen `footer.html` Datei benutzen. Das sieht dann so aus:

{% raw %}
```liquid
<div class="page__footer-copyright">&copy; {{ site.time | date: '%Y' }} <a href="{{ site.copyright_url | default: site.url }}">{{ site.copyright | default: site.title }}</a>. Lizenz: <a href="{{ site.license_url }}" target="_blank" rel="license noopener">{{ site.license }}</a>. {{ site.data.ui-text[site.locale].powered_by | default: "Powered by" }} <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/jekyll-themes/minimal-mistakes/" rel="nofollow">Minimal Mistakes</a>.</div>
```
{% endraw %}

Dabei beginnt meine Änderung mit dem Text "Lizenz:" und endet mit dem Ende des Links. Ist etwas unübersichtlich im Codeblock oben. Hier nochmal das von mir Eingefügte:

{% raw %}
```liquid
Lizenz: <a href="{{ site.license_url }}" target="_blank" rel="license noopener">{{ site.license }}</a>.
```
{% endraw %}

Variablen aus der `_config.yml` Datei können wir also in diesen "Liquid" genannten Schreibweisen (das, was zwischen doppelt geschweiften Klammern steht) mit `site.<Variablenname>` verwenden.

🔲
{: style="text-align: right" }