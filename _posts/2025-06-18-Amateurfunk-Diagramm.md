---
title: "Mit welcher Leistung darf ich als Funkamateur senden?"
date: 2025-06-18
last_modified_at: 2025-07-25
categories:
  - amateurfunk
tags:
  - erp
  - eirp
  - mermaid
  - sendeleistung
excerpt: Der Blog Post zeigt in einem Diagramm, ob und mit welcher Leistung und unter welcher Voraussetzung ich als Funkamateur senden darf.
header:
  teaser: /assets/images/diagramm-sendeleistung.png
---

Hier mal ein Anwendungsfall für [Mermaid][tag-mermaid].

Es geht um die Frage, ob ich senden oder nicht senden darf, in Abhängigkeit meiner Amateurfunklizenz und meiner Sendeleistung.

```mermaid
flowchart TD
    A(["Start"]) --> B{"Klasse?"}
    
    B -- "N" --> C{"`Max. Leistung < 10W EIRP?`"}
    B -- E oder A --> D{"`Max. Leistung < 10W EIRP?`"}

    C -- Nein --> E["Nicht Senden"]
    C -- Ja --> F["Senden"]

    D -- Ja --> F
    D -- Nein --> G{"Standortbescheinigung oder BEMFV"}

    G -- Ja --> F
    G -- Nein --> E
```

Die Diagramm-Idee stammt aus dem [N-Lizenz-Lehrgang-Video, Lektion 8, "Antennen und Leitungen"][video]. – Dort sieht es auch hübscher und übersichtlicher aus ...

Na, vielleicht lerne ich noch mehr über die Mermaid-Sprache in nächster Zeit und kann das Diagramm oben noch optimieren.

Oder ihr habt einen Tipp, wie man das Diagramm weniger "wild" gestalten kann? Aktuell sieht der Mermaid Code zu obigem Diagramm so aus:

````
```mermaid
flowchart TD
    A(["Start"]) --> B{"Klasse?"}
    
    B -- "N" --> C{"`Max. Leistung < 10W EIRP?`"}
    B -- E oder A --> D{"`Max. Leistung < 10W EIRP?`"}

    C -- Nein --> E["Nicht Senden"]
    C -- Ja --> F["Senden"]

    D -- Ja --> F
    D -- Nein --> G{"Standortbescheinigung oder BEMFV"}

    G -- Ja --> F
    G -- Nein --> E
```
````

Bin für sachdienliche Hinweise offen! 

🔲
{: style="text-align: right" }

[video]: https://youtu.be/Oe2XpzhSVEQ?si=K3jzmHP7x92_RXBa&t=2683
[tag-mermaid]: https://blog.metawops.de/tags/#mermaid