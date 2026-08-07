// Mermaid.js Initialisierung
// Wird von mkdocs-material automatisch geladen (extra_javascript).
// Konvertiert alle <pre class="mermaid"> zu SVG-Diagrammen.

(function () {
  'use strict';

  function initMermaid() {
    if (typeof mermaid === 'undefined') {
      console.warn('Mermaid: mermaid.js nicht geladen');
      return;
    }
    var blocks = document.querySelectorAll('pre.mermaid');
    if (blocks.length === 0) {
      return;
    }
    try {
      // mermaid 10.9: initialize() + run() sind beide noetig
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: { useMaxWidth: true, htmlLabels: true },
        sequence: { useMaxWidth: true, htmlLabels: true },
        classDiagram: { useMaxWidth: true }
      });

      // Explizit run() aufrufen (manche Versionen brauchen das)
      // Versuche es mit allen pre.mermaid Elementen
      if (typeof mermaid.run === 'function') {
        mermaid.run({
          nodes: Array.from(blocks)
        }).catch(function (err) {
          // Wenn das fehlschlaegt, fallback: startOnLoad macht es
          console.warn('Mermaid run() Fallback:', err.message);
        });
      }
    } catch (err) {
      console.error('Mermaid-Initialisierung fehlgeschlagen:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();
