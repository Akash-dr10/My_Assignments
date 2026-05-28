let string = "Akash"
function revString(string)
{
    let split = string.split('')

    let rev = split.reverse()

    let join = rev.join('')

    if(join === string)
    {
        console.log("The given string is a palindrome")
    }
    else
    {
        console.log("The given string is not a palindrome")
    }

}
revString(string)