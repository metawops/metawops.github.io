---
title: "Jedes Unicode Zeichen am Mac eingeben"
date: 2025-07-30
last_modified_at: 2025-07-30
categories:
  - mac-tipps
tags:
  - unicode
  - sonderzeichen
excerpt: Auch unter macOS gibt es die Möglichkeit, beliebige Zeichen über ihre Nummer einzugeben.
header:
  teaser: /assets/images/character-viewer.png
---

Ich habe schon immer etwas neidisch auf die Windows-Fraktion geblickt, wenn es darum ging, Sonderzeichen zu erzeugen, die man nicht direkt über die Tastatur eingeben kann. Da kann man dann meist die `Alt`{:.keycap}-Taste gedrückt halten und auf dem Zehnerblock der Tastatur drei oder vier Ziffern tippen, `Alt`{:.keycap} loslassen und schon erscheint das zugehörige Zeichen.

Mir ist zwar nie klar geworden, warum auf dem *einen* Windows Rechner dann ein anderes Zeichen erschien, als auf dem *anderen* Windows Rechner – bei der selben Ziffernfolge –, aber egal.

## Zusatz-Tastatur aktivieren
Und obwohl ich schon seit vielen, vielen Jahren Mac User bin, habe ich erst jetzt gelernt, dass wir das unter macOS ja auch können! Und es braucht nicht mal eine Tastatur mit Zehnerblock dazu, geht also auch direkt am MacBook.

Wir müssen lediglich einmal in den System Settings – sorry, meine Apple Geräte laufen alle auf Englisch, aber ihr bekommt das sicher hin, wenn euer macOS auf Deutsch läuft – in den Abschnitt "Keyboards" und dort im Abschnitt "Text Input" einmal den "Edit..." Button hinter "Input Sources" klicken:

![macOS System Settings window open to the Keyboard section with the Text Input area visible. The Edit button next to Input Sources is highlighted in blue. The sidebar on the left lists other settings categories such as Appearance, Control Center, and Siri and Spotlight. The overall tone is neutral and instructional. Visible text includes System Settings, Keyboard, Text Input, and Edit.](/assets/images/keyboard-settings-1.png)

Im erscheinenden Dialog links unten aufs Plus-Zeichen klicken:

![Screenshot zeigt die macOS Systemeinstellungen im Bereich Tastatur. Im linken Bereich sind die Eingabequellen sichtbar, unten links ist das Plus-Symbol zum Hinzufügen einer neuen Eingabequelle hervorgehoben. Rechts sind verschiedene Tastatureinstellungen zu sehen.](/assets/images/keyboard-settings-2.png)

Im erscheinenden Dialog unten links im Such-Eingabefeld `uni` eingeben (1), es gibt nur einen Treffer, das "Unicode Hex Input" Keyboard, was rechts oben angezeigt wird (2). Mit Klick auf den "Add" Button rechts unten bestätigen:

![alt text](/assets/images/keyboard-settings-3.png)

Das neue Tastaturlayout ist jetzt in die Liste der konfigurierten Layouts aufgenommen worden und wir bestätigen noch einmal mit dem "Done" Button unten rechts:

![alt text](/assets/images/keyboard-settings-4.png)

Die folgende Einstellung ist optional, aber praktisch, wie ich finde. Wenn wir diesen Schalter einschalten, bekommen wir in der Menüleiste rechts oben ein Icon, über das wir sowohl das aktuell aktive Tastaturlayout sehen können, als auch ein Menü, über das wir das Layout ändern können:

![alt text](/assets/images/keyboard-settings-5.png)

## Tastaturlayouts umschalten
Wenn wir jetzt irgendwo, wo ein Textcursor blinkt, ein Unicode Zeichen eingeben wollen, brauchen wir zwei Dinge:
* Den Code des Zeichens – und zwar in hexadezimal
* Das aktive Unicode Keyboard Layout zur Eingabe des Codes

Letzteres erreichen wir entweder über das eben aktivierte Icon in der Menüleiste ...

![macOS Tastaturlayout Menü Icon und aufgeklapptes Menü von der Menüleiste](/assets/images/keyboard-settings-7.png)

... oder wir benutzen einfach da, wo der Cursor blinkt und wir etwas eingeben wollen die Tastenkombination `⌃`{:.keycap}`space`{:.keycap} zum "Durchsteppen" durch unsere konfigurierten Tastaturlayouts. Genau unter dem blinkenden Cursor erscheint ein kleines GUI Element und das darin farblich hervorgehobene Layout ist dann jeweils das aktive.

## Wie gibt man ein?
Fehlt noch der Code selbst und wie man ihn denn nun eingibt. Letzteres ist einfach: Man hält die `⌥`{:.keycap}-Taste (auch `option`{:.keycap} genannt) gedrückt und gibt nun exakt vier hexadezimale Zeichen ein. Nach Eingabe des vierten Zeichens erscheint das Unicode Symbol direkt und man kann die `⌥`{:.keycap}-Taste wieder loslassen.

Schnell mal ausprobieren mit dem Code `2665`. Wir halten `⌥`{:.keycap}, tippen `2`{:.keycap} `6`{:.keycap} `6`{:.keycap} `5`{:.keycap} und beim Tippen der letzten Ziffer erscheint sofort ein ♥.

## Wo kommen die Codes her?
Wenn man nun die hexadezimalen Codes zu seinen Lieblingszeichen wissen will, gibt es verschiedene Möglichkeiten. Zwei seien genannt.

#### macOS Character Viewer

#### Internet
Es gibt 

🔲
{:.qed}