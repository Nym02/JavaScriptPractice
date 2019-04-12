//variables and data types
var firstName = 'Nayeem',
    lastName = 'M. Muzahid';

    console.log(firstName + " "+lastName);


    var num = 10;
    console.log(num);

    var a;
    console.log(a);

    var b = null;
    console.log(b);
/*************************************************
variables type coercion and mutation
*/

var name = 'Nayeem M. Muzahid',
age = 24,
isMarried= false;
console.log(name + 'is '+age+' years old.Is he married? '+isMarried);


//variables mutation
age = 'Twenty Four';
console.log(name + 'is '+age+' years old.Is he married? '+isMarried);


/*************************************************
Operatiors
*/

//math operator
var yearJohn;
yearJohn = 2019-28;
console.log(yearJohn);
yearJohn = 1991 + 2;
console.log(yearJohn);
var kg,quantity,price;
kg = 3;
quantity = 4;
price = kg * quantity;
console.log(price + ' Taka');

var apples,person,eachShare;
apples = 50;
person = 4;
eachShare =apples / person;
console.log('Each person get: '+ eachShare + ' piece');


//logical Operators
var isJohn,ageMark,ageMat;
ageMark = 26;
ageMat = 23;
isJohn = ageMat > ageMark;
console.log(isJohn);
isJohn = ageMat < ageMark;
console.log(isJohn);


//typeOf operator
console.log(typeof(isJohn));
console.log(typeof(ageMark));
var x;
console.log(typeof(x));




/*************************************************
Operatiors precedence
*/



//multiple Operators
console.log('Multiple Operators: ');
var fullAge,now;
now = 2040;
fullAge = now - ageMat >= isJohn;
console.log(fullAge);

//grouping
var ageNayeem,ageCat,ageDino;
ageNayeem = 24;
ageCat = 3;
ageDino =100;

var avg = (ageNayeem+ageCat+ageDino)/3;
console.log(avg);


//multiple assignments
var y,z;
y = z = (1+2) - 10 + 5*8;
console.log(y,z);

y++;
z--;
console.log(y,z);


//coding challange 1

console.log('Coding Challange 1:')

var markHeight = 1.38;
var markWeight = 78;

var johnHeight = 1.45;
var johnWeight = 80;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

var markHigherBMI = markBMI > johnBMI;
console.log('Is Makr\'s BMI higher than John? ' +markHigherBMI);
