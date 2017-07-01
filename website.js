function myFunction(background) {
    
    document.body.style.backgroundImage = background;

}

function secondFunction(background) {
    
    document.getElementById("back").style.backgroundImage = background;

}

function thirdFunction(background) {

	document.getElementById("wo").style.backgroundImage = background;
}

function fourthFucntion(background) {

	document.getElementById("bac").style.backgroundImage = background;
}


var gallery = ["Slide0.png","Slide1.png","Slide2.png"];

function fillGallery() {
	for(var i=0; i<gallery.length; i++) {
		var elemId = "pic" + i;
		document.getElementById(elemId).innerHTML=
			"<img src='"+gallery[i]+"' width='29px' onmouseover='showInMain(" + i + ")' />";



	}

}

function showInMain(num){
	var imageSource = "Slide" + num + ".png";
	document.getElementById('mainImage').src= imageSource;
	return false;
}




document.getElementById("demo").innerHTML = Date();


function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");}
        $.ajax({
    url: "https://formspree.io/adam.tadele@yahoo.com", 
    method: "POST",
    data: $(this).serialize(),
    dataType: "json"
});
    
    else {alert("Message has been sent");
    }
}


