
//function named myFunction retreives the background image from the .html file which the url has been inputted when typed after the function. 
function myFunction(background) {
    
    document.body.style.backgroundImage = background;

}

//function secondFunction gets the background from the div id called back and replaces the background which is called #back in the .css file and causing the background to change when the button is clicked.
function secondFunction(background) {
    
    document.getElementById("back").style.backgroundImage = background;

}

//function thirdFunction gets the background from the div id called wo and replaces the background which is called #wo in the .css file and causing the background to change when the button is clicked.
function thirdFunction(background) {

	document.getElementById("wo").style.backgroundImage = background;
}

//function fourthFunction gets the background from the div id called bac and replaces the background which is called #bac in the .css file and causing the background to change when the button is clicked.
function fourthFucntion(background) {

	document.getElementById("bac").style.backgroundImage = background;
}


//varabile called gallery which represent the 3 .png has a fucntion called fILLGallery with a variable called i.
//The variable i is turned to a loop by using ++ and  referred to an empty image which is created with a number next to the quote gallery called i which equals 0. The image that has been hovered over will have an impage size of 29px.


var gallery = ["Slide0.png","Slide1.png","Slide2.png"];

function fillGallery() {
	for(var i=0; i<gallery.length; i++) {
		var elemId = "pic" + i;
		document.getElementById(elemId).innerHTML=
			"<img src='"+gallery[i]+"' width='29px' onmouseover='showInMain(" + i + ")' />";



	}

}

//Function showInMain created so the naming of the file could be retieved to the rollover. The function ShowInMaim has been
//linked to the function fillGallery and replaces the slide with the number (image) when the mouse hovers over the image.
function showInMain(num){
	var imageSource = "Slide" + num + ".png";
	document.getElementById('mainImage').src= imageSource;
	return false;
}



//Below code shows the time in the footer by referring to a div called demo in the .html file and that is referred to the date.
document.getElementById("demo").innerHTML = Date();

//Below a validation has been created for the form. Variable called atpos has been created so that a popup (alert) can appears when a user hasn't added @ in their email address.
//Variable dotpos created so when the user doesn't add a . in their email address it will show a popup telling the user that they've not entered their eail address properly.
//When the @ and . has been added to the fields, a alert pop-up will appear "Message has been sent".
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");}
        
    
    else {alert("Message has been sent");
    }
}


