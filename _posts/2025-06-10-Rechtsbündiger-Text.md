---
title: "Text in Markdown rechtsbündig setzen"
date: 2025-06-10
last_modified_at: 2025-06-10
categories: Markdown
tags: rechtsbündig blog kramdown
excerpt: Im Artikel wird beschrieben, wie man in seinen Github Pages Seiten Text rechtsbündig setzen kann.
---

## Herausfoderung
Am Ende eines Blog Posts hätte ich gerne ähnlich wie am Ende eines mathematischen Beweises eine Art "End of post" Zeichen. Bei mathematischen Artikeln ist das in der Regel ein Quadrat und es steht immer rechts am Rand.

Problem: Wir schreiben ja unsere Blog Posts hier in der Auszeichnungssprache/-syntax "Markdown" und das kann eigentlich so etwas nicht.

## Lösung
Aber wir haben Glück. Der Standard Markdown Interpreter, der bei Github Pages werkelt, ist _kramdown_ und diesen kann man dazu bringen, Text rechtsbündig zu setzen. Das geht so:

1. Zunächst einmal sicherstellen, dass auch wirklich _kramdown_ benutzt wird. Ich habe dazu in meiner `_config.yml` sicherheitshalber diesen Eintrag auf top level hinzugefügt:
   ```yaml
   markdown: kramdown
   ```
2. Nun können wir am Ende eines Posts (oder wo immer rechtsbündiger Text gewünscht ist) dieses hier schreiben:
   ```
   🔲
   {: style="text-align: right" }   
   ```
   Wichtig ist dabei, dass der rechts zu setzende Text – in meinem Fall also das Emoji – unmittelbar in der nächsten Zeile gefolgt wird von der Formatierungsangabe `{: style="text-align: right" }`.
   Diese Angabe darf weder vor, noch direkt nach dem rechtsbündig zu setzenden Text stehen. Sie muss immer nach einem Return in der direkt folgenden Zeile stehen.
   Und: _Vor_ dem rechtsbündig zu setzenden Text muss (leider) immer eine Leerzeile stehen.
   Es ist also in Markdown bzw. mit _kramdown_ nicht möglich – falls doch: gerne kommentieren –, in einer Zeile Text sowohl linksbündig, als auch dann z.B. ein Zeichen am Ende der selben Zeile rechsbündig zu haben.

Natürlich widerspricht so etwas ein wenig dem Markdown Gedanken, möglichst wenig Auszeichnung in seinem Dokument zu haben und sich stattdessen auf einen möglichst gut lesbaren Inhalt zu konzentrieren. Aber manchmal kann man auch eine kleine Ausnahme machen, finde ich. 😉

🔲
{: style="text-align: right" }