let studentArray = [];
let student;

$(document).ready(function ()
{
    $("form").on("submit",calculation);
    $("button#sortName").on("click", sortName);
    $("button#sortGrade").on("click", sortGrade);
});

function calculation(event)
{
    event.preventDefault();

    //Create a student object

    student =
        {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            pointsEarned: $("#pointsEarned").val(),
            totalPoints: $("#totalPoints").val()
        };

    //store in the student array

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

    student.percent = percent;
    studentArray.push(student);

    //Print out the results

    $("#firstNameOutput").text(`First Name: ${student.firstName}`);
    $("#lastNameOutput").text(`Last Name: ${student.lastName}`);
    $("#percent").text(`Score: ${percent}%`);
    $("#letterGrade").text(`Final Grade: ${letterGrade}`);
}


function sortByName(a, b)
{
    if(a.firstName < b.firstName)
    {
        return -1;
    }
    else if(a.firstName > b.firstName)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function sortByGrade(a, b)
{
    if(a.percent > b.percent)
    {
        return -1;
    }
    else if(a.percent < b.percent)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function sortName()
{
    studentArray.sort(sortByName);
    printArrayName();
}

function sortGrade()
{
    studentArray.sort(sortByGrade);
    printArrayGrade();
}

function printArrayName()
{
    $("p#sortByName").empty();

    for(let i = 0; i < studentArray.length; i++)
    {
        let output = studentArray[i].firstName + ", " + studentArray[i].lastName + ", " + studentArray[i].percent;
        $("p#sortByName").append(output);
        $("p#sortByName").append("<br>");
    }
}

function printArrayGrade()
{
    $("p#sortByGrade").empty();

    for(let i = 0; i < studentArray.length; i++)
    {
        let output = studentArray[i].firstName + ", " + studentArray[i].lastName + ", " + studentArray[i].percent;
        $("p#sortByGrade").append(output);
        $("p#sortByGrade").append("<br>");
    }
}