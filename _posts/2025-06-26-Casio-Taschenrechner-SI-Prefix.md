---
title: "SI-Präfixe und Engineering Display bei Casio Taschenrechnern"
date: 2025-06-29
last_modified_at: 2025-06-29
categories:
  - Taschenrechner
tags:
  - casio
  - si-präfixe
  - eng-mode
excerpt: "Wir schauen uns für ausgewählte Casio Taschenrechner Modelle die Features SI-Präfixe und Engineering Anzeige an."
mathjax: true
header:
  teaser: /assets/images/casio-calcs.jpeg
---

Ein für mich wichtiges Feature bei einem Taschenrechner ist die Möglichkeit, bei der Anzeige sehr großer und sehr kleiner Zahlen den Exponenten in der wissenschaftlichen $*10^x$ Schreibweise als Vielfaches von 3 in Dreierschritten hin- und herschieben zu können. So lassen sich Fragen wie "Wieviel nano-Farad sind nochmal 100 pico-Farad?" schnell beantworten. (In "Farad" gibt man die Kapazität eines Kondensators an.)
 
## Wer kann's?
Bei meiner kleinen [Texas Instruments TI-30 "Retrospektive"][ti-30] hatte ich ja festgestellt, dass das aktuelle TI-30 "Spitzenmodell", der [TI-30X Pro MathPrint][ti-30x-pro] so ein Feature leider nicht hat.

Ganz anders Casio, da gehört diese Funktionalität schon seit vielen Jahr(zehnt)en bei zahlreichen, wissenschaftlichen Taschenrechnern erfreulicherweise zur Grundausstattung.

## Worum geht's?
Gefühlt etwas später kam das Feature dazu, dass man sich anstelle von z.B.

$$
5*10^{-12}
$$

auch übersichtlicher lediglich 

$$
5p
$$

anzeigen lassen konnte. Und wenn der Rechner das *ausgeben* kann, warum sollte man es dann nicht auch *eingeben* können? Geht, je nach Modell.

Wir sprechen also über diese drei Features:

1. "Verschiebung" des Exponenten in Dreierschritten über die beiden Funktionen $\text{ENG}, \overleftarrow{\text{ENG}}$
2. Anzeige (Ausgabe) von Rechenergebnissen mit SI-Präfixen – anstelle einer $*10^x$ Schreibweise
3. Eingabe von Zahlen mit SI-Präfixen – anstelle einer $*10^x$ Schreibweise

## Das Testfeld
![Nine Casio scientific calculators arranged in two rows on a wooden surface. Each calculator displays its screen with various menus, numbers, or settings visible. The models include fx-991ES Plus 2nd edition, fx-991MS 2nd edition, fx-991DE X, fx-991DE CW, fx-5800P, fx-9750GIII, fx-9860GII SD, fx-CG50, and GRAPH MATH+. The screens show different calculator modes, such as engineering notation, SI prefix menus, and calculation results. The overall tone is neutral and informative, highlighting the diversity and features of Casio calculators in a well-lit, organized setting.](/assets/images/casio-calcs.jpeg)
*Das Testfeld: Neun ältere und neuere Casio Rechner. Foto: Stefan Wolfrum*

Für die Casio Taschenrechner Modelle

* fx-991ES Plus 2nd ed.
* fx-991MS 2nd ed.
* fx-991DE X
* fx-991DE CW
* fx-5800p
* fx-9860GII SD
* fx-9750GIII
* fx-CG50
* GRAPH MATH+

... habe ich mir mal angeschaut, was sie beim Thema [SI-Präfixe][si-wiki] und bei der sogenannten Engineering Anzeige können und wie man diese Features jeweils handhabt.

## Vorhandene Präfixe
Bei *allen* hier vorgestellten Rechnern sind die folgenden SI-Präfixe vorhanden:

$$
f, p, n, \mu, m, k, M, G, T
$$

Darüber hinaus gibt es folgende Besonderheiten:
* Der fx-991DE CW und der GRAPH MATH+ bieten am oberen Ende nach Tera noch Peta (P, $10^{15}$) und Exa (E, $10^{18}$)
* Der fx-991DE CW und der GRAPH MATH+ zeigen bei der Auswahl zur Eingabe der Präfixe nicht nur den einen Präfix-Buchstaben an, sondern das ganze, zugehörige Wort, also Milli, Mikro, Nano, Pico, Femto, Kilo, Mega, Giga, Tera, Peta, Exa (ja, alle mit großem Anfangsbuchstaben)
* Am "unteren/kleinen" Ende der Skala bietet leider keiner der Rechner unterhalb von femto noch atto ($10^{-18}$) an. 


