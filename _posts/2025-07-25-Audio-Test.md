---
title: "Audio Test"
date: 2025-07-25
last_modified_at: 2025-07-25
categories:
  - Blog
tags:
  - audio
excerpt: Nur ein kleiner Test, ob/wie das Einbetten von Audio funktioniert.
header:
  teaser: /assets/images/audioembed.jpeg
---

Hier ein kleiner Audioschnipsel für [ASMR][asmr-wikipedia] Fans ...

<audio controls>
   <source src="/assets/audio/gehen-auf-laub.m4a" type="audio/mpeg">
   Scheinbar kann Dein Browser den an dieser Stelle eigentlich eingebetteten Audio Player nicht rendern. :-( 
</audio>

Für mich nur ein Test, ob und wie man Audio in seine Blog Posts einbetten kann. Das eröffnet dann z.B. auch das Unterbringen von Podcast Episoden hier auf dem Blog.

Man schreibt Blog Posts hier ja in Markdown, aber das bietet von Haus aus keine Syntax zur Einbettung von Audio (und auch nicht für Video). Zum Glück kann man ja aber in Markdown Dateien auch jederzeit HTML Code unterbringen. Und genau für solche Fälle muss man das dann auch mal tun.

Die HTML Syntax zum Einbetten des Audio-Schnipsels oben in der Markdown Datei für diesen Blog Post sieht dann so aus:

```HTML
<audio controls>
   <source src="/assets/audio/gehen-auf-laub.m4a" type="audio/mpeg">
   Scheinbar kann Dein Browser den an dieser Stelle eigentlich eingebetteten Audio Player nicht rendern. :-( 
</audio>
```



🔲
{: style="text-align: right" }

[asmr-wikipedia]: https://de.wikipedia.org/wiki/Autonomous_Sensory_Meridian_Response