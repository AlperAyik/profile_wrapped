# Profile Wrapped

## 📖 Over het project

**Profile Wrapped** is mijn persoonlijke profielpagina. Op deze website kunnen bezoekers meer over mij te weten komen, zoals mijn **hobby's, skills, interesses en projecten**.

De website bestaat uit verschillende sections. Je kunt door de pagina scrollen of via de navbar direct naar een bepaalde section navigeren.

---

## 🧱 Pagina-opbouw

De website bestaat uit:

* **Navbar** – Navigatie naar de verschillende sections en mijn naam.
* **Hero** – Introductie van mijn profiel.
* **Persoonlijk** – Informatie over mijn hobby's en interesses.
* **Skills** – Mijn belangrijkste programmeertalen en technieken.
* **Recepten** – Mijn favoriete recepten.
* **Muziek** – Muziek die ik leuk vind en interactieve muziekknoppen.
* **Projecten** – Een link naar mijn GitHub-pagina waar mijn projecten te vinden zijn.
* **Footer** – Het afsluitende gedeelte van de pagina.

Via de links in de navbar kan de bezoeker direct naar een section navigeren.

---

## ✨ Interacties & Animations

### Navbar

Mijn naam in de navbar bestaat uit losse letters. Met JavaScript wordt steeds een andere letter voorzien van de CSS-animatie `bounce`, waardoor mijn naam steeds op een andere plek beweegt.

### Scroll Animation

De verschillende sections krijgen een **fade-in animation** wanneer ze tijdens het scrollen in beeld komen. Hiervoor gebruik ik CSS `@keyframes` en `animation-timeline`.

### Hobby Cards

De hobby cards hebben een hover-effect. Wanneer je over een card gaat, verschijnt er een **box-shadow** waardoor de card meer naar voren komt.

### Skills afbeelding

Wanneer je met je muis over de afbeelding in de Skills-section gaat, begint de afbeelding te **trillen**. Dit zorgt voor een interactieve reactie wanneer de gebruiker over de afbeelding hovert.

### Muziek

In de muzieksection staan drie knoppen waarmee verschillende nummers kunnen worden afgespeeld.

Wanneer een nummer wordt gekozen en afgespeeld, begint de **vinylplaat te draaien**. Hiervoor gebruik ik JavaScript, `requestAnimationFrame()` en het HTML `<audio>`-element.

Wanneer de muziek wordt gepauzeerd, stopt ook de rotatie van de vinylplaat.

Daarnaast kan de bezoeker naar **één van mijn eigen gespeelde nummers** luisteren.

### Projecten

In de Projecten-section kan de bezoeker via een link naar mijn **GitHub-pagina** gaan. Hier zijn mijn verschillende projecten te bekijken.

---

## 🛠️ Gebruikte technieken

### HTML

* HTML5
* Semantische HTML
* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<footer>`
* HTML `<audio>`
* HTML `<progress>`

### CSS

* CSS3
* Flexbox
* CSS Grid
* Responsive layout
* CSS `@keyframes`
* CSS Animations
* CSS Transitions
* `:hover`
* `animation-timeline`
* `transform`
* `box-shadow`

### JavaScript

JavaScript gebruik ik voor verschillende interactieve onderdelen van de website:

* DOM-selectors
* `querySelector()` en `querySelectorAll()`
* Event listeners
* `forEach()`
* `setInterval()`
* `clearInterval()`
* `requestAnimationFrame()`
* HTML Audio API
* CSS classes toevoegen en verwijderen
* CSS properties aanpassen vanuit JavaScript

---

## 🎨 Design

Voor het ontwerp gebruik ik verschillende kleuren om de sections van elkaar te onderscheiden. De belangrijkste kleuren zijn onder andere:

* Zwart
* Gebroken wit
* Oranje
* Donkerrood
* Geel
* Roze

Ik gebruik **Inter** als belangrijkste font.

De website maakt gebruik van afgeronde hoeken, kaarten, afbeeldingen, transitions en animations om de pagina interactief te maken.

---

## 🎯 Doel van het project

Het doel van **Profile Wrapped** is om mezelf op een creatieve manier voor te stellen aan docenten en medestudenten.

Daarnaast gebruik ik dit project om mijn kennis van **HTML, CSS en JavaScript** toe te passen. Ik heb hierbij geleerd hoe ik een ontwerp kan omzetten naar een werkende webpagina en hoe ik met JavaScript interactieve elementen kan toevoegen.

---

## 📁 Projectstructuur

```text
profile_wrapped/

│
├── Assets/
│   ├── Images/
│   ├── Audio/
│   └── Favicons/
│
├── index.html
├── style.css
├── script.js
└── README.md
```