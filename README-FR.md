# COVID-19 Outils de dépistage des palais de justice et des écoles

** REMARQUE: ** Cet outil n'est pas destiné à fournir des conseils médicaux. Si vous avez des questions médicales, consultez votre autorité sanitaire locale.

Cette application consiste en des outils de sélection qui amènent le public à travers une série de questions pour déterminer s'il devrait fréquenter un tribunal ou une école en Ontario. Il est basé sur la base de code de l'outil d'auto-évaluation covid-19.

Il y a quatre dossiers dans le répertoire `src / pages` correspondant aux versions anglaise et française des deux screeners. De même, les modèles pour les contrôleurs se trouvent dans le dossier `src / templates`. Ceux de ce dossier sont partagés, puis les modèles spécifiques à chaque outil sont contenus dans leurs propres dossiers.

La logique pour les examinateurs est contenue dans `src / shared / logic.js` et est maintenue séparément pour chaque examinateur car ils ont des questions uniques pertinentes à leur environnement.

Les métadonnées sont contenues dans le fichier `gatsby-config.js` et sont séparées par type de filtre puis par langue.

## FONCTIONNEMENT

** REMARQUE: ** Vous devez avoir une version à jour de NodeJS installée pour l'exécuter. J'ai utilisé 13.3.0 pour le développement, mais toute version supérieure à 12.0.0 devrait fonctionner. Vous devrez installer `yarn` globalement en utilisant` npm i -g yarn` avant de pouvoir exécuter ce projet.

Pour exécuter pendant le développement, utilisez simplement la commande `yarn develop`.

Pour construire la version de production, utilisez `yarn build`. La production peut être servie localement en utilisant le `yarn serve`.
