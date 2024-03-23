

// We have 2 solution of same problem and we have to find which one is the best solution

//QUESTION : we have number from 1 to n .find the sum of all the numbers including n.  


//! this is the 1st solution
function addUpTo(n){
    let total = 0;
    for(let i=0; i<=n;i++){
        total +=i
    }
    return total
}



//! this is the 2nd solution
function secondSol(n){
    return n*(n+1)/2
}

// let time1 = performance.now()
// addUpTo(10000000000)
// let time2 = performance.now()

// console.log(`Time taken by 1st solution is : ${(time2 - time1)/1000} seconds`)


let time3 = performance.now()
secondSol(10000000000)
let time4 = performance.now()
console.log(`Time taken by 2nd solution is : ${(time4 - time3)/1000} seconds`)
