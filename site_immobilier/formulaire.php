<?php
require_once('include/init.inc.php');
//////////////////////////////////////////////////////////

// RECUPERATION DONNEES POUR MODIFICATION LOGEMENTS ///////////////
if(isset($_GET['action']) && $_GET['action'] == 'modifier')
{
    if(isset($_GET['id_logement']) && !empty($_GET['id_logement']))
    {
        $currentLogement = $bdd->prepare("SELECT * FROM logement WHERE id_logement = :id_logement");
        $currentLogement->bindValue(':id_logement', $_GET['id_logement'], PDO::PARAM_INT);
        $currentLogement->execute();

        if($currentLogement->rowCount() > 0)
        {
            $logement = $currentLogement->fetch(PDO::FETCH_ASSOC);
        }
        else 
        {
            header('location: ' . URL . 'formulaire.php?action=ajouter');
        }
    }
    $titre = (isset($logement['titre'])) ? $logement['titre'] : '';
    $adresse = (isset($logement['adresse'])) ? $logement['adresse'] : '';
    $ville = (isset($logement['ville'])) ? $logement['ville'] : '';
    $cp = (isset($logement['cp'])) ? $logement['cp'] : '';
    $surface = (isset($logement['surface'])) ? $logement['surface'] : '';
    $prix = (isset($logement['prix'])) ? $logement['prix'] : '';
    $type = (isset($logement['type'])) ? $logement['type'] : '';
    $description = (isset($logement['description'])) ? $logement['description'] : '';
    $photo = (isset($logement['photo'])) ? $logement['photo'] : '';
}
// SUPPRESSION LOGEMENTS ////////////////////////////////////
if(isset($_GET['action']) && $_GET['action'] == 'supprimer')
{
    $delete = $bdd->prepare("DELETE FROM logement WHERE id_logement = :id_logement");
    $delete->bindValue(':id_logement', $_GET['id_logement'], PDO::PARAM_INT);
    $delete->execute();

    $_SESSION['validation'] = "<div class='col-md-4 mx-auto alert alert-success text-center'>Le logement <strong>ID $_GET[id_logement]</strong> a été supprimé avec succès !</div>";

    header('location: ' . URL . 'formulaire.php?supp=valid');  
}

