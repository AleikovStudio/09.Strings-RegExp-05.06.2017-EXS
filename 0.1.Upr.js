function solve(input) {
    let pattern = /([A-Za-z]+)([\d]+)(?=\s|\t|$)/g;
    //let text = input;
    let text = input.replace(pattern, replacer);

    return text;

    function replacer(match, gr1, gr2) {
        return gr2 + gr1;
    }
}

solve("Word98 SecondWord33 ThirdWord54");