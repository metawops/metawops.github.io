---
title: "VSCode am iPad nutzen"
date: 2025-08-15
last_modified_at: 2025-08-15
categories:
  - tools
tags:
  - vscode
  - dev-tools
  - code-server
  - ipad
  - zertifikate
  - root-ca
excerpt: Wir installieren code-server inklusive Zertifikate auf einem Mac mini und nutzen dann Visual Studio Code in Safari am iPad full-screen.
header:
  teaser: /assets/images/code-server-cert.jpeg
---

![VSCode läuft in Safari auf einem iPad im Vollbildmodus. Links ist die Dateiliste zu sehen, rechts ein Editorfenster mit Quelltext. Die Oberfläche ist modern und übersichtlich, geeignet für produktives Arbeiten unterwegs.](/assets/images/code-server-ipad.jpeg)

Visual Studio Code (VSCode) ist seit Jahren mein go-to-tool für alles, was mit Text tippen zu tun hat. Vor allem natürlich, wenn es ums Programmieren geht, aber auch, um mit CSV Dateien zu arbeiten oder – wie im Falle dieses Blogs – Markdown Textdokumente zu schreiben.

Und so wie VSCode das *Tool* der Wahl ist, ist ein iPad meist das *Device* der Wahl. Ganz natürlich also, dass ich die zwei Dinge verheiraten wollte, denn leider gibt es VSCode immer noch nicht als native App für iPadOS.

### Server für code-server

Zum Glück gibt es eine Server-Variante von VSCode, genannt `code-server`. Man braucht also einen Rechner im heimischen, lokalen Netz, der bestenfalls immer an ist und installiert darauf `code-server`. Das kann ein NAS sein oder ein Raspberry Pi oder ein Mini PC, vielleicht sogar mit [ProxMox][prox] drauf. Alles möglich. Ich habe mich für einen meiner Mac minis entschieden, der eh immer an ist, weil u.a. [JellyFin][jelly] darauf läuft.

### Prinzip

Das Funktionsprinzip ist ganz einfach: Auf einem Server im LAN läuft `code-server`. Von einem anderen Rechner im LAN, z.B. einem iPad, ruft man im Browser die Adresse des Servers auf und fügt den Port, auf dem `code-server` läuft – standardmäßig 8080 – hinzu. Und schon hat man quasi VSCode auf dem iPad. "Quasi", weil es (natürlich) nicht 100%ig das selbe wie eine native VSCode App ist. Eine Einschränkung ist z.B., dass [das Syncen der ganzen Settings nicht mit normalen Methoden geht][syncissue].  
Außerdem wollen wir das Ganze über https haben, auch wenn es "nur" eine lokale Verbindung innerhalb des LANs ist. Denn wenn der Browser nur eine http Verbindung hat, weigert er sich, manche Dinge zu tun, z.B. die Zwischenablage zu bedienen. Kurzum: https macht Sinn.

### code-server installieren

Um auf einem einigermaßen aktuellen Mac (bei mir ein Mac mini M2 von 2023 mit aktuellstem macOS Sequoia 15.6) `code-server` zu installieren, empfehle ich – falls nicht eh schon geschehen – erstmal Homebrew zu installieren. Das erleichtert doch so einiges, auch für die Zukunft. Dazu einfach wie auf der [Homebrew Seite][homebrew] beschrieben vorgehen. Kurz – das hier in einem Terminal Fenster eingeben:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Wenn Homebrew da ist, installiert man den `code-server` einfach mit 
```shell
brew install code-server
```

Wir wollen natürlich, dass der `code-server` immer im Hintergrund läuft und auch automatisch gestartet wird, falls der Mac mini mal neu gebootet werden muss. Aber bevor wir das einrichten, müssen wir noch ein paar Dinge konfigurieren.

### Von überall erreichbar sein

Damit wir von egal welchem lokalen Rechner auf den `code-server` zugreifen können, müssen wir die "bind address", die standardmäßig auf `127.0.0.1` steht, auf `0.0.0.0` ändern. Das machen wir in der `code-server` Konfigurationsdatei, die wir in `~/.config/code-server/` finden und die `config.yaml` heißt.

Dort gibt es eine Zeile
```
bind-addr: 127.0.0.1:8080
```

aus der wir jetzt
```
bind-addr: 0.0.0.0:8080
```

machen. Natürlich könnt ihr auch einen anderen Port als 8080 wählen. Nur frei sollte er natürlich sein!


### Zertifikate

