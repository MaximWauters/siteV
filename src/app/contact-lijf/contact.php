<?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $from = 'From: TangledDemo'; 
        $to = 'wauters.maxim@hotmail.com'; 
        $subject = 'Hello';

        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
        if ($_POST['submit']) {
            echo "het werkt zie je: " . $name . "is de naam" . $email . "is de mail " . $message . "ajaaaa!";
        }

    
?>