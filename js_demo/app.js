'use strict' // this triggers strict mode in js
//-----event listyeners------
console.log(window);
let flag =0;
document.querySelector('.menu').addEventListener('click',() =>{
    if(flag === 0){
    document.querySelector('.subMenu').innerHTML = 'Hello';
    flag = 1;
    } else {
        document.querySelector('.subMenu').innerHTML = '';
        flag = 0;
    }
});


// console.log(document);

//-------------types of Object methods-----------
// let a ={'name': 'Raju',
//         'age': 23,
//         'class': '4th',
//         'fav sub': 'PT'
//     }
// // let a=  {};
// console.log(Object.keys(a).length);
// console.log(Object.values(a));
// console.log(a['fav sub']);
// JSON --> java script object notation        

//---------------diff types of Array methods----------
// // let a = [12,'asd',34,{'qw': 23}];
// let a =[{'name': 'Raju'},{'name':'Ramu'},{'name':'ARamu'}] 
// console.log(a);

// const op = a.find((temp) => {
//     return temp.name.startsWith('a') || temp.name.startsWith('A');
// });

// // ternary operator
// const op = a.map((student) =>{
//     student.name.startsWith('A') ? student.section = 'A': student.section = 'B';
//     return student;
// });


//1 arg temp variable,
// arrow function
// const op = a.filter(temp => typeof temp === 'number');
// const op = a.filter((temp, index) => {
//     return temp.name.startsWith('a') || temp.name.startsWith('A');
// });
// normal function
// const numberFilter = function(temp){
//     return typeof temp === 'number';
// };
// const op = a.filter(numberFilter);// 1 args function that returns boolean
// console.log(op);


//---------------diff types of string methods----------
// let a= 'hello';
// let b = `this is ${a}`;//backtick
// // all operations are case sensitive
// console.log(b.toUpperCase());
// console.log(b.startsWith('t'));
// console.log(b.endsWith('hello'));
// console.log(b.indexOf('Hi'));
// console.log(b.replace('i', '*'));
// console.log(b.replace(/i/g, '*'));
// let ar = b.split(' ');
// console.log(ar);
// console.log(b.slice(0));

//-------------------window object-----------
// global object window --> browser window
// const a = function(){
//     console.log('clickedddd');   
// }
// // window.onclick(a);
// console.log(window.location);

//------constants----------
// const a = [23, 34,45,56,67];
// Object.seal(a);// cannot delete value inside object
// // Object.freeze(a);// cannot change value inside object
// console.log(a);
// delete a[2];
// console.log(a);

//------------diff types of variables----
// 6 types number, string, boolean, object, undefined, function
// function declaration
// let a = function(para){
//     console.log(`Hello ${para}`);
// };
// a('Ramu');// function execution
// console.log(typeof a);

// let a ={
//     'name':'Ramu',
//     'age': 23,
//     'isAlive':true,
//     'Hobbies':['cricket', 'football'],
// };
// console.log(a);
 


// ------------diff types of String----
// '' / "" both works but '' is good practice
// let a = 233;
//   // backtick
// console.log(`my age is ${a + 34}`);


//----------diff types of console-----
// let a={
//     age: 23,
//     name:'Ramu'
// }
// console.error(a); // print stmt as error
// console.log(a); // print stmt as log
// console.table(a); // print stmt as table
