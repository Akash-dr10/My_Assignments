function anagrams(name1,name2)
{
  name1 = name1.toUpperCase().replaceAll(" ","").split('').sort().join('') //Remove spaces and convert all letters to the same case and Sort the Characters 
  name2 = name2.toUpperCase().replaceAll(" ","").split('').sort().join('') //Remove spaces and convert all letters to the same case and Sort the Characters

if(name1.includes(name2)) //Compare Sorted Strings
{
    console.log('true') //Return or print the Result 
}
else
{
    console.log('false') //Return or print the Result 
}
}
anagrams("listen","silent") //input
anagrams("hello","world") //input

