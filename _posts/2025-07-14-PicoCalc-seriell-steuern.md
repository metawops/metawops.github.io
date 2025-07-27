---
title: "Den PicoCalc seriell steuern"
date: 2025-07-14
last_modified_at: 2025-07-27
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
Der ClockworkPi *PicoCalc*. Foto: Stefan Wolfrum

## Fragen & Wissen

Nach dem problemlosen Zusammenbau und erster Inbetriebnahme stellte ich fest, dass die Erst-Tutorial-Situation doch recht mager ist. Man weiß nicht so recht, was man mal als erstes ausprobieren kann, man wird ein wenig allein gelassen. Wie bootet der, was bootet der, warum bootet er das, was ist auf der SD-Karte, wie benutzt man das, was kann er alles, wo ist Python, was kann das BASIC, wie gehen Spiele etc. sind da nur die ersten Fragen.  
Danach dann: Was kann ich wo genau extern anschließen und wie spreche ich es an? Hat das Ding nun eine RealTimeClock drin oder muss ich eine extern nachrüsten? Wenn ja, wie? Und so weiter. Zu all diesen Dingen vielleicht später noch mehr Posts hier.

Nach etwas Herumstochern im Nebel habe ich dann recht schnell festgestellt, dass man am ehesten Fahrt mit dem Gerät aufnimmt, wenn man sich durchs entsprechende [Diskussionsforum für den PicoCalc][forum] kämpft und einfach mal eine ganze Weile lang Posts dort studiert. Da finden sich allerlei Perlen und viel mehr Wissen, als es über die Webseiten des Herstellers gibt. Insbesondere [diesen Thread][thread] kann ich da zum Einstieg empfehlen! 😉

## Richtige Tastatur

Nach allerlei Experimenten fragte ich mich, ob ich auch eine "richtige" Tastatur benutzen kann, um auf dem PicoCalc zu programmieren. Und das geht. *Eine* Methode ist da die Ausnutzung der seriellen Schnittstelle, die über den USB-C Port des PicoCalc zur Verfügung gestellt wird – also *nicht* der Micro-USB Port des eingesetzten Raspberry Pi Pico. Das schauen wir uns gleich an.

Eine *andere* Variante, die ich im Forum gesehen habe, ist, eine USB-Tastatur direkt an den PicoCalc anzuschließen. Dafür muss man aber erstmal einen USB-Port für diesen Zweck haben, den der PicoCalc nicht hat. Offenbar kann man den aber "organisieren". Ob das mit einem herkömmlichen Raspberry Pi Pico 1/2 möglich ist, oder nur mit dem "Luckfox Lyra", ist mir noch nicht ganz klar geworden. Dazu muss ich noch mehr das o.a. Forum studieren.

## Serielle Verbindung

Ich kann hier nur für macOS sprechen, aber prinzipiell funktioniert das alles natürlich auch auf einem Windows- oder Linux-Rechner. Wichtig ist für eine saubere Fernsteuerung des PicoCalc, dass die verwendete Software das VT100 Protokoll spricht.

An der Stelle war meine unter macOS so geliebte Serial Terminal App "CoolTerm" leider raus und ich musste nach Alternativen suchen. Glücklicherweise liegt die Lösung macOS schon in Form des Commandline Tools `screen` bei.

All das im Folgenden Beschriebene bezieht sich auf einen PicoCalc, der MMBasic gebootet hat, also als Firmware PicoMite oder WebMite (letzteres benutze ich aktuell, da ich einen Raspberry Pi Pico 2W im PicoCalc gesteckt habe) nutzt.

## Vorteile & Voraussetzungen

Das Fernsteuern des PicoCalc vom Mac aus bringt u.a. die folgenden Vorteile:
* Tippen auf einer "richtigen" Tastatur
* Mehr Zeichen pro Zeile und mehr Zeilen als der Textbildschirm des PicoCalc
* Damit einhergehend auch ein größerer Editorbereich inkl. farbigem Quellcode
* Reiner Grafikbildschirm auf dem PicoCalc, kein Überschreiben mehr mit dem Textprompt
* getrennte Texteingabe nur auf dem Mac, dadurch z.B. saubere Speicherung des Grafikbildschirms in eine Datei

Als Tool am Mac benutzen wir [iTerm2][iterm2], was ja sowieso das beste Terminalprogramm ist – und noch dazu kostenlos.

## Vorgehen Schritt für Schritt

Die folgenden Schritte habe ich durchgeführt, um den PicoMite vom Mac aus bequem zu bedienen. 

* Zunächst den PicoCalc einschalten, MMBasic booten lassen und den USB-C Port des PicoCalc mit dem Mac verbinden (natürlich mit einem ordentlichen, voll beschalteten Datenkabel)
* Auf dem Mac erstellen wir in iTerm2 ein neues Profil, eigens für PicoCalc Sessions. Dabei die folgenden Punkte beachten:
   * Auf dem "General" Reiter wählen wir bei "Command" den Eintrag "Command" und geben dahinter das folgende Kommando ein: `screen /dev/tty.usbserial-145130 115200,cs8,-ixon`
   * Dabei muss natürlich der `/dev/tty*`-Pfad korrekt sein, also zum angestöpselten PicoCalc gehören. Am besten findet man den über ein `ls /dev/tty*` heraus und vergleicht die Ausgabe *vor* und *nach* dem Anstöpseln des PicoCalc. 
   * Obacht: Selbst an ein und demselben Mac kann sich dieser Pfad bzw. der Name des seriellen Devices des PicoCalc ändern! Also immer mal wieder checken, nach Anstöpseln.
   ![iTerm2 Profile 1](/assets/images/iterm2-profile-1.png)
   * Auf dem Reiter "Terminal" ist es wichtig, beim Setting "Report terminal type" den Eintrag "vt100" auszuwählen:
   ![iTerm2 Profile 2](/assets/images/iterm2-profile-2.png)
   * Ansonsten kann man sich das Profil nach Gutdünken gestalten, was z.B. Schriftart, -größe, Farben, Badge, Keyboard Shortcut (ich habe `⌃`{:.keycap}`⌘`{:.keycap}`P`{:.keycap} festgelegt) etc. betrifft.
   
