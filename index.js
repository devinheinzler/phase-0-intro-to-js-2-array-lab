// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
} 

function destructivelyPrependCat(Ralph) {
    cats.unshift(Ralph);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat(name) {
    const anotherCopyOfCats = [name, ...cats];
    return anotherCopyOfCats;
}

function removeLastCat() {
    const copyingIsTedious = cats.slice(0, -1);
    return copyingIsTedious;
}

function removeFirstCat() {
    const copyingIsntTedious = cats.slice(1);
    return copyingIsntTedious;
}