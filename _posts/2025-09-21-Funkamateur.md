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
  teaser: /assets/images/funkamateur.png
---
![Person bedient Funkgeräte in einem mit Technik und Karten ausgestatteten Hobbyraum, konzentrierte Atmosphäre.](/assets/images/funkamateur.png)

Am 19. September (2025) habe ich bei der Bundesnetzagentur in Dortmund meine Amateurfunkprüfung abgelegt – mit Erfolg! 🎉

Ich hatte mich für eine Klasse E Lizenz angemeldet und habe diese auch bekommen.

Beim Amateurfunk gibt es [drei Klassen: N, E und A][afu-klassen]. Dabei ist N die (relativ neue) Einstiegsklasse, E die "gute Mittelklasse" (auch wenn sie dann international "Novice" heißt) und A die Klasse, bei der man "alles" darf.
Die Unterschiede liegen vor allem in der Anzahl der Amateurfunkbänder, auf denen man auf Sendung gehen darf und in der Leistung, mit der man senden darf. Daneben gibt es noch ein paar kleinere Unterschiede, z.B. Remote-Stationen, Ausbildungsbetrieb, Funken im Ausland etc.

Reines Zuhören auf den Bändern darf jeder, auch ohne Lizenz. Super interessant ist da zum Beispiel das Abhören von in der Luft befindlichen Flugzeugen! Natürlich darf man *nicht* die Cockpit Gespräche mithören. Aber jedes Flugzeug sendet daneben auch allerlei Telemetrie- und sonstige Daten und *die* darf, ja soll man sogar mithören. Je mehr davon protokolliert wird, desto besser kann man ggfs. einen Unfall aufklären. Es ist also nicht verboten und man kann diese selbst empfangenen Daten auch freiwillig im Internet zur Verfügung stellen, z.B. für FlightRadar24, eine der wohl bekanntesten Apps dafür.

### Telemetriedaten von Flugzeugen

Man braucht dazu wirklich nicht viel: Ein ca. 40 Euro kostender USB Dongle, etwas Draht für die selbst gebaute Antenne, Adapter, Kabel, kostenlose Software. Fertig ist die Laube.

Der liebe Arthur – Grüße gehen raus! 👋 – vom [YouTube Kanal Funkwelle][funkwelle] hat dazu mal ein prima Video gemacht, nach dem ich auch vorgegangen bin:

{% include video id="fZyAyjtr4Qg" provider="youtube" %}

Das ist schon etwas anderes, diese [ADS-B][adsb] Daten "faul" und "fertig" aus dem Internet bzw. schlicht von einer App zu bekommen oder sie selbst, quasi eigenhändig zuhause aus der Luft zu empfangen! Versteht man erst, wenn man's mal selbst gemacht hat.

### Digitale Betriebsart FT8

Und dann war ich über dieses "FT8" gestolpert. Amateurfunk bedeutet nicht nur "ältere Herren sitzen im Hobbyraum vorm Mikrofon und sprechen über Modellbau oder das Wetter" – ich hoffe, ich trete niemandem zu nahe hier!

Nein, es gibt da z.B. diesen ultra beliebten [FT8 Modus][ft8], auf den ich hier jetzt gar nicht weiter eingehen will. Dazu vielleicht mal ein eigener Artikel oder selbst im Web recherchieren.

Ich hatte mir also für den Mac die freie Software "[wsjt-x][wsjtx]" heruntergeladen – in der für macOS optimierten ["improved" Version][improved] – und mein SDR Dongle vom ADS-B Flugzeug-Daten Experiment mit der simplen Doppel-Stabantenne verbunden. Letztere als umgekehrtes V (also auf dem Kopf stehend) drinnen ans Fenster geklemmt und losgelegt.

DAS ist ja interessant, welche Länder man da empfangen kann! Und hinter jedem Anruf ("CQ") steckt ein Mensch. 

![Screenshot der WSJT-X Software mit Wasserfalldiagramm, empfangenen FT8-Rufzeichen, Ländern und Signalstärken](/assets/images/wsjtx1.png)

