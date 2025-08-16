---
title: "Casio Taschenrechner: Firmware, Seriennummer, Diagnose"
date: 2025-07-02
last_modified_at: 2025-07-02
categories: 
  - taschenrechner
tags:
  - casio
  - firmware
  - seriennummer
  - diagnose
excerpt: "Der Artikel beschreibt, wie man herausfinden kann, welche Firmware auf einigen Casio Taschenrechnern installiert ist."
header:
  teaser: /assets/images/fx-991dex-version.jpeg
---

Bei einigen Casio Taschenrechnern gibt es ein verstecktes System-Menü, das man durch eine geeignete Tastenkombination aktivieren kann. Beim fx-991DE X z.B. ist das die Tastenkombination [SHIFT] [7] [ON], egal, ob der Rechner an oder aus ist.
Im Display erscheint dann oben `DIAGNOSTIC` und unten `PRESS AC`. Tut man nichts, verschwinder das nach wenigen Sekunden wieder und man kann mit dem Rechner normal arbeiten.
Wenn man sich aber beeilt und außerdem noch *nicht* [AC] drückt, sondern die Taste [9], dann zeigt der Rechner viele Achten an, dazu unten am Ende x10^15.
Jetzt drücken wir die Taste [SHIFT] fünf mal, währenddessen zeigt der Rechner im Display verschiedene Dinge an (eine Art Screen Test).

## Firmware Version
Aber nach dem fünften Tastendruck zeigt *mein* fx-991DE X im Display oben an: `CY-251 VerA`. – Ganz offensichtlich eine Art Firmware Versionsnummer.
Und eurer? Was zeigt eurer an? Schreibt's in die Kommentare!

Drückt man jetzt wieder *nicht* [AC] (was aber angeboten wird), sondern die Taste [MENU], dann werden offenbar noch Prüfsummen o.ä. berechnet und ausgegeben. Die beiden mittleren, bisher leeren Zeilen im Display füllten sich mit `SUM D906 OK` und `P00 Read OK`.

![Wissenschaftlicher Taschenrechner Casio fx-991DE X mit aktiviertem Diagnose-Systemmenü, Display zeigt oben DIAGNOSTIC und unten PRESS AC.](/assets/images/fx-991dex-full.jpeg)

## Seriennummer
*Jetzt* drücken wir tatsächlich [AC] und freuen uns, dass wir endlich die *Seriennummer* unseres Casios erfahren! Meine lautet: `000800044169` – Sagt das jemandem etwas? Kann man hieraus etwas ablesen? Den Produktionsort, das Produktionsdatum?

## Tastatur Test
Nun können wir erneut [AC] oder auch die [=] Taste drücken und auf dem Display erscheint oben links eine `00`. Der Rechner erwartet jetzt von uns, dass wir alle Tasten – mit Ausnahme der [ON] Taste!! – von links oben nach rechts unten drücken. Bei jedem erfolgreichen Tastendruck zählt der Zähler um eins hoch. Wir beginnen also mit [SHIFT], dann [ALPHA] und jetzt wird's schon knifflig, weil die Cursortasten "krumm" liegen. Korrekt weiter geht es mit [⏶], dann [⏵], dann [MENU] und weiter wieder links mit [OPTN], [CALC], dann [⏴], dann [⏷], Integral, [x] etc.

## Kontrast
Die Taste [=] ist dann Nr. 49 und es folgt sofort ein neuer Bildschirm, auf dem man den Kontrast einstellen kann und wo man zusätzlich – darin unterscheidet er sich vom normalen Kontrast-Einstell-Bildschirm – den hexadezimalen Wert der Kontrasteinstellung erfährt.

## Ende
Hier geht es mit [AC] raus bzw. weiter und schließlich sehen wir noch `TEST OK` und `Reset All` und `Press AC` auf dem Screen. Das tun wir und sind zurück im normalen Operationsmodus des fx-991 DE X.

## Andere Modelle
Für so manch anderes Modell funktioniert das ebenfalls so – oder so ähnlich. Da muss man ein bisschen experimentierfreudig sein. Ich glaube nicht, dass man etwas kaputt machen kann.

### fx-991MS 2nd ed.
Beim fx-991MS 2nd ed., der ja ein ganz anderes Display hat, sieht der Display Test natürlich anders aus. Aber der Einstieg funktioniert genauso über [SHIFT] [7] [ON] gleichzeitig. Es wird dann in der oberen, alphanumerischen Anzeigezeile eine sehr einfache Rechenaufgabe angezeigt, z.B. `2+1=?` und darunter, in der Sieben-Segment-Anzeige steht dann `AC`.  
Wenn man die Rechenaufgabe richtig beantwortet, erscheint aber lediglich `TEST OK` in der oberen Zeile und der Rechner geht wieder zum Tagesgeschäft über.  
Wenn man aber die Aufgabe ignoriert und die Taste [9] drückt (also wie vorhin, beim fx-991 DE X), dann geht es in den Display Test, den man – ebenfalls wie oben – durch mehrmaliges Drücken der [SHIFT] Taste durchsteppt. Nach viermal ist hier aber schon Schluss und mein fx-991MS 2nd ed. zeigt dann `ROM512  POOO` in der oberen Zeile an, darunter `AC`.  
Drückt man jetzt [AC], kommt man auch hier in die Kontrasteinstellung mit einem Hex-Wert und kann mit den Cursor-Tasten links/rechts den Kontrast verändern.  
Erneutes Drücken von [AC] führt – auch wie oben – zum Keyboard-Test, der ganz analog zum fx-991DE X funktioniert. Danach erscheint `TEST OK` und `AC` und nach Druck auf diese Taste ist wieder alles normal.


🔲
{: style="text-align: right" }