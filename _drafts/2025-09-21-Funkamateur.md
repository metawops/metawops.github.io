---
title: "Ich bin Funkamateur!"
date: 2025-09-21
last_modified_at: 2025-09-21
categories:
  - amateurfunk
tags:
  - afu
  - prüfung
  - lernen
  - bnetza
excerpt: Ich habe mit Erfolg die Prüfung zum Funkamateur bei der BNetzA abgelegt. Wie es dazu kam und wie das abläuft, darüber lest ihr hier.
mathjax: true
header:
  teaser: /assets/images/funkamateur.jpeg
---

Am 19. September (2025) habe ich bei der Bundesnetzagentur in Dortmund meine Amateurfunkprüfung abgelegt – mit Erfolg!

Ich hatte mich für eine Klasse E Lizenz angemeldet und habe diese auch bekommen.

Beim Amateurfunk gibt es [drei Klassen: N, E und A][afu-klassen]. Dabei ist N die (relativ neue) Einstiegsklasse, E die "gute Mittelklasse" und A die Klasse, bei der man "alles" darf.
Die Unterschiede liegen vor allem in der Anzahl der Amateurfunkbänder, auf denen man auf Sendung gehen darf und in der Leistung, mit der man senden darf. Daneben gibt es noch ein paar kleinere Unterschiede, z.B. Remote-Stationen, Ausbildungsbetrieb, Funken im Ausland etc.

Reines Zuhören auf den Amateurfunkbändern darf jeder, auch ohne Lizenz. Super interessant ist da zum Beispiel das Abhören von in der Luft befindlichen Flugzeugen! Natürlich darf man *nicht* die Cockpit Gespräche mithören. Aber jedes Flugzeug sendet daneben auch allerlei Telemetrie- und sonstige Daten und *die* darf, ja soll man sogar mithören. Je mehr davon protokolliert wird, desto besser kann man ggfs. einen Unfall aufklären. Es ist also nicht verboten und man kann diese selbst empfangenen Daten auch freiwillig im Internet zur Verfügung stellen, z.B. für FlightRadar24, eine der wohl bekanntesten Apps dafür.

### Telemetriedaten von Flugzeugen

Man braucht dazu wirklich nicht viel: Ein ca. 40 Euro kostender USB Dongle, etwas Draht für die selbst gebaute Antenne, Adapter, Kabel, kostenlose Software. Fertig ist die Laube.

Der liebe Arthur vom [YouTube Kanal Funkwelle][funkwelle] hat dazu mal ein prima Video gemacht, nach dem ich auch vorgegangen bin:

https://www.youtube.com/watch?v=fZyAyjtr4Qg

{% include video id="fZyAyjtr4Qg" provider="youtube" %}

Das ist schon etwas anderes, diese [ADS-B][adsb] Daten "faul" und "fertig" aus dem Internet bzw. schlicht von einer App zu bekommen oder sie selbst, quasi eigenhändig zuhause aus der Luft zu empfangen! versteht man erst, wenn man's mal selbst gemacht hat.

### Digitale Betriebsart FT8

Und dann war ich über dieses "FT8" gestolpert. Amateurfunk bedeutet nicht nur "ältere Herren sitzen im Hobbyraum vorm Mikrofon und sprechen über Modellbau" – ich hoffe, ich trete niemandem zu nahe hier!

Nein, es gibt da z.B. diesen ultra beliebten [FT8 Modus][ft8], auf den ich hier jetzt gar nicht weiter eingehen will. Dazu vielleicht mal ein eigener Artikel oder selbst im Web recherchieren.

Ich hatte mir also für den Mac die freie Software "[wsjt-x][wsjtx]" heruntergeladen – in der für macOS optimierten ["improved" Version von hier][improved] – und mein SDR Dongle vom ADS-B Flugzeug-Daten Experiment mit der simplen Doppel-Stabantenne verbunden. Letztere als umgekehrtes V (also auf dem Kopf stehend) drinnen ans Fenster geklemmt und losgelegt.

DAS ist ja interessant, welche Länder man da empfangen kann! Und hinter jedem Anruf ("CQ") steckt ein Mensch. 

![Screenshot der WSJT-X Software mit Wasserfalldiagramm, empfangenen FT8-Rufzeichen, Ländern und Signalstärken](/assets/images/wsjtx-ft8.png)

Ich habe mir dann gleich noch die fantastische Logbuch App RUMlogNG installiert und die beiden Tools wsjt-x und RUMlogNG miteinander verbunden. Auch wenn ich noch kein Rufzeichen hatte, was ich eintragen konnte: Die ganzen FT8 CQ Rufe kamen jetzt auch im "DX Spots" Fenster von RUMlogNG an. 

