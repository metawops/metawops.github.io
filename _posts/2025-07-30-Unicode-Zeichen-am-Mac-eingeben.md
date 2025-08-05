---
title: "(Fast) jedes Unicode Zeichen am Mac eingeben"
date: 2025-07-30
last_modified_at: 2025-07-30
categories:
  - mac-tipps
tags:
  - unicode
  - sonderzeichen
excerpt: Auch unter macOS gibt es die Möglichkeit, beliebige Zeichen über ihre Nummer einzugeben. Hier lernen wir, wie.
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

Im erscheinenden Dialog unten links im Such-Eingabefeld `uni` eingeben (1), es gibt nur einen Treffer, das "Unicode Hex Input" Keyboard, was rechts oben angezeigt wird (2). Mit Klick auf den "Add" Button rechts unten (3) bestätigen:

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

... oder wir benutzen einfach da, wo der Cursor blinkt und wir etwas eingeben wollen die Tastenkombination `⌃`{:.keycap}`␣`{:.keycap} (`␣` ist ein Space Zeichen, steht also für die Leertaste `space`{:.keycap}) zum "Durchsteppen" durch unsere konfigurierten Tastaturlayouts. Genau unter dem blinkenden Cursor erscheint ein kleines GUI Element und das darin farblich hervorgehobene Layout ist dann jeweils das aktive.

Eine weitere Alternative ist es, bei Tastaturen mit dem Globus-Symbol &#127760; diese Taste einmal kurz zu drücken. Das schaltet ein Tastaturlayout weiter.

## Wie gibt man ein?
Fehlt noch der Code selbst und wie man ihn denn nun eingibt. Letzteres ist einfach: Man hält die `⌥`{:.keycap}-Taste gedrückt und gibt nun exakt vier hexadezimale Zeichen ein. Nach Eingabe des vierten Zeichens erscheint das Unicode Symbol direkt und man kann die `⌥`{:.keycap}-Taste wieder loslassen.

Schnell mal ausprobieren mit dem Code `2665`. Wir halten `⌥`{:.keycap}, tippen `2`{:.keycap} `6`{:.keycap} `6`{:.keycap} `5`{:.keycap} und beim Tippen der letzten Ziffer erscheint sofort ein ♥.

## Wo kommen die Codes her?
Wenn man nun die hexadezimalen Codes zu seinen Lieblingszeichen wissen will, gibt es verschiedene Möglichkeiten. Zwei seien genannt.

#### macOS Character Viewer
Mit `⌃`{:.keycap}`⌘`{:.keycap}`␣`{:.keycap} (möglicherweise zweimal drücken!) aktiviert man unter macOS ein kleines Fenster, den Character Viewer. Der erscheint möglicherweise erstmal nur in seiner kompakten Form. Dann klicken wir rechts unten auf den kleinen Doppelpfeil:

![alt text](/assets/images/character-viewer-2.png)

Denn dann erscheint daraufhin rechts unten ein kleines Icon, was ein Fenster symbolisiert.

![alt text](/assets/images/character-viewer-3.png)

Wenn wir das klicken, haben wir die volle Version des Character Viewers vor uns:

![alt text](/assets/images/character-viewer-4.png)

Möglicherweise seht ihr bei euch aber noch nicht die Unicode Nummer ("U+1F600") und auch nicht die UTF-8 Codierung. Das kommt jetzt.

Nun aktivieren wir hier die *volle* Unicode Ansicht, indem wir einmal links oben auf die eingekreisten drei Punkte klicken und dann "Customize List" wählen:

![alt text](/assets/images/character-viewer-5.png)

Im erscheinenden Dialog ganz runterscrollen, im Abschnitt "Code Tables" den Eintrag "Unicode" aktivieren und mit dem Done Button bestätigen:

![alt text](/assets/images/character-viewer-6.png)

Jetzt scrollen wir links einmal runter und klicken auf den neuen Eintrag "Unicode":

![alt text](/assets/images/character-viewer-7.png)

Im mittleren Bereich können wir jetzt durch die zahlreichen Codepages blättern, dann ein Zeichen anklicken und sehen rechts unter der großen Variante des Zeichens auch den Zahlencode des Zeichens. Im Beispiel Screenshot ist es das Apple Symbol, was auf der Command-Taste meist zu sehen ist. Es heißt übrigens "Place of interest sign" und das wurde nicht von Apple erfunden, sondern nur verwendet. [Es ist schon viel älter][schleifenquadrat].

Will man also dieses Zeichen erzeugen, geht man so vor:
1. Mit `⌃`{:.keycap}`␣`{:.keycap} auf das Unicode Tastaturlayout umschalten.
2. Die `⌥`{:.keycap}-Taste gedrückt halten und `2`{:.keycap}`3`{:.keycap}`1`{:.keycap}`8`{:.keycap} tippen.

#### Internet
Es gibt im Web zahlreiche Seiten, auf denen man im Unicode Verzeichnis blättern und suchen kann. Hier ein paar Beispiele:
* <https://symbl.cc>
* <https://unicode-explorer.com>
* <https://jrgraphix.net/r/Unicode/>
* <https://keyboard.cool/db/>

Auch auf diese Weise kommt man dann an den Code des gewünschten Zeichens.

## Pferdefuß
Die ganze Sache hat leider aktuell noch einen Haken, den ich nicht verschweigen will: Das Ganze funktioniert derzeit in macOS nur für *vierstellige* Codes! Unicode Zeichen mit einem *fünfstelligen* Code kann man auf die oben geschilderte Weise im Moment (macOS 15.5) *nicht* eingeben! 😡

Das betrifft dann also alles ab der Codepage, die mit `00010000` anfängt (sie heißt "Linear B Syllabary"). Zu den Unicode Zeichen mit einem fünfstelligen Code gehören z.B. auch die Emojis – aber die und viele weitere Sonderzeichen kann man ja zum Glück auch direkt und auf andere Weise über den Character Viewer finden und durch Doppelklick in seinen Text einfügen.

## Betthupferl

Oben hatten wir das Zeichen mit der Nummer `U+2665`, das ergab ein Herz.
Das Zeichen `U+2764` ergibt übrigens *auch* ein Herz – probiert's mal aus! Welches gefällt euch besser?

*[Quelle][unicode-artikel]*
{:.small-text}

🔲
{:.qed}

[schleifenquadrat]: https://de.wikipedia.org/wiki/Schleifenquadrat
[unicode-artikel]: https://www.adoc-studio.app/blog/unicode-characters-on-macos