Jetzt wollen wir noch dafür sorgen, dass wir später im Browser die Verbindung via https machen können. Das machen wir gleich "ordentlich" in zwei Schritten:
1. Wir erstellen ein eigenes Root CA Zertifikat
2. Wir erstellen ein SSL Zertifikat für unseren `code-server`

#### Root CA

Und schon rentiert es sich, dass wir oben Homebrew installiert haben. Denn jetzt brauchen wir ein weiteres Tool, `mkcert`, was wir ebenfalls leicht via Homebrew installieren können:
```shell
brew install mkcert
```

Unser Plan ist, erstmal ein Root CA Zertifikat zu erzeugen mit dem wir dann unser SSL Zertifikat signieren. Das Root CA Zertifikat übertragen wir dann auf die Rechner (auch iPads), auf denen wir `code-server` per https nutzen wollen und vertrauen ihm dort. Beim Aufruf der `code-server` URL im Browser wird dann das SSL Zertifikat übertragen und da es von unserem eigenen Root CA Zertifikat ausgestellt wurde und wir diesem vertrauen, wird der Browser auch nicht meckern.

Mit
```shell
mkcert -install
```

erzeugen und installieren wir dieses Root CA Zertifikat.  

Mit
```shell
mkcert -CAROOT
```
kann man sich ausgeben lassen, wo das Zertifikat erzeugt bzw. abgelegt wurde. Unter macOS sollte das i.d.R. im Library-Pfad des Users liegen, bei mir liegt es in `~/Library/Application Support/mkcert` in Form der zwei Dateien `rootCA.pem` (das Zertifikat) und `rootCA-key.pem` (der private key – niemals teilen/verlieren!).

Diese `rootCA.pem` Datei werden wir später noch brauchen!

#### SSL Zertifikat

In unserem home folder erzeugen wir jetzt das SSL Zertifikat für `code-server`. Damit wir später von anderen Rechnern den Server sowohl mit seiner IP Adresse, als auch seinem lokalen Namen erreichen können, geben wir bei der Erzeugung auf der commandline gleich alle Adressen an, unter denen der Server über https erreichbar sein soll. Mein Mac mini hat die IP `192.168.0.61` und den lokalen Namen `stefmacminim2.local`. Zusätzlich sollte man immer auch `localhost` angeben, um auch lokal auf dem Mac mini im Browser den `code-server` per https erreichen zu können. Also schreiben wir:

```shell
mkcert 192.168.0.61 stefmacmini.local localhost
```

Das erzeugt wieder zwei Dateien, nämlich `192.168.0.61+2.pem` (das Zertifikat) und `192.168.0.61+2-key.pem` (der priavte key – schützen!).

Diese zwei Dateinamen konfigurieren wir nun in die o.a. `code-server` config Datei, die bei mir dann komplett so aussieht:

```
bind-addr: 0.0.0.0:8080
auth: password
password: c3afadbc21a75a3631951321
cert: /Users/stefan/192.168.0.61+2.pem
cert-key: /Users/stefan/192.168.0.61+2-key.pem
```

Das 24-stellige Password brauchen wir auch gleich beim ersten Aufruf. Und ihr müsst natürlich den Pfad zu euren beiden SSL Zertifikatsdateien entsprechend anpassen.

### Server starten

Jetzt endlich können wir den `code-server` als Dienst starten. Das machen wir auch wieder mit Homebrew:

```shell
brew services start code-server
```

Wer übrigens wissen will, was der `code-server` so macht, der findet dessen Logfile unter `/opt/homebrew/var/log/code-server.log`. 

### Root CA am iPad installieren

Damit gleich Safari nicht die Nase rümpft, wenn wir per https den `code-server` aufrufen, müssen wir noch das vorhin erzeugte Root CA Zertifikat auf dem iPad installieren und ihm vertrauen.

Dazu müssen wir die Datei `rootCA.pem` auf das iPad bekommen. Da gibt es mindestens drei Wege, von denen wir uns einen aussuchen können:
1. Per eMail schicken – nicht so dolle, läuft ja übers Internet und unverschlüsselt.
2. Per AirDrop schicken
3. Auf die iCloud legen

Wenn man die Möglichkeit hat, mit seinem iPad neben seinem Mac mini zu sitzen, dann würde ich Nr. 2 empfehlen. Nr. 3 kann man machen, aber dann nicht vergessen, hinterher die Zertifikatsdatei wieder zu löschen. Herumlungern sollte sie da nicht. 

