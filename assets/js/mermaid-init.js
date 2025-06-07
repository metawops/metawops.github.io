document.addEventListener("DOMContentLoaded", async () => {
  // Mermaid als ESM wird bereits über head_scripts eingebunden
  if (typeof mermaid === "undefined") return;

  // Alle Codeblöcke mit Mermaid-Code finden
  document.querySelectorAll('code.language-mermaid').forEach((block) => {
    // <pre> Eltern-Element finden
    const pre = block.parentElement;
    // Neues DIV für Mermaid-Diagramm erstellen
    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid';
    mermaidDiv.textContent = block.textContent;
    // <pre> durch das neue DIV ersetzen
    pre.parentNode.replaceChild(mermaidDiv, pre);
  });

  // Mermaid initialisieren und Diagramme rendern
  await mermaid.initialize({ startOnLoad: false, theme: "default" });
  await mermaid.run();
});