* In iTerm2 kann ich nun über die Tastenkombination ⌃⌘P einen neuen Tab aufmachen, der sich sofort über das konfigurierte `screen` Kommando mit dem angeschlossenen PicoCalc verbindet.
* Es erscheinen erstmal ein paar wirre Zeichen, aber nach einmal Return drücken sollte das PicoCalc Prompt `>` erscheinen.

* Jetzt müssen wir den Textbildschirm exklusiv für die serielle Verbindung nutzen, so dass Text nicht mehr auf dem PicoCalc angezeigt wird, weil wir sonst die Spalten- und Zeilenzahl nicht ändern können. Das geht über das Kommando
    * `OPTION LCDPANEL NOCONSOLE`
* Danach können wir die Textbildschirm- bzw. Terminal-Auflösung z.B. auf 40 Zeilen à 80 Spalten setzen:
    * `OPTION DISPLAY 40,80`
* Wenn man jetzt z.B. auf das `DRIVE "B:` wechselt und `FILES` sagt, müsste man sofort sehen, dass kein Zeilenumbruch nach 40 Zeichen mehr passiert.

   ![PicoCalc serial](/assets/images/picocalc-serial-1.png)

* Auch der Quellcode Editor (Kommando `EDIT`) nutzt jetzt die 80x40 Zeichen:

   ![PicoCalc Editor](/assets/images/picocalc-serial-editor.png)

* Mit der `fn`{:.keycap} Taste auf einer original Apple Tastatur kann man tatsächlich die Funktionstasten drücken, also `fn`{:.keycap}`F1`{:.keycap} ist dann `F1`{:.keycap}. Wenn man in den macOS Settings umschaltet, dass die Standardbelegung nicht das Symbol darüber sein soll, sondern die F-Taste, kann man sich das Gedrückthalten von `fn`{:.keycap} sogar sparen und die F-Tasten können 1:1 wie am PicoCalc genutzt werden.
   * Das geht aber nur so einfach auf der MacBook eigenen Tastatur bzw. bei Apple Tastaturen. Bei externen USB-Tastaturen mag das nicht funktionieren, je nach dem, welche Firmware sie nutzen, wie sie programmiert sind, was sie bei Tastendrücken senden. Auf meiner Keychron Q5 Max z.B. muss ich weiterhin `Fn`{:.keycap} halten, egal, wie das macOS Setting eingestellt ist!
* Das `OPTION LCDPANEL NOCONSOLE` Kommando scheint sich schonmal zurückzusetzen. Das merkt man immer daran, dass plötzlich doch wieder Text auf dem LCDisplay des PicoCalc angezeigt wird. Dann muss man es einfach nochmal eingeben.
   * Zum Beispiel spuckt MMBasic offenbar bei jedem `RUN` Kommando zunächst die aktuellen Options aus (führt also `OPTION LIST` aus). Wenn das Programm also etwas zeichnet, wird dies über die OPTIONS Ausgabe gezeichnet, was natürlich doof ist. Das o.a. Kommando `OPTION LCDPANEL NOCONSOLE` schafft da Abhilfe. Nur damit kann man also dann saubere Grafikausgaben machen und auch das `>` Prompt erscheint dann nicht mehr auf dem LCD Screen des PicoCalc und zerstört so nicht mehr die Grafik, die man nun also mit einem `SAVE IMAGE` Kommando sauber in eine BMP Datei speichern kann.

* Damit auch Programmlistings über das `LIST` Kommando nicht nach wenigen Zeilen mit `PRESS ANY KEY …` pausieren, muss man das folgende Kommando eingeben:
    * `OPTION LIST 0`

Letzter Tipp: Um die laufende `screen` "Umgebung" ordnungsgemäß zu verlassen, gibt es mehrere Möglichkeiten. Für mich die praktikabelste: `⌃`{:.keycap}`A`{:.keycap} und danach `K`{:.keycap} drücken. Das `K` steht für *kill* und man wird auch nochmal sicherheitshalber gefragt, ob man das wirklich will. Also nochmal mit `Y`{:.keycap} bestätigen. Damit hängt das `screen` Kommando nicht im Hintergrund, sondern ist beendet. Würde es nämlich noch im Hintergrund hängen, könnte man nicht erneut ein iTerm2 Tab mit `⌃`{:.keycap}`⌘`{:.keycap}`P`{:.keycap} aufmachen, weil das Device dann schon belegt/geöffnet ist.

Was macht ihr so mit eurem PicoCalc?

🔲
{: style="text-align: right" }

[pico]: https://www.clockworkpi.com/picocalc
[forum]: https://forum.clockworkpi.com/c/picocalc/31
[thread]: https://forum.clockworkpi.com/t/first-thoughts-on-arrival-and-beginners-tutorial/17126
[iterm2]: https://iterm2.com