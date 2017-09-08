module.exports = function () {

  var string = function (value) {
    if (typeof value !== 'string') {
      throw new Error('Expected string, got: ' + typeof value)
    }

    return value
  };

  var number = function (value) {
    if (typeof value !== 'number') {
      throw new Error('Expected number, got: ' + typeof value)
    }

    return value
  };

  var array = function (value) {

    if (value.constructor !== Array) {
      throw new Error('Expected array, got: ' + typeof value)
    }

    return value
  };

  var boolean = function (value) {
    if (typeof value !== 'boolean') {
      throw new Error('Expected boolean, got: ' + typeof value)
    }

    return value
  };

  return {
    string: string,
    number: number,
    boolean: boolean,
    array: array
  }
};
