//Example 1: 
//Input: s = "Hello World" 

let s = "Hello World" 
let word = s.split(" ") //Split the string into an array of words 
let lastWord = word[word.length-1] //Find the last word in the array
let length = lastWord.length //Calculate the length of this word
console.log(length)


//Example 2:  
//Input: s = "   fly me   to   the moon  "

let str = "   fly me   to   the moon  "
let rem = str.trim() //Trim the String
let words = rem.split(" ") //Split the String into Words
let wordLast = words[words.length-1] //Identify the Last Word
let len = wordLast.length //Calculate the Length of the Last Word
console.log(len) //Return or print the length 