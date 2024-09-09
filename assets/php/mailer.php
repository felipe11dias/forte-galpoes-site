<?php
// Permitir acesso de qualquer origem (não recomendado para produção, ajuste conforme necessário)
header("Access-Control-Allow-Origin: *");

// Permitir métodos HTTP específicos
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Permitir cabeçalhos específicos
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Se você estiver lidando com solicitações OPTIONS para CORS prévias
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$recipient = "mamaucar@hotmail.com"; // Note: Please replace this email with your recipient's email

$nameForm = $_POST['nameForm'];
$emailForm = $_POST['emailForm'];
$phoneForm = $_POST['phoneForm'];
$subjectForm = $_POST['subjectForm'];
$messageForm = $_POST['messageForm'];

$mailheader = "From:".$nameForm."<".$emailForm.">\r\n";

$htmlContent = "Name completo: ".$nameForm."\n\n";
$htmlContent .= "Email: ".$emailForm."\n\n";
$htmlContent .= "Número de telefone: ".$phoneForm."\n\n";
$htmlContent .= "Assunto: ".$subjectForm."\n\n";
$htmlContent .= "Mensagem: ".$messageForm."\n\n\n\n\n\n";

$htmlContent .= "-------------------------------------------\n";
$htmlContent .= "Nota: Esse é um email do seu website!";

// sleep(5000);
mail($recipient, $subjectForm, $htmlContent, $mailheader) or die("Erro!");

echo 'Email enviado';

?>
