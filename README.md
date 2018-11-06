# vo-font

De standaard font voor websites en applicaties van de Vlaamse overheid.

## Installatie

```
npm install --save vo-font
```

## Gebruik
### Gebruik via de CSS en font-family
Om de Vlaanderen font te kunnen gebruiken, moeten de fonts in de fonts map gepubliceerd worden. Het CSS bestand moet ook gepubliceerd en geïmporteerd worden:

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1, user-scalable=yes">
		<link rel="stylesheet" type="text/css" href="../vo-font.css">
	</head>
	
	<body>
		<p style="font-family: Flanders Art">Flanders Art</p>
	</body>
</html>
```

### Gebruik via de CSS en vo-font component
Maak gebruik van de component in de dist map.

### Gebruik in combinatie met Polymer 2
In combinatie met Polymer 2 kan er best gebruik gemaakt worden van de component in de root map. Deze component maakt gebruik van imports met relatieve paden, daar de component in de dist map gebruik maakt van bare imports specifiers.

### Documentatie en demo

[Publicatie van documentatie en demo](https://milieuinfo.github.io/webcomponent-vo-font)

## Ontwikkelaars

Zie de lijst van [ontwikkelaars](https://github.com/milieuinfo/webcomponent-vo-font/graphs/contributors) die meegewerkt hebben aan de webcomponent.

## Contact

Heb je suggesties, opmerkingen of tips? Voel je dan vrij om ons te contacteren via help@omgevingvlaanderen.be.