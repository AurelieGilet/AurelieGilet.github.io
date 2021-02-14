<?php
require_once('include/init.inc.php');
//////////////////////////////////////////////////////////

// REQUETE BDD ///////////////////////////////////////////
if(isset($_GET['id_logement']) && !empty($_GET['id_logement']))
{
    $data = $bdd->prepare("SELECT * FROM logement WHERE id_logement = :id_logement");
    $data->bindValue(':id_logement', $_GET['id_logement'], PDO::PARAM_INT);
    $data->execute();

    if($data->rowCount() > 0)
    {
        $logement = $data->fetch(PDO::FETCH_ASSOC);
    }
    else
    {
        header('location: accueil.php');
    }
}
else 
{
    header('location: accueil.php');
}
//////////////////////////////////////////////////////////
require_once('include/header.inc.php');
require_once('include/nav.inc.php');
?>
<!-- Page Content -->

<div class="row m-0 justify-content-center">
    <div class="col-lg-9">
        <div class="card mt-4 mb-4">
            <img class="card-img-top img-fluid" src="<?= $logement['photo'] ?>" alt="<?= $logement['titre'] ?>">
            <div class="card-body">
                <h3 class="card-title"><?= $logement['titre'] ?></h3>
                <h4><?= $logement['type'] ?> : <?= $logement['prix'] ?> €</h4><hr>
                <h4>Surface : <?= $logement['surface'] ?> m²</h4>
                <p class="card-text"><?= $logement['description'] ?></p><hr>
                <h5>Détails du bien :</h5>
                <p class="card-text"><strong>Adresse : </strong><?= ($logement['adresse']) ?> </p>
                <p class="card-text"><strong>Code Postal : </strong><?= $logement['cp'] ?></p>
                <p class="card-text"><strong>Ville : </strong><?= ucfirst($logement['ville']) ?></p><hr>
                <div class="row justify-content-center align-item-center ">
                <button type="submit" class="btn btn-dark col-md-2">
                    <?php if($logement['type'] == 'location')  echo "LOUER"; else echo "ACHETER"; ?>
                </button>
                </div>
            </div>    
            
        </div>
    </div>
</div>

<?php
//////////////////////////////////////////////////////////
require_once('include/footer.inc.php');
?>