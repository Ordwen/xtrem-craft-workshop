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