Variante 3 würde also so ablaufen: Man kopiert die Datei `rootCA.pem` (und *nur* diese, *nicht* auch die `rootCA-key.pem` Datei!) am Mac z.B. in den iCloud Drive Hauptordner. Da die Datei in einem Unterordner von `~/Library` liegt und der Finder normalerweise den `Library` User Ordner ausblendet, gibt es (mind.) vier Möglichkeiten:
1. Ihr tippt mit einem Finder Fenster im Vordergrund einmal `⌘`{:.keycap}`⇧`{:.keycap}`.`{:.keycap}. Nun zeigen Finder Fenster immer alle Dateien an, auch die versteckten und damit auch den Ordner `Library` in eurem Home Folder, so dass ihr bis zu `~/Library/Application Support/mkcert` wandern könnt.
2. Ihr klickt auf den Finder Menüpunkt `Go` und haltet nach Erscheinen des Menüs die `⌥`{:.keycap}-Taste gedrückt. Daraufhin erscheint ca. in der Mitte ein neuer Eintrag `Library`, auf den ihr klickt.
3. Ihr drückt die Tastenkombination `⇧`{:.keycap}`⌘`{:.keycap}`L`{:.keycap}, was euch sofort in euren Library Ordner bringt.
4. Ihr tippt die Tastenkombination `⇧`{:.keycap}`⌘`{:.keycap}`G`{:.keycap} (für "Go") und gebt im erscheinenden Dialog `~/Library/` ein.

Nun könnt ihr also im Finder per drag & drop die Datei `rootCA.pem` aus dem Ordner `~/Library/Application Support/mkcert/` in den iCloud Hauptordner kopieren.

Am iPad öffnet man dann die Files App (auf Deutsch heißt sie "Dateien"), navigiert zum iCloud Drive Hauptordner und tippt die eben dorthin kopierte Datei an.

Auch wenn ihr euch für die einfachere AirDrop Variante entschieden habt, geht es jetzt auf dem iPad so weiter: Es erscheint ein Dialog, der fragt, wo das Zertifikat installiert werden soll. Wir wählen hier natürlich das iPad – ein HomePod macht hier keinen Sinn:

![Dialog im iPadOS-Einstellungsmenü zur Installation eines Zertifikat-Profils. Überschrift Installieren und iPad, Auswahlmöglichkeiten für das Gerät, schlichte Oberfläche, Fokus auf einfache Installation.](/assets/images/cert-inst-1.jpeg)

Als nächstes müssen wir auf dem iPad in die Settings (deutsch: Einstellugen) App und sehen direkt links oben, dass ein neues "Profil" heruntergeladen wurde. Profile sind eine Art Container, in denen man verschiedene Dinge verpacken und dann auf einen iPad/iPhone installieren kann, u.a. auch Zertifikate.

![Dialog im iPadOS-Einstellungsmenü zur Installation eines Zertifikat-Profils. Überschrift Installieren und iPad, einfache Auswahl des Geräts, schlichte und übersichtliche Oberfläche.](/assets/images/cert-inst-2.jpeg)

Wir tippen auf diesen Eintrag und tippen dann im Verlauf insgesamt dreimal auf die jeweils erscheinende "Install" Option:

![iPad zeigt den Installationsdialog für ein Zertifikatprofil in den Einstellungen. Auswahl Installieren auf iPad, übersichtliche und schlichte Oberfläche, neutraler Ton.](/assets/images/cert-inst-3.jpeg)

![Dialog zur Installation eines Zertifikat-Profils in den iPad-Einstellungen. Hauptinhalt ist die Auswahl Installieren auf iPad, übersichtliche Oberfläche, Fokus auf einfache und sichere Installation.](/assets/images/cert-inst-4.jpeg)

![Installationsdialog für ein Zertifikatprofil in den iPadOS-Einstellungen. Zu sehen sind die Optionen Profil installieren und iPad als Gerät. Schlichte, übersichtliche Oberfläche.](/assets/images/cert-inst-5.jpeg)

## Dem Zertifikat vertrauen

Wir sind noch nicht fertig! Jetzt gehen wir in der Settings App in den Abschnitt "General" (deutsch: Allgemein), dann auf "About" (erster Punkt; auf deutsch "Info") und scrollen ganz runter bis zum Eintrag "Certificate Trust Settings" (deutsch: "Zertifikatsvertraueneinstellungen"), den wir antippen: 

![Einstellungen-App auf dem iPad zeigt die Zertifikatsvertrauenseinstellungen mit einer Liste installierter Root-Zertifikate und Schaltern zum Aktivieren. Das neue Root-CA-Zertifikat ist sichtbar, die Oberfläche ist schlicht und übersichtlich.](/assets/images/cert-inst-6.jpeg)

