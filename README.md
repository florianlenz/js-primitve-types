# Js "strongly typed"

> This package provides a few helper methods to help you checking if a value is e.g a string or number.

## How to use:

Install the package ```npm install stronglyt --save```


```
//Include the utils
var types = require('stronglyt')();


//Call a method
types.string("hi");

````

When you call ```JS types.string()``` with e.g. a number the function will throw an Error since you didn't pass in a string.


## Methods:

##### String
```types.string("Hi")```

##### Number
```types.number(4534)```

##### Array
```types.array(["Apple", "Orange"])```

#### Boolean
```types.boolean(true)```