![RUMlogNG Fenster mit Logbuchliste, Rufzeichen, Ländern und Signalstärken](/assets/images/rumlogng1.png)

### Beschluss: Zur Prüfung anmelden

Doch spätestens hier hat es mich immer wieder gewurmt, dass ich nicht antworten durfte! Denn das Senden ist ja nur den Funkamateuren erlaubt! Also muss ich auch einer werden. Denn ich hätte so gerne auch mal via FT8 geantwortet, wer ich bin, wo ich bin, wie gut ich die anderen Stationen empfange. Und ich hätte sehr gerne alle diese "Gespräche" (genauer ja: Datenaustausche) im Logbuch (also in der RUMlogNG App) ordnungsgemäß protokolliert. Das geht alles natürlich nur mit einem persönlichen Rufzeichen. Tja und das kommt nur von der Bundesnetzagentur und nur dann, wenn man eine Lizenz hat.

Also: Zur Prüfung angemeldet! 

Aber zu welcher denn? N, E oder A?  
Ich habe erstmal ganz forsch und mutig A gewählt!  
Aber im Laufe der folgenden Wochen habe ich mich nach einem Realismus-Check umentschieden und das auf E geändert. Ich komme zwar aus einem naturwissenschaftlichen Elternhaus, habe Mathematik und Informatik studiert. Aber das ist alles sehr lange her. Und meine Elektronik-Kenntnisse sind wirklich recht "basic". Nachdem ich die A-Fragen im Fragenkatalog der BNetzA studiert hatte, war mir klar: Dafür zu lernen kommt einem kleinem Elektrotechnik-Studium gleich. Und ich bin keine 20 mehr, sondern 57! Ganz ehrlich: In meinem Alter fällt das Lernen schwer und ich musste erstmal wieder das Lernen lernen.

Mit der Ummeldung auf E fühlte ich mich gut. Und selbst wenn ich nur N schaffe, ist das auch schon toll!

### Curriculum

Der zu lernende Stoff teilt sich gut in mehrere Teile: Jeder, der eine Amateurfunkprüfung machen will – egal ob N, E oder A –, muss auch die beiden Bereiche "Vorschriften" (V) und "Betriebsablauf" (B) lernen und sich darin prüfen lassen.

Die beste und erste Anlaufstelle im Netz ist ganz sicher die [50ohm.de Website][50ohm] des D.A.R.C., des Deutschen Amateur-Radio-Clubs e.V.

Hier findet jeder genug Material, Links, Hinweise, Infos rund um die Amateurfunk-Prüfung. – Zumindest für die N Lizenz ist hier alles tippi-toppi.
Für E und A sind die Online-Kurse noch nicht auf dem neuesten Stand – aber dennoch hilfreich!

Für die Bereiche B, V und N kann ich aber auch wärmstens den [kostenlosen Video-Kurs auf YouTube][klasse-n-kurs] im [Kanal von Michael Reichardt (DL2YMR)][yt-dl2ymr] empfehlen, der in Zusammenarbeit mit dem D.A.R.C. entstanden und somit ganz offiziell ist! Michael macht das wirklich SUPER, da kommt jeder mit, sehr angenehm! Ich habe mir immer Notizen gemacht, nebenbei, z.B. wenn es um die Q-Gruppen ging.

So einen Kurs gibt es leider aktuell noch nicht für die Klasse E, aber man arbeitet wohl daran.

Aber für Klasse E Stoff gibt es ebenfalls auf YouTube eine super Playliste: Die komplette Vorlesung

- Vorlesung von DL9MJ Prof. Dr. Matthias Jung zu E
- App Hamfisted von Lehrer Dr. Michael Specht
- Buch


🔲
{:.qed}

[adsb]: https://de.wikipedia.org/wiki/Automatic_Dependent_Surveillance
[ft8]: https://de.wikipedia.org/wiki/FT8
[wsjtx]: https://wsjt.sourceforge.io/wsjtx.html
[improved]: https://sourceforge.net/projects/wsjt-x-improved/
[funkwelle]: https://www.youtube.com/@Funkwelle
[afu-klassen]: https://50ohm.de/infos.html
[50ohm]: https://www.50ohm.de
[yt-dl2ymr]: https://www.youtube.com/@DL2YMR
[klasse-n-kurs]: https://www.youtube.com/watch?v=s1SPp9soRig&list=PLDpWnjHk5ERbcgpLPUaU0iTsD-wrmfENk