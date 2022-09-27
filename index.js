// Write your solution here!
var cats =['Milo', 'Otis', 'Garfield ', ]
function destractivelyAppendCat (name) {
cats.push (name)
}
function destructivelyprependCat (name) {
    cats . unshift (nane)
}
function destructivelyRemoveLAstCat() {
cats . pop ()
return cats;
}
function destructivelyRemoveFirstCat () {
cats .shift ()
return cats;
}
function appendCat(name){
    var name_1 =[... cats,name];
return name_1;
}
 function prependCat (name) {
  var name_2 =[nane, ...cats]  
  return name_2
 }
function removeLastcat() {
 var MiniArrayOfpets = cats .slice (0, cats . length-1)  
 return  MiniArrayOfpets;
}
function removeFirstcat() {
    var NewArrayOfCats = cats . slice(1) 
    return NewArrayOfCats
}



























