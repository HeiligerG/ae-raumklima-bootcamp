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
      // mermaid 10: zuerst initialize() mit config, dann run()
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: { useMaxWidth: true, htmlLabels: true },
        sequence: { useMaxWidth: true, htmlLabels: true },
        classDiagram: { useMaxWidth: true }
      });
      // startOnLoad: true macht den render automatisch
    } catch (err) {
      console.error('Mermaid-Initialisierung fehlgeschlagen:', err);
      // Fallback: manuelles Rendering
      try {
        mermaid.run();
      } catch (e2) {
        console.error('Mermaid-Fallback fehlgeschlagen:', e2);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();
