var person = {
  firstname: "Alan",
  lastname: "Zhuang",
  getFullName: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

var logName = function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + lang2);
  console.log("-------------------");
};
var logPersonName = logName.bind(person);
logPersonName("en");
logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);
//function borrowinh
var person2={
    firstname :"David",
    lastname :"Chen"
}
console.log(person.getFullName.apply(person2));
//funciton currying
function multiply(a,b){
    return a*b;
}
var multipleByTwo = multiply.bind(this,2);
console.log(multipleByTwo(4));