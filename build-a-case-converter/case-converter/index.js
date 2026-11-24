function getUpperCase(string) {
    return string.toUpperCase();
}

console.log(getUpperCase("hello world"))

function getLowerCase(string) {
    return string.toLowerCase();
}   
console.log(getLowerCase("HELLO WORLD!"))

function getSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(getSentenceCase("hello world!"))
console.log(getSentenceCase("HELLO WORLD!"))
console.log(getSentenceCase("hELLO wORLD!"))

function getProperCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(getProperCase("hello world!"))
console.log(getProperCase("HELLO WORLD!"))
console.log(getProperCase("hELLO wORLD!"))

module.exports ={
    getUpperCase, getLowerCase, getSentenceCase, getProperCase
}