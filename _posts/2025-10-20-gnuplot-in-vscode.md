---
title: "gnuplot mit live preview in VSCode"
date: 2025-10-20
last_modified_at: 2025-10-20
categories:
  - tools
tags:
  - gnuplot
  - vscode
excerpt: Wie man gnuplot Dateien in VSCode bearbeiten und direkt daneben ein (quasi) live Preview der Grafik sehen kann.
mathjax: false
header:
  teaser: /assets/images/gnuplot-vscode.png
---

Bei der Beschäftigung mit meinem kleinen [Analogcomputer "The Analog Thing" (THAT)][that] hatte ich auch einen Arduino (Mega) eingesetzt, um die Lösung der gepatchten Differentialgleichung als Zahlen auslesen zu können. Um sie "in der Hand zu haben". Denn so eine (z.B.) gedämpfte Schwingung ist ja ganz hübsch am Oszilloskop Bildschirm anzusehen – insbesondere, wenn man sie in Echtzeit manipulieren kann –, aber besonders hochauflösend ist sie da nicht.

{% include figure popup=true image_path="/assets/images/that-oszi.jpeg" alt="The Analog Thing, Oszilloskop. Foto: S. Wolfrum" caption="The Analog Thing, Oszilloskop. Foto: S. Wolfrum" %}

Das Auslesen der Lösung klappt mit [Bernd Ulmanns kleinem Arduino Sketch][hybrid-sketch] einwandfrei und nun hatte ich auf dem Mac eine CSV Datei, die pro Zeile einen Wert enthielt. Das wollte ich mit gnuplot visualisieren, damit ich auch mal eine PNG Grafik z.B. in einen Blog Post einbetten kann:

{% include figure popup=true image_path="/assets/images/output_plot-02.png" alt="Gedämpfte Schwingung. Grafik erzeugt mit gnuplot, Daten errechnet auf dem THAT." caption="Gedämpfte Schwingung. Grafik erzeugt mit gnuplot, Daten errechnet auf dem THAT." %}

Vorneweg für die, die es selbst nachvollziehen wollen, hier die CSV Datei und die gnuplot (.gp) Datei zum Download:

<a href="/assets/downloads/hybrid-test-data-02-700ms.csv" download class="btn btn--primary">CSV herunterladen</a>

<a href="/assets/downloads/hybrid-test-data.gp" download class="btn btn--primary">gnuplot Datei herunterladen</a>


### Problem

Ich war aber seinerzeit absoluter Neuling in Sachen gnuplot und wollte die `.gp` Eingabedatei in VSCode bearbeiten und direkt daneben in Echtzeit das Ergebnis des gnuplot runs sehen, also die zugehörige Grafik.

Da gibt es eine VSCode Extension namens "gnuplot preview" – die habe ich aber bis heute nicht ans Laufen gebracht. Obwohl gnuplot bei mir im PATH ist. 🤷‍♂️

### Lösung

Also musste ich eine Alternative finden. Es gelang über die [VSCode Extension "Run on Save"][extension]. Denn jedesmal, wenn ich nun meine `.gp` Datei **speichere**, läuft gnuplot damit los, erzeugt die PNG Datei und diese sehe ich rechts neben meinem Code, weil ich sie mir dort in einem weiteren Tab geöffnet habe:

{% include figure popup=true image_path="/assets/images/gnuplot-vscode.png" alt="Screenshot von VSCode mit gnuplot Datei und Preview der Grafik" caption="Screenshot von VSCode mit gnuplot Datei und Preview der Grafik" %}

### Konfiguration

Nach der Installation der o.g. "Run on Save" Extension muss man die VSCode User Settings JSON Datei anpassen: In VSCode über `⇧`{:.keycap}`⌘`{:.keycap}`P`{:.keycap} den Command "Preferences: Open User Settings (JSON)" wählen und dann dies hier syntaktisch korrekt einfügen:

```json
"emeraldwalk.runonsave": {
    "commands": [
        {
            "match": "\\.gp$",
            "cmd": "gnuplot '${file}'",
            "args": "Run Gnuplot",
            "message": "Running gnuplot ...",
            "messageAfter": "Finished.",
            "showElapsed": true
        }
    ]  
}
```

Dazu ein paar Anmerkungen:
* Wenn ihr eure gnuplot Dateien anders als auf `.gp` enden lassen wollt, müsst ihr das natürlich entsprechend anpassen.
* Das `gnuplot` Kommando muss über den `PATH` findbar sein. Solltet ihr gnuplot über Homebrew installiert haben, liegt das binary wahrscheinlich in `/opt/homebrew/bin`. Diesen Pfad also in die `PATH` Variable aufnehmen (und am besten ausloggen, einloggen; zumindest aber VSCode beenden und neu starten).
* Den Output der *Run on Save* Extension kann man sich im Terminalfenster von VSCode anschauen, wenn man im Reiter „OUTPUT“ im Dropdown rechts „Run On Save“ wählt. So sieht man z.B. wie lange der gnuplot Lauf gedauert hat.

### Nachklapp

Natürlich wird die erzeugte Grafikdatei nur dann aktualisiert (und daher von VSCode erneut angezeigt), wenn man in VSCode die Änderungen an der `.gp` Datei explizit speichert. Aber das finde ich mittlerweile auch gut so, denn sonst gäbe es zu viele gnuplot Fehler, weil man noch nicht zu Ende getippt hat. So kann ich bewusst entscheiden, wann ich ein Update der Grafik sehen will.

Wie man die Quelldaten in der CSV Datei mit dem THAT erzeugt und über den Arduino auf den Rechner bekommt, darum soll es vielleicht ein anderes Mal gehen. – Falls euch das interessiert?! Hinterlasst mir gerne einen Kommentar ... 

🔲
{:.qed}

[extension]: https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave
[that]: https://the-analog-thing.org
[hybrid-sketch]: https://github.com/anabrid/hardware/tree/main/the-analog-thing/arduino_2650_hybrid_controller