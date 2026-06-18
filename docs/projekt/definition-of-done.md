# Definition of Done

## Wann ist eine Aufgabe wirklich fertig?

Die Definition of Done (DoD) legt fest, was «fertig» im Team bedeutet.  
Sie verhindert Missverständnisse und stellt sicher, dass nichts vergessen geht.

## Checkliste

Jede Aufgabe ist erst fertig, wenn **alle** Punkte zutreffen:

- [ ] **Code geschrieben** – Der Code für die Aufgabe existiert
- [ ] **Code committed** – Der Code ist mit `git commit` gespeichert
- [ ] **Code gepusht** – Der Code ist mit `git push` auf GitHub
- [ ] **Funktioniert** – Die Funktion wurde manuell getestet
- [ ] **Fehlerfrei** – Es gibt keine bekannten Bugs in der Aufgabe
- [ ] **Team-Review** – Mindestens ein Teammitglied hat den Code gesehen
- [ ] **Kein kaputter Code** – Bestehende Funktionen funktionieren immer noch

## Beispiele

=== "Fertig :material-check:"
    ```markdown
    - [x] Temperatur wird auf dem Dashboard angezeigt
    - [x] Code ist committed und gepusht
    - [x] Manuell mit verschiedenen Werten getestet
    - [x] Status-Farben ändern sich korrekt
    - [x] Kollege hat Code angeschaut
    ```

=== "Nicht fertig :material-close:"
    ```markdown
    - [x] Temperatur wird auf dem Dashboard angezeigt
    - [ ] Code ist nur lokal gespeichert (kein Commit)
    - [ ] Nur mit einem Wert getestet
    - [ ] Status-Farben noch nicht implementiert
    ```

## Warum ist eine DoD wichtig?

- Alle im Team haben das gleiche Verständnis von «fertig»
- Es wird nichts vergessen
- Die Qualität bleibt konstant
- Am Ende der Woche gibt es keine bösen Überraschungen

## Täglicher Check

Am Checkpoint (15:15) prüft ihr:

1. Welche Aufgaben sind laut DoD fertig?
2. Welche sind in Arbeit?
3. Was fehlt noch?

!!! tip "Faustregel"
    Lieber eine Aufgabe richtig fertig machen als fünf halb.  
    Eine funktionierende kleine App ist besser als eine kaputte grosse App.
