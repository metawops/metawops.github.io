---
title: "Binomialwahrscheinlichkeiten für Intervalle beim TI-30X Pro"
date: 2025-07-23
last_modified_at: 2025-09-04
categories:
  - taschenrechner
tags:
  - texas-instruments
  - ti-30
  - mathematik
  - statistik
excerpt: Wir schauen uns an, wie man auf dem TI-30X Pro MathPrint trotz fehlender Funktion Binomialwahrscheinlichkeiten für Intervalle bestimmen kann.
header:
  teaser: /assets/images/ti30x-stat-teaser.jpeg
mathjax: true
---

[Apropos TI-30X Pro MathPrint][ti30post] ...

## Binomialverteilungen

In [diesem Video von TI Education Deutschland][video] wird mit dem TI-30X **Prio** MathPrint – also dem speziell für das Abitur ab 2030 zugelassenen Taschenrechner, der gegenüber dem **Pro** Modell abgespeckter ist – vorgeführt, wie man Binomialverteilungen untersuchen kann.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8f0oIPGMaU0?si=82x77y0xGmrQAB-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Prio kann mehr als Pro

Ab dem Timecode ca. 03:20 startet die zweite Aufgabe, in der wir es mit einem Intervall zu tun haben, $P(21 \le X \le 50)$.

Interessanterweise hat der TI-30X **Prio** MathPrint unter den *BinomialCDF* Funktionen auch eine spezielle, `BOUNDS` genannte, für derlei Intervalle.

![Screenshot TI-30X Prio](/assets/images/ti30xprio-bounds.png)

Leider bietet der höherwertige TI-30X **Pro** diese Option nicht.

Aber keine Sorge, wir können diese Intervallwahrscheinlichkeit natürlich auch auf dem TI-30X **Pro** MathPrint berechnen. Denn es gilt die folgende Gesetzmäßigkeit für diese Wahrscheinlichkeiten:

$$
P(a \le X \le b) = P(X \le b) - P(X \le a-1)
$$

Wir müssen das also in zwei Schritten lösen:

1. $P(X \le b)$ berechnen, merken
2. $P(X \le a-1)$ berechnen und vom gemerkten Ergebnis aus Schritt 1 abziehen.
3. Fertig. ✅

## Schritt für Schritt

Das Berechnen der beiden Einzelwerte machen wir dann auf dem TI-30X **Pro** MathPrint über die Option `SINGLE` im BinomialCDF Menü folgendermaßen:
1. <span class="ti30font">q &#x2020;</span>
2. Mit <span class="ti30font">></span> nach rechts auf `DISTR` gehen.
3. Auf den Eintrag mit der `5:Binomialcdf` gehen und <span class="ti30font">n</span> drücken.
4. `SINGLE` auswählen und wieder <span class="ti30font">n</span> drücken.
5. Bei `TRIALS=n=` 100 eingeben, <span class="ti30font">n</span> drücken.
6. Bei `p(SUCCESS)=` 0.125 eingeben, <span class="ti30font">n</span> drücken.
7. Bei `x=` 50 eingeben, <span class="ti30font">n</span> drücken.
8. Jetzt sollte rechts unten `CALC` hervorgehoben blinken, nochmal <span class="ti30font">n</span> drücken.
9. Das Ergebnis steht in der Zeile `VALUE=1` und ist also 1. Merken!
10. Einmal <span class="ti30font">]</span> drücken, um `SOLVE AGAIN` auszuwählen, <span class="ti30font">n</span> drücken.
11. Zweimal <span class="ti30font">]</span> drücken, um den Cursor hinter `x=` zu platzieren.
12. Jetzt – Achtung! – 20 eingeben, *nicht* die 21 aus der Aufgabe!
13. Zweimal <span class="ti30font">n</span> drücken.
14. Es erscheint das Ergebnis `VALUE=0.9886358080475`.
15. In der Zeile `STORE:` mit <span class="ti30font">></span> auf das `a` gehen und <span class="ti30font">n</span> drücken. Damit haben wir die Zahl in der Variablen `a` gespeichert.
16. Mit <span class="ti30font">q &#x2013;</span> wieder zurück in den normalen Rechenmodus.
17. Jetzt die im Schritt 9 gemerkte 1 eingeben und davon den Wert in `a` abziehen: <span class="ti30font">1 - z z z z z n</span>
18. Das Ergebnis 0.011364192 ist die Lösung der gestellten Aufgabe $P(21 \le X \le 50)$.

*Ich hätte gerne auch Screenshots des TI-30X Pro MathPrint Bildschirms hier eingebaut, aber dafür braucht es eine leider nur im kostenpflichtigen Abomodell verfügbare Software von Texas Instruments, die ich nicht habe und auch nicht beabsichtige, zu kaufen.*

## Kurzzusammenfassung
Mit den in der obigen Aufgabe aus dem Video gegebenen Werten $n=100$ und $p=0.125$ und der Frage nach $P(21 \le X \le 50)$ ermitteln wir auf dem **Pro**:

* $P(X \le 50)=1$,
* $P(X \le 20)=0.98863580804$
* $\Rightarrow P(21 \le X \le 50)=1-0.98863580804=0.011364192$

... und das ist genau das selbe Ergebnis, wie im Video mit dem TI-30X **Prio** MathPrint und der `BOUNDS` Option. 😎

![TI-30X Prio Ergebnis](/assets/images/ti30x-prio-result.jpeg)

🔲
{: style="text-align: right" }

[ti30post]: https://blog.metawops.de/taschenrechner/Der-TI-30/
[video]: https://youtu.be/8f0oIPGMaU0?si=omhZX3qzub5Ic-p_