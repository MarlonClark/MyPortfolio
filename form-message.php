<?php
    $to      = 'marlon.clark.82@gmail.com';
    $subject = 'Portfolio Interest';
    $message = 'hello';
    $headers = array(
        'From' => 'webmaster@example.com',
        'Reply-To' => 'webmaster@example.com',
        'X-Mailer' => 'PHP/' . phpversion()
    );

    mail($to, $subject, $message, $headers);
?>