// CONTROLE DU FORMULAIRE ET INSERT / UPDATE BDD ///////////////////////////
// echo '<pre>'; print_r($_POST); echo '</pre>';
if($_POST)
{
    // CREATION DU DOSSIER PHOTO S'IL N'EXISTE PAS ////////
    $repPhoto = "photo"; 

    // Vérifie si le répertoire existe :
    if (is_dir($repPhoto))
    {
        //echo 'Le répertoire existe déjà!';  
    }
    else 
    { 
        mkdir($repPhoto);     
    }

    // CONTROLE DES CHAMPS DU FORMULAIRE //////////////////
    $border = "border border-danger";

    if(empty($_POST['titre']))
    {
        $errorTitre = "<small class='font-italic text-danger'>Merci de saisir un titre</small>";
        $error = true;
    }
    if(empty($_POST['adresse']))
    {
        $errorAdresse = "<small class='font-italic text-danger'>Merci de saisir une adresse</small>";
        $error = true;
    }
    if(empty($_POST['cp']))
    {
        $errorCp = "<small class='font-italic text-danger'>Merci de saisir un code postal</small>";
        $error = true;
    }
    elseif(!is_numeric($_POST['cp']) || iconv_strlen($_POST['cp']) !=5)
    {
        $errorCp =  "<small class='font-italic text-danger'>Le code postal n'est pas au bon format</small>";
        $error = true;
    }
    if(empty($_POST['surface']))
    {
        $errorSurface = "<small class='font-italic text-danger'>Merci de saisir une surface</small>";
        $error = true;
    } 
    elseif (!is_numeric($_POST['surface']))
    {
        $errorSurface = "<small class='font-italic text-danger'>Merci de saisir un nombre</small>";
        $error = true;
    }
    if(empty($_POST['prix']))
    {
        $errorPrix = "<small class='font-italic text-danger'>Merci de saisir un prix</small>";
        $error = true;
    } 
    elseif (!is_numeric($_POST['prix']))
    {
        $errorPrix = "<small class='font-italic text-danger'>Merci de saisir un nombre</small>";
        $error = true;
    }
    // TRAITEMENT DE LA PHOTO ///////////////////////////
    $photoBdd = '';

        // MODIF PHOTO
    if(isset($_GET['action']) && $_GET['action'] == 'modifier')
    {
        $photoBdd = $photo;
    }
        // CONTROLES PHOTO
    if(!empty($_FILES['photo']['name']))
    {
        // RECUPERATION DE L'EXTENTION DU FICHIER
        $info = new SplFileInfo($_FILES['photo']['name']);
        $extFichier = $info->getExtension();
        // echo '<pre>'; print_r(get_class_methods($info)); echo '</pre>';

        // RECUPERATION TAILLE DU FICHIER
        $tailleFichier = filesize($_FILES['photo']['tmp_name']);
        // echo '<pre>'; print_r($tailleFichier); echo '</pre>';

        // CREATION LISTE EXTENSIONS AUTORISEES
        $listeExt = ['jpg', 'jpeg', 'png'];

        // CREATION TAILLE MAX FICHIER AUTORISEE
        $tailleMax = 2000000;
        
        // CONTROLE SI EXTENSION et TAILLE FICHIER AUTORISEES
        $positionExt = array_search($extFichier, $listeExt); 

        if($positionExt === false)
        {
            $errorPhoto = "<small class='font-italic text-danger'>Extention de fichier non autorisée</small>";
            $error = true;
        }
        elseif($tailleFichier > $tailleMax)
        {
            $errorPhoto = "<small class='font-italic text-danger'>Le fichier est trop gros (max 2 Mo)</small>";
        }
        else 
        {
            $date = date_create();

            $nomPhoto = 'logement' . '_' . date_timestamp_get($date) . '.' . $extFichier;

            $photoBdd = URL . "photo/$nomPhoto";

            $dossierPhoto = RACINE_SITE . "photo/$nomPhoto";

            copy($_FILES['photo']['tmp_name'], $dossierPhoto);
        }
    }
    // INSERTION OU MODIFICATION ////////////////
    if(!isset($error))
    {
        // SI $_GET['action'] existe et = 'modifier', on UPDATE la table
        if(isset($_GET['action']) && $_GET['action'] == 'modifier')
        {
            $data = $bdd->prepare("UPDATE logement SET titre = :titre, adresse = :adresse, cp = :cp, ville = :ville, surface = :surface, prix = :prix, type = :type, description = :description, photo = :photo WHERE id_logement = :id_logement");
            $data->bindValue(':id_logement', $_GET['id_logement'], PDO::PARAM_STR);

            // On enregistre dans la session le message de validation
            $_SESSION['validation'] = "<div class='col-md-4 mx-auto alert alert-success text-center'>Le logement <strong> ID $_GET[id_logement]</strong> a été modifié avec succès !</div>";

            header('location: ' . URL . 'formulaire.php?modif=valid');
        }
        else // SINON c'est un INSERT
        {
            $data = $bdd->prepare("INSERT INTO logement (titre, adresse, cp, ville, surface, prix, type, description, photo) VALUES (:titre, :adresse, :cp, :ville, :surface, :prix, :type, :description, :photo)");

            $_SESSION['validation'] = "<div class='col-md-4 mx-auto alert alert-success text-center'>Le logement a été ajouté avec succès !</div>";

            header('location: ' . URL . 'formulaire.php?ajout=valid');
        }

        $data->bindValue(':titre', $_POST['titre'], PDO::PARAM_STR);
        $data->bindValue(':adresse', $_POST['adresse'], PDO::PARAM_STR);
        $data->bindValue(':cp', $_POST['cp'], PDO::PARAM_INT);
        $data->bindValue(':ville', $_POST['ville'], PDO::PARAM_STR);
        $data->bindValue(':surface', $_POST['surface'], PDO::PARAM_INT);
        $data->bindValue(':prix', $_POST['prix'], PDO::PARAM_INT);
        $data->bindValue(':type', $_POST['type'], PDO::PARAM_STR);
        $data->bindValue(':description', $_POST['description'], PDO::PARAM_STR);
        $data->bindValue(':photo', $photoBdd, PDO::PARAM_STR);

        $data->execute(); 
    }
}

