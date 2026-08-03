# Lösungen

!!! info "Diese Seite ist mit einem kleinen Passwort-Gate geschützt"
    Die Referenz-Implementierungen für die Tag-1-bis-Tag-3-Projektaufgaben
    sind absichtlich nicht sofort sichtbar. Du musst erst das Passwort
    eingeben – danach werden die Links freigeschaltet.

<div id="gate" class="loesungen-gate">
<form id="gate-form" onsubmit="return checkPassword(event)">
  <label for="pw">Passwort:</label>
  <input type="password" id="pw" name="pw" autocomplete="off" autofocus>
  <button type="submit">Entsperren</button>
</form>
<p id="gate-error" class="gate-error" hidden></p>
<p id="gate-hint" class="gate-hint">
  💡 <strong>Tipp:</strong> Wie heisst das Konzept, das in Tag&nbsp;3
  eingeführt wird und mit "S" anfängt? (Genau dieses Wort steht
  auch in <code>trainer/hinweise.md</code>.)
</p>
<p id="gate-forgot" class="gate-hint" hidden>
  💡 <strong>Passwort vergessen?</strong> Öffne die Devtools (F12) und
  schau dir den JavaScript-Code dieser Seite an. Oder frag dein
  Trainer-Team.
</p>
</div>

<div id="locked" hidden>

!!! success "Entsperrt – viel Erfolg mit dem Vergleich"
    Du hast das Gate geknackt. Bevor du die Referenz anschaust,
    überleg nochmal kurz: was hast du **anders** gemacht? Was war
    dein Ansatz? Die Lösungen hier sind **eine** Möglichkeit,
    nicht "die richtige".

## Konzept

In den Projekt-Aufgaben der Tag-1-bis-Tag-3-Dokumentation findest du:

- **Anforderungen** (was muss die App können)
- **Skelett** (welche IDs/Klassen/Funktions-Signaturen sind Pflicht)
- **Hinweise** (verbale Tipps, kein Code)
- **Definition of Done** (Selbst-Check)

Die **konkrete Implementierung** lebst du. Die Referenz hier ist
**deine Belohnung für 20 Min eigene Arbeit** – und dein Vergleich,
wenn du fertig bist.

## Wann darfst du hier schauen?

| Situation | Empfehlung |
|---|---|
| 5 Min nicht weitergekommen | **Weiterprobieren.** Recherche im MDN oder der Theorie. |
| 20 Min nicht weitergekommen | **Hier nachschauen.** Eine Referenz pro Tag. |
| Fertig, unsicher | **Vergleichen.** Hast du es gleich, besser, oder anders gelöst? |
| Vor dem ersten Versuch | **Auf keinen Fall.** Du verdirbst dir den Aha-Moment. |

## Struktur

- **Tag 1 – Dashboard:** [HTML](tag-1/index.html) ·
  [CSS](tag-1/style.css) ·
  [Notizen](tag-1/NOTIZEN.md) (Warum gerade so? Welche Alternativen?)
- **Tag 2 – Daten & Status:** [data.json](tag-2/data.json) ·
  [script.js](tag-2/script.js) ·
  [Notizen](tag-2/NOTIZEN.md)
- **Tag 3 – Snapshot-Fallback:** [script.js](tag-3/script.js) ·
  [Notizen](tag-3/NOTIZEN.md)

Die `NOTIZEN.md` pro Tag erklären die Design-Entscheidungen und
zeigen Alternativen – sie sind auch nach dem Bootcamp nützlich zum
Nachschlagen.

## Hinweis für Lehrpersonen

Die Referenz ist absichtlich **eine** mögliche Lösung, nicht "die
richtige". Eure Schülerinnen und Schüler werden andere Farben
wählen, andere Abstände, andere Variablennamen. Das ist gut so.

Diskutiert in der Demo-Runde die **Unterschiede**: "Wer hat die
Temperatur mit `font-size: 2.5em` statt `28px` dargestellt? Welche
Variante ist lesbarer?" Solche Diskussionen vertiefen das Verständnis
mehr als jede Referenz-Implementierung.

</div>

<style>
.loesungen-gate {
  max-width: 420px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 2px dashed #00695c;
  border-radius: 12px;
  background: #f8fafa;
  text-align: center;
}
.loesungen-gate form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;
}
.loesungen-gate input[type="password"] {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}
.loesungen-gate button {
  padding: 0.5rem 1rem;
  background: #00695c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.loesungen-gate button:hover {
  background: #004d40;
}
.gate-hint {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
  text-align: left;
}
.gate-error {
  margin-top: 0.75rem;
  padding: 0.5rem;
  background: #ffebee;
  color: #c62828;
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
}
</style>

<script>
// Passwort: snapshot-fallback (bewusst trivial – View-Source knackt es)
// Das Passwort ist absichtlich im Klartext, weil das hier KEIN
// Sicherheitsfeature ist, sondern eine sanfte Huerde gegen vorzeitiges
// Anschauen der Loesungen. Lernende sollen das Konzept 'Snapshot-
// Fallback' aus Tag 3 kennen und hier anwenden.
const LOESUNGEN_PASSWORD = 'snapshot-fallback';

function checkPassword(event) {
  event.preventDefault();
  const input = document.getElementById('pw').value;
  const errEl = document.getElementById('gate-error');
  const forgotEl = document.getElementById('gate-forgot');
  if (input === LOESUNGEN_PASSWORD) {
    document.getElementById('gate').hidden = true;
    document.getElementById('locked').hidden = false;
    try { localStorage.setItem('loesungen-unlocked', '1'); } catch (e) {}
    return false;
  } else {
    errEl.textContent = 'Falsches Passwort. Versuch es nochmal oder lies den Tipp.';
    errEl.hidden = false;
    forgotEl.hidden = false;
    return false;
  }
}

// Wenn schon unlocked (localStorage), direkt anzeigen
(function () {
  try {
    if (localStorage.getItem('loesungen-unlocked') === '1') {
      document.getElementById('gate').hidden = true;
      document.getElementById('locked').hidden = false;
    }
  } catch (e) { /* localStorage nicht verfuegbar */ }
})();
</script>