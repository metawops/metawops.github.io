---
title: Blocksatz und Silbentrennung
date: 2025-06-14
last_modified_at: 2025-06-14
categories:
  - GithubPages
tags:
  - blocksatz
  - silbentrennung
  - markdown
  - frontmatter
excerpt: "Im Artikel wird gezeigt, wie man für sein auf dem Theme minimal mistakes basierenden Github Pages Blog Blocksatz und Silbentrennung aktivieren kann"
header:
  teaser: /assets/images/blocksatz-silbentrennung.png
---

## Grundsätzliches

### Markdown & Front Matter
Wir werden Blocksatz und Silbentrennung via CSS umsetzen. Damit die neuen CSS Klassen auch von einem Post oder eine Seite benutzt werden, die wir ja in Markdown verfassen, kann man sie im Front Matter unter `classes:` unterbringen, also z.B.:

```yaml
---
classes:
  - blocksatz
---
```

(Ich habe gleich mal die Array Schreibweise von YAML benutzt, auch wenn wir hier nur _eine_ Klasse angeben. Es kann ja sein, dass ihr noch weitere Klassen zuweisen wollt, die kämen dann darunter, als weitere Listenelemente, jeweils auf einer eigenen Zeile mit Einschub und Minuszeichen.)

Wenn man _immer alle_ Seiten und Blog Posts im Blocksatz und mit Silbentrennung haben möchte, kann man diese CSS Klassen auch in seiner `_config.yml` als Default Werte unterbringen. Das sähe dann z.B. so aus:

```yaml
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
      show_date: true
      classes:
        - blocksatz
  # _pages
  - scope:
      path: ""
      type: pages
    values:
      layout: single
      author_profile: true
      classes:
        - blocksatz
```

> **ABER ACHTUNG!**
> Dazu muss man wissen, dass CSS Klassenangaben, die im Front Matter eines Blog Posts oder einer Seite stehen, diesen Default Wert immer überschreiben. Solltet ihr also z.B. eine Seite im Front Matter ihrer Markdown Datei über die Angabe
> 
> ```yaml
> classes:
>   - wide
> ```
> 
>mit dem `wide` Layout von _minimal mistakes_ versehen haben, gilt nur diese Angabe. Die Default-Angabe aus der `_config.yml` gilt dann nicht mehr. Wollt ihr dann sowohl `wide`, als auch `blocksatz`, dann müsst ihr im Front Matter der Seite beide Klassenangaben auflisten, also `blocksatz` nochmal wiederholen:
> 
> ```yaml
> classes:
>   - wide
>   - blocksatz
> ```
{: .notice--warning }


### Je nach Layout

Wir werden hier Blocksatz _und_ Silbentrennung gemeinsam in einer CSS Klasse namens `.blocksatz` umsetzen. Ihr könnt das aber natürlich auch auftrennen.

Das Anwenden von CSS Klassen auf den Layout Typ `single` – den man ja i.d.R. für Posts und Pages benutzt – funktioniert beim _minimal mistakes_ Theme anders als beim Layout Typ `home`. Wenn man also nicht nur Blog Posts und Seiten im Blocksatz und mit Silbentrennung haben will, sondern auch seine Homepage, ist zu beachten:

* Bei `single` ist der gesamte Post bzw. Page Text in einer HTML `<section>` mit der Class `.page__content` untergebracht.
* Bei `home` ist der Text dagegen in einem `<div>` mit Klasse `.archive` untergebracht.

Das benutzen wir in unserem CSS, das wir am Ende der Datei `/assets/css/main.scss` anhängen. Sollte es diese Datei bei Dir im Repository noch nicht geben, einfach neu leer anlegen und darauf achten, dass sie so beginnt:

```scss
---
# Nur für Jekyll: Frontmatter erforderlich
---

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // Skin
@import "minimal-mistakes"; // Theme

// Eigene Styles hier anhängen
```

## Blocksatz

Hier ist der Blocksatz CSS Code, den wir nun darunter anhängen:

```css
/* Für alle Layouts außer home */
.blocksatz .page__content p,
.blocksatz .page__content ul,
.blocksatz .page__content ol,
.blocksatz .page__content li {
  text-align: justify;
}

/* Speziell für home-Layout */
.blocksatz .archive p,
.blocksatz .archive ul,
.blocksatz .archive ol,
.blocksatz .archive li {
  text-align: justify;
}
```

Wie ihr seht, habe ich hier Blocksatz für alle Paragraphen, unsortierte Listen, sortierte Listen und Listen-Items definiert. Das war für mich bisher ausreichend, aber ihr könnt ja gerne ergänzen, falls euch auffällt, dass etwas noch nicht im Blocksatz ist.

## Silbentrennung

### Spracheinstellung
Da ist es vor allem wichtig, die Sprache im erzeugten HTML korrekt zu hinterlegen. Heißt: Im `<html>` tag muss die Sprachangabe danach stehen: `<html lang="de-DE">`.

Das erreicht man, indem man in seiner `_config.yml` dies auf root level einbaut:

```yaml
locale: de-DE
```

Das zieht aber möglicherweise Probleme nach sich. Wenn ihr jetzt den ein oder anderen, englischsprachigen GUI Text vermisst, liegt das vermutlich daran, dass das _minimal mistakes_ Theme jetzt deutsche GUI Texte anzeigen will, aber keine findet.

Sollte das der Fall sein, legt euch eine Datei `ui-text.yml` im Ordner `_data` in eurem Repository an und kopiert euch aus der [gleichnamigen Datei des original minimal mistakes Themes][ui-text] den Abschnitt `de-DE:` inklusive aller darunter folgenden Übersetzungen raus und setzt dies in eure eigene `ui-text.yml` Datei in eurem Repository ein. – Damit sollten alle UI Texte wieder auftauchen und zwar auf Deutsch.

### Hyphenation
Um jetzt auch die Silbentrennung zu aktivieren, müsst ihr in euren CSS Klassen, die wir oben schon in der `/assets/css/main.scss` definiert haben, noch diese drei Zeilen zusätzlich mit aufnehmen:

```css
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
```

Abschließend sieht die gesamte Datei `/assets/css/main.scss` nun also so aus:

```scss
---
# Nur für Jekyll: Frontmatter erforderlich
---

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // Skin
@import "minimal-mistakes"; // Theme

// Eigene Styles hier anhängen

/* Für alle Layouts außer home */
.blocksatz .page__content p,
.blocksatz .page__content ul,
.blocksatz .page__content ol,
.blocksatz .page__content li {
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

/* Speziell für home-Layout */
.blocksatz .archive p,
.blocksatz .archive ul,
.blocksatz .archive ol,
.blocksatz .archive li {
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}
```

🔲
{: style="text-align: right" }

[ui-text]: https://raw.githubusercontent.com/mmistakes/minimal-mistakes/refs/heads/master/_data/ui-text.yml