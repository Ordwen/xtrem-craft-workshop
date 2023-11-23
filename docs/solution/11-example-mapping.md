# Example Mapping

## Format de restitution
*(rappel, pour chaque US)*

```markdown
## Titre de l'US (post-it jaunes)

> Question (post-it rouge)

### Règle Métier (post-it bleu)

Exemple: (post-it vert)

- [ ] 5 USD + 10 EUR = 17 USD
```

Vous pouvez également joindre une photo du résultat obtenu en utilisant les post-its.

## Story 1: Portfolio

```gherkin
As a Bank Customer
I want to be able to add money in a portfolio
So that I can evaluate the total amount in a currency
```

> Que se passe-t-il s'il n'y a pas le taux de change requis ?

### Taux de change si devise différente

- 5 USD + 10 EUR = 15 USD
- USD + EUR = KRW, USD -> KRW , EUR -> KRW

### Si même devise, pas de taux de change

- 5 USD + 10 USD = 15 USD

<<<<<<< HEAD
## Story 2: Define Pivot Currency

```gherkin
As a Foreign Exchange Expert
I want to be able to define a Pivot Currency
So that I can express exchange rates based on it
```
### Banque sans devise pivot
> Que ce passe t'il quand pas de devise pivot ?
- Pas de devise
- Crée une banque 
==> Erreur : devise pivot obligatoire

## Story 3 : Add an exchange rate
```gherkin
As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios
```
### Ajout/modification du taux d'échange
- Banque : EUR
- TC : KRW -> 3 EUR
==> 10 EUR -> 30 KRW
- TC : KRW -> 4000 EUR
==> 10 EUR -> 40000 KWR

## Story 4: Convert a Money
```gherkin
As a Bank Consumer
I want to convert a given amount in currency into another currency
So it can be used to evaluate client portfolios
```

### Exchange with pivot curency
- Banque : EUR
- TC : USD -> 1.2
-> Cnvert 10 EUR -> USD
==> 12 USD

### Round Tripping
- Banque : EUR
- TC : USD -> 1,2
-> Convert 10 EUR -> USD -> EUR
==> 9 <= resultat <= 11

### Missing exchange rate
- Banque : EUR
- TC : USD -> 1,2
-> Convert 10 EUR -> KRW
==> Erreur : Taux d'échange manquent

### Convert with pivot curency
- Banque : EUR
- TC : USD -> 1,2
- TC : KRW -> 400
-> Convert 10 USD -> KRW
==> 10 USD -> EUR -> KRW
-> Convert 10 USD -> KRW -> USD
==> 9 <= resultat <= 11
=======
## Story 2: Add an exchange rate

```gherkin
As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios
```

### On peut mettre à jour et ajouter un taux de change

- banque : eur
- taux conversion : krw -> 3 
  - 10eur -> 30krw
- taux conversion : krw -> 4000
  - 10eur -> 40000krw
>>>>>>> e36a7a47cdbd5e2aae0d1795296cbdfed9adf9a9
