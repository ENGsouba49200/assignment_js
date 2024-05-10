// 1- Write a program that allow to user enter number then print it


// var num ;
// num = Number( window.prompt("enter number"));
// console.log(num);
// console.log(typeof num);

// end 1

// 2-Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

// var num ;
// num = Number( window.prompt("enter number"));
// if (num % 3 == 0 && num % 4 == 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// };

// end 2

// 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 , num2 ;
// num1 = Number( window.prompt("enter number1"));
// num2 = Number( window.prompt("enter number2"));
// if( num1 > num2 )
// {
//     console.log(num1);
// }
// else
// {
//     console.log(num2);

// }

// end  3

// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.

// var num ;
// num = Number( window.prompt("enter number"));
// if(num<0)
// {
//     console.log("negatine number");
// }
// else
// {
//     console.log("positive number");
// }

// end 4

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

// var num1 , num2 ,num3;
// num1 = Number( window.prompt("enter number1"));
// num2 = Number( window.prompt("enter number2"));
// num3 = Number( window.prompt("enter number3"));
// if(num1>num2 && num1>num3 && num2 > num3)
// { 
//     console.log(num1);
//     console.log(num2);

// } 
// else if(num1>num2 && num1>num3 && num3 > num2)
// { 
//     console.log(num1);
//     console.log(num3);

// } 
// else if(num2>num1 && num2>num3 && num1 > num3)
// {
//     console.log(num2);
//     console.log(num1);

// }
// else if(num2>num1 && num2>num3 && num3 > num1)
// {
//     console.log(num2);
//     console.log(num3);

// }
// else if(num3>num1 && num3>num2 && num2 > num1)
// {
//     console.log(num3);
//     console.log(num2);

// }
// else if(num3>num1 && num3>num2 && num1 > num2)
// {
//     console.log(num3);
//     console.log(num1);

// }
// else
// {
//     console.log("valid")
// };

// end 5

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd


// var num ;
// num = Number( window.prompt("enter number"));
// if(num % 2 == 0 )
// {
//     console.log("even number");
// }
// else
// {
//     console.log("odd number");
// }

// end 6

// 8- Write a program that take char from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant


// var char ;
// char = window.prompt("enter char");
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log("vowel");
// } 
// else
// {
//     console.log("consonant");
// }

// end 8 

// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number

// var num ;
// num = Number( window.prompt("enter number"));

// for( var i =1 ;i<=num;i++)
// {
//     console.log(i); 
// };
// end 9

//10-Write a program that allows userto insert integerthen print a multiplication table up to 12.

// var num ,result ;
// num = Number( window.prompt("enter numberM"));
// for(var i = 1;i<=12;i++)
// {
//     result=num*i;
//     console.log(result);
// };

// end 10 

// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number

// var num;
// num = Number( window.prompt("enter numberE"));
// for(var i=1;i<=num;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// };


// 12- Writeaprogramthattaketwointegersthenprintthepower

// var num1 , num2 ,num3;
// num1 = Number( window.prompt("enter number1"));
// num2 = Number( window.prompt("enter number2"));

// num3= num1**num2 ;

// console.log(num3);
// end 12

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.

// var num1 , num2 ,num3 ,num4 ,num5;
// num1 = Number( window.prompt("enter number1"));
// num2 = Number( window.prompt("enter number2"));
// num3 = Number( window.prompt("enter number3"));
// num4 = Number( window.prompt("enter number4"));
// num5 = Number( window.prompt("enter number5"));

// var totalMark=num1+num2+num3+num4+num5;
// console.log(totalMark);

// var average=totalMark/5;
// console.log(average);


// var percentage=(totalMark / 500) * 100;
// console.log(percentage + "%");
// end 12



// 13-Write a program to input month number and print number of days in that month.


// var monthNum = Number(window.prompt("enter the number of month"));
// if(monthNum==1 || monthNum==3 ||monthNum==4 ||monthNum==5 ||monthNum==6 ||monthNum==7 ||monthNum==8 ||monthNum==9 ||monthNum==10 ||monthNum==11 ||monthNum==12)
//     {
//         console.log("Days in Month: 31");
//     }
//     else if(monthNum==2)
//     {
//         console.log("Days in Month: 28");   
//     }
//     else
//      {      
//         console.log("Invalid");   
//     }


// end 13


// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade


// var PhysicsMark = Number(window.prompt("enter subject mark "));
// var ChemistryMark = Number(window.prompt("enter subject mark "));
// var biologyMark = Number(window.prompt("enter subject mark "));
// var mathematicsMark = Number(window.prompt("enter subject mark "));
// var computerMark = Number(window.prompt("enter subject mark "));

// var marks = PhysicsMark + ChemistryMark + biologyMark + mathematicsMark + computerMark;
// var Percentage =  (marks / 500) * 100;



// if(Percentage >= 90)
//     {
//         console.log("Grad A");
//     }
//     else if (Percentage >= 80)
//         {
//             console.log("Grad B");
//         }
//         else if (Percentage >= 70)
//             {
//                 console.log("Grad C");
//             }
//             else if (Percentage >= 60)
//                 {
//                     console.log("Grad D");
//                 }
//                 else if (Percentage >= 40)
//                     {
//                         console.log("Grad E");
//                     }
//                     else if (Percentage < 40)
//                         {
//                             console.log("Grad F");
//                         }
//                         else{
//                             console.log("Invalid");
//                         };
    
// end 14

// 15- Write a program to print total number of days in month


// var monthNum = Number(window.prompt("enter the number of month"));
// switch(monthNum)
// {
  
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Days in Month: 31");
//       break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30");
//       break;
//     case 2:
//         console.log("Days in Month: 28");
//       break;
//     default :
//       console.log("Invalid");
       
// }

// end 15 

// 16- Write a program to check whether an alphabet is vowel or consonant

// var char ;
// char = window.prompt("enter char");
// switch(char)
// {
//     case "a" :
//     case "i":
//     case "o":
//     case "u":
//         console.log("vowel");
//         break;
//     default :
//        console.log("consonant");
// };


// end 16


// 17- Write a program to find maximum between two numbers

// var num1 = Number(window.prompt("enter the number"));
// var num2 = Number(window.prompt("enter the number"));
// switch(true)
// {
//     case num1>num2:
//         console.log("num1 is max");
//         break;
//     default :
//       console.log("num2 is max");    
// };

//  end 17 

// 18- Write a program to check whether a number is even or odd

// var num = Number(window.prompt("enter the number"));
// var result = num%2;
// switch(result)
// {
//     case 0 :
//         console.log("even");
//         break;
//     default :
//         console.log("odd")    

// } ;

// end 18


// 19- Write a program to check whether a number is positive or negative or zero

// var num = Number(window.prompt("enter the number"));
// switch(true)
// {
//     case num > 0 :
//         console.log("positive");
//         break;
//     case num < 0 :
//         console.log("negative");
//         break;
//     case num ==0:
//         console.log("zero");  
//         break;
//     default :
//        console.log("Invalid");          
// };


//  end 19

// 20- Write a program to create Simple Calculator


// var num1 = Number(window.prompt("enter the number"));
// var num2 = Number(window.prompt("enter the number"));
// var typeOpretion = window.prompt("enter the number");
// switch(typeOpretion)
// {
//     case "+":
//         console.log(    num1+num2);
//         break;

//         case "-":
//             console.log(    num1-num2);
//             break;
//             case "/":
//                 console.log(    num1/num2);
//                 break;
//                 case "*":
//                     console.log(    num1*num2);
//                     break;
//                     default :
//                      console.log ("invalid opreation");
// };

// end 20







 



























