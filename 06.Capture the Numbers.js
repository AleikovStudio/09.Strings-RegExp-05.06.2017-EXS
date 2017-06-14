function captNumbers(input) {

    let text = input.join(" ");
    let pattern = /\d+/g;
    let numbers = text.match(pattern);

    console.log(numbers.join(" "));
}

captNumbers([
    "123a456",
    "789b987",
    "654c321",
    "0"
]);

//2nd solution:

function extractNumbers(arrStr) {

    let pattern = /\d+/g;

    let result = "";

    for (let arrS of arrStr) {

        let match = arrS.match(pattern);

        if (match && match != null) {
            result += match + " ";
        }
    }
    console.log(result.replace(/,/g," "));
}

extractNumbers([
        "123a456",
        "789b987",
        "654c321",
        "0"]
);

//extractNumbers([
//    "The300",
//    "What is that?",
//    "I think it’s the 3rd movie.",
//    "Lets watch it at 22:45"
//]);
