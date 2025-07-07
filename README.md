
# Zeichenbuero-SP-Homepage Projekt-Dokumentation

## Tag 1 – Startseite (home.html)

Am ersten Tag wurde die grundlegende Struktur der Website erstellt. Im Fokus stand die **Startseite** (`home.html`), die als Einstiegspunkt für Besucher dient. Sie enthält eine klare Navigation und einen ersten Eindruck zum Projekt.

**Erstellte Elemente:**
- Navigationsleiste mit Links zu den Unterseiten
- Willkommensnachricht / Projektbeschreibung
- Platzhalter für ein großes **Hintergrundbild** im Header-Bereich
- Erste Layout-Planung mit `div`-Containern

**Platz für Bild(e):**
> ![Startseite Screenshot](IMAGES/screenshots/home.html%20-%2030.June.2025.png)

---

## Tag 2 – Schalungspläne & Galerie v1

Am zweiten Tag wurde mit der **technischen Darstellung** begonnen. Dazu zählen erste **Schalungspläne** und die **erste Version der Galerie**.

**Erstellte Inhalte:**
- HTML-Seite mit Schalungsplänen
- Einführung eines flexiblen Layouts für die Pläne
- Nutzung von CSS `background-image` für Bildintegration

**Technische Umsetzung:**
- Verwendung von `div`-Containern mit `style="background-image: url('...')"`
- Platzhalterbilder aus Unsplash
- Mobile-freundliche Darstellung

**Platz für Bild(er):**
> ![Galerie v1](IMAGES/screenshots/galerie.html%20-%201.July.2025.png)  
> ![Schalungspläne](IMAGES/screenshots/schalungsplaebe.html%20-%201.July.2025.png)

---

## Tag 3 – Galerie Update & Bildintegration

Am dritten Tag wurde die Galerie überarbeitet und um echte Bilder ergänzt. Ziel war eine **visuell ansprechende und funktionale Darstellung** und die vermeidung von **Copyright Strikes**, außerdem habe ich eine mobile Ansicht für home.html schalungsplaene.html und bewehrungsplaene.html und ein cooles Hamburgermenu eingerichtet. 
Ich habe auch Ideen für bessere Designs und smoothe Animationen auf https://www.awwwards.com/ und auf einigien Zeichenbüro Websiten gesucht (zb. https://www.zeichenbuero-nemati.at/). 

**Verbesserungen:**
- Entfernung des Tints bei den Background Bildern, da diese nun im Vordergrund stehen

**Platz für Bild(er):**
> ![Galerie verbessert](IMAGES/screenshots/galerie.html%20-%202.July.2025.png)
> ![responsive](IMAGES/screenshots/home.html%20responsive%20-%202.July.2025.png)
> ![responsive](IMAGES/screenshots/schalungsplaene.html%20responsive%20-%202.July.2025.png)
> ![responsive](IMAGES/screenshots/bewehrungsplaene.html%20responsive%20-%202.July.2025.png)
> ![responsive](IMAGES/screenshots/hamburgerMenuMobile%20-%202.July.2025.png)

---

## Tag 4 - Projekt Seite

Am vierten Tag habe ich die projekte.html Seite hinzugefügt. Dort habe ich alle Projekte gelistet, außerdem habe ich eine coole funktion geschrieben welche die Farbe des Elemnts über welchem gerade gehoverd wird, je nach index verändert. 
```
document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.list-group-item');
    const startColor = [96, 15, 172];
    const endColor = [154, 111, 194];

    projectItems.forEach((item, index) => {
        const progress = index / (projectItems.length - 1);
        const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
        const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
        const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
        item.style.setProperty('--hover-bg-color', `rgb(${r}, ${g}, ${b})`);
    });
});

```


**Verbesserungen:**
- Projekt Seite hinzugefügt 👍

**Platz für Bild(er)**
> ![Galerie verbessert](IMAGES/screenshots/projekte.html%20-%203.Juli.2025.png)
---

## Tag 5

Am fünften Tage habe ich nichts an der Website verändert, weil ich Recherche bezüglich dem Themen Impressum, AGB und Datenschutz betrieben habe.
https://www.oesterreich.gv.at/de/themen/onlinesicherheit_internet_und_neue_medien/internet_und_handy___sicher_durch_die_digitale_welt/Seite.1720902
---

## Tag 6

WOCHENENDE🎉🎉🎉
---

## Tag 7

WOCHENENDE🎉🎉🎉
---

## Tag 8

---
Am achten Tag habe ich mich mit https://www.world4you.com/ auseinander gesetzt, da dies der Domain-Provider für stanev.at ist. Fokus lag auf FTP. 

## Tag 9

---

## Tag 10

---

## Tag 11

---

## Tag 12

---

## Tag 13

---

## Tag 14

---

## Tag 15

---

## Tag 16

---

## Tag 17

---

## Tag 18

---

## Tag 19

---

## Tag 20

---

## Tag 21

---

## Tag 22

---

## Tag 23

---

## Tag 24

---

## Tag 25

---

## Tag 26

---

## Tag 27

---

## Tag 28

---

## Tag 29

---

## Tag 30

---