//////////////////////////////////////////////////////////
require_once('include/header.inc.php');
require_once('include/nav.inc.php');
?>

<!-- Page Content -->

<h1 class="display-3 text-center py-4 mx-auto ">Enregistrer un logement</h1>

<?php
// AFFICHAGE DES MESSAGES DE VALIDATION SELON L'ACTION
    if(isset($_GET['ajout']) && $_GET['ajout'] == 'valid') echo $_SESSION['validation'];
    elseif(isset($_GET['modif']) && $_GET['modif'] == 'valid') echo $_SESSION['validation'];
    elseif(isset($_GET['supp']) && $_GET['supp'] == 'valid') echo $_SESSION['validation'];
?>

    <form method="post" class="col-md-7 mx-auto mt-3 mb-4 " enctype="multipart/form-data">
        <div class="form-row">               
            <div class="form-group col-md-8">
                <label for="titre">TITRE *</label>
                <input type="text" class="form-control <?php if(isset($errorTitre)) echo $border; ?>" id="titre" name="titre" value="<?php if(isset($titre)) echo $titre; ?>"> 
                <?php if(isset($errorTitre)) echo $errorTitre; ?>
            </div>
        </div>
        <div class="form-row"> 
            <div class="form-group col-md-12">
                <label for="adresse">ADRESSE *</label>
                <input type="text" class="form-control <?php if(isset($errorAdresse)) echo $border; ?>" id="adresse" name="adresse" value="<?php if(isset($adresse)) echo $adresse; ?>">
                <?php if(isset($errorAdresse)) echo $errorAdresse; ?>
            </div>
        </div>
        <div class="form-row">                    
            <div class="form-group col-md-6">
                <label for="cp">CODE POSTAL *</label>
                <input type="text" class="form-control <?php if(isset($errorCp)) echo $border; ?>" id="cp" name="cp" value="<?php if(isset($cp)) echo $cp; ?>">
                <?php if(isset($errorCp)) echo $errorCp; ?>
            </div>  
            <div class="form-group col-md-6">
                <label for="ville">VILLE *</label>
                <input type="text" class="form-control <?php if(isset($errorVille)) echo $border; ?>" id="ville" name="ville" value="<?php if(isset($ville)) echo $ville; ?>">
                <?php if(isset($errorVille)) echo $errorVille; ?>
            </div>  
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="surface">SURFACE EN M² *</label>
                <input type="text" class="form-control <?php if(isset($errorSurface)) echo $border; ?>" id="surface" name="surface" value="<?php if(isset($surface)) echo $surface; ?>">
                <?php if(isset($errorSurface)) echo $errorSurface; ?>
            </div>
            <div class="form-group col-md-4">
                <label for="prix">PRIX *</label>
                <input type="text" class="form-control <?php if(isset($errorPrix)) echo $border; ?>" id="prix" name="prix" value="<?php if(isset($prix)) echo $prix; ?>">
                <?php if(isset($errorPrix)) echo $errorPrix; ?>
            </div>
            <div class="form-group col-md-4">
                <label for="type">TYPE *</label>
                <select class="form-control" id="type" name="type">
                    <option value="location" <?php if(isset($type) && $type == 'location') echo 'selected'; ?> >LOCATION</option>
                    <option value="vente" <?php if(isset($type) && $type == 'vente') echo 'selected'; ?>>VENTE</option>
                </select>
            </div> 
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="description">DESCRIPTION</label>
                <textarea class="form-control" id="description" name="description" rows="5" ><?php if(isset($description)) echo $description; ?></textarea>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="photo">PHOTO</label>
                <input type="file" class="form-control <?php if(isset($errorPhoto)) echo $border; ?>" id="photo" name="photo">
                <small class="col-md-6 align-baseline ml-1 mr-1">Extensions autorisées : jpg, jpeg, png</small>
                <?php if(isset($errorPhoto)) echo $errorPhoto; ?>
            </div>
            <?php if(!empty($photo)) : ?>
            <p class="text-center col-md-4">
            <em>Vous pouvez uploader une photo si vous souhaitez la changer</em><br>
            <img src="<?= $photo ?>" alt="<?= $titre ?>" style="width: 150px">
            </p>
            <?php endif; ?>  
        </div>
        <div class="form-row justify-content-between">
            <small class="col-lg-8  col-md-6 align-baseline ml-1 mr-1 p-1">Les champs suivis d'une * sont obligatoires</small>
            <button type="submit" class="btn btn-dark col-lg-3 col-md-5 ml-1 mr-1 text-nowrap"><?php if(isset($_GET['action']) && !empty($_GET['action'])) echo strtoupper($_GET['action']); else echo "AJOUTER"; ?> LOGEMENT</button>
        </div>            
    </form>
