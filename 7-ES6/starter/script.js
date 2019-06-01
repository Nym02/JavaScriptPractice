//  var person = function(firstName,lastName,age,Nationality){
//     Nationality === undefined ? Nationality = "Bangladesh" : Nationality = Nationality;

//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.age = age;
//      this.Nationality = Nationality;
//  }


// var person = function(firstName,lastName=' Clarke',Nationality='Bangladeshi'){
//             this.firstName = firstName;
//             this.lastName = lastName;
            
//             this.Nationality = Nationality;
// }

//  var nayeem = new person("Nayeem M.");
//  var emilia = new person("Emilia", " Clarke","English");


//Maps
/*
const q = new Map();

q.set('Question','What is your name?');
q.set(1,'Nayeem');
q.set(2,'Nick');
q.set(3,'Mark');
q.set('correct',1);
q.set(true,'Correct answer');
q.set(false,'Wrong answer');

q.get(1);

if(q.has(1)){
    console.log('It has');
}
console.log(q.size);


//q.forEach((value,key) => console.log(`This is the ${key}, and it is set to ${value}`))

for(let [key,value] of q.entries()){
    console.log(`This is the ${key}, and it is set to ${value}`)
}


var ans = parseInt(prompt('Write the correct answer..'));

console.log(q.get(ans === q.get('correct')));



//Classes

//ES5
var person5 = function(name,yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}
person5.prototype.calculateAge = function(){
    var ages = new Date().getFullYear() - this.yearOfBirth;
    console.log(ages);
}
*/

//ES6

class person6{
    constructor(name,yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge(){
        var ages = new Date().getFullYear() - this.yearOfBirth;
        console.log(ages);
    }
}

// var john5 = new person5('Nayeem M. Muzahid',1996);
// john5.calculateAge();
// var emilia = new person6("Emilia Clarke",1988);
// emilia.calculateAge();



//classes with subclasses
//ES5
var person5 = function(name,yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}
person5.prototype.calculateAge = function(){
    var ages = new Date().getFullYear() - this.yearOfBirth;
    console.log(ages);
}

var athlete5 = function(name,yearOfBirth,olympics,medals){
    person5.call(this,name,yearOfBirth);
    this.olympics = olympics;
    this.medals = medals;
}

athlete5.prototype = Object.create(person5.prototype);

athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}


var nayeem5 = new athlete5('Nayeem M. Muzahid',1996,3,10);
nayeem5.calculateAge();
nayeem5.wonMedal();


//ES6

class athlete6 extends person6{
    constructor(name,yearOfBirth,olympics,medals){
        super(name,yearOfBirth);
        this.olympics = olympics;
        this.medals = medals;
    }

    calculateAge(){
        var ages = new Date().getFullYear() - this.yearOfBirth;
        console.log(ages);
    }
    

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

var john6 = new athlete6('John Carter',1988,4,12);
john6.calculateAge();
john6.wonMedal();