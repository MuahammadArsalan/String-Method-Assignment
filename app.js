// 6 , 7 , 8 , 10 , 14 , 17 , 19  , 20 , 
let div = document.querySelector('div')

// Question No 1:

// 1. Write a program that takes two user inputs for first and last 
// name using prompt and merge them in a new variable titled 
// fullName. Greet the user using his full name.

// Solution:

// let first = document.querySelector('#First')
// let last = document.querySelector('#Last')

// function greet(){
    //     console.log(`Hello ${first.value} ${last.value}`);
    // }
    
    // Question No 2:
    
    // 2. Write a program to take a user input about his favorite mobile 
    // phone model. Find and display the length of user input in your 
    // browser.

// Solution :

// let inputModel = prompt('Enter Your fsvourite mobile Model');

// div.innerHTML =`<h1>My fovurite phone is: ${inputModel}</h1> <h2>Lenght of string is :${inputModel.length}</h2>`


// Question No 3:

// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser

// Solution :

// let pak = 'Pakistani'
// div.innerHTML = `<h1>String : ${pak} <br>Index of 'n': ${pak.indexOf('n')}</h1> `


// Question No 4:
// 4. Write a program to find the last index of letter “l” in the word 
// “Hello World” and display the result in your browser.

// Solution :

// const greet = 'Hello World';
// div.innerHTML =  `<h1>String : ${greet} <br>The last index of letter 'l' : ${greet.lastIndexOf('l')}</h1>` 


// Question No 5:

// 5. Write a program to find the character at 3rd index in the word 
// “Pakistani” and display the result in your browser.

// Solution :

// let pak = 'Pakistan';
// div.innerHTML = `<h2>String :${pak}<br>Character at 3<sup>rd</sup> index: ${pak.charAt(3)} </h2>`


// Question No 9:

//Solution: 

// 9. Write a pogram that converts a string “472” to a number 472.
// Display the values & types in your browser.
// let num ='472';
// console.log('Value : '+num);
// console.log('Type: ' +typeof(num));
// num = +num
// console.log('Value : '+num);
// console.log('Type: ' +typeof(num));


// Question No 11:

// 11. Write a program that takes user input. Convert and show the 
// input in capital letters.

//Solution: 

//     let inputFruit = prompt('Enter your favourite dry fruit name')
// console.log('User InputFruit:'+input);

// console.log('Uppercase :' +inputFruit.toUpperCase());

// Question No 12:

// 12. Write a program that takes user input. Convert and show the 
// input in small letters.

//Solution: 

//     let inputNetwork = (prompt('Enter your favourite network name').toUpperCase())

// console.log('User inputNetwork :'+inputNetwork);

// console.log('Lowercase :' +inputNetwork.toLowerCase());


// Question No 13:

// 13. Write a program that takes user input. Convert and show the 
// input in title case.

//Solution: 

// let inputProgrammingLanguage = prompt('Enter your prgramming language');

// div.innerHTML=inputProgrammingLanguage;

// function changeCase(){

    //     if(div.innerHTML===inputProgrammingLanguage){
        //          div.innerHTML= inputProgrammingLanguage.toUpperCase()
        //     }else{
            //         div.innerHTML= inputProgrammingLanguage.toLowerCase()
            //     }
            
            // }
            
            
            
// Question No 15:
            
// 15. Write a program to display the value of x in your browser if a=”3” 
// and b=”3”?

// Solution :

// let a ='3';
// numbet type  
// a= +a 
// let b ='3';
// Number type
// b= +b 

// let x = a +b
// console.log(`a is ${a}`) 
// console.log(`b is ${b}`); 
// console.log(`a + b is ${x}`); 


// Question No 16:

// 16. Write a program to display the value of y in your browser if a=”3” 
// and b=”3”?

// Solution :
// let a= '3'
// let b= '3'
// let y = a-b
// console.log(a);
// console.log(b);
// console.log(y);


// Question No 18:

// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters 
// cookie, Cookie, COOKIE or coOkIE, program should inform 
// about its availability. Example:

// Solution :
// let input = document.querySelector('#input');


// let arr =['cake','apple pie','cookie','chips','patties'];


// function checkItem(){
//         if(arr.includes((input.value).toLowerCase())){
//             console.log('Available');
//             div.innerHTML = `${input.value} is available in our bakery at ${arr.indexOf((input.value).toLowerCase())} index.`  
//         }else{
//                 console.log('Not Available');
//                 div.innerHTML= `Not Avalaible`
//             }
// }



// Question No 21:
// 21. Write a program to convert the following string to an array 
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser

// Solution:
//  let  university = 'University of Karachi';

//  university= university.split('');

//  for(let i=0;i<university.length;i++){
//      console.log(university[i]);
//      div.innerHTML +=`${university[i]}<br>`

//  }









// Question No 22:

// 22. Write a program to display the last character of a user input.

// Solution:
// let userInput =prompt('Enter your country name');

// console.log(userInput.length-1);
// console.log(userInput.charAt(userInput.length-1));





















// Question No 24:

// 24. Write a program to count number of vowels & consonants in 
// given string


// Solution:

// let str = 'Pakistan';
// str =  str.split('');
// console.log(str);
// let vowels = a,e,i,o,u;
// for(let i=0;i<str.length;i++){
// // console.log(str[i]);
// if(str[i].includes'a','e','i','o','u'=== vowels){
//      vowels += 1
// // console.log(vowels);
// // console.log(vowels);
// }
// }










