# COVID-19 Outil de dépistage des palais de justice

** REMARQUE: ** Cet outil n'est pas destiné à fournir des conseils médicaux. Si vous avez des questions médicales, consultez votre autorité sanitaire locale.

L'outil amène le public à travers une série de questions pour déterminer s'il devrait se présenter au tribunal d'un palais de justice de l'Ontario. Il est basé sur la base de code de l'outil d'auto-évaluation covid-19.

## FONCTIONNEMENT

** REMARQUE: ** Vous devez avoir une version à jour de NodeJS installée pour l'exécuter. J'ai utilisé 13.3.0 pour le développement, mais toute version supérieure à 12.0.0 devrait fonctionner. Vous devrez installer `yarn` globalement en utilisant` npm i -g yarn` avant de pouvoir exécuter ce projet.

Pour exécuter pendant le développement, utilisez simplement la commande `yarn develop`.

Pour construire la version de production, utilisez `yarn build`. La production peut être servie localement en utilisant le `yarn serve`.