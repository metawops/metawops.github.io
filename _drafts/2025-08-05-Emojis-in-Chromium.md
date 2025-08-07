---
title: "Emojis im Chromium Browser auf dem Raspberry Pi"
date: 2025-08-05
last_modified_at: 2025-08-05
categories:
  - digitale-tipps
tags:
  - raspberry-pi
  - chromium
  - emojis
excerpt: Wir lösen das Problem, wenn der Chromium Browser auf dem Raspberry Pi keine Emojis anzeigt.
header:
  teaser: /assets/images/TeaserImage
---

Nachdem ich meinen [Artikel über die *Eingabe* von Unicode-Zeichen am Mac][unicode-artikel] geschrieben hatte, wollte ich mir mal anschauen, wie das wohl der Chromium Browser auf meinem Raspberry Pi 500 alles so rendert. Klappen die Unicode-Zeichen? Wie sehen die [Keycaps][keycaps] aus?

## Chromium & Raspberry Pi OS

Die Kombination aus einem Raspberry Pi 500 und dem Raspberry Pi Monitor ist eine feine und macht einen hübschen, schlanken Arbeitsplatz.

> Foto folgt

Das Standard OS für Raspberry Pis heißt seit geraumer Zeit "Raspberry Pi OS" und ein beliebter Browser ist hier Chromium.

Wollen doch mal sehen, wie mein Artikel von Chromium unter Raspberry Pi OS gerendert wird:

> Screenshot VOR Font-Installation

Offenbar kann Chromium auf dieser Plattform keine Emojis rendern! &#128561;

## Woran liegt's?

Doch das ist kein Problem von Chromium selbst, wie eine kurze K.I.-Recherche ergibt. Vielmehr fehlt der Standardinstallation von Raspberry Pi OS ein Emoji Font!

Zum Glück kann man das recht schnell beheben.

## Lösung: Emoji Font installieren





🔲
{:.qed}

[unicode-artikel]: https://blog.metawops.de/mac-tipps/Unicode-Zeichen-am-Mac-eingeben/
[keycaps]: https://blog.metawops.de/markdown/Keycaps-in-Markdown-Artikeln/