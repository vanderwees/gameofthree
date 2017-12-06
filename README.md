## About
Game Of Three is a game where two players (units/instances) create a number dividable by three. They communicating with each other using an API.

## Rules
- The first player generates a random number and sends it to player 2.
- Every player is allowed to add 1, remove 1 or do nothing (add from set {-1,0,1}).
- The number is divided by three and send over to the other player (flattened).
- The first who reaches outcome 1 (after division) wins.

## Bootstrapped
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
