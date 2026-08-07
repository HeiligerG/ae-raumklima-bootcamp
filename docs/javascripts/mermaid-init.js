// Mermaid.js Initialisierung
// Wird von mkdocs-material automatisch geladen, weil es in
// extra_javascript eingebunden ist.
// Fuehrt mermaid.run() aus, um alle <pre class="mermaid">
// Elemente in SVG umzuwandeln.

(function() {
  function initMermaid() {
    if (typeof mermaid === 'undefined') return;
    if (document.querySelectorAll('pre.mermaid').length === 0) return;
    mermaid.run({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: { useMaxWidth: true },
      sequence: { useMaxWidth: true },
      classDiagram: { useMaxWidth: true }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();
