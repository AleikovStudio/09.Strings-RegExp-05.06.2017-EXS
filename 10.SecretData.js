function secretData(arrStr) {
    let text = arrStr.join("\n");

    let usernamePattern = /(\*[A-Z][a-zA-Z0-9]*)(?=\s|\t|$)/g;//using look ahead ?=
    let phonePattern = /(\+([0-9\-]){1,10})(?=\s|\t|$)/g;
    let idPattern = /(\![a-zA-Z0-9]*)(?=\s|\t|$)/g;
    let basePattern = /(\_[a-zA-Z0-9]*)(?=\s|\t|$)/g;

    text = text.replace(usernamePattern, replacer);
    text = text.replace(phonePattern, replacer);
    text = text.replace(idPattern, replacer);
    text = text.replace(basePattern, replacer);
    console.log(text);

    function replacer(match, gr1, gr2) {
        return "|".repeat(gr1.length);
        //console.log(gr1.length);
    }
}

secretData([
    "Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
    "Agent *Ivankov had to act quick in order.",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",
    "This is all I saw, that night.",
    "I cannot explain it myself..."
]);