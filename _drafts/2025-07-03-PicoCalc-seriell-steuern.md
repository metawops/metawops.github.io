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
header:
  teaser: /assets/images/picocalc1.jpeg
---

Vor einigen Wochen erreichte mich endlich der lang ersehnte [**PicoCalc** von ClockworkPi][pico]. Die Lieferzeiten sind lang, da es eine kleine Firma ist und immer erst Aufträge gesammelt werden, ehe ein neuer Batch hergestellt wird.

![ClockworkPi PicoCalc](/assets/images/picocalc1.jpeg)

## Fragen & Wissen

Nach dem problemlosen Zusammenbau und erster Inbetriebnahme stellte ich fest, dass die Erst-Tutorial-Situation doch recht mager ist. Man weiß nicht so recht, was man mal als erstes ausprobieren kann, man wird ein wenig allein gelassen. Wie bootet der, was bootet der, warum bootet er das, was ist auf der SD-Karte, wie benutzt man das, was kann er alles, wo ist Python, was kann das BASIC, wie gehen Spiele etc. sind da nur die ersten Fragen.  
Danach dann: Was kann ich wo genau extern anschließen und wie spreche ich es an? Hat das Ding nun eine RealTimeClock drin oder muss ich eine extern nachrüsten? Wenn ja, wie? Und so weiter. Zu all diesen Dingen vielleicht später noch mehr Posts hier.

Nach etwas Herumstochern im Nebel habe ich dann recht schnell festgestellt, dass man am ehesten Fahrt mit dem Gerät aufnimmt, wenn man sich durchs entsprechende [Diskussionsforum für den PicoCalc][forum] kämpft und einfach mal eine ganze Weile lang Posts dort studiert. Da finden sich allerlei Perlen und viel mehr Wissen, als es über die Webseiten des Herstellers gibt. Insbesondere [diesen Thread][thread] kann ich da zum Einstieg empfehlen! ;) 

## Richtige Tastatur

Nach allerlei Experimenten fragte ich mich, ob ich auch eine "richtige" Tastatur benutzen kann, um auf dem PicoCalc zu programmieren. Und das geht. *Eine* Methode ist da die Ausnutzung der seriellen Schnittstelle, die über den USB-C Port des PicoCalc zur Verfügung gestellt wird – also *nicht* der Micro-USB Port des eingesetzten Raspberry Pi Pico.  
Eine andere Variante, die ich im Forum gesehen habe, ist, eine USB-Tastatur direkt an den PicoCalc anzuschließen. Dafür muss man aber erstmal einen USB-Port für diesen Zweck haben, den der PicoCalc nicht hat. Offenbar kann man den aber "organisieren". Ob das mit einem herkömmlichen Raspberry Pi Pico 1/2 möglich ist, oder nur mit dem "Luckfox Lyra", ist mir noch nicht ganz klar geworden. Dazu muss ich noch mehr das o.a. Forum studieren.

## Serielle Verbindung

Ich kann hier nur für macOS sprechen, aber prinzipiell funktioniert das alles natürlich auch auf einem Windows- oder Linux-Rechner. Wichtig ist für eine saubere Fernsteuerung des PicoCalc, dass die verwendete Software das VT100 Protokoll spricht.  

An der Stelle war meine unter macOS so geliebte Serial Terminal App "CoolTerm" leider raus und ich musste nach Alternativen suchen. Glücklicherweise liegt die Lösung macOS schon in Form des Commandline Tools `screen` bei.

All das im Folgenden Beschriebene bezieht sich auf einen PicoCalc, der MMBasic gebootet hat, also als Firmware PicoMite oder WebMite (letzteres benutze ich aktuell, da ich einen Raspberry Pi Pico 2W im PicoCalc gesteckt habe) nutzt.

## Vorgehen Schritt für Schritt

Das Fernsteuern des PicoCalc vom Mac aus bringt u.a. die folgenden Vorteile:
* Tippen auf einer "richtigen" Tastatur
* Mehr Zeichen pro Zeile und mehr Zeilen als der Textbildschirm des PicoCalc
* Damit einhergehend auch ein größerer Editorbereich inkl. farbigem Quellcode
* Reiner Grafikbildschirm auf dem PicoCalc, kein Überschreiben mehr mit dem Textprompt
* getrennte Texteingabe nur auf dem Mac, dadurch z.B. saubere Speicherung des Grafikbildschirms in eine Datei

Als Tool am Mac benutzen wir [iTerm2][iterm2], was ja sowieso das beste Terminalprogramm ist – und noch dazu kostenlos.

Die folgenden Schritte habe ich durchgeführt, um den PicoMite vom Mac aus bequem zu bedienen. 

* Zunächst den PicoCalc einschalten, MMBasic booten lassen und den USB-C Port des PicoCalc mit dem Mac verbinden (natürlich mit einem ordentlichen, voll beschalteten Datenkabel)
* Auf dem Mac erstellen wir in iTerm2 ein neues Profil, eigens für PicoCalc Sessions. Dabei die folgenden Punkte beachten:
   * 
   * (wichtig darin: VT100 Emulation!)
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

[pico]: https://www.clockworkpi.com/picocalc
[forum]: https://forum.clockworkpi.com/c/picocalc/31
[thread]: https://forum.clockworkpi.com/t/first-thoughts-on-arrival-and-beginners-tutorial/17126
[iterm2]: https://iterm2.com