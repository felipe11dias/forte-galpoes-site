<?php
// Permitir acesso de qualquer origem (não recomendado para produção, ajuste conforme necessário)
header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Credentials: true");

// Permitir métodos HTTP específicos
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Permitir cabeçalhos específicos
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Se você estiver lidando com solicitações OPTIONS para CORS prévias
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200); // Responder 200 OK para requisições OPTIONS
    exit(0);
}

$recipient = "mamaucar@hotmail.com"; // Note: Please replace this email with your recipient's email

$nameForm = $_POST['nameForm'];
$emailForm = $_POST['emailForm'];
$phoneForm = $_POST['phoneForm'];
$subjectForm = $_POST['subjectForm'];
$messageForm = $_POST['messageForm'];


if (empty($nameForm) || empty($emailForm) || empty($subjectForm) || empty($messageForm)) {
    http_response_code(400); // Bad Request
    die('Preencha todos os campos!');
}

$mailheader = "From:".$nameForm."<".$emailForm.">\r\n";

$htmlContent = "Name completo: ".$nameForm."\n\n";
$htmlContent .= "Email: ".$emailForm."\n\n";
$htmlContent .= "Número de telefone: ".$phoneForm."\n\n";
$htmlContent .= "Assunto: ".$subjectForm."\n\n";
$htmlContent .= "Mensagem: ".$messageForm."\n\n\n\n\n\n";

$htmlContent .= "-------------------------------------------\n";
$htmlContent .= "Nota: Esse é um email do seu website!";

// sleep(5000);
if (mail($recipient, $subjectForm, $htmlContent, $mailheader)) {
    echo 'Email enviado com sucesso!';
} else {
    http_response_code(500); // Erro interno do servidor
    die('Erro ao enviar o email.');
}

echo 'Email enviado';

?>
