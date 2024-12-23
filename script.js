// get refrences to the form and display area
var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById('resume-display');
//Handle from submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobileNo = document.getElementById("mobileNo")
        .value;
    var education = document.getElementById("education")
        .value;
    var experiance = document.getElementById("experiance")
        .value;
    var skills = document.getElementById("skills").value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b><center>Dynamic Resume</center></b></h2><br>\n    <h3><u>Personal Information</u></h3><br>\n    <p><b>Name: </b> ".concat(name, "</p><br>\n    <p><b>Email: </b> ").concat(email, "</p><br>\n    <p><b>mobileNo: </b> ").concat(mobileNo, "</p><br>\n\n    <h3><u>Education</u></h3><br>\n    <p>").concat(education, "</p><br>\n\n     <h3><u>Experiance</u></h3><br>\n    <p>").concat(experiance, "</p><br>\n\n     <h3><u>Skills</u></h3><br>\n    <p>").concat(skills, "</p><br>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume display element missing.");
    }
});
