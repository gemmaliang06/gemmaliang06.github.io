<?php
// filepath: /Users/gemmaliang/Desktop/Web_Development/gemmaliang06.github.io/Directory/Midterm/action_page.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $firstName = htmlspecialchars($_POST['firstname']);
    $lastName = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);

    // Your email address
    $to = "gtl2024@nyu.edu"; // Replace with your actual email address
    $subjectLine = "New Contact Form Submission from $firstName $lastName";

    // Email content
    $message = "
    <html>
    <head>
        <title>Contact Form Submission</title>
    </head>
    <body>
        <h2>Contact Form Submission</h2>
        <p><strong>First Name:</strong> $firstName</p>
        <p><strong>Last Name:</strong> $lastName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>$subject</p>
    </body>
    </html>
    ";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Send email
    if (mail($to, $subjectLine, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>