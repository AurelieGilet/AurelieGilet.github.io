<?php
// CONNEXION BDD /////////////////////////////////////
$bdd = new PDO('mysql:host=localhost;dbname=immobilier', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

// CONSTANTES ///////////////////////////////////////
define("RACINE_SITE", $_SERVER['DOCUMENT_ROOT'] . '/site_immobilier/');
define("URL", "http://localhost/site_immobilier/");

session_start();

// FAILLES XSS /////////////////////////////////////
foreach($_POST as $key => $value)
{
    $_POST[$key] = htmlspecialchars(trim($value));
}

?>