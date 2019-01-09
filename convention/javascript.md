# JavaScript Style Guide
_Imported from [Airbnb’s Style Guide](https://github.com/airbnb/javascript) with modifications to the guidelines and rules._

## Table of Contents
1.  [Types](#types)
2. [References](#references)
3. [Objects](#objects)
4. [Arrays](#arrays)
5. [Destructuring](#destructuring)
6. [Strings](#strings)
7. [Functions](#functions)
8. [Arrow Functions](#arrow-functions)
9. [Classes & Constructors](#classes-and-constructors)
10. [Modules](#modules) 
11. [Iterator & Generators](#iterator-and-generators)
12. [Properties](#properties)
13. [Variables](#variables)
14. [Hoisting](#hoisting)
15. [Comparison Operators & Equality](#comparison-operators-and-equality)
16. [Blocks](#blocks)
17. [Control Statements](#control-statements)
18. [Commas](#commas)
19. [Whitespace](#whitespace)
20. [Commas](#commas)
21. [Semicolons](#semicolons)
22. [Type Casting & Coercion](#type-casting-and-coercion)
23. [Naming Conventions](#naming-conventions)
24. [Accessors](#accessors)
25. [Events](#events)
26. [jQuery](#jquery)
27. [ECMAScript 5 Compatibility](#es5-compatibility)
28. [Standard Library](#standard-library)
29. [Testing](#testing)
30. [Performance](#performance)
31. [Resources](#resources)

## Types <a name=“types></a>
* 1.1 **Primitives**: When you access a primitive type you work directly on its value.
  * `string`
  * `number`
  * `boolean`
  * `null`
  * `undefined`
  * `symbol`
  
```
const foo = 1;
let bar = foo;
bar = 9

console.log(foo, bar) // => 1, 9
```

* 1.2 **Complex**: When you access a complex type you work on a reference to its value.
  * `object`
  * `array`
  * `function`
  
```
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

## References <a name=“references”></a>

* 2.1 Use `const` for all your references; avoid using `var`.
> Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code

```
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

* 2.2 If you mush reassign references, use `let` instead of `var`.
> Why? `let` is block-scoped rather than function-scoped like `var`.

```
// bad
var count = 1;
if (true) {
    count += 1;
}

// good, use the let.
let count = 1;
if (true) {
    count += 1;
}
```

* 2.3 Note that both `let` and `const` are block-scoped.

```
// const and let only exist in the blocks they are defined in.
{
	let a = 1;
	const b = 2;
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

## Objects <a name=“objects”></a>
* 3.1 Use the literal syntax for object creation.

```
// bad
const item = new Object();

// good
const item = {};
```

* 3.2 Use computed property names when creating objects with dynamic property names.
> Why? They allow you to define all the properties of an object in one place.

```
function getKey(k) {
	return `a key named ${k}`;
}

// bad
const obj = {
	id: 5,
	name: 'San Fransisco'
};
obj[getKey('enabled')] = true;

// good
const obj = {
	id: 5,
	name: 'San Fransisco',
	[getKey('enabled')]: true,
};
```

* 3.3 Use object method shorthand.

```
// bad
const atom = {
	value: 1,
	addValue: function(value) {
		return atom.value + value;
	},
};

// good
const atom = {
	value: 1,
	addValue(value) {
		return atom.value + value;
	},
};
```

* 3.4 Use property value shorthand.
> Why? It is shorter and more descriptive.

```
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
	lukeSkywalker: lukeSkywalker,
}

// good
const obj = {
	lukeSkywalker,
}
```

*3.5 Group your shorthand properties at the beginning of your object declaration.
> Why? It's easier to tell which properties are using the shorthand.

```
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
	episodeOne: 1,
	twoJediWalkIntoACantina: 2,
	lukeSkywalker,
	episodeThree: 3,
	mayTheFourth: 4,
	anakinSkywalker,
}

// good
const obj = {
	lukeSkywalker,
	anakinSkywalker,
	episodeOne: 1,
	twoJediWalkIntoACantina: 2,
	episodeThree: 3,
	mayTheFourth: 4,
}
```

* 3.6 Only quote properties that are invalid identifiers.
> Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

```
// bad
const obj = {
	'foo': 1,
	'bar': 2,
	'data-blah': 3,
};

// good
const obj = {
	foo: 1,
	bar: 2,
	'data-blah': 3,
};
```

* 3.7 Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`.
> Why? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

```
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
// ...
console.log(has.call(object, key));
```

* 3.8 Prefer the object spread operator over `Object.assign` to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

```
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates 'original'
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

## Arrays <a name="arrays"></a>

* 4.1 Use the literal syntax for array creation.

```
// bad
const items = new Array();

// good
const items = [];
```

* 4.2 Use [`Array.push`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

```
const someStack = [];

// bad
someStack[someStack.length] = 'foo';

// good
someStack.push('foo');
```

* 4.3 Use array spreads `...` to copy arrays.

```
const items = [1, 2, 3];

// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
	itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

* 4.4 To convert an iterable object to an array, use spreads `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

* 4.5 Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.

```
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

* 4.6 Use  [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from)  instead of spread  `...`  for mapping over iterables, because it avoids creating an intermediate array.

```
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

* 4.7 Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects.

```
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map(x => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
```

* 4.8 Use line breaks after open and before close array brackets if an array has multiple lines.

```
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

## Destructuring <a name="destructuring"></a>
* 5.1 Use object destructuring when accessing and using multiple properties of an object.
> Why? Destructuring saves you from creating temporary references for those properties.

```
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
* 5.2 Use array destructuring.

```
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

* 5.3 Use object destructuring for multiple return values, not array destructuring.
> Why? You can add new properties over time or change the order of things without breaking call sites.

```
// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);
```

## Strings <a name="strings"></a>
* 6.1 Use single quotes `''` for strings.

```
// bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```

* 6.2 Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.
> Why? Broken strings are painful to work with and make code less searchable.

```
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

* 6.3 When programmatically building up strings, use template strings instead of concatenation.
> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

* 6.4 Never use `eval()` on a string, it opens too many vulnerabilities.

* 6.5 Do not unnecessarily escape characters in strings.
> Why? Backslashes harm readability, thus they should only be present when necessary.

```
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```

## Functions <a name="functions"></a>
* 7.1 Use named function expressions instead of function declarations.
> Why? Function declarations are hoisted, which means that it’s easy to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack.

```
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

* 7.2 Wrap immediately invoked function expressions in parentheses.
> Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

```
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
```

* 7.3 Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently.

* 7.4 **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.

```
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```

* 7.5 Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```

 * 7.6 Never use `arguments`, opt to use rest syntax `...` instead.

```
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

* 7.7 Use default parameter syntax rather than mutating function arguments.

```
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

* 7.8 Avoid side effects with default parameters.

> Why? They are confusing to reason about.

```
let b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

* 7.9 Always put default parameters last.

```
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

* 7.10 Never use the Function constructor to create a new function.

> Why? Creating a function in this way evaluates a string similarly to  `eval()`, which opens vulnerabilities.

```
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```

* 7.11 Spacing in a function signature.

> Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

```
// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x = function () {};
const y = function a() {};
```

* 7.12 Never mutate parameters.

> Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
```

* 7.13 Never reassign parameters.

> Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the  `arguments`  object. It can also cause optimization issues, especially in V8.

```
// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```

* 7.15 Prefer the use of the spread operator `...` to call variadic functions.

> Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose  `new`  with  `apply`.

```
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);
```

* 7.15 Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.

```
// bad
function foo(bar,
             baz,
             quux) {
  // ...
}

// good
function foo(
  bar,
  baz,
  quux,
) {
  // ...
}

// bad
console.log(foo,
  bar,
  baz);

// good
console.log(
  foo,
  bar,
  baz,
);
```

## Arrow Functions <a name="arrow-functions"></a>

* 8.1 When you must use an anonymous function (as when passing an inline callback), use arrow function notation.

> Why? It creates a version of the function that executes in the context of  `this`, which is usually what you want, and is a more concise syntax.

> Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

```
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

* 8.2 If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement.

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

```
// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});
```

* 8.4 In case the expression spans over multiple lines, wrap it in parentheses for better readability.
> Why? It shows clearly where the function starts and ends.
```
// bad
['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
);

// good
['get', 'post', 'put'].map(httpMethod => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
));
```

* 8.4 If your function takes a single argument and doesn’t use braces, omit the parentheses. Otherwise, always include parentheses around arguments for clarity and consistency.
> Why? Less visual clutter.
```
-   // bad
    [1, 2, 3].map((x) => x * x);
    
    // good
    [1, 2, 3].map(x => x * x);
    
    // good
    [1, 2, 3].map(number => (
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));
    
    // bad
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });
    
    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
```

* 8.5 Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`).
```
// bad
const itemHeight = item => item.height <= 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) => item.height >= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = item => (item.height <= 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height <= 256 ? largeSize : smallSize;
};
```

* 8.6 Enforce the location of arrow function bodies with implicit returns.
```
// bad
foo =>
  bar;

foo =>
  (bar);

// good
foo => bar;
foo => (bar);
foo => (
   bar
)
```

## Classes & Constructors <a name="classes-and-constructors"></a>

* 9.1 Always use `class`. Avoid manipulating `prototype` directly.
> Why?  `class`  syntax is more concise and easier to reason about.
```
// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
```

* 9.2 Use `extends` for inheritance.
> Why? It is a built-in way to inherit prototype functionality without breaking  `instanceof`.
```
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(his, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

* 9.3 Methods can return `this` to help with method chaining.
```
// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

* 9.4 It’s okay to write a custom `toString()` method, just make sure it works successfully and causes no side effects.
```
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}
```

* 9.5 Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary.
```
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

* 9.6 Avoid duplicate class members.
> Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.
```
// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// good
class Foo {
  bar() { return 1; }
}

// good
class Foo {
  bar() { return 2; }
}
```

## Modules <a name="modules"></a>
* 10.1 Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.
> Why? Modules are the future, let’s start using the future now.
```
// bad
const PrutopiaStyleGuide = require('./PrutopiaStyleGuide');
module.exports = PrutopiaStyleGuide.es6;

// ok
import PrutopiaStyleGuide from './PrutopiaStyleGuide';
export default PrutopiaStyleGuide.es6;

// best
import { es6 } from './PrutopiaStyleGuide';
export default es6;
```

* 10.2 Do not use wildcard imports.
> This makes sure you have a single default export.
```
// bad
import * as PrutopiaStyleGuidefrom './PrutopiaStyleGuide';

// good
import PrutopiaStyleGuide from './PrutopiaStyleGuide';
```

* 10.4 And do not export directly from an import.
> Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.
```
// bad
// filename es6.js
export { es6 as default } from './PrutopiaStyleGuide';

// good
// filename es6.js
import { es6 } from './PrutopiaStyleGuide';
export default es6;
```

* 10.4 Only import from a path in one place.
> Why? Having multiple lines that import from the same path can make code harder to maintain.
```
// bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';

// good
import foo, {
  named1,
  named2,
} from 'foo';
```

* 10.5 Do not export mutable bindings.
> Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.
```
// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };
```

* 10.6 In modules with a single export, prefer default export over named export.
> Why? To encourage more files that only ever export one thing, which is better for readability and maintainability.
```
// bad
export function foo() {}

// good
export default function foo() {}
```

* 10.7 Put all `import`s above non-import statements.
> Why? Since  `import`s are hoisted, keeping them all at the top prevents surprising behavior.
```
// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo.init();
```

* 10.8 Multiline imports should be indented just like multiline array and object literals.
> Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.
```
// bad
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

// good
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';
```

* 10.9 Disallow Webpack loader syntax in module import statements
> Why? Since using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in  `webpack.config.js`.
```
// bad
import fooSass from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSass from 'foo.scss';
import barCss from 'bar.css';
```

## Iterators and Generators <a name="iterators-and-generators"></a>

* 11.1 Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`.
> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.
> Use  `map()`  /  `every()`  /  `filter()`  /  `find()`  /  `findIndex()`  /  `reduce()`  /  `some()`  / ... to iterate over arrays, and  `Object.keys()`  /  `Object.values()`  /  `Object.entries()`  to produce arrays so you can iterate over objects.
```
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map(num => num + 1);
```

* 11.2 Don't use generators for now.
> Why? They don't transpile well to ES5/

* 11.3 If you must use generators, make sure their function signature is spaced properly.
> Why?  `function`  and  `*`  are part of the same conceptual keyword -  `*`  is not a modifier for  `function`,  `function*`  is a unique construct, different from  `function`.
```
// bad
function * foo() {
  // ...
}

// bad
const bar = function * () {
  // ...
};

// bad
const baz = function *() {
  // ...
};

// bad
const quux = function*() {
  // ...
};

// bad
function*foo() {
  // ...
}

// bad
function *foo() {
  // ...
}

// very bad
function
*
foo() {
  // ...
}

// very bad
const wat = function
*
() {
  // ...
};

// good
function* foo() {
  // ...
}

// good
const foo = function* () {
  // ...
};
```

## Properties <a name="properties"></a>
* 12.1 Use dot notation when accessing properties.
```
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;
```

* 12.2 Use bracket notation `[]` when accessing properties with a variable.
```
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```

* 12.3 Use exponentiation operator `**` when calculating exponentiation.
```
// bad
const binary = Math.pow(2, 10);

// good
const binary = 2 ** 10;
```

## Variables <a name="variables"></a>
* 13.1 Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that
```
// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();
```

* 13.2 Use one `const` or `let` declaration per variable or assignment.
> Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a  `;`  for a  `,`  or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.
```
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

* 13.3 Group all your `const`s and then group all your `let`s.
> Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.
```
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

* 13.4 Assign variables where you need them, but place them in a reasonable place.
> Why?  `let`  and  `const`  are block scoped and not function scoped.
```
// bad - unnecessary function call
function checkName(hasName) {
  const name = getName();

  if (hasName === 'test') {
    return false;
  }

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}

// good
function checkName(hasName) {
  if (hasName === 'test') {
    return false;
  }

  const name = getName();

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}
```

* 13.5 Don’t chain variable assignments.
> Why? Chaining variable assignments creates implicit global variables.
```
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

* 13.6 Avoid using unary increments and decrements (`++`, `--`).
> Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like  `num += 1`  instead of  `num++`  or  `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.
```
// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good

const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;
```

* 13.7 Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens.
> Why? Linebreaks surrounding  `=`  can obfuscate the value of an assignment.
```
// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';
```

* 13.8 Disallow unused variables.
> Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.
```
// bad

var some_unused_var = 42;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
    return x;
}

// good

function getXPlusY(x, y) {
  return x + y;
}

var x = 1;
var y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
var { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.
```

## Hoisting <a name="hoisting"></a>
* 14.1 `var` declarations get hoisted to the top of their closest enclosing function scope, their assignment does not. `const`and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone). It’s important to know why [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).
```
// we know this wouldn’t work (assuming there
// is no notDefined global variable)
function example() {
  console.log(notDefined); // => throws a ReferenceError
}

// creating a variable declaration after you
// reference the variable will work due to
// variable hoisting. Note: the assignment
// value of `true` is not hoisted.
function example() {
  console.log(declaredButNotAssigned); // => undefined
  var declaredButNotAssigned = true;
}

// the interpreter is hoisting the variable
// declaration to the top of the scope,
// which means our example could be rewritten as:
function example() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // => undefined
  declaredButNotAssigned = true;
}

// using const and let
function example() {
  console.log(declaredButNotAssigned); // => throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
  const declaredButNotAssigned = true;
}
```

* 14.2 Anonymous function expressions hoist their variable name, but not the function assignment.
```
function example() {
  console.log(anonymous); // => undefined

  anonymous(); // => TypeError anonymous is not a function

  var anonymous = function () {
    console.log('anonymous function expression');
  };
}
```

* 14.3 Named function expressions hoist the variable name, not the function name or the function body.
```
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying');
  };
}

// the same is true when the function name
// is the same as the variable name.
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  };
}
```

* 14.4 Function declarations hoist their name and the function body.
```
function example() {
  superPower(); // => Flying

  function superPower() {
    console.log('Flying');
  }
}
```

* For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

## Comparison Operators & Equality <a name="comparison-operators-and-equality"><a/>
* 15.1 Use `===` and `!==` over `==` and `!=`.
* 15.2 Conditional statements such as the  `if`  statement evaluate their expression using coercion with the  `ToBoolean`abstract method and always follow these simple rules:
	-   **Objects**  evaluate to  **true**
	-   **Undefined**  evaluates to  **false**
	-   **Null**  evaluates to  **false**
	-   **Booleans**  evaluate to  **the value of the boolean**
	-   **Numbers**  evaluate to  **false**  if  **+0, -0, or NaN**, otherwise  **true**
	-   **Strings**  evaluate to  **false**  if an empty string  `''`, otherwise  **true**
```
if ([0] && []) {
  // true
  // an array (even an empty one) is an object, objects will evaluate to true
}
```

* 15.3 Use shortcuts for booleans, but explicit comparisons for strings and numbers.
```
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```

* 15.4 For more information see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

* 15.5 Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).
> Why? Lexical declarations are visible in the entire  `switch`  block but only get initialized when assigned, which only happens when its  `case`  is reached. This causes problems when multiple  `case`  clauses attempt to define the same thing.
```
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```

* 15.6 Ternaries should not be nested and generally be single line expressions.
```
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

* 15.7 Avoid unneeded ternary statements.
```
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

* 15.8 When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators (`+`, `-`, `*`, & `/`) since their precedence is broadly understood.
```
// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad
// one may be confused into thinking (a || b) && c
if (a || b && c) {
  return d;
}

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const bar = (a ** b) - (5 % d);

// good
if (a || (b && c)) {
  return d;
}

// good
const bar = a + b / c * d;
```

## Blocks <a name="blocks"></a>
* 16.1 Use braces with all multi-line blocks.
```
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function foo() { return false; }

// good
function bar() {
  return false;
}
```

* 16.2 If you’re using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block’s closing brace.
```
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

* 16.3 If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks.
```
// bad
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// bad
function cats() {
  if (x) {
    return x;
  } else if (y) {
    return y;
  }
}

// bad
function dogs() {
  if (x) {
    return x;
  } else {
    if (y) {
      return y;
    }
  }
}

// good
function foo() {
  if (x) {
    return x;
  }

  return y;
}

// good
function cats() {
  if (x) {
    return x;
  }

  if (y) {
    return y;
  }
}

// good
function dogs(x) {
  if (x) {
    if (z) {
      return y;
    }
  } else {
    return z;
  }
}
```

## Control Statements <a name="control-statements"></a>
* 17.1 In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line.
> Why? Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern similar to method chaining. This also improves readability by making it easier to visually follow complex logic.
```
// bad
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// bad
if (foo === 123 &&
  bar === 'abc') {
  thing1();
}

// bad
if (foo === 123
  && bar === 'abc') {
  thing1();
}

// bad
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}

// good
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

// good
if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}

// good
if (foo === 123 && bar === 'abc') {
  thing1();
}
```

* 17.2 Don't use selection operators in place of control statements.
```
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
  startRunning();
}
```

## Comments <a name="comments"></a>
* 18.1 Use `/** ... */` for multi-line comments.
```
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```

*  18.2 Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.
```
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```

* 18.3 Start all comments with a space to make it easier to read.
```
// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```

* 18.4 Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you’re pointing out a problem that needs to be revisited, or if you’re suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.

* 18.5 Use `// FIXME:` to annotate problems.
```
class Calculator extends Abacus {
  constructor() {
    super();

    // FIXME: shouldn’t use a global here
    total = 0;
  }
}
```

* 18.6 Use `// TODO:` to annotate solutions to problems.
```
class Calculator extends Abacus {
  constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
```

## Whitespace <a name="whitespace"></a>
* 19.1 Use soft tabs (space character) set to 2 spaces.
```
// bad
function foo() {
∙∙∙∙let name;
}

// bad
function bar() {
∙let name;
}

// good
function baz() {
∙∙let name;
}
```

* 19.2 Place 1 space before the leading brace.
```
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

* 19.3 Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations.
```
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```

* 19.4 Set off operators with spaces.
```
// bad
const x=y+5;

// good
const x = y + 5;
```

* 19.5 End files with a single newline character.
```
// bad
import { es6 } from './PrutopiaStyleGuide';
  // ...
export default es6;

// bad
import { es6 } from './PrutopiaStyleGuide';
  // ...
export default es6;

// good
import { es6 } from './PrutopiaStyleGuide';
  // ...
export default es6;
```

* 19.6 Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement.
```
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
  find('.selected').
    highlight().
    end().
  find('.open').
    updateCount();

// good
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

// bad
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', `translate(${radius + margin},${radius + margin})`)
    .call(tron.led);

// good
const leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
  .append('svg:g')
    .attr('transform', `translate(${radius + margin},${radius + margin})`)
    .call(tron.led);

// good
const leds = stage.selectAll('.led').data(data);
```

* 19.7 Leave a blank line after blocks and before the next statement.
```
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// bad
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// good
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```

* 19.8 Do not pad your blocks with blank lines.
```
// bad
function bar() {

  console.log(foo);

}

// bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// bad
class Foo {

  constructor(bar) {
    this.bar = bar;
  }
}

// good
function bar() {
  console.log(foo);
}

// good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```

* 19.9 Do not add spaces inside parentheses.
```
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```

* 19.10 Do not add spaces inside brackets.
```
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
```

* 19.11 Add spaces inside curly braces.
```
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
```

* 19.12 Avoid having lines of code that are longer than 100 characters (including whitespace). Note: Long strings are exempt from this rule, and should not be broken up.
> Why? This ensures readability and maintainability.
```
// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// bad
$.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

// good
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;

// good
$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));
```

* 19.13 Require consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line.
```
// bad
function foo() {return true;}
if (foo) { bar = 0;}

// good
function foo() { return true; }
if (foo) { bar = 0; }
```

* 19.14 Avoid spaces before commas and require a space after commas.
```
// bad
var foo = 1,bar = 2;
var arr = [1 , 2];

// good
var foo = 1, bar = 2;
var arr = [1, 2];
```

* 19.15 Enforce spacing inside of computed property brackets.
```
// bad
obj[foo ]
obj[ 'foo']
var x = {[ b ]: a}
obj[foo[ bar ]]

// good
obj[foo]
obj['foo']
var x = { [b]: a }
obj[foo[bar]]
```

* 19.16 Avoid spaces between functions and their invocations.
```
// bad
func ();

func
();

// good
func();
```

* 19.17 Enforce spacing between keys and values in object literal properties.
```
// bad
var obj = { "foo" : 42 };
var obj2 = { "foo":42 };

// good
var obj = { "foo": 42 };
```

* 19.18 Avoid trailing spaces at the end of lines.

* 19.19 Avoid multiple empty lines and only allow one newline at the end of files.
```
// bad
var x = 1;

var y = 2;

// good
var x = 1;

var y = 2;
```

## Commas <a name="commas"></a>
* 20.1 Leading commas. **Nope.**
```
// bad
const story = [
    once
  , upon
  , aTime
];

// good
const story = [
  once,
  upon,
  aTime,
];

// bad
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , birthYear: 1815
  , superPower: 'computers'
};

// good
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
```

* 20.2 Additional trailing comma: **Yup.**
> Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the trailing comma problem in legacy browsers.
```
// bad - git diff without trailing comma
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};

// bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};

const heroes = [
  'Batman',
  'Superman'
];

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};

const heroes = [
  'Batman',
  'Superman',
];

// bad
function createHero(
  firstName,
  lastName,
  inventorOf
) {
  // does nothing
}

// good
function createHero(
  firstName,
  lastName,
  inventorOf,
) {
  // does nothing
}

// good (note that a comma must not appear after a "rest" element)
function createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
) {
  // does nothing
}

// bad
createHero(
  firstName,
  lastName,
  inventorOf
);

// good
createHero(
  firstName,
  lastName,
  inventorOf,
);

// good (note that a comma must not appear after a "rest" element)
createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
);
```

## Semicolons
* 21.1 **Yup.**
> Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called  [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)  to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.
```
// bad - raises exception
const luke = {}
const leia = {}
[luke, leia].forEach(jedi => jedi.father = 'vader')

// bad - raises exception
const reaction = "No! That’s impossible!"
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}())

// bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
function foo() {
  return
    'search your feelings, you know it to be foo'
}

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// good
const reaction = "No! That’s impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}());

// good
function foo() {
  return 'search your feelings, you know it to be foo';
}
```

[Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

## Type Casting & Coercion <a name="type-casting-and-coercion"></a>
* 22.1 Perform type coercion at the beginning of the statement.
* 22.2 Strings.
```
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);
```

* 22.3 Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings
```
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);
```

* 22.4 If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you’re doing.
```
// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
const val = inputValue >> 0;
```

* 22.5 **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:
```
2147483647 >> 0; // => 2147483647
2147483648 >> 0; // => -2147483648
2147483649 >> 0; // => -2147483647
```

* 22.6 Booleans.
```
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
```

## Naming Conventions
* 23.1 Avoid single letter names. Be descriptive with your naming.
```
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

* 23.2 Use camelCase when naming objects, functions, and instances.
```
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

* 23.3 Use PascalCase only when naming constructors or classes.
```
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

* 23.4 Do not use trailing or leading underscores.
> Why? JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.
```
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';

// good, in environments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstNames = new WeakMap();
firstNames.set(this, 'Panda');
```

* 23.5 Don’t save references to `this`. Use arrow functions or [Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
```
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```

* 23.6 A base filename should exactly match the name of its default export.
```
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```

* 23.7 Use camelCase when you export-default a function. Your filename should be identical to your function’s name.
```
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;
```

* 23.8 Use PascalCase when you export a constructor / class / singleton / function library / bare object.
```
const PrutopiaStyleGuide= {
  es6: {
  },
};

export default PrutopiaStyleGuide;
```

* 23.9 Acronyms and initialisms should always be all capitalized, or all lowercased.
> Why? Names are for readability, not to appease a computer algorithm.
```
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];

// also good
const httpRequests = [
  // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];
```

* 23.10 You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change.
  > Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.

  * What about all  `const`  variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
  *  What about exported objects? - Uppercase at the top level of export (e.g.  `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.
  
```
// bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// ---

// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// ---

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value'
};

// good
export const MAPPING = {
  key: 'value'
};
```

## Accessors <a name=“accessors”></a>
* 24.1 Accessor functions for properties are not required.
* 24.2 Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use `getVal()` and `setVal('hello')`.
```
// bad
class Dragon {
	get age() {
		// ...
	} 

	set age(value) {
// ...
	
}}good
class Dragon {
getAge() {
// ...
	

	tAge(value) {
// ...
	}

```

* 24.3 If the property/method is a `boolean`, use `isVal()` or `hasVal()`.
```
// bad
if (!dragon.age()) {
return false;
}  // goodif (!dragon.hasAge()) {
return false;
}
```
* 24.4 It’s okay to create `get()` and `set()` functions, but be consistent.
```
class Jedi {
  constructor(options = {}) {
      const lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
```
 
## Events <a name=“events”></a>
* 25.1 When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a "hash") instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event.
```
// bad
$(this).trigger('listingUpdated', listing.id);
// ...
$(this).on('listingUpdated', (e, listingID) => {
  // do something with listingID
});

// good
$(this).trigger('listingUpdated', { listingID: listing.id });
// ..
$(this).on('listingUpdated', (e, data) => {
  // do something with data.listingID
});
```
## jQuery <a name=“jquery”></a>
* 26.1 Prefix jQuery object variables with a `$`.
```
// bad
const sidebar = $('.sidebar');
// good
const $sidebar = $('.sidebar');
// good
const $sidebarBtn = $('.sidebar-btn');
```

* 26.2 Cache jQuery lookups.
```
// bad
function setSidebar() {
    $('.sidebar').hide();
    // ...
    $('.sidebar').css({
      'background-color': 'pink',
    });
}
 
// good
function setSidebar() {
    const $sidebar = $('.sidebar');
    $sidebar.hide();
  	// ... 
  	$sidebar.css({
      'background-color': 'pink',
    });
}
```
 * 26.3 For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`.  [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
 * 26.4 Use `find` with scoped jQuery object queries.
```
// bad
$('ul', '.sidebar').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good
$sidebar.find('ul').hide();
```  
## ECMAScript 5 Compatibility <a name=“es5-compatibility”></a>
* 27.1 Refer to  [Kangax](https://twitter.com/kangax/) ’s ES5  [compatibility table](https://kangax.github.io/es5-compat-table/) .

## Standard Library <a name=“standard-library”></a>
The  [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)  contains utilities that are functionally broken but remain for legacy reasons.

* 28.1 Use `Number.isNaN` instead of global `isNaN`.
> Why? The global isNaN coerces non-numbers to numbers, returning true for anything that coerces to NaN. If this behavior is desired, make it explicit.
```
// bad
isNaN('1.2'); // false
isNaN('1.2.3'); // true

// good
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true
```

* 28.2 Use `Number.isFinite` instead of global `isFinite`.
> Why? The global isFinite coerces non-numbers to numbers, returning true for anything that coerces to a finite number. If this behavior is desired, make it explicit.
```
// bad
isFinite('2e3'); // true

// good
Number.isFinite('2e3'); // false
Number.isFinite(parseInt('2e3', 10)); // true
```  
## Testing <a name=“testing”></a>
* 29.1 **Yup.**
```
function foo() {
	return true;
}
```

* 30.1 **No, but seriously:**
  * Whichever testing framework you use, you should be writing tests!
  * Strive to write many small pure functions, and minimize where mutations occur.
  * Be cautious about stubs and mocks - they can make your test more brittle.
  * 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it.
  * Whenever you fix a bug, _write a regression test_. A bug is fixed without regression test is almost certainly going to break again in the future.

## Performance <a name=“performance”></a>
*  [On Layout & Web Performance](https://www.kellegous.com/j/2013/01/26/layout-performance/)
*  [String vs Array Concat](https://jsperf.com/string-vs-array-concat/2)
*  [Try/Catch Cost In a Loop](https://jsperf.com/try-catch-in-loop-cost)
*  [Bang Function](https://jsperf.com/bang-function)
*  [jQuery Find vs Context, Selector](https://jsperf.com/jquery-find-vs-context-sel/13)
*  [innerHTML vs textContent for script text](https://jsperf.com/innerhtml-vs-textcontent-for-script-text)
*  [Long String Concatenation](https://jsperf.com/ya-string-concat)
*  [Are Javascript functions like map(), reduce(), and filter() optimized for traversing arrays?](https://www.quora.com/JavaScript-programming-language-Are-Javascript-functions-like-map-reduce-and-filter-already-optimized-for-traversing-array/answer/Quildreen-Motta)
* Loading...

## Resources <a name=“resources”></a>
**Learning ES6+**
*  [Latest ECMA spec](https://tc39.github.io/ecma262/)
*  [ExploringJS](http://exploringjs.com/)
*  [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
*  [Comprehensive Overview of ES6 Features](http://es6-features.org/)

**Read This**
*  [Standard ECMA-262](http://www.ecma-international.org/ecma-262/6.0/indx.html)

**Tools**
* Code Style Linters
◦  [ESlint](https://eslint.org/)  -  [Airbnb Style .eslintrc](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc)

**Other Style Guides**
*  [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
*  [jQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/js/)
*  [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)
*  [StandardJS](https://standardjs.com/)

**Other Styles**
*  [Naming this in nested functions](https://gist.github.com/cjohansen/4135065)  - Christian Johansen
*  [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52)  - Ross Allen
*  [Popular JavaScript Coding Conventions on GitHub](http://sideeffect.kr/popularconvention/#javascript)  - JeongHoon Byun
*  [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/)  - Ben Alman

**Further Reading**
*  [Understanding JavaScript Closures](https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/)  - Angus Croll
*  [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html)  - Dr. Axel Rauschmayer
*  [You Might Not Need jQuery](http://youmightnotneedjquery.com/)  - Zack Bloom & Adam Schwartz
*  [ES6 Features](https://github.com/lukehoban/es6features)  - Luke Hoban
*  [Frontend Guidelines](https://github.com/bendc/frontend-guidelines)  - Benjamin De Cock

**Books**
*  [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)  - Douglas Crockford
*  [JavaScript Patterns](https://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752)  - Stoyan Stefanov
*  [Pro JavaScript Design Patterns](https://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
*  [High Performance Web Sites: Essential Knowledge for Front-End Engineers](https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309)  - Steve Souders
*  [Maintainable JavaScript](https://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680)  - Nicholas C. Zakas
*  [JavaScript Web Applications](https://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X)  - Alex MacCaw
*  [Pro JavaScript Techniques](https://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273)  - John Resig
*  [Smashing Node.js: JavaScript Everywhere](https://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595)  - Guillermo Rauch
*  [Secrets of the JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X)  - John Resig and Bear Bibeault
*  [Human JavaScript](http://humanjavascript.com/)  - Henrik Joreteg
*  [Superhero.js](http://superherojs.com/)  - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
*  [JSBooks](http://jsbooks.revolunet.com/)  - Julien Bouquillon
*  [Third Party JavaScript](https://www.manning.com/books/third-party-javascript)  - Ben Vinegar and Anton Kovalyov
*  [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182)  - David Herman
*  [Eloquent JavaScript](http://eloquentjavascript.net/)  - Marijn Haverbeke
*  [You Don’t Know JS: ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do)  - Kyle Simpson

**Blogs**
*  [JavaScript Weekly](http://javascriptweekly.com/)
*  [JavaScript, JavaScript...](https://javascriptweblog.wordpress.com/)
*  [Bocoup Weblog](https://bocoup.com/weblog)
*  [Adequately Good](http://www.adequatelygood.com/)
*  [NCZOnline](https://www.nczonline.net/)
*  [Perfection Kills](http://perfectionkills.com/)
*  [Ben Alman](http://benalman.com/)
*  [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
*  [nettuts](http://code.tutsplus.com/?s=javascript)

**Podcasts**
*  [JavaScript Air](https://javascriptair.com/)
*  [JavaScript Jabber](https://devchat.tv/js-jabber/)
