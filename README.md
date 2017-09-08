# Js "strongly typed"

> This package provides a few helper methods helping you checking if a value is e.g a string or number.

## How to use:

Install the package ```bash npm install stronglyt --save```


```javascript
//Include the utils
var types = require('stronglyt')();


//Call a method
types.string("hi");

````


## Methods:

> All Methods will throw an error if the type of the given value does not match the type of the function name (e.g. calling .string() with a number will throw an Error)

#### String
```javascript types.string("Hi")```

#### Number
```javascript types.number(4534)```

#### Array
```javascript types.array(["Apple", "Orange"])```

### Boolean
```javascript types.boolean(true)```