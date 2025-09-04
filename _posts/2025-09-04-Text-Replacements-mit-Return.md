---
title: "Text Replacements mit Return"
date: 2025-09-04
last_modified_at: 2025-09-04
categories:
  - mac-tipps
tags:
  - textersetzungen
  - text-replacements
  - automatisierung
  - produktivität
excerpt: Wir lernen, wie man auch Zeilenumbrüche bei Textersetzungen unter macOS, iOS, iPadOS einbauen kann.
header:
  teaser: /assets/images/text-replacements.png
---

Ob ihr's glaubt oder nicht: Ja, doch, unter macOS und iOS und iPadOS können die systemseitig konfigurierbaren Textersetzungen ("Text Replacements" heißen sie im englischen Original) auch Zeilenumbrüche enthalten! 

Wenn ihr also statt jedesmal am Ende einer eMail "zu Fuß" die Formel ...

```
Mit freundlichen Grüßen
Stefan Wolfrum
```

tippen wollt und euch stattdessen in macOS über die `Systemeinstellung > Keyboard > Text Replacements` dafür ein Kürzel (z.B. `mfg`) anlegen wollt, müsst ihr den Zeilenumbruch nach dem Wort `Grüßen` einfach mit `⌥`{:.keycap}`⏎`{:.keycap} (also Option + Return) eingeben!

Das Problem ist dann zwar, dass ihr nach Eingabe dieses speziellen Returns keinen blinkenden Cursor mehr seht, aber es ist dennoch ein Zeilenumbruch entstanden und ihr könnt die zweite Zeile tippen. Wenn ihr mit den Cursortasten im Eingabefeld umherlauft, könnt ihr auch den gesamten Text sehen – aber immer nur mit einem "Sichtfenster" von einer Zeile darauf.

![](/assets/images/text-replacements.png)

Im Screenshot kann man es erahnen, dass oberhalb vom Text "Stefan" noch etwas steht. Apple hat das also nicht vorgesehen, dass Textersetzungen mehr als eine Zeile haben – aber es geht trotzdem!

### Und unter iOS/iPadOS?

Das geht leider nicht in der Settings App unter iOS bzw. iPadOS, so wie es unter macOS geht! 🙁 Dort springt der Cursor einfach ins nächste Eingabefeld weiter, wenn man `⌥`{:.keycap}`⏎`{:.keycap} drückt. 🤷‍♂️

**Die gute Nachricht ist:** Da diese Text Replacements via iCloud gesynct werden, kann man die auf einem Mac angelegten auch am iPhone / iPad nutzen – inklusive der Zeilenumbrüche.

Man kann sie halt nur leider am iPhone / iPad derzeit (iOS/iPadOS 18.6.2) nicht _erzeugen_.

Aber, klar, dafür braucht es natürlich einen Mac …

🔲
{:.qed}