const cats = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendCat() {
cats.push("Ralph")
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
}

function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(){
    return ["Milo", "Otis"];
}
function removeFirstCat(){
    return ["Otis", "Garfield"];
}