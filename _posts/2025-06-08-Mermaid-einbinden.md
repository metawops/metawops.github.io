---
title: "Mermaid für Github Pages konfigurieren"
date: 2025-06-08
categories: GithubPages
tags: mermaid
excerpt: "Der Artikel zeigt Schritt für Schritt und ganz konkret, wie man sein Github Pages Blog fit für die Verwendung von Mermaid Diagrammen macht."
---

So, nachdem ich es nun endlich geschafft habe, hier in meinem [Github Pages Blog](https://pages.github.com) auch [Mermaid][mermaid-blogpost-1] Codeblöcke tatsächlich durch Mermaid rendern und als Grafik darstellen zu lassen, will ich schnell aufschreiben, was man dafür tun muss. Sonst habe ich das übermorgen auch schon wieder vergessen. 🙈

## Zweimal JavaScript
Es braucht zwei JavaScript "Dinge", die passieren müssen:
1. Es muss Mermaid selbst so inkludiert werden, dass die entsprechenden `<script>` Kommandos im durch Jekyll erzeugten HTML landen. Dieses reine Laden könnte man zwar auch über die `_config.yml` erledigen, aber wir brauchen noch etwas Zweites, nämlich ein _Ausführen_ von JavaScript Code:
2. Damit Mermaid tatsächlich auch angestoßen wird und Codeblöcke mit Mermaid Code verarbeiten kann, müssen wir ein bisschen JavaScript Code ablegen/injizieren, in dem auf das Fertigladen des DOM gewartet und dann reagiert wird. 

Da Schritt 2 _nicht_ über die `_config.yml` erledigt werden kann und da wir beides im `<head>` haben wollen, machen wir das wie folgt:
* Wenn es noch kein Verzeichnis `_includes` im Github Pages Repository gibt, legen wir dies an.
* Darin legen wir noch ein Verzeichnis namens `head` an (ohne Unterstrich).
* In diesem Verzeichnis `_includes/head` legen wir jetzt eine Datei namens `custom.html` mit folgendem Inhalt an:

```html
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ 
    startOnLoad: false,
    theme: 'forest',
    securityLevel: 'loose'
  });
  
  document.addEventListener("DOMContentLoaded", async () => {
    // Codeblöcke mit Mermaid-Klasse finden
    document.querySelectorAll('code.language-mermaid').forEach((block) => {
      const pre = block.parentElement;
      const container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = block.textContent;
      pre.parentNode.replaceChild(container, pre);
    });
    
    await mermaid.run();
  });
</script>
```

Dabei ist es natürlich Geschmackssache, ob man sich in Zeile 5 für das `forest` Theme von Mermaid entscheidet oder für [ein anderes](https://mermaid.js.org/config/theming.html#available-themes).

Hier wird also sowohl der Mermaid Code aus dem CDN geladen und mit einem Theme initialisiert, als auch ein EventListener angelegt, der immer dann feuert, wenn eine Seite (v.a. eben auch eine Seite mit Mermaid Code) fertig geladen wurde. Dann werden alle als Mermaid Code gekennzeichneten Codeblöcke bearbeitet und gerendert.

Damit das funktioniert also immer Mermaid Code als solchen im Markdown kennzeichnen:

````
```mermaid
<Hier steht Mermaid Code>
```
````

[mermaid-blogpost-1]: https://metawops.github.io/markdown/Mermaid/