# Scroll-To-Hash-Element

![npm](https://img.shields.io/npm/v/@cascadia-code/scroll-to-hash-element) ![GitHub License](https://img.shields.io/github/license/ncoughlin/scroll-to-hash-element) ![GitHub package.json dev/peer/optional dependency version](https://img.shields.io/github/package-json/dependency-version/ncoughlin/scroll-to-hash-element/peer/react)

**No longer requires react-router as dependency!**

This component enables [hash/anchor links](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) to function within a React application.

It works by listening to the hash property of `window.location` and scrolling to the matching element if it exists.

This was originally written to solve the issue of hash links no longer working with [React Router v6+](https://reactrouter.com/en/main), and required react-router as a dependency. However, it has been refactored to work with any router (or lack thereof).

Scrolling itself is provided by the native browser method [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

## Installation

Install the package with npm or yarn

```bash
npm install @cascadia-code/scroll-to-hash-element
```

Just place this component anywhere in the top level of the application and it will work passively in the background.

```js title=App.jsx
import React from "react";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

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

## Usage

### Creating Hash Links

#### With React-Router

You can create React-Router links as you normally would. For example a link to a hash element on the homepage would look like this

```js
<Link to="/#some-div-id">Link Text</Link>
```

or this

```js
<Link to="#some-div-id">Link Text</Link>
```

a sub page like this

```js
<Link to="/about#story">Our Story</Link>
```

#### Without React-Router

You can create standard anchor tags. For example a link to a hash element on the homepage would look like this

```js
<a href="/#some-div-id">Link Text</a>
```

or this

```js
<a href="#some-div-id">Link Text</a>
```

a sub page like this

```js
<a href="/about#story">Our Story</a>
```

## Customize Scroll Behavior

You can customize the scroll behavior by passing props to the ScrollToHashElement component.

```js
<ScrollToHashElement behavior="smooth" inline="center" block="center" />
```

| prop | default | options |
|----------|----------|----------|
| `behavior` | `"auto"` | `"auto"`, `"instant"`, `"smooth"` |
| `inline` | `"nearest"` | `"center"`, `"end"`, `"nearest"`, `"start"` |
| `block` | `"start"` | `"center"`, `"end"`, `"nearest"`, `"start"` |

You can read more about these properties here: [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
