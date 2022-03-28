# RPS : The Odin Project

# putting into practice JS (DOM), HTML and CSS into one 

Learning elements:
  - Plan, Prototyping, improve strategy plan
  - The Fundamentals of HTML, CSS, JS, including the DOM
        - Most Notably, event listeners for JS and seleting inputs by name in CSS
  - importing Fonts
  - Game logic, helper functions

# OverView

In this project, I first created the game logic for RPS before moving on to the the Front-end. I manipulated the DOM by selecting their nodes and applying effects + game logic to each element that the user interacted with. To add more interaction, I used CSS animations to give my buttons and the game as a whole a more interactive experience (using rock, paper, and scissor icons for the cursor for on hover effects). 

The hardest part about this project was positioning my buttons in the correct place and restarting the game once the user pressed 'play again?'. The 'play?' button covers our choices for RPS but dissapears (display = none) to reveal these elements once clicked. My game logic would break and missrecord user, player and draw scores (pc and user score should never go past 5 in a best of 5) once the user restarted the game. I fixed this by seperating my functions and event listeners, and by toggling the display to none after certain buttons where pressed. Score gets wiped everytime the user restarts the game.
  
