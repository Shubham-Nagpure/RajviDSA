let percentage = 98;

let result =
percentage > 100 || percentage < 0 ? "Please enter a valid percentage in between 0 to 100" :
    percentage >= 70 ? "First class with distinction" :
    percentage >= 60 ? "First class" :
    percentage >= 50 ? "Second class" :
    percentage >= 35 ? "Pass class" :
    percentage < 35 ? "Fail" :
    "Invalid percentage";

console.log(result);