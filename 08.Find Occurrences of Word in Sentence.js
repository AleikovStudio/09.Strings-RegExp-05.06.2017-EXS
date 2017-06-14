//You should use RegExp in your task. There is a Regex constructor that accepts a string representing the regex pattern:
//
//RegExp expects a string, NOT a regex literal!!!
//
//Since the backslash is the escape character in strings as well, in order to create a literal backslash for the expression you have to escape it: \\.
//
//With all that said, your JavaScript code should be:


function findOccurrences(input, check) {
    let pattern = new RegExp("\\b" + (check) + "\\b", "gi");//using new RegExp to create regex from a string and add the variable check
    let matches = input.match(pattern);

    let count = 0;
    for (let i in matches) {
        count++;
    }

    console.log(count);
}

findOccurrences("The waterfall was so high, that the child couldn’t see its peak.",
    "the");

//findOccurrences("How do you plan on achieving that? How? How can you even think of that?",
//    "how");


//findOccurrences("There was one. Therefore I bought it. I wouldn’t buy it otherwise.",
//    "there");

