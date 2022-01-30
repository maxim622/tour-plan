<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$modalEmail = $_POST['modal-email'];

// Формирование самого письма
$title = "Новое письмо пользователя Best tour plane";
if(isset($_POST['email'])){
    $body = "
    <h2>Новый запрос на регистрацию</h2>
    <b>Почта пользователя:</b>$email<br>
    ";
} else { 
    if(isset($_POST['modal-email'])){
        $body = "
        <h2>Новый запрос на бронирование GRAND HILTON HOTEL</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br><br>
        <b>Почта пользователя:</b>$modalEmail<br>
        <b>Сообщение:</b><br>$message
        ";
    } else {
        $body = "
        <h2>Новое письмо</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br><br>
        <b>Сообщение:</b><br>$message
        ";
    }
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'maksmailphp11@gmail.com'; // Логин на почте
    $mail->Password   = '12phpmailmaks'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('maksmailphp11@gmail.com', 'Максим Жуков'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('maks32165@gmail.com');  
  
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: inquiry.html');