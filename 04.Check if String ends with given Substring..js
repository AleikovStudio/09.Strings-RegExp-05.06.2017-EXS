function checkEnd(data, checkData) {
    let check = data.substr(data.length - checkData.length, data.length);

    if (check == checkData) {
        console.log(true);
    } else {
        console.log(false);
    }
}

//checkEnd("This sentence ends with fun?", "fun?");
checkEnd("This is Houston, we have…","We have…");

//2nd solution:
(text,substr)=>text.endsWith(substr);