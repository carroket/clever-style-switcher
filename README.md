# Clever Style-Switcher

**A Client-Side CSS-Switcher**

## Overview

I would like to rethink CSS switchers and make a great one.

## Usage

### Deployment

First, place **clever-style-switcher.js** somewhere sensible then load it in your HTML like so:

```html
<script src="path/to/clever-style-switcher.js"></script>
```

### Configuration

Clever Style-Switcher supports initialization-time configuration via an options object containing any one of the following properties:
* **namespace** (Object)

OK, it's just one property for now, but I will probably add more later, so I want to be flexible. :)

To use an options object, simply pass it into the function expression as a second parameter in the call at the end of **clever-style-switcher.js**.

Find this:

```javascript
})(window.document);
```

Then change that to something like this:
```javascript
})(window.document, { /* Option properties go here. */ });
```

#### Namespace

By default, Clever Style-Switcher is encapsulated, but if you wish, it can expose a reference to itself to an object you specify via the **namespace** property of the options object.

For example, if you want a global reference to enable easy testing or tinkering from a JavaScript console, you might do something like this:

```javascript
})(window.document, { namespace: window });
```

In that case, you would be able to access Clever Style-Switcher via **window.cleverStyleSwitcher**.

You may wish to consider using a custom object to hold references to any components, thereby minimizing top-level clutter. For example, you might do something like this:

```javascript
})(window.document, { namespace: window.components = window.components || {} });
```

In that case, you would be able to access Clever Style-Switcher via **window.components.cleverStyleSwitcher**.

## Who made this?

Clever Style-Switcher was made by [Brian Sexton](http://briansexton.com/) of [Carroket, Inc.](http://carroket.com/)