Ich habe mir dann gleich noch die fantastische Logbuch App [RUMlogNG][rumlog] installiert und die beiden Tools wsjt-x und RUMlogNG miteinander verbunden. Auch wenn ich noch kein Rufzeichen hatte, was ich eintragen konnte: Die ganzen FT8 CQ Rufe kamen jetzt auch im "DX Spots" Fenster von RUMlogNG an. 

{% include figure popup=true image_path="/assets/images/rumlogng1.png" alt="RUMlogNG Fenster mit Logbuchliste, Rufzeichen, Ländern und Signalstärken" caption="RUMlogNG Fenster mit Logbuchliste, Rufzeichen, Ländern und Signalstärken" %}


### Beschluss: Zur Prüfung anmelden

Doch spätestens hier hat es mich immer wieder gewurmt, dass ich nicht antworten durfte! Denn das _Senden_ ist ja nur den Funkamateuren erlaubt! Also muss ich auch einer werden. Denn ich hätte so gerne auch mal via FT8 geantwortet, wer ich bin, wo ich bin, wie gut ich die anderen Stationen empfange. Und ich hätte sehr gerne alle diese "Gespräche" (genauer ja: Datenaustausche) im Logbuch (also in der RUMlogNG App) ordnungsgemäß protokolliert. Das geht alles natürlich nur mit einem persönlichen Rufzeichen. Tja und das kommt nur von der Bundesnetzagentur und nur dann, wenn man eine Lizenz hat.

Also: Zur Prüfung angemeldet! 

Aber zu welcher denn? N, E oder A?  
Ich habe erstmal ganz forsch und mutig A gewählt!

Aber im Laufe der folgenden Wochen habe ich mich nach einem Realismus-Check umentschieden und das auf E geändert. Ich komme zwar aus einem naturwissenschaftlichen Elternhaus, habe Mathematik und Informatik studiert. Aber das ist alles sehr lange her. Und meine Elektronik-Kenntnisse sind wirklich recht "basic". Nachdem ich die A-Fragen im Fragenkatalog der BNetzA studiert hatte, war mir klar: Dafür zu lernen kommt einem kleinem Elektrotechnik-Studium gleich. Und ich bin keine 20 mehr, sondern 57! Ganz ehrlich: In meinem Alter fällt das Lernen schwer und ich musste erstmal wieder das Lernen lernen.

Mit der Ummeldung auf E fühlte ich mich gut. Und selbst wenn ich nur N schaffe, ist das auch schon toll!

### Curriculum

Der zu lernende Stoff teilt sich gut in mehrere Teile: Jeder, der eine Amateurfunkprüfung machen will – egal ob Klasse N, E oder A –, muss auch die beiden Bereiche "Vorschriften" (V) und "Betriebsablauf" (B) lernen und sich darin prüfen lassen.

Die beste und erste Anlaufstelle im Netz ist ganz sicher die [50ohm.de Website][50ohm] des D.A.R.C., des Deutschen Amateur-Radio-Clubs e.V.

Hier findet jeder genug Material, Links, Hinweise, Infos rund um die Amateurfunk-Prüfung. – Zumindest für die N Lizenz ist hier alles tippi-toppi. Für E und A sind die Online-Kurse noch nicht auf dem neuesten Stand – aber dennoch hilfreich!

Für die Bereiche B, V und N kann ich aber auch wärmstens den [kostenlosen Video-Kurs auf YouTube][klasse-n-kurs] im [Kanal von Michael Reichardt (DL2YMR)][yt-dl2ymr] empfehlen, der in Zusammenarbeit mit dem D.A.R.C. entstanden und somit ganz offiziell ist! Michael macht das wirklich SUPER, da kommt jeder mit, sehr angenehm! Ich habe mir immer Notizen gemacht, nebenbei, z.B. wenn es um die Q-Gruppen ging.

So einen Kurs gibt es leider aktuell noch nicht für die Klasse E, aber man arbeitet wohl daran.

Aber für den Klasse E Stoff gibt es ebenfalls auf YouTube eine super Playliste: [Die komplette "Amateurfunk Klasse E" Vorlesung des Wintersemesters 2024/25 von Prof. Dr. Matthias Jung (DL9MJ)][vorlesung].

