<?php
require_once('include/init.inc.php');
//////////////////////////////////////////////////////////

// REQUETES BDD ///////////////////////////////

$data = $bdd->query("SELECT DISTINCT(type) FROM logement");

// AFFICHAGE PAR CATEGORIE //////////////////////
if(isset($_GET['type']) && !empty($_GET['type']))
{
    $result = $bdd->prepare("SELECT * FROM logement WHERE type = :type");
    $result->bindValue(':type', $_GET['type'], PDO::PARAM_STR);
    $result->execute();

    if(!$result->rowCount())
    {
        header('location: type.php');
    }
}
else 
{
    $result = $bdd->query("SELECT * FROM logement");
}


//////////////////////////////////////////////////////////
require_once('include/header.inc.php');
require_once('include/nav.inc.php');
?>

<!-- Page Content -->

    <div class="row col-lg-11 mx-auto justify-content-between">
        <div class="col-lg-3">
            <h1 class="my-4">Mon Agence</h1>
            <div class="list-group">
                <p class="list-group-item text-white text-center p-3 m-0 " style="background-color: #37144f;">Catégories</p>
                <?php while($type = $data->fetch(PDO::FETCH_ASSOC)): ?>
                <a href="?type=<?= $type['type'] ?>" class="list-group-item text-center text-dark p-3 font-weight-bold"><?= ucfirst($type['type']) ?></a>
                <?php endwhile; ?>
            </div>
        </div>
        <div class="col-lg-9 d-flex flex-wrap my-5">
            <?php while($logements = $result->fetch(PDO::FETCH_ASSOC)): ?>
            <div class="col-md-6 col-lg-6 col-xl-4 mb-4">
                <div class="card mb-3 h-100">
                    <img class="card-img-top" src="<?= $logements['photo'] ?>" alt="<?= $logements['titre'] ?>">
                    <div class="card-body">
                        <h4 class="card-title"><?= $logements['titre'] ?></h4><hr>
                        <h5><?= $logements['type'] ?> : <?= $logements['prix'] ?> €</h5>
                        <h5> Surface : <?= $logements['surface'] ?> m²</h5>
                        <?php
                        if(strlen($logements['description']) > 100)
                        {
                            $description = substr($logements['description'], 0, 100) . '...';
                        }
                        else 
                        {
                            $description = $logements['description'];
                        }
                        ?>
                        <p class="card-text"><?= $description ?></p>
                    </div>
                    <div class="card-footer text-center">
                    <a href="logement.php?id_logement=<?= $logements['id_logement'] ?>" class="btn btn-secondary">EN SAVOIR PLUS</a>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</div>

<?php
//////////////////////////////////////////////////////////
require_once('include/footer.inc.php');
?>