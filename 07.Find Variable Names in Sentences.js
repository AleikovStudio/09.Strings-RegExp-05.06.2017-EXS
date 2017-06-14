function findVar(input) {

    let pattern = /\b(_)([a-zA-Z0-9]+)\b/g;

    console.log(input
        .match(pattern)
        .join(",")
        .replace(/_/g,""));
}

findVar("The _id and _age variables are both integers.");
//findVar("Calculate the _area of the _perfectRectangle object.");
//findVar("__invalidVariable _evenMoreInvalidVariable_ _validVariable");