function checkStart(input, check) {
    let checkSub = input.substr(0, check.length);
    if (checkSub == check) {
        console.log(true);
    } else {
        console.log(false);
    }

}

//checkStart("How have you been?", "how");
checkStart("Marketing Fundamentals, starting 19/10/2016","Marketing Fundamentals, sta");

//2nd solution:
(text,substr)=>text.startsWith(substr);