<?php
    $result = $bdd->query("SELECT * FROM logement ORDER BY id_logement");

    // TABLEAU AFFICHAGE logements ///////////////
    echo "<h3 class='display-4 text-center py-4 mx-auto'>Liste des logements</h3>";
    // EN-TETE ////////////////
    
    
        echo "<div class='table-responsive col-lg-10 mx-auto my-2'>";
        echo "<div class='table-wrapper'>";
            echo "<table class='table table-bordered bg-dark text-white text-center'><tr>"; 
            for($i = 0; $i < $result->columnCount(); $i++)
            {
                $column = $result->getColumnMeta($i);
                echo "<th class='bg-dark'>" . strtoupper($column['name']) . "</th>" ;
            }
                echo "<th class='bg-dark'>MODIFIER</th>";
                echo "<th class='bg-dark'>SUPPRIMER</th>";
            echo '</tr>';
            // RANGEES ///////////////
            while($logements= $result->fetch(PDO::FETCH_ASSOC))
            {
                echo "<tr>";
                foreach($logements as $key => $value)
                {
                    if($key == 'description')
                    {
                        if(strlen($logements['description']) > 50)
                        {
                            $description = substr($logements['description'], 0, 50) . '...';
                        }
                        else 
                        {
                            $description = $logements['description'];
                        }
                        echo "<td class='align-middle'>$description</td>"; 
                    }
                    elseif($key == 'photo')
                    {
                        echo "<td><img src='$value' alt='$logements[titre]' style='width : 150px; height: auto'></td>";
                    }
                    else
                    {
                        echo "<td class='align-middle'>$value</td>"; 
                    }  
                }
                echo "<td class='align-middle'><a href='?action=modifier&id_logement=$logements[id_logement]' class='btn'><i class='fas fa-pencil-alt' style='color: #bda0d3'></i></a></td>";
                echo "<td class='align-middle'><a href='?action=supprimer&id_logement=$logements[id_logement]' class='btn' onclick='return(confirm(\"Voulez-vous vraiment supprimer ce logement ?\"))'><i class='fas fa-times' style='color: #bda0d3'></i></a></td>";
                echo "</tr>";
            } 
            echo "</table>";    
        echo "</div>";
    echo "</div>";


?>

<?php
//////////////////////////////////////////////////////////
require_once('include/footer.inc.php');
?>