Und dann gibt es natürlich zahlreiche Webseiten und Apps, mit denen man den Stoff lernen und die Prüfung simulieren kann. Die wichtigsten sind auf 50ohm [hier (rechts unten) verlinkt][50ohm-pruefung].
Meine absolute Lieblings-App, mit deren Hilfe ich fast ausschließlich am iPad gelernt habe, ist die kostenlose App "[Hamfisted][hamfisted]". Es gibt sie auch im Google Play Store für Android.

Und letztlich war das noch das super [Buch "Amateurfunk – Das umfassende Handbuch"][buch] des Rheinwerk Verlags aus meiner schönen Heimatstadt Bonn.  

Das Lernen habe ich über viele Wochen und Monate gezogen, denn es drängelte ja erstmal niemand. Erst, als ich mich tatsächlich für die Prüfung angemeldet und einen konkreten Termin bekommen hatte, fühlte sich das alles etwas ernster an. Die letzte Woche vor der Prüfung habe ich dann extra Urlaub genommen und von morgens bis abends sehr viel gelernt. Dann fühlte ich mich auch fit.

### Prüfung in Dortmund

Auch wenn die Bundesnetzagentur ihren offiziellen Sitz in Bonn hat und ich in Bonn wohne – die Amateurfunkprüfung kann man leider nicht in Bonn ablegen. Man kann sie in Berlin, Dortmund, Dresden, Erfurt, Eschborn, Göttingen, Hamburg, Hannover, München, Nürnberg und Reutlingen ablegen. Für mich also: Dortmund.

Am Tag der Prüfung, die für 12:30 Uhr angesetzt war, bin ich mit > 1 h Zeitpuffer in Bonn losgefahren. DAS WAR ZU WENIG! Auf dem Weg über die Autobahnen gab es ausgerechnet an dem Tag zahlreiche Unfälle und ausgerechnet auf meiner Strecke. Ich schwitzte also im Auto, ob ich es noch pünktlich schaffe. Zum Glück kam ich zehn Minuten vor Prüfungsbeginn vor Ort an, puh!

Im Prüfungsraum hat jeder seinen eigenen, freistehenden Tisch mit einem vorbereiteten Namensschildchen (auf dem auch die angestrebte Klasse steht), so dass sich die Frage "wo setze ich mich denn hin" gar nicht stellt.

Dann gibt es von den drei anwesenden Prüfern ein paar kurze Hinweise, wie alles abläuft. Die jeweils 25 ausgewählen Fragen aus den Bereichen (bei mir also V; B, N und E) sind in einem Schnellhefter, jedes Blatt ist einseitig bedruckt und in einer Klarsichtfolie. Man kreuzt nichts direkt auf diesen Blättern an. Da stehen nur die Fragen und die jeweils vier Antwortmöglichkeiten, aber keine Kästchen.

Dafür gibt es dann je Bereich ein gesondertes Blatt, auf dem von oben nach unten die Nummern 1 bis 25 und darüber von links nach rechts die vier Buchstaben A, B, C und D gedruckt sind (und noch vorausgefüllte Felder mit dem eigenen Namen etc.). Also eine kleine 4x25 Matrix aus leeren Kästchen und _dort_ macht man seine Kreuze. Sollte man sich mal vertan haben, stehen da auch genaue Anweisungen, wie man seinen Irrtum markieren und korrigieren kann.

Man bekommt auch leere blanko DIN A4 Blätter für eigene Notizen ausgeteilt. Ich habe erst alle Antworten dort notiert, bin dann alle Fragen nochmal durchgegangen, habe meine Antworten nochmal gecheckt und dann erst in den Abgabebogen übertragen.

Zeit ist wirklich mehr als genug. Wenn man sich wochenlang mit dem Stoff beschäftigt hat, kennt man schon viele Fragen sehr gut und schafft die 25 Fragen aus den Bereichen Vorschriften, Betriebsablauf und Technik N in locker unter 10 Minuten. Und 45 Minuten Zeit hat man _pro Bereich_. (60 Minuten für den Technik A Bereich.)

Den **Taschenrechner** – ich hatte zwei dabei, falls der präferierte streiken sollte – habe ich kaum gebraucht. Entweder kennt man nach so intensiver Beschäftigung mit den Fragen und den zig Prüfungssimulationen schon die richtige Antwort oder – selbst bei den meisten E-Fragen ist das so – man kann es im Kopf rechnen. Denn oft sind die Werte/Zahlen in den Fragen so gewählt, dass sich glatte oder einfache Werte ergeben. Aber manchmal habe ich dann doch – sicherheitshalber – nochmal nachgerechnet auf meinem [Casio fx-991MS 2nd ed.][fx991ms2]

