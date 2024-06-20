//Function to display and hide the password as text or password itself
function showPassword(){
    var pass = document.getElementById('password');
    if(pass.type=="password"){
        pass.type = "text";
    }else{
        pass.type = "password"
    }
}
//Function to store the username and password 
function getCredentials(){
    var user_name = document.getElementById('username').value;
    var pass_word = document.getElementById('password').value;

    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("Username",user_name);
        localStorage.setItem("Password",pass_word);
    } else {
        document.getElementById("").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function message(){
    var message = "This is not considered"
    alert(message);
}


document.addEventListener("DOMContentLoaded", function() {
    const editableText = document.getElementById("displayedName");
    const editableText1 = document.getElementById("displayedName1");
    const editableText2 = document.getElementById("displayedName2");
    const editableText3 = document.getElementById("displayedName3");
    const editableText4 = document.getElementById("gender");
    const saveButton = document.getElementById("saveButton");

    // Load saved text from local storage
    const savedText = localStorage.getItem("savedText");
    const savedText1 = localStorage.getItem("savedText1");
    const savedText2 = localStorage.getItem("savedText2");
    const savedText3 = localStorage.getItem("savedText3");
    const savedText4 = localStorage.getItem("savedText4");
    if (savedText) {
        editableText.value = savedText;
    }
    if (savedText1) {
        editableText1.value = savedText1;
    }
    if (savedText2){
        editableText2.value= savedText2 ;
    }
    if (savedText3 ){
        editableText3.value=savedText3;
    }
    if(savedText4){
        editableText4.value = savedText4;
    }

    saveButton.addEventListener("click", function() {
        const newText = editableText.value;
        const newText1 = editableText1.value;
        const newText2 = editableText2.value;
        const newText3 = editableText3.value;
        const newText4 = editableText4.value;
        // Save edited text to local storage
        localStorage.setItem("savedText", newText);
        localStorage.setItem("savedText1",newText1);
        localStorage.setItem("savedText2",newText2);
        localStorage.setItem("savedText3",newText3);
        localStorage.setItem("savedText4",newText4);
        alert("Text saved successfully!");
    });
});

// For the health vitals edits
document.addEventListener("DOMContentLoaded", function() {
    const editableText = document.getElementById("height");
    const editableText1 = document.getElementById("weight");
    const editableText2 = document.getElementById("bloodPressure");
    const editableText3 = document.getElementById("glucoseLevel");
    const editableText4 = document.getElementById("heartRate");
    const editableText5 = document.getElementById("temperature");
    const saveButton1 = document.getElementById("saveButton1");

    // Load saved text from local storage
    const savedText = localStorage.getItem("savedText");
    const savedText1 = localStorage.getItem("savedText1");
    const savedText2 = localStorage.getItem("savedText2");
    const savedText3 = localStorage.getItem("savedText3");
    const savedText4 = localStorage.getItem("savedText4");
    const savedText5 = localStorage.getItem("savedText5");
    if (savedText) {
        editableText.value = savedText;
    }
    if (savedText1) {
        editableText1.value = savedText1;
    }
    if (savedText2){
        editableText2.value= savedText2 ;
    }
    if (savedText3 ){
        editableText3.value=savedText3;
    }
    if(savedText4){
        editableText4.value = savedText4;
    }
    if(savedText5){
        editableText5.value = savedText5;
    }

    saveButton1.addEventListener("click", function() {
        const newText = editableText.value;
        const newText1 = editableText1.value;
        const newText2 = editableText2.value;
        const newText3 = editableText3.value;
        const newText4 = editableText4.value;
        const newText5 = editableText5.value;
        // Save edited text to local storage
        localStorage.setItem("savedText", newText);
        localStorage.setItem("savedText1",newText1);
        localStorage.setItem("savedText2",newText2);
        localStorage.setItem("savedText3",newText3);
        localStorage.setItem("savedText4",newText4);
        localStorage.setItem("savedText4",newText5);
        alert("Text saved successfully!");
    });
});

// Function to tell the user to input text to edit the profile
function profileMessage(){
    var message = "Input text to the text field to edit"
    alert(message);
}
function vitalsMessage(){
    var message = "Input text to the text Field to edit"
    alert(message);
}

  