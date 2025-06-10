---
title: "Github Pages: Link im Bio Feld"
date: 2025-06-10
last_modified_at: 2025-06-10
categories: GithubPages
tags: blog scss
excerpt: Der Artikel zeigt, wie man in der Bio Angabe seines Github Pages Blogs einen Link unterbringen und stylen kann.
---
## Worum geht's?
Ich wollte in meinem auf dem Theme _minimal mistakes_ basierenden Github Pages Blog in der `author/bio` Angabe in der `_config.yml` einen Text verlinken. Positiv überrascht war ich, dass das ganz einfach geht: Die `bio` Angabe erlaubt Markdown! 🎉

Also kann man das in seiner `_config.yml` einfach so machen:

```yaml
author:
  name: "Stefan Wolfrum"
  avatar: "/assets/images/bio-photo.jpg"
  bio: "Co-Gründer [MakerSpace Bonn](https://makerspacebonn.de) und OK Lab Bonn. Geek."
  location: "Bonn, Germany"
```

Das ergibt dann auf der Webseite dieses Bild:

![Link farblos](/assets/images/SCR-20250610-jhss.png)

Was fällt (nicht) auf? Rrrrichtig: Der Link ist ja gar nicht hervorgehoben! So merkt das ja keiner, dass man auf "MakerSpace Bonn" klicken kann!

## Link Styling
Wie kann man also den Link einfärben?

Dazu brauchen wir erstmal in unserem Repository die Datei `assets/css/main.scss`. Sollte es den Ordner und/oder die Datei noch nicht geben, dann einfach den/die Ordner anlegen und eine neue, leere Datei mit dem Namen `main.scss` (ja, nicht `.css`, sondern `.scss`) anlegen.

Diese Datei **muss** mit leerem Front Matter beginnen und dann die folgenden zwei `@import` Zeilen enthalten:

```scss
---
---

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // Skin
@import "minimal-mistakes"; // Theme
```

Ich arbeite meist mit VSCode und das meckert bei diesen beiden Front Matter Trennlinien, unterkringelt den ersten `@import` rot und meint `{ expected`. Aber egal. Ignorieren. Der Jekyll Build Prozess funktioniert und die Seiten werden fehlerfrei gebaut.

Ab dahinter können wir nun eigene CSS oder SCSS Stylings unterbringen.

Die Datei könnte also z.B. so aussehen:

```scss
---
---

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // Skin
@import "minimal-mistakes"; // Theme

// Eigene Styles hier anhängen
.author__bio a {
  color: $link-color;
  transition: color 0.2s;
}
.author__bio a:hover,
.author__bio a:focus {
  color: $link-color-hover;
}
```

Hier habe ich gleich anstelle fixer Farben für den Link und das Hovern über dem Link die Variablen `$link-color` respektive `$link-color-hover` eingesetzt, die aus dem Theme kommen und für die aktuellen Skin-Linkfarben stehen. Sowas geht dann eben nur mit SCSS.

Und schon ist der verlinkte Text in der Link-Farbe des aktuell eingestellten Skins des _minimal mistakes_ Themes sichtbar:

![Link korrekt](/assets/images/SCR-20250610-jqtc.png)

🔲
{: style="text-align: right" }