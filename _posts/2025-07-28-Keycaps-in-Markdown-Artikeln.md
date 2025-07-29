---
title: "Keycaps in Blog Posts mit Markdown"
date: 2025-07-28
last_modified_at: 2025-07-29
categories:
  - Markdown
tags:
  - css
  - keycaps
  - kramdown
  - ial
excerpt: Wir lernen, wie man in seinen Markdown Blog Posts Tastendrücke hübsch gestalten kann.
header:
  teaser: /assets/images/keycaps-teaser.png
---

Wenn ich in manchen Blog Posts hier Workflows am Mac beschreibe, die das Drücken von Tasten oder Tastenkombinationen beinhalten, würde ich diese Tastendrücke gerne visuell als solche im Text hervorheben. Also z.B. so, wie ich es jetzt in meinem [Artikel über die serielle Bedienung des PicoCalcs][picocalc] gemacht habe. Daraus ein kleiner Screenshot:

![Mehrere stilisierte Tastenkappen sind ordentlich in einer Reihe auf hellem Hintergrund angeordnet, jede Tastenkappe zeigt einen anderen Buchstaben oder ein Symbol in fetter Schrift, vermittelt einen klaren und modernen Eindruck und eignet sich zur Veranschaulichung von Tastenkombinationen in Blogbeiträgen](/assets/images/keycaps-teaser.png)

## Webfonts?

Meine erste Idee war: Ich suche einen Font, der alle Buchstaben, Ziffern und Sonderzeichen als Glyphs mit umschließenden Rähmchen enthält. Denn beim Schreiben [meines letzten Artikels über Binomialverteilungen am TI-30X][ti30x] hatte ich ja schon den speziellen TI-30X Pro MathPrint Font gelernt zu benutzen.

Leider habe ich aber keinen Font gefunden, der derlei Symbole enthält und gleichzeitig frei benutzbar ist. – Aber zum Glück gibt es ja noch andere Möglichkeiten …

## CSS!

CSS to the rescue! Wir definieren uns eine CSS Klasse, die einen Buchstaben oder ein Sonderzeichen mit so einem kleinen Rähmchen versieht. Dabei können wir noch Schriftgröße, Abstände, Hintergrundfarbe und allerlei mehr selbst bestimmen, eh besser!

In einem auf dem *remote theme* "minimal mistakes" basierenden GitHub Pages Blog kann man eigenes, individuelles CSS in der Datei `/assets/css/main.scss` unterbringen. Das hatten wir schonmal im Artikel [Link im Bio Feld][bio] besprochen.

Wenn die Datei `main.scss` also startklar ist, das folgende CSS am besten unten anhängen:

```css
// class für Keycaps
.keycap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4em !important;          /* Breite           */
  height: 1.3em !important;         /* Höhe             */
  border-radius: 0.2em !important;  /* Abrundung        */
  background: #c5cfed !important;   /* Hintergrundfarbe */
  border: 2px solid #242424;        /* Rahmenfarbe      */
  font-size: 1.0em !important;      /* Schriftgröße     */
  font-family: inherit;             /* Schriftart       */
  margin: 0.1em;                    /* Abstand          */
  box-sizing: border-box;
  font-weight: normal !important;
  font-style: normal !important;
  padding: 0.1rem !important;
}
```

Die ganzen `!important` Anweisungen rühren daher, dass wir sicherstellen wollen, dass unsere Keycaps in jedem Fall funktionieren, egal in welche anderen HTML-Umgebungen sie eingebettet sind. Würden wir z.B. hinter `font-style: normal` kein `!important` haben und dann ein Keycap innerhalb eines Zitats (was man in Markdown bekanntlich mit einem `>` Zeichen startet) einbauen wollen, würde das Keycap Zeichen *kursiv* gesetzt werden. Weil der Default Style für Zitate hier beim "minimal mistakes" Theme eben einen kursiven Font benutzt.

Die Änderungen müssen wir natürlich commiten und ins Repository pushen, damit der GitHub Build Prozess startet und die neuen Styles auch live benutzt werden können.

Aber wie benutzen wir das jetzt in unserem Markdown Blog Artikel?

## Benutzung in Markdown via HTML

