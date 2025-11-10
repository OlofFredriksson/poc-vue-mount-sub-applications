# poc-vue-mount-sub-applications

Förslag hur vi kan bygga Micro Frontends utan något fancy ramverk

## Demo

Klona ned repot och kör:

```
npm install
npm start
```

Applikation nåbar på följande url:
`http://localhost:8080`

## Leverabler

- 1st Container-app som kan skrivas i valfritt språk
- 1st Vue-app (Uppgift). Kan i teorin skrivas om React / Svelte så länge vi bestämt om ett internt api hur Uppgifter och container skall kommunicera med varandra.
- 1st backend-api som returnerar vilka uppgifter som skall renderas

## Att tänka på

- Varje applikation skall bära sin egna styling och får inte läcka CSS
- Varje uppgift skall validera sina egna uppgifter

## Saker att utreda

- Optimering, vad skall / skall inte bundlas?
- Hur stor / liten är en uppgift? Skall det motsvara en [WizardStep](https://designsystem.forsakringskassan.se/latest/components/fwizard.html)?
- Massa fler saker..
