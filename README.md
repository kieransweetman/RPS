# RPS : The Odin Project

# putting into practice JS (DOM), HTML and CSS into one 

Learning elements:
  - Plan, Prototyping, improve strategy plan
  - The Fundamentals of HTML, CSS, JS, including the DOM
        - Most Notably, event listeners for JS and seleting inputs by name in CSS
  - importing Fonts
  - Game logic, helper functions

# Overview

In this project, I first created the game logic for RPS before moving on to the the Front-end. I manipulated the DOM by selecting their nodes and applying effects + game logic to each element that the user interacted with. To add more interaction, I used CSS animations to give my buttons and the game as a whole a more interactive experience (using rock, paper, and scissor icons for the cursor for on hover effects). 

The hardest part about this project was positioning my buttons in the correct place and restarting the game once the user pressed 'play again?'. The 'play?' button covers our choices for RPS but dissapears (display = none) to reveal these elements once clicked. My game logic would break and missrecord user, player and draw scores (pc and user score should never go past 5 in a best of 5) once the user restarted the game. I fixed this by seperating my functions and event listeners, and by toggling the display to none after certain buttons where pressed. Score gets wiped everytime the user restarts the game.
  
# French

Mise en pratique de JS (DOM), HTML et CSS 

Éléments d'apprentissage :

    - Plan, Prototypage, amélioration du plan stratégique
    - Les fondamentaux de HTML, CSS, JS, y compris le DOM - Notamment, les écouteurs  d'événements pour JS et la sélection des entrées par leur nom en CSS
    - l'importation de polices
    - Logique de jeu, fonctions d'aide

Vue d'ensemble

Dans ce projet, j'ai d'abord créé la logique de jeu pour RPS avant de passer au Front-end. J'ai manipulé le DOM en sélectionnant ses nœuds et en appliquant des effets + une logique de jeu à chaque élément avec lequel l'utilisateur interagit. Pour ajouter plus d'interaction, j'ai utilisé des animations CSS pour les boutons et au options, pour une expérience plus interactive (en utilisant des icônes de pierre, papier et ciseaux pour le curseur pour les effets de survol).

La partie la plus difficile de ce projet a été de positionner mes boutons au bon endroit et de redémarrer le jeu une fois que l'utilisateur a appuyé sur le bouton "Play again". Le bouton 'play?' couvre nos choix de RPS mais disparaît (display = none) pour révéler ces éléments une fois qu'on a cliqué dessus. Ma logique de jeu s'interrompait et n'enregistrait pas les scores de l'utilisateur, du joueur et du tirage au sort (le score du joueur et de l'utilisateur ne devrait jamais dépasser 5 dans un best of 5) lorsque l'utilisateur redémarrait la partie. J'ai résolu ce problème en séparant mes fonctions et mes écouteurs d'événements, et en désactivant l'affichage après avoir appuyé sur certains boutons. Le score est effacé à chaque fois que l'utilisateur redémarre le jeu.
