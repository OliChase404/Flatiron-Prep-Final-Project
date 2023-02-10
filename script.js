


function fizzbuzz(n){

    let i = 1
    const arr = []

    while(i <= n){
    if(i%5 === 0 && i%3 === 0){
        arr.push(`FizzBuzz`)
    }
    else if(i%3 === 0){
        arr.push(`Fizz`)
    }
    else if(i%5 === 0){
        arr.push(`Buzz`)
    }
    else{
        arr.push(i.toString())
    }

    i++
    }
    return arr
}


fizzbuzz(20)

// console.log(arr)







// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);
