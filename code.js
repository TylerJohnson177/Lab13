$(document).ready(function ()
{
    $("form").on("submit",calculation);
});

function calculation(event)
{
    event.preventDefault();

    //Create a student object

    let student =
        {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            pointsEarned: $("#pointsEarned").val(),
            totalPoints: $("#totalPoints").val()
        };

    //Calculate the percent

    let percent = (student.pointsEarned / student.totalPoints) * 100;

    //Calculate the letter grade

    let letterGrade;

    if(percent >= 90)
    {
        letterGrade = "A";
    }
    else if(percent >= 80)
    {
        letterGrade = "B";
    }
    else if(percent >= 70)
    {
        letterGrade = "C";
    }
    else if(percent >= 60)
    {
        letterGrade = "D";
    }
    else
    {
        letterGrade = "F";
    }

    //Print out the results

    $("#firstNameOutput").text(`First Name: ${student.firstName}`);
    $("#lastNameOutput").text(`Last Name: ${student.lastName}`);
    $("#percent").text(`Score: ${percent}%`);
    $("#letterGrade").text(`Final Grade: ${letterGrade}`);
}