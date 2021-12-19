/* ------------ IMAGE ROTATOR ------------ */

//variables and array
// var pict_array = ["diet_pic_1.PNG", "diet_pic_2.PNG"];
// var counter = 0;
// var counter_1 = 1;

// function rotatePicts()
// {
//     //finds the id and replaces it with the pic in the array
//     document.getElementById("rotator").src = "assets/images/" + pict_array[counter];
//     document.getElementById("rotator_2").src = "assets/images/" + pict_array[counter_1];

//     //adds 1 to variable to go to the next pic
//     counter++;
//     counter_1++;

//     //rotates pics every 5 seconds
//     setTimeout(rotatePicts, 5000);

//     //if the counter is greater tha n the length of the array it will go back to 0 so images can keep repeating
//     if (counter == pict_array.length)
//     {
//         counter = 0;
//     }

//     if (counter_1 == pict_array.length)
//     {
//         counter_1 = 0;
//     }
// }

function myFunction(imgs)
{
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}


function valid()
{
    var empt = document.forms["email"]["subject"].value;
    if (empt == "")
    {
    alert("Please input a Value");
    return false;
    }
    else 
    {
    alert('Code has accepted : you can try another');
    return true; 
    }
}