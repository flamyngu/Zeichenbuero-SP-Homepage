
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

**Verbesserungen:**
- Neues Wissen akkumuliert

---

## Tag 6

WOCHENENDE🎉🎉🎉
---

## Tag 7

WOCHENENDE🎉🎉🎉
---
---
## Tag 8


Am achten Tag habe ich mich mit https://www.world4you.com/ auseinander gesetzt, da dies der Domain-Provider für stanev.at ist. Fokus lag auf FTP. 


**Verbesserungen:**
- Neues Wissen akkumuliert
---
## Tag 9

Am neunten Tag habe ich die Fotos für bewehrungs/schalungsplaene zu gespielt bekommen, diese habe ich dann auch implementiert, jedoch hat sichs herausgestehlt, dass 27000x13000 pixel große Fotos die Ladezeit einwenig (🤏) kompromittiert haben. Deswegen musste ich sie verkleinern, jedoch waren die Files alle viel zu groß für jegliche online Bildverkleinerer. Aus diesem Grund habe ich mir ImageMagick https://github.com/dlemstra/Magick.NET/tree/main installiert und mich damit auseinander gesetzt. Die Fotos habe ich dann im Terminal mit dem Befehl:
```
magick "<Name_des_Bildes>" -resize 2000x "<Neuer_Name_des_verkleinerten_Bildes>"
```
verkleinert. Dananch habe ich die Bilder mit Lightbox2:
```
<!-- Lightbox2 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/lightbox2@2/dist/css/lightbox.min.css" rel="stylesheet" />
<!-- Lightbox2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/lightbox2@2/dist/js/lightbox-plus-jquery.min.js"></script>
```
Schön in der Website dargestellt. 


**Verbesserungen:**
- Ich habe gelernt, wie man mit ImageMagick und Lightbox2 arbeitet
- Die Performance der Website ist nun deutlich höher weil keine riesigen Bilder geladen werden müssen
- Es gibt jetzt eine schöne Ansicht falls man sich die Bilder genauer ansehen möchte

**Platz für Bild(er):**
> ![schalungsplaene](IMAGES/screenshots/schalungsplaebe.html%20-%209.July.2025.png)
> ![Lightbox2](IMAGES/screenshots/lightbox2_in_schalungsplaebe.html%20-%209.July.2025.png)



---

## Tag 10

Am 10ten Tage habe ich mich auf die Galerie (mobile ansicht) konzentriert und diese verbessert.


**Verbesserungen:**
- Die Galerie hat jetzt eine mobile ansicht


**Platz für Bild(er):**
> ![galerieMobil1](IMAGES/screenshots/galerie.html_Mobile1%20-%209.July.2025.png)
> ![galerieMobil2](IMAGES/screenshots/galerie.html_Mobile2%20-%209.July.2025.png)
> ![galerieMobil3](IMAGES/screenshots/galerie.html_Mobile3%20-%209.July.2025.png)
---

## Tag 11

Am 11ten Tag habe ich mich auf die Kontakte Seite konzentriert, dort habe ich die Kontaktdaten angepasst und eine Google Maps Map embedded. Dem entsprechend habe ich mich auch einwenig mit der Googlemaps API auseinander gesetzt https://developers.google.com/maps/documentation/embed/get-started?hl=de

**Verbesserung:**
- Google Maps embedding
- Korrekte Kontaktdaten


**Platz für Bild(er):**
> ![kontakt.html](IMAGES/screenshots/kontakt.html%20-%2010.Juli.2025.png)
---

## Tag 12

Am 12ten Tage habe ich mich mit Google Search Console auseinander gesetzt  https://search.google.com/search-console/about?hl=de, außerdem habe ich einen neuen DNS eintrag zur Website hinzugefügt um den Inhaber zu bestehtigen. Zu dem habe ich mich mit SSL auseinander gesetzt um die Website sicherer zu machen und eine https verbingdung zu ermöglichen. Momentan warte ich noch auf das SSL Zertifikat.

**Verbesserungen:**
- Hoffentlich bessere Performance in Google Search 
- *Bald* sichere Verbindung per https, dank SSL


**Platz für Bild(er):**
> ![GoogleSearchConsole](IMAGES/screenshots/google_search_console%20-%2011.Juni.2025.png)
> ![SSL](IMAGES/screenshots/SSL%20-%2011.July.2025.png)
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
