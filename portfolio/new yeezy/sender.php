<?php 

$token = '299686107:AAHBKYw5yT2wZ40an2LktpUXKLU5Pikyp9I';

$chatId = 189521030;
$text = ('Имя: '.$_POST['name'] .PHP_EOL. 'Телефон: '.$_POST['tel'] .PHP_EOL. 'Цвет: '.$_POST['color'] .PHP_EOL. 'Размер: '. $_POST['size'] .PHP_EOL. 'Адресс: '. $_POST['adress']);

$parameters = array('chat_id' => $chatId, 'text' => $text);

$url = 'https://api.telegram.org/bot' .  $token . '/sendMessage?' . http_build_query($parameters);

file_get_contents($url);
echo header('Location: http://style2017.in.ua');
exit;
?>