Am Ende ist unser neues Root CA Zertifikat dazu gekommen, wir müssen jetzt nur noch den Schalter dafür einschalten ...

![iPad zeigt das Menü Zertifikatsvertrauenseinstellungen in den Einstellungen. Zu sehen sind installierte Root-Zertifikate mit Schaltern zum Aktivieren, darunter das neue Root-CA-Zertifikat. Schlichte, übersichtliche Oberfläche. Sichtbarer Text: Zertifikatsvertrauenseinstellungen und Zertifikatsnamen.](/assets/images/cert-inst-7.jpeg)

... und den Dialog bestätigen:

![iPad zeigt einen Bestätigungsdialog zum Aktivieren des Root-CA-Zertifikats. Schalter zum Einschalten und Button zum Bestätigen, einfache Oberfläche. Sichtbarer Text: Zertifikatsvertrauenseinstellungen und Zertifikatsname.](/assets/images/cert-inst-8.jpeg)

## Endlich

Und jetzt endlich können wir am iPad in Safari ein neues Tab aufmachen und als URL `https://192.168.0.61:8080` eingeben – wobei ihr natürlich die IP Adresse eures Servers nehmen müsst. Oder den lokalen Namen: `https://stefmacminim2.local:8080` in meinem Fall.

Jetzt sollte Safari keine Warnung bringen und direkt zur ersten Seite von `code-server` leiten, in der man erstmal das Passwort eingeben muss, was in der `config.yaml` Datei steht.

## Als "Web App" noch besser

Noch etwas besser wird das Erlebnis am iPad, wenn man sich diese Adresse als Icon auf den iPad Desktop (Home Screen) legt. Dazu in Safari auf dem iPad im Share Menü den Punkt "Add to Home Screen" wählen, einen geeigneten Namen eingeben (der erscheint dann unterm Icon) und bestätigen.

![VSCode-Oberfläche in Safari auf einem iPad im Vollbild, links Dateiliste, rechts Editor mit Quelltext. Moderner, übersichtlicher Workspace für produktives Arbeiten unterwegs. Keine sichtbaren Texte, sachliche Atmosphäre.](/assets/images/code-server-webapp-1.jpeg)

![VSCode-Oberfläche in Safari auf einem iPad im Vollbildmodus, links Dateiliste, rechts Editor mit Quelltext. Moderner, übersichtlicher Workspace, neutrale Atmosphäre.](/assets/images/code-server-webapp-2.jpeg)

Auf dem iPad Home Screen sieht das Icon dann so aus:

![iPad Home-Bildschirm mit VSCode Web-App-Icon](/assets/images/code-server-webapp-3.jpeg)

Wenn ihr nun das antippt, startet VSCode full screen.

Es sei allerdings darauf hingewiesen, dass das alles natürlich nur dann wirklich Sinn macht, wenn ihr euer iPad auch mit einer externen (Hardware-) Tastatur bedient. Und leider gibt es hier und da auch mal ein paar Hiccups, kleine Fehlerchen. Da hilft es manchmal, mit `⌘`{:.keycap}`R`{:.keycap} die Seite neu zu laden oder die App ganz abzuschießen und neu zu starten. Im worst case müsst ihr den `code-server` neu starten, was natürlich remote z.B. über eine ssh Verbindung auf euren Server mit dem Kommando
```shell
brew services restart code-server
```

geht. Da müsst ihr nicht zu Fuß zum Standort des Servers gehen.

Mein Lieblings-Tool für ssh auf dem iPad ist die App [Blink][blink], aber es gibt da ja mittlerweile zahlreiche ähnliche Apps dieser Art.

### Von unterwegs: VPN

Das ganze funktioniert natürlich auch von unterwegs, obwohl wir uns bisher nur zuhause im LAN aufgehalten haben. Dafür solltet ihr einfach eine VPN Verbindung zu euch nach Hause aufbauen. Das kann man ja z.B. in der Fritz!Box oder auch in anderen Routern relativ leicht konfigurieren. Soll ich dazu auch mal einen Artikel schreiben? Schreibt's mir in die Kommentare.

Meldet euch auch gern bei Fragen oder Hinweisen oder Begeisterungsausbrüchen ob des Artikels. 😂

🔲
{:.qed}

[homebrew]: https://brew.sh
[prox]: https://www.proxmox.com/en/products/proxmox-virtual-environment/overview
[jelly]: https://jellyfin.org
[blink]: https://blink.sh
[syncissue]: https://github.com/coder/code-server/issues/2195
