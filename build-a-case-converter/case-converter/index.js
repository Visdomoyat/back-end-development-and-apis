function getUpperCase(string) {
    return string.toUpperCase();
}

console.log(getUpperCase("hello world"))

function getLowerCase(string) {
    return string.toLowerCase();
}   
console.log(getLowerCase("HELLO WISDOM"))

function getSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(getSentenceCase("hello world"))
console.log(getSentenceCase("HELLO WORLD"))
console.log(getSentenceCase("hELLO wORLD"))