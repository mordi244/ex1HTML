
/* FizzBuzz Game Function*/
 function fizzBuzz() {
     // for loop from 1 to 100
    for (let i=1 ; i<=100 ; i++) {
        let resultStr = ''; //initial empty string that will store the values of 'Fizz' 'Buzz' or both in case of the conditions
        if (i % 3 === 0) 
            resultStr += 'Fizz'; //The number is divisible by 3 , concatenate 'Fizz'
        if (i % 5 === 0)
            resultStr += 'Buzz'; //The number is divisible by 5 , concatenate 'Buzz'
        if (resultStr === '') // In case the number is not divisible by 5 or 3 , print the number
            console.log(i);
        else
         console.log(resultStr);  //print the result string      
        resultStr = '';       
    }
}

fizzBuzz();