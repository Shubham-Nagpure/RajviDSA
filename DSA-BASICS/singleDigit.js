let num = 12384738;                   

const sumOfDigit = (num) => {           
  let sum = 0;                          

  while (num > 0) {                     
    let digit = num % 10; //shevatcha digit midtoy
    sum = digit + sum; //sum madhe digit add karto
    num = Math.floor(num / 10); //shevatcha digit hya madhn remove hot ahe
  }

  return sum;                         
};

console.log(sumOfDigit(num));        

let singleDigit = 12384738; //original number thevla
while (singleDigit > 9) {         //joparyant single digit yet nahi toparynt loop firnar
  singleDigit = sumOfDigit(singleDigit); // parat sum calculate karnar
}
console.log(singleDigit); //final single digit print karnar