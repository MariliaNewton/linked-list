import LinkedList from "./LinkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.getSize());
console.log(list.at(3));
console.log(list.pop());
console.log(list.at(3));
console.log(list.contains("dog"));
console.log(list.contains("turtle"));
console.log(list.contains("snake"));
console.log(list.find("cat"));
console.log(list.find("snake"));
console.log(list.toString());

list.insertAt("cow", -2);
console.log(list.toString());
list.insertAt("whale", 0);
console.log(list.toString());

console.log(list.toString(), list.getSize());
list.removeAt(-7);
console.log(list.toString(), list.getSize());
list.removeAt(0);
console.log(list.toString(), list.getSize());
list.removeAt(2);
console.log(list.toString(), list.getSize());
