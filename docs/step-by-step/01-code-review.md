# Code review

## TODO

> En équipe, réaliser une revue de code du code et des tests

- Que cherchons-nous ?
  - comprendre le métier
  - des code smells
  - de mauvais nommages
  - de la duplication
  - des incohérences
  - ...
  
> Partager le résultat dans un backlog d'amélioration continue

TESTS:

**Bank:**

Fonctionnement: 

*convert from eur to usd returns number*


> withExchangeRate() définit un taux de change pour deux monnaies
> convert() effecture la conversion d'un montant selon les monnaies origine et source

> nom de test pas clair

*convert from usd to usd returns same value*

> l'EUR est utilisé 

Critiques:


> withExchangeRate() retourne une banque. pourquoi pas d'abord créer une banque et ensuite appliquer la méthode sur l'objet, ou renommer la fonction
> il vaut mieux créer un objet Bank à utiliser partout plutôt que le recréer à chaque test
> Convert() commence par une maj


Dans le fichier [code review](../solution/01-code-review.md), ajouter une issue par point d'amélioration, cette base sera utile pour la suite.
