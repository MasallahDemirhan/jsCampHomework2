// Prime numbers

function findPrime(...numbers) {
    let isPrime = true
    numbers.forEach(number => {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                console.log(number + " is not prime.")
                isPrime = false
                break;
            }
            isPrime = true
        }
        if (isPrime == true && number >= 2) {
            console.log(number + " is prime.")
        } else if (number <0)
            console.log(number + " is invalid.")
        if (isPrime == true && number == 1 || number == 0) {
            console.log(number + " is not prime.")
        }
        
            
    }
    )

}

findPrime(1, 2, 3, 4, 5,0,-2,-3, 7, 8, 9, 11,99,333)
console.log("Prime number  finished---------------------------------------------------------")

//Arkadaş sayılar

function amicableNumbers(number1,number2) {
    


let total1 = 0
let total2 = 0

for (let i = 0; i < number1; i++) {
    if (number1 % i == 0) {
        total1  = total1 + i
    }
}

for (let j = 0; j < number2; j++) {
    if (number2 % j == 0) {
        total2  = total2 + j
    } 
} 

if (number1 == total2 && number2 == total1) {
    console.log(number1 + " ve " + number2 + "  arkadaş sayılardır.")
   
}else{
    console.log(number1 + " ve " + number2 + "  arkadaş sayılar değildir.")
   
}

}

amicableNumbers(220,284)
amicableNumbers(5,10)
amicableNumbers(63020, 76084)

console.log("amicableNumbers finished----------------------------------------------------------");


    let number = [1000]

    for (let i = 1; i < 1000; i++) {
        let total = 0
        number[i] = i

            for (let j = 0; j < i; j++) {
                if (i % j == 0) {
                    total = total + j
                }          
            }
            if (total == i && i>0) {
                console.log(i);
            }
            if (i<=0) {
                console.log("Number is invalid.")
            }
    }

    console.log("Perfect number finished------------------------------------------------------------");


// 1000 e kadar asal olan sayılar

let counter = 0
for (let i = 0; i < 1000; i++) {
    counter = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                counter = 1
                break
            }          
        }
        if (counter == 0 && i>=2) {
            console.log(i);
        }
        
       
}
console.log("Homework2 finished")