## Überblick
Hier habe ich mal tabellarisch zusammengefasst, bei welchem Casio Taschenrechner Modell man die drei Features nutzen kann und wie man sie nutzt.

| Rechner               | $\text{ENG}, \overleftarrow{\text{ENG}}$ | SI Anzeige[^1] | SI Eingabe |
|-----------------------|:----------:|:----------:|:----------:|
| fx-991ES Plus 2nd ed. | ✅<br/>([SHIFT]) [ENG] | ❌ | ❌ |
| fx-991MS 2nd ed.      | ✅<br/>([SHIFT]) [ENG] | ✅<br/>[MODE] *(6x)* [1] [1] | ✅<br/>[SHIFT] [1]~[9] |
| fx-991DE X            | ✅<br/>([SHIFT]) [ENG] | ✅<br/>[SETUP] [4] [1] | ✅<br/>[OPTN] [3] [1]~[B] |
| fx-991DE CW           | ✅<br/>[FORMAT] [⏶] [⏶] [OK] [⏴]/[⏵] | ✅<br/>[SETTINGS] [Recheneinstell.] [Dezimalpräfixe] [Ein] | ✅<br/>[CATALOG] [⏶] [⏶] [⏶] [⏶] [OK] [⏶]/[⏷] [OK] |
| fx-5800p              | ✅<br/>$\overleftarrow{\text{ENG}}$: [SHIFT] [x]<br/>$\text{ENG}$: [SHIFT] [÷] | ✅<br/>[SETUP] [⏷] [3] [1] | ✅<br/>[FUNCTION] [1] [⏷] [⏷] [⏷] [1]~[0] |
| fx-9750GIII           | ✅<br/>[OPTN] [F6] [F6] [F1] [F6] [F6]<br/>$\overleftarrow{\text{ENG}}$: [F3]<br/>$\text{ENG}$: [F2] | ✅<br/>[SET UP] [⏶] [⏶] [⏶] [F4] | ✅<br/>[OPTN] [F6] [F6] [F1], [F1]~[F5] und mit [F6] weiter blättern |
| fx-9860GII SD         | ✅<br/>[OPTN] [F6] [F6] [F1] [F6] [F6]<br/>$\overleftarrow{\text{ENG}}$: [F3]<br/>$\text{ENG}$: [F2] | ✅<br/>[SET UP] [⏶] [⏶] [F4] | ✅<br/>[OPTN] [F6] [F6] [F1], [F1]~[F5] und mit [F6] weiter blättern |
| fx-CG50               | ✅<br/>[OPTN] [F6] [F6] [F1] [F6] [F6]<br/>$\overleftarrow{\text{ENG}}$: [F3]<br/>$\text{ENG}$: [F2] | ✅<br/>[SET UP] [⏶] [⏶] [F4] | ✅<br/>[OPTN] [F6] [F6] [F1], [F1]~[F5] und mit [F6] weiter blättern |
| GRAPH MATH+[^2]       | ✅<br/>[FORMAT] [4] bzw. [5] | ✅<br/>[SETTINGS] [3] [4] | ✅<br/>[CATALOG] [D][^3] |
{:.my-table}


## Und bei euch?
Welche Casio Taschenrechnermodelle habt ihr darüber hinaus noch und wie sieht es da mit diesen Features aus? Holt eure alten Schätzchen aus den Schubladen, probiert sie aus und schreibt mir gerne einen Kommentar zu eurem/euren Modell(en), dann kann ich sie in der Tabelle ergänzen. 💙

🔲
{: style="text-align: right" }


[^1]: falls vorhanden: Tasten- bzw. Menüabfolge zum *Einschalten* des Features. Ausschalten analog.
[^2]: Das ist die französische Version des fx-CG100, der gerade erst – Stand Juni 2025 – in England erschienen und in Deutschland noch nicht erhältlich ist.
[^3]: Alternativ kann man natürlich auch 13x [⏷] oder 3x [⏶] drücken. Mit [D] ist die Potenzieren-Taste gemeint (links von Quadrieren).

[ti-30]: https://blog.metawops.de/taschenrechner/Der-TI-30/
[ti-30x-pro]: https://amzn.to/4ehyfxR
[si-wiki]: https://de.wikipedia.org/wiki/Vorsätze_für_Maßeinheiten