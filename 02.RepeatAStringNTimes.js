function repeatStr(input, times) {
    let result = input.repeat(times);
    console.log(result);
}

repeatStr("repeat", 5);

//2nd solution:

function repS(data, howmany) {
    let endResult = "";

    for (let i = 1; i <= howmany; i++) {
        endResult += data;
    }
    console.log(endResult);

}

repS("magic is real", 3);
