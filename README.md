# Permis de conduire

## Objectifs

- Travailler les écouteurs d'événement
- Mettre en place des vérifications de champs et gérer les erreurs
- Modifier le DOM

## Instructions

Une auto-école veut mettre à disposition un formulaire de pré-inscription, pour que les candidats puissent vérifier la recevabilité de leur inscription. Aucune information n'est stockée, on peut donc l'exécuter côté **frontend**, avec **Javascript**.

Le candidat entre des informations personnelles dans la partie de gauche, les soumet et la partie de droite s'actualise pour lui dire si son inscription est possible.

## Comportement attendu

Quand on valide le formulaire, il faut afficher le nom et prénom de la personne sous *Inscription de*.
Puis afficher sous *Autorisation* un texte différent selon l'âge :

- Si le candidat a moins de 16 ans
- Si le candidat a entre 16 et 18 ans
- Si le candidat a 70 ans ou plus
