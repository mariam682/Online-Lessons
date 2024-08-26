let body = document.getElementById("body");
let light = 0; 
let img = document.getElementById("img");
function dark() {
    if (light == 1) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        img.src = "https://img.icons8.com/?size=100&id=25031&format=png&color=000000";
        light = 0;
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        img.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000";

        light = 1;
    }
}
   

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'
    })

})

$(document).ready(function () {
    $("#myform").submit(function (event) {
        var isvalid = true;
        $(".error").hide();

        if ($("#name").val().trim() === '') {
            $("#name-error").show();
            isvalid = false;
        }
        if ($("#email").val().trim() === '') {
            $("#email-error").show();
            isvalid = false;
        }
        if ($("#age").val().trim() === '') {
            $("#age-error").show();
            isvalid = false;
        }
        if ($("#gender").val().trim() === '') {
            $("#gender-error").show();
            isvalid = false;
        }

        if (!isvalid) {
            event.preventDefault();
        } else {
            alert("form submitted");
        }
    });
});