# Star Wars Top Trumps - By Jon D Jones 💥

The aim is to build a Star Wars version of the game Top Trumps which fulfils the following criteria:

	•	The user can choose to play with either people or starships.
	•	The app makes a GraphQL query to fetch two random resources of that type (people/starships).
	•	If the player has chosen people the app compares height else if they have chosen starship it compares hyperdrive_rating.
	•	The two resources are then rendered on the screen as “cards” with some of their attributes displayed and the resource with the highest value for that attribute declared the winner.
	•	The user should then be able to play again using a button that repeats the same request.
	•	The user should also be able to go to a route which displays the history of the results.

Bonus points:
	•	Add functionality to enable more than two players.
	•	Deploy two applications with different colour themes.

This should be completed using the following tech stack:
	•	Typescript
	•	React
	•	GraphQL with Apollo
	•	Styled Components
	•	React Router
	•	Function components with hooks

This test makes use of a GraphQL wrapper around the Star Wars API:

[https://graphql.org/swapi-graphql/](https://graphql.org/swapi-graphql/)

The docs for the Star Wars API can be found here (The docs are written based on the REST API, however we would like you to use the GraphQL wrapper linked above):

[https://swapi.co/documentation](https://swapi.co/documentation)

**Live Site** [https://starwars-top-trumps.netlify.app/](https://starwars-top-trumps.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/af2788a0-62f6-4a7c-8797-a7dabc71af6a/deploy-status)](https://app.netlify.com/sites/starwars-top-trumps/deploys)

👾☄️👻👺🕹️

## HOW TO RUN

API is hosted here, [https://mystifying-pasteur-3555cd.netlify.app/.netlify/functions/index](https://mystifying-pasteur-3555cd.netlify.app/.netlify/functions/index)

```javascript
yarn
```

then

```javascript
yarn  start
```

If you do not do this no cards will load in the game.

To run the game:

```
yarn
```

then

```
yarn  start
```

## Packages

- apollo
- type-script
- styled-components
- react testing library
- jest
- enzyme

## Patterns
- Functional Components
- React context
- Hooks

## Issues

Things I would improve:

- More tests:  Mentioned in spec but I have provided very limited testing.  I've use react testing frame-work to test a few of the easier presentation components.  I have have probably added some visual snap-shop tests.  I would also have done in depth logic testing on some components
- More defensive testing if the API is available etc..  I have used the API as is
- history page:  Has no styling

**Note** If the game needed more types I would change the architecture slightly and make more use of generics.  As the game is of two types that do two things with enough different to not use a generic container.  film container and a starship container could be changed slightly to de-couple them.  Ran out of time on this one

