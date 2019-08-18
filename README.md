# unit-4-game: Crystal Collector!
week 4 homework
instructions:
Create a new GitHub repo called unit-4-game, then clone it to your computer.
Inside the unit-4-game folder, create an index.html file.

Still inside the unit-4-game directory, make a folder called assets.
- Inside the assets directory, make three additional folders: javascript, css and images.
- In the javascript folder, make a file called game.js.
- In the css folder, make a file called style.css.
- In the css folder, make a file called reset.css. Paste into it the code found from the Meyerweb Reset.
- In the images folder, save any of the images you plan on using.
- Set up your repository to deploy to Github Pages.
- Push the above changes to GitHub.

[How the app should work] (https://www.youtube.com/watch?v=yNI0l2FMeCk&feature=youtu.be)
You'll be given a random number at the start of the game.
There are four crystals, each with their own random values that you'll use to add to your total score.
both the goal number and crystals get a random number generated after the player wins or losses- the goal number gets a random number between 19 and 120 and the crystals each get a random number between 1 and 12
the goal is to get the number without going over the goal. 

When you get the exact number- you get a score, and when you go over the goal- you lose by one and a new goal gets generated.
----  PSUDOCODE ----
- create variables to store numbers:
    - goal= randomly generated # b/n 19 and 120
    - blue crystal=randomly generated # b/n 1- 12
    - purple crystal=randomly generated # b/n 1-12
    - green crystal=randomly generated # b/n 1-12
    - gold crystal=randomly generated # b/n 1- 12
    - Accumulated score=0
    - win = wins++
    - lose = losses++

- random number generator:
    - b/n 1 - 12 : 0 is inclusive therefore, find a syntax that makes 0 not inclusive
- create functions to allow for actions to be taken over and over:
    - when (wins++/losses++) = reset game
        > when win = wins++
        > when lose = losses++
        > call reset function
    - wins++ when Accumulated === goal
    - random goal 
        > Math.floor(Math.random() )
        > call reset function
    - random blue crystal
    - random purple crystal
    - random green crystal
    - random gold crystal
    - reset function
        >> set accumulated score = 0
        >> call random blue crystal
        >> call random purple crystal
        >> call random green crystal
        >> call random gold crystal
        >> call goal




