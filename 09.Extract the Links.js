function extractLinks(arrStr) {
    let pattern = /(www)\.([a-zA-Z0-9-]+)(\.[a-z]+){1,}/g;

    let result = "";
    for (let arrS of arrStr) {
        let matches = arrS.match(pattern);
        if (matches != null) {
            result += matches + "\n";
        }
    }
    console.log(result);
}

extractLinks([
    "Join WebStars now for free, at www.web-stars.com",
    "You can also support our partners:",
    "Internet - www.internet.com",
    "WebSpiders - www.webspiders101.com",
    "Sentinel - www.sentinel.-ko"
]);