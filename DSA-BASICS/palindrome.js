//Step 1: Number ghetoy
let num = 121;

// Step 2: Original copy thevtoy
let original = num;

// Step 3: Reverse साठी empty place thevtoy
let reverse = 0;

// Step 4: Loop firel joparynt num > 0
while (num > 0) {
    let digit = num % 10;              // shevatcha digit midtoy
    reverse = reverse * 10 + digit;    // reverse madhe digit add karto
    num = Math.floor(num / 10);        // shevatcha digit hya madhn remove hot ahe
}

// Step 5: Compare kartoy
if (original === reverse) {
    console.log(original + "Yes, It is Palindrome.");
} else {
    console.log(original + "No, It is not Palindrome.");
}