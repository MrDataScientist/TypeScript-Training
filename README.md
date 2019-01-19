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