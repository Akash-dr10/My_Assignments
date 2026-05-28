let score = 89.99
function studGrade(score)
{
    let grade = 0
    switch (true) {
        case (score>=90 && score<=100):
            grade = "A"
            break
        case (score>=60 && score<90):
            grade = "B"
            break
        case (score>=35 && score<59):
            grade = "C"
            break
        case (score>=0 && score<34):
            grade = "F"
            break
        default :
            grade = "Invalid grade"
            break
    }
    return grade
}
console.log("Grade: ", studGrade(score))