Übrigens hat niemand irgendwelche Taschenrechner überprüft bei unserer Prüfungsgruppe (ca. 15 Teilnehmer). Das soll jetzt NICHT heißen, dass ihr einen verbotenen, nämlich programmierbaren Taschenrechner mit lauter Spickzetteln mitnehmen sollt!!! Möglicherweise ist das ja bei anderen Prüfungen anders und es _wird_ kontrolliert!

Jeder kann dann in seinem Tempo arbeiten. Die ersten beiden Schnellhefter für die Bereiche B und V liegen schon auf dem Tisch. Wenn man die abgegeben hat, bekommt man am Abgabetisch (wo die Prüfer sitzen) den Hefter mit den 25 N-Fragen und wenn man den abgegeben hat, bekommt man – je nach dem, für welche Lizenz man sich angemeldet hat – noch E und danach ggfs. A. Man darf auch zwischendurch mal rausgehen, z.B. auf Toilette. Ich habe alle 100 Fragen in einem Rutsch durchgezogen. Während man da sitzt, kontrollieren die vorne sitzenden Prüfer bereits abgegebene Bögen, so dass man sein Ergebnis sehr zeitnah nach Abgabe seines letzten Bogens erfährt, noch im Prüfungsraum, mit gedämpfter Stimme, um die noch Beschäftigten nicht zu sehr zu stören.

### Wie geht es weiter?

Ich erhielt dann einen vorläufigen DIN A5 Zettel, auf dem bestätigt wurde, dass ich die E-Prüfung erfolgreich bestanden hatte. Auf der Rückseite des Zettels steht, wie es weitergeht.

Man erhält dann in den kommenden Tagen per Post sein offizielles Zeugnis und kann dann erst – denn das Zeugnis braucht man dazu – den Antrag auf Teilnahme am Amateurfunkdienst und Zuteilung eines Rufzeichens stellen. Das ist ein PDF Formular, was man ausfüllen und zusammen mit einer Kopie seines Personalausweises und dem Zeugnis per eMail einreichen kann. Ja, bisschen doof, denn das Zeugnis _kam_ ja gerade erst von der BNetzA und jetzt lichtet man es ab und schickt es wieder hin ... 🙄 Manchmal möchte man lieber im digital-fortschrittlichen Estland leben ... 🤷‍♂️

Das habe ich am 25. September getan und bis heute, dem 3. Oktober habe ich noch keine Post und kein Rufzeichen erhalten. Da heißt es: Geduld haben.

Auf den Amateurfunk Seiten der BNetzA liest man auch derzeit:

Aktuell kommt es zu Verzögerungen in der Antragsbearbeitung. Wir bitten darum, von Nachfragen bezüglich ihres Antragstatus abzusehen. Wir werden ihren Antrag schnellstmöglich bearbeiten.
{: .notice--info}

Na dann. Sobald ich ein Rufzeichen habe, werde ich es hier sicher in geeigneter Form kundtun.

Ich hoffe, der Artikel war nicht _zu_ lang/ausführlich. Mir ging es vor der Prüfung so, dass ich gerne ein paar mehr Details gewusst hätte, wie das da dann genau vor Ort am Tag der Prüfung abläuft. Daher habe ich es mal aufgeschrieben, falls es anderen auch so geht.

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
[rumlog]: https://www.dl2rum.de/rumsoft/RUMLog.html
[vorlesung]: https://www.youtube.com/watch?v=i86_YT2TlEg&list=PL_JZo16Mzs5XGeN5N81MwQ70dp7478VkM&index=1
[50ohm-pruefung]: https://www.50ohm.de/pruefung.html
[hamfisted]: https://apps.apple.com/de/app/hamfisted/id6470218069?l=en-GB
[buch]: https://www.rheinwerk-verlag.de/amateurfunk-das-umfassende-handbuch/
[fx991ms2]: https://www.casio.com/intl/scientific-calculators/product.FX-991MS-2/