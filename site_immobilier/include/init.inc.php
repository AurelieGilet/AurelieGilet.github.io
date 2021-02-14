<?php
// CONNEXION BDD /////////////////////////////////////
$bdd = new PDO('mysql:host=localhost;dbname=immobilier', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

// CONSTANTES ///////////////////////////////////////
define("RACINE_SITE", $_SERVER['DOCUMENT_ROOT'] . '/eval_php-sql_aurelie-gilet/');
define("URL", "http://localhost/eval_php-sql_aurelie-gilet/");

session_start();

// FAILLES XSS /////////////////////////////////////
foreach($_POST as $key => $value)
{
    $_POST[$key] = htmlspecialchars(trim($value));
}

?>