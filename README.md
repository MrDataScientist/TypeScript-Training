# Complete Typescript course
* As a starting point, I recommend using a typescript playground to see the differences between javascript and typescript.
* Use this link - http://www.typescriptlang.org/play/index.html 
* try this sample code:
```
const DC_COMICS = "DC COMICS EDITOR";
const MARVEL = "MARVEL EDITOR";

var editor = DC_COMICS;

if (editor === DC_COMICS) {
    var superman:any = { name: 'superman', editor: editor };
    console.log("Hero inside the block:", superman);

    superman.creationDate = 1938;
}

console.log("Hero outside the block", superman);
  ```
## EcmaScript features

#### let & const

#### dependencies
* npm i @types/node --save
* npm i @types/lodash --save
* npm i ts-node -D
######  Then add this line of code to the script in the package.json file:
* "start": ",/node_modules/.bin/ts-node ./server/server.ts"

* npm i sequelize -S
###### then install the type definitions for sequelize
* npm i @types/sequelize -D
###### Then in order to use Postgres you will need to install pg
* npm i pg -S

### Run the server
* npm start