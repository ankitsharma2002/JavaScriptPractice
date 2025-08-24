//Q1. Can a JavaScript object hold a function as a property? Explain with an example.
const person={
    name:"Ankit",
    age:22,
    great: function(){
        console.log("Hello, I am ", this.name);
    }
}
person.name
person.great();
// Yes , JavaScript object can hold a function as a property
// we can function like this , person.great();

//Output 
// Hello, I am  Ankit
