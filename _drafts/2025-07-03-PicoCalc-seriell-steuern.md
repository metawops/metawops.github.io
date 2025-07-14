---
title: "Den PicoCalc seriell steuern"
date: 2025-07-14
last_modified_at: 2025-07-14
categories:
  - Gadgets
tags:
  - clockworkpi
  - picocalc
  - seriell
  - remote
excerpt: "Wir schauen uns an, wie man den PicoCalc mit MMBasic Firmware bequem vom Mac aus bedienen kann."
---


Serielle Remote-Sessions (mit PicoMite / WebMite Firmware)
* Über den USB-C Port des PicoCalc mit dem MacBook verbinden
* Auf dem MacBook habe ich in iTerm2 ein Profil eigens für PicoCalc Sessions eingerichtet (wichtig darin: VT100 Emulation!)
* Man kann einen neuen Tab in iTerm2 über die Tastenkombination ⌘ ⌃ P aufmachen
* Dies führt sofort ein screen Kommando aus (siehe Profil Config in iTerm2)
* Achtung: den device name muss man je nach Rechner, auf dem man das in iTerm2 macht, im Profil anpassen! Der selbe PicoCalc verbindet sich an anderen Macs mit anderen /dev/tty* Namen!
* Einmal Return drücken und man sollte das PicoCalc Prompt > sehen
* Jetzt müssen wir den Textbildschirm exklusiv für die serielle Verbindung nutzen, so dass Text nicht mehr auf dem PicoCalc angezeigt wird, weil wir sonst die Spalten- und Zeilenzahl nicht ändern können. Das geht über das Kommando
    * OPTION LCDPANEL NOCONSOLE
* Danach können wir z.B. die Textbildschirm („Terminal“-) Auflösung auf 40 Zeilen à 80 Spalten setzen:
    * OPTION DISPLAY 40,80
* Wenn man jetzt z.B. auf das DRIVE „B: wechselt und FILES sagt, müsste man sofort sehen, dass kein Zeilenumbruch nach 40 Zeichen mehr passiert.
* Auch der EDITor nutzt jetzt die 80x40 Zeichen
* Mit der fn Taste auf dem Mac Keyboard kann man tatsächlich die Funktionstasten drücken, also fn+F1 ist dann F1. Wenn man in den macOS Settings umschaltet, dass die Standardbelegung nicht das Symbol darüber sein soll, sondern die F-Taste, kann man sich fn auch sparen.
* Das geht aber nur so einfach auf der MacBook eigenen Tastatur. Bei externen USB-Tastaturen mag das nicht funktionieren, je nach dem, welche Firmware sie nutzen, wie sie programmiert sind, was sie bei Tastendrücken senden. Auf meiner Keychron Q5 Max z.B. muss ich weiterhin Fn halten, egal, wie das macOS Setting eingestellt ist!
* Bei jedem RUN Kommando spuckt WebMite zunächst die aktuellen Options aus (führt also OPTION LIST aus). Wenn das Programm also etwas zeichnet, wird dies über die OPTIONS Ausgabe gezeichnet, was natürlich doof ist. Das o.a. Kommando OPTION LCDPANEL NOCONSOLE schafft da Abhilfe. Nur damit kann man also dann saubere Grafikausgaben machen und auch das > Prompt erscheint dann nicht mehr auf dem LCD Screen des PicoCalc und zerstört so nicht mehr die Grafik, die man nun also mit einem SAVE IMAGE Kommando sauber in eine BMP Datei speichern kann.
￼
￼

* Um Programmlistings über das LIST Kommando nicht nach wenigen Zeilen zu pausieren (mit PRESS ANY KEY …), muss man
    * OPTION LIST 0
* eingeben.




🔲
{: style="text-align: right" }