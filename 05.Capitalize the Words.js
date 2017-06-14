function capW(input) {
    let array = input.toLowerCase().split(" ");
    let replacedFL = "";

    for (let i = 0; i < array.length; i++) {
        let firstLetter = array[i]
            .substr(0, 1)
            .toUpperCase();
        let replaced = array[i]
            .replace(array[i].substr(0, 1), firstLetter);

        replacedFL += replaced + " ";
    }
    console.log(replacedFL);
}

capW("Was that Easy? tRY thIs onE for SiZe!");

//2nd solution:
function solve(text) {
    let resultArray = text.split(" ");

    for (let i = 0; i < resultArray.length; i++) {
        resultArray[i] = resultArray[i].charAt(0).toUpperCase() + resultArray[i].substr(1).toLowerCase();
    }

    console.log(resultArray.join(" "));
}

solve("Was that Easy? tRY thIs onE for SiZe!");