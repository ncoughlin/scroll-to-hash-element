# Scroll-To-Hash-Element

![npm](https://img.shields.io/npm/v/@cascadia-code/scroll-to-hash-element) ![GitHub License](https://img.shields.io/github/license/ncoughlin/scroll-to-hash-element) ![GitHub package.json dev/peer/optional dependency version](https://img.shields.io/github/package-json/dependency-version/ncoughlin/scroll-to-hash-element/peer/react-router-dom) ![GitHub package.json dev/peer/optional dependency version](https://img.shields.io/github/package-json/dependency-version/ncoughlin/scroll-to-hash-element/peer/react)



This component enables [hash links](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) to function with [React Router v6+](https://reactrouter.com/en/main) .

In previous versions of React-Router (v5 etc) this was solved by [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link) which no longer functions with React Router v6+.

It works by listening to the hash property of React-Router location and scrolling to the identified element if it exists.

Scrolling itself is provided by the native browser method [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

## Installation

Install the package with npm or yarn

```bash
npm install @cascadia-code/scroll-to-hash-element
```

Just place this component anywhere in the application and it will work passively in the background.

```js title=App.jsx
import React from "react";
import ScrollToHashElement from "@react-router/scroll-to-hash-element";

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

This component uses the react-router-dom useLocation hook, and therefore must be placed within the context of the RouterProvider.

```js title=index.js
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

So in this example the ScrollToHashElement component is placed within the App component which is within the RouterProvider.

## Usage

### Creating Hash Links

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
