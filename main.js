const age = [32, 33, 16, 40]
const result = age.filter(checkAge)

function checkAge(age){
    return age >= 20
}

console.log(result);
console.log(typeof result);
