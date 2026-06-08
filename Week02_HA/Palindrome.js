//let string = "Akash"
function revString(string)
{

    let split = string.split('') //Convert the input into characters 

    let rev = split.reverse() //Loop them in reverse direction 

    let join = rev.join('') // Concatenate the string 

    if(join === string) //Compare the new string with the exisitng string
    {
        console.log("The given string is a palindrome")
    }
    else
    {
        console.log("The given string is not a palindrome")
    }

}
revString("Racecar")
revString("MADAM")
revString("Madam")
revString("racecar")
