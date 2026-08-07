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
      return;  // keine Mermaid-Diagramme auf dieser Seite
    }
    try {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: { useMaxWidth: true, htmlLabels: true },
        sequence: { useMaxWidth: true, htmlLabels: true },
        classDiagram: { useMaxWidth: true }
      });
      // run() ist implizit durch startOnLoad: true
    } catch (err) {
      console.error('Mermaid-Initialisierung fehlgeschlagen:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    // DOM bereits fertig, sofort initialisieren
    initMermaid();
  }
})();
