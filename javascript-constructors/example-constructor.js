function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var n = new ExampleConstructor();
console.log(n);

var isInstanceof = n instanceof ExampleConstructor;
console.log(isInstanceof);
