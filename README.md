# Intro

This component was created to solve the problem of [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link) no longer functioning with React Router v6+.

It works by listening to the hash property of React-Router location and scrolling to the identified element if it exists.

Scrolling itself is provided by the native browser method [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

## Installation

Just place this component anywhere in the application and it will work passively in the background.

```js
import React from "react";
// components
import ScrollToHashElement from "./ScrollToHashElement";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
    <div className="grid">
      <ScrollToHashElement />
      <Header />
      <Content />
    </div>
  );
};

export default App;
```

## React-Router Links

You can create React-Router links as you normally would. For example a link to a hash element on the homepage would look like this

```js
<Link to="/#delightful-visualization">Delightful Visualization</Link>
```

or this

```js
<Link to="#delightful-visualization">Delightful Visualization</Link>
```

a sub page like this

```js
<Link to="/about#story">Our Story</Link>
```

## Scroll Behavior

Scroll behavior such as smooth scroll can be easily modified by changing the options in the useEffect portion of the component

```js
hashElement.scrollIntoView({
  behavior: "smooth",
  // block: "end",
  inline: "nearest",
});
```
