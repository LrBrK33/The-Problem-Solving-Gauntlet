# Solutions

## Problem (Browser console):

> `GET http://localhost:8080/app.js net::ERR_ABORTED 404 (Not Found)`

### index.html

8 - `<script src="app.js"></script>`

8 + `<script src="bundle.js"></script>`

## Problem (Browser console): Uncaught ReferenceError: setState is not defined

### App.jsx

13 - `setState({`

13 + `this.setState({`

## Problem (Terminal): Error

> WARNING in ./src/TextComponent.jsx 6:44-51
> "export 'default' (imported as 'TextBox') was not found in './TextBox.jsx'
> @ ./src/App.jsx
> @ ./src/index.js

## Solution:

14 + `export default TextBox;`

## Problem: TextComponent does not display any child components

### Solution: Callback function in map needs explicit return or parenthesis around return to make implicit return

5 - ` return props.someText.map((currentItem, i) => {`

6 - ` <TextBox text={currentItem} func={props.alertWindow} />;`

7 - ` });`

8 - `};`

5 + ` return props.someText.map((currentItem, i) => (`

6 + ` <TextBox text={currentItem} func={props.alertWindow} />;`

7 + ` });`

8 + `);`

### Problem

ERROR in ./src/TextComponent.jsx

Module build failed (from ./node_modules/babel-loader/lib/index.js):

SyntaxError: .../The-Problem-Solving-Gauntlet/Trial_1/src/

TextComponent.jsx: Unexpected token, expected "," (6:59)

### Solution

6 - `<TextBox text={currentItem} func={props.alertWindow} />;`

6 + `<TextBox text={currentItem} func={props.alertWindow} />`

### Problem: Shows "props.text" instead of the actual text

### Solution: Wrap props.text with curly brackets

9 - `<h1 className='textBoxText'>props.text</h1>`

9 + `<h1 className='textBoxText'>{props.text}</h1>`

### Problem: props.text in TextBox component is undefined

### Solution: prop being passed into "text" key should be currentItem

6 - `<TextBox text={props.someText.currentItem} func={props.alertWindow} />`

6 + `<TextBox text={currentItem} func={props.alertWindow} />`
