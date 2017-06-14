function splitDel(input, delimiter) {
    console.log(input.split(delimiter)
        .join("\n"));
}

splitDel("One-Two-Three-Four-Five", "-");

//2nd solution:

function main(string, del) {
    let splittedEl = string.split(del);

    for (let i = 0; i < splittedEl.length; i++) {
        console.log(splittedEl[i]);
    }

    ////or:
    //
    //for (let i in splittedEl) {
    //   console.log(splittedEl[i]);
    //}
    //
    ////or:
    //
    //for (let i of splittedEl) {
    //    console.log(i);
    //}

}

main("One-Two-Three-Four-Five", "-");