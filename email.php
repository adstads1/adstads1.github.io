<html>
<body>

<?php
        $name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='adam.tadele@yahoo.co.uk'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";

</body>
</html>