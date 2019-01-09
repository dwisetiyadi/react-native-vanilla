# React/JSX Style Guide
_Imported from [Airbnb's React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) with modifications._

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (e.g. async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents
1. [Basic Rules](#basic-rules)
2. [Class vs `React.createClass` vs stateless](#class-createclass-stateless)
3. [Mixins](#mixins)
4. [Naming](#naming)
5. [Declaration](#declaration)
6. [Alignment](#alignment)
7. [Quotes](#quotes)
8. [Spacing](#spacing)
9. [Props](#[props)
10. [Refs](#refs)
11. [Parentheses](#parentheses)
12. [Tags](#tags)
13. [Methods](#methods)
14. [Ordering](#ordering)
15. [`isMounted`](#ismounted)

## Basic Rules <a name="basic-rules"></a>
* Only include one React component per file.
	* However, multiple [Stateless, or Pure Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file.
* Always use JSX syntax.

## Class vs `React.createClass` vs stateless <a name="class-createclass-stateless"></a>
* If you have internal state and/or refs, prefer `class extends React.Component` over `React.createClass`.
```javascript
// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});

// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```
And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:
```javascript
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

## Mixins <a name="mixins"></a>
*  [Do not use mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).
> Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.

## Naming <a name="naming"></a>
* **Extensions**: Use `.js` extension for React components.
* **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.js`.
* **Reference Naming**: Use PascalCase for React components and camelCase for their instances.
```javascript
// bad
import reservationCard from './ReservationCard';
    
// good
import ReservationCard from './ReservationCard';
    
// bad
const ReservationItem = <ReservationCard />;
    
// good
const reservationItem = <ReservationCard />;
```
* **Component Naming**: Use the filename as the component name. For example, `ReservationCard.js` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.js` as the filename and use the directory name as the component name:
```javascript
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```
* **Higher-order Component Naming**: Use a composite of the higher-order component’s name and the passed-in component’s name as the `displayName` on the generated component. For example, the higher-order component `withFoo()`, when passed a component `Bar` should produce a component with a `displayName` of `withFoo(Bar)`.
> Why? A component’s  `displayName`  may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.
```javascript
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
```
* **Props Naming**: Avoid using DOM component prop names for different purposes.
> Why? People expect props like  `style`  and  `className`  to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.
```javascript
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```

## Declaration <a name="declaration"></a>
* Do not use `displayName` for naming components. Instead, name the component by reference.
```javascript
// bad
export default React.createClass({
  displayName: 'ReservationCard',
  // stuff goes here
});

// good
export default class ReservationCard extends React.Component {
}
```

## Alignment <a name="alignment"></a>
* Follow these alignment styles for JSX syntax.
```javascript
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
  showButton &&
    <Button />
}

// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}
```

## Quotes
* Always use double quotes (`"`) for JSX attributes, but single quotes (`'`) for all other JS.
> Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.
```javascript
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

## Spacing <a name="spacing"></a>
* Always include a single space in your self-closing tag.
```javascript
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```
* Do not pad JSX curly braces with spaces.
```javascript
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

## Props <a name="props"></a>
* Always use camelCase for prop names.
```javascript
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

* Omit the value of the prop when it is explicitly `true`.
```javascript
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

* Avoid using an array index as `key` prop, prefer a stable ID.
> Why? Not using a stable ID  [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)  because it can negatively impact performance and cause issues with component state.
```javascript
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

* Always define explicit defaultProps for all non-required props.
> Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn’t have to assume as much. In addition, it can mean that your code can omit certain type checks.
```javascript
// bad
function SFC({ foo, bar, children }) {
  return <View>{foo}{bar}{children}</View>;
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};

// good
function SFC({ foo, bar, children }) {
  return <View>{foo}{bar}{children}</View>;
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};
SFC.defaultProps = {
  bar: '',
  children: null,
};
```

* Use spread props sparingly.
> Why? Otherwise you’re more likely to pass unnecessary props down to components.

Exceptions:
* HOCs that proxy down props and hoist propTypes
```javascript
function HOC(WrappedComponent) {
  return class Proxy extends React.Component {
    Proxy.propTypes = {
      text: PropTypes.string,
      isLoading: PropTypes.bool
    };

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
```
* Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha’s beforeEach construct.
```javascript
export default function Foo {
  const props = {
    text: '',
    isPublished: false
  }

  return (<div {...props} />);
}
```
Notes for use: Filter out unnecessary props when possible. Also, use [prop-types-exact](https://www.npmjs.com/package/prop-types-exact) to help prevent bugs.
```javascript
// bad
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <WrappedComponent {...this.props} />
}

// good
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <WrappedComponent {...relevantProps} />
}
```

## Refs <a name="refs"></a>
* Always use ref callbacks.
```javascript
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

## Parentheses <a name="parentheses"></a>
* Wrap JSX tags in parentheses when they span more than one line.
```javascript
// bad
render() {
  return <MyComponent variant="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, when single line
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

## Tags <a name="tags"></a>
* Always self-close tags that have no children.
```javascript
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```
* If your component has multi-line properties, close its tag on a new line.
```javascript
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

## Methods <a name="methods"></a>
* Use arrow functions to close over local variables.
```javascript
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
```

* Bind event handlers for the render method in the constructor.
> Why? A bind call in the render path creates a brand new function on every single render.
```javascript
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

* Do not use underscore prefix for internal methods of a React component.
> Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See [#1024](https://github.com/airbnb/javascript/issues/1024), and  [#490](https://github.com/airbnb/javascript/issues/490)  for a more in-depth discussion.
```javascript
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}
```
* Be sure to return a value in your `render` methods.
```javascript
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```

## Ordering <a name="ordering"></a>
* Ordering for `class extends React, Component`:
1.  optional  `static`  methods
2.  `constructor`
3.  `getChildContext`
4.  `componentWillMount`
5.  `componentDidMount`
6.  `componentWillReceiveProps`
7.  `shouldComponentUpdate`
8.  `componentWillUpdate`
9.  `componentDidUpdate`
10.  `componentWillUnmount`
11.  _clickHandlers or eventHandlers_  like  `onClickSubmit()`  or  `onChangeDescription()`
12.  _getter methods for  `render`_  like  `getSelectReason()`  or  `getFooterContent()`
13.  _optional render methods_  like  `renderNavigation()`  or  `renderProfilePicture()`
14.  `render`
* How to define `propTypes`, `defaultProps`, `contextTypes`, etc.
```javascript
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```
* Ordering for `React.createClass`:
1.  `displayName`
2.  `propTypes`
3.  `contextTypes`
4.  `childContextTypes`
5.  `mixins`
6.  `statics`
7.  `defaultProps`
8.  `getDefaultProps`
9.  `getInitialState`
10.  `getChildContext`
11.  `componentWillMount`
12.  `componentDidMount`
13.  `componentWillReceiveProps`
14.  `shouldComponentUpdate`
15.  `componentWillUpdate`
16.  `componentDidUpdate`
17.  `componentWillUnmount`
18.  _clickHandlers or eventHandlers_  like  `onClickSubmit()`  or  `onChangeDescription()`
19.  _getter methods for  `render`_  like  `getSelectReason()`  or  `getFooterContent()`
20.  _optional render methods_  like  `renderNavigation()`  or  `renderProfilePicture()`
21.  `render`

## `isMounted` <a name="ismounted"></a>
* Do not use `isMounted`.
> Why?  [`isMounted`  is an anti-pattern](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html), is not available when using ES6 classes, and is on its way to being officially deprecated.