Eine schöne Eigenschaft von Markdown ist ja, dass man zwischdurch, falls nötig, auch mal HTML direkt einbauen kann. Allerdings entspricht das nicht unbedingt der Philosophie von Markdown, dass geschriebene Texte auch im Rohformat, also Markdown selbst, für das menschliche Auge gut lesbar sein sollen.

Wir zeigen hier erstmal, wie man es *straight forward* mit HTML machen würde. Im nächsten Kapitel gibt's dann eine etwas elegantere Methode.

Um mitten in einem Satz die oben neu definierte CSS Klasse auf ein einzelnes Zeichen anzuwenden, würde man in Markdown mit HTML so vorgehen:

```
Bitte drücke jetzt die Tastenkombination <span class="keycap">⌃</span><span class="keycap">A</span> und dann noch die <span class="keycap">K</span>-Taste.
```

Das Ergebnis sieht dann so aus:

> Bitte drücke jetzt die Tastenkombination <span class="keycap">⌃</span><span class="keycap">A</span> und dann noch die <span class="keycap">K</span>-Taste.

Geht. Aber das Markdown wird ein bisschen unübersichtlich.

## Kramdown IALs

*Kramdown* heißt der standardmäßige Markdown Interpreter, der bei GitHub Pages basierten Blogs zum Einsatz kommt. Ich habe in meiner `_config.yml` sicherheitshalber aber auch nochmal die Anweisung `markdown: kramdown` untergebracht.

Und Kramdown bringt ein paar Erweiterungen gegenüber Standard-Markdown mit, darunter die sogenannten *[Inline Attribute Lists][ial]* (IALs). Man unterscheidet da Block-Level und Span-Level IALs. In unserem Fall brauchen wir letztere, weil wir ja *mitten im Text* ein Zeichen mit unserer CSS Klasse versehen wollen.

Die Syntax sieht dann für den selben Beispieltext wie oben so aus:

```
Bitte drücke jetzt die Tastenkombination `⌃`{:.keycap}`A`{:.keycap} und dann noch die `K`{:.keycap}-Taste.
```

Das Ergebnis ist das selbe, aber das Markdown ist etwas besser lesbar (und es ist auch weniger zu tippen):

> Bitte drücke jetzt die Tastenkombination `⌃`{:.keycap}`A`{:.keycap} und dann noch die `K`{:.keycap}-Taste.


### Kleiner Deep Dive
Man beachte: Die einzukästelnden Zeichen müssen selbst erstmal in irgendeine Art Auszeichnung gesetzt werden, hier im Beispiel ist das die Darstellung als Code über die beiden Backtick-Zeichen vor und nach den entsprechenden Zeichen. Man könnte die Zeichen z.B. genausogut kursiv setzen, also mit Sternchen umschließen. Der Hintergrund ist, dass die IAL Syntax beim durch Kramdown erzeugten HTML ansetzt/greift und die Klasse dann ergänzt:

Aus `*A*` in Markdown wird durch den Kramdown Interpreter dieses HTML gemacht: `<em>A</em>`. Darauf können dann die IALs aufsetzen und z.B. die Klasse ergänzen: `<em class="keycap">A</em>`. Aber ohne dass das `<em>` vorhanden wäre, würde eine IAL Syntax nicht funktionieren. Das hier:

```
Bitte drücke jetzt die Tastenkombination ⌃{:.keycap}A{:.keycap} und dann noch die K{:.keycap}-Taste.
```

... klappt also im Umfeld GitHub Pages / Jekyll / Kramdown *nicht*.

## Bonus: Apple Sonderzeichen
Oft müssen für Tastenkombinationen ja zusätzliche Umschalttasten bzw. Modifier gedrückt gehalten werden. Da gibt es in der Apple Welt ein paar besondere Zeichen. Wie man diese am besten eingibt, dazu habe ich [diesen tollen Artikel][unicode] gefunden, der eigentlich keine Fragen offen lässt.

🔲
{:.qed}

[picocalc]: https://blog.metawops.de/gadgets/PicoCalc-seriell-steuern/
[ti30x]: https://blog.metawops.de/taschenrechner/Binomialverteilung-TI-30X-Pro/
[bio]: https://blog.metawops.de/githubpages/Link-im-Bio-Feld/
[ial]: http://kramdown.gettalong.org/quickref.html#inline-attributes
[unicode]: https://www.adoc-studio.app/blog/unicode-characters-on-macos