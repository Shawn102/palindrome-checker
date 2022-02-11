const palindrome = (value) => {
    let passingWord = value;
    let stack = [];
    let emptyWord = "";
    let len = passingWord.length;
    for(let i = 0; i < len; i++) {
        stack.push(passingWord[i]);
    }
    for(let j = 0; j < len; j++) {
        emptyWord += stack.pop();
    }
    if(passingWord === emptyWord) {
        console.log(`${passingWord} is a palindrome.`)
    } else {
        console.log(`${passingWord} is not a palindrome`);
    }
}
palindrome("shawn");