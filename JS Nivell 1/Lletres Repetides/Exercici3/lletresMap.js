var lletres = ["N", "E", "U", "S", "M", "A", "R", "Z", "A", "L"];

console.log(lletres);

var newLletres = new Map();

newLletres.set("N", 1);
newLletres.set("E", 1);
newLletres.set("U", 1);
newLletres.set("S", 1);
newLletres.set("M", 1);
newLletres.set("A", 2);
newLletres.set("R", 1);
newLletres.set("Z", 1);
newLletres.set("A", 2);
newLletres.set("L", 1);

for (var [key, value] of newLletres) {
    console.log(key + ":" + value);
}



