let num = -79
function NumType(num)
{
    if(num>0)
    {
        console.log(num, "is greater than zero and it is a positive integer")
    }
    else if(num<0)
    {
        console.log(num, "is less than zero and it is a negative integer")
    }
    else
    {
        console.log(num, "is equal to zero and it is neutral")
    }

}
NumType(num)