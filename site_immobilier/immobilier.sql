-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 12 fév. 2021 à 16:16
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `immobilier`
--

-- --------------------------------------------------------

--
-- Structure de la table `logement`
--

CREATE TABLE `logement` (
  `id_logement` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `cp` int(5) UNSIGNED ZEROFILL NOT NULL,
  `surface` int(5) NOT NULL,
  `prix` int(7) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `type` enum('location','vente') NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `logement`
--

INSERT INTO `logement` (`id_logement`, `titre`, `adresse`, `ville`, `cp`, `surface`, `prix`, `photo`, `type`, `description`) VALUES
(1, 'Maison de vacances 5p', '10 rue de la plage', 'Fréjus', 83370, 100, 2000, 'http://localhost/site_immobilier/photo/logement_1613137738.jpg', 'location', 'Maison de vacances, location au mois ou à la semaine.\r\n5 pièces : cuisine aménagée, salle de séjour, 3 chambres avec placards, 2 salles de bain avec wc.\r\nGrand jardin avec terrasse aménagée et piscine.\r\nGarage.\r\n\r\nA 10 min des plages.'),
(2, 'Appartement de vacances 5p', '10 Impasse du Golf', 'Nice', 06000, 120, 2500, 'http://localhost/site_immobilier/photo/logement_1613138202.jpg', 'location', 'Appartement de vacances, location au mois ou à la semaine.\r\n5 pièces : cuisine aménagée américaine ouverte sur grand séjour / salle à manger, 3 chambres avec placards, 2 salles de bain avec WC.\r\nAppartement au rez-de-chaussée, grande baie vitrée.\r\nLogement situé au sein d\'une résidence très calme et sécurisée.\r\nPlace de parking allouée.\r\n\r\nA 10 min à pied de la promenade des Anglais.'),
(3, 'Maison classique 7p', '20 impasse des riches', 'Bignou', 86800, 150, 1900, 'http://localhost/site_immobilier/photo/logement_1613138535.jpg', 'location', 'Maison pavillonnaire en location.\r\nSituée à 20min de Poitiers\r\n7 pièces : \r\nRez-de-chaussée : Grande cuisine aménagée, salle de séjour, salle à manger, 1 chambres avec placards, 1 salle de bain avec wc.\r\nEtage : 3 chambres avec placards, 1 salles de bain avec wc.\r\nGrand jardin avec terrasse aménagée sur l\'arrière de la maison\r\nGarage.'),
(4, 'Chalet de vacances 4p', '3 route de la montagne', 'Saint-Gervais-les-Bains', 74170, 80, 900, 'http://localhost/site_immobilier/photo/logement_1613138961.jpg', 'location', 'Maison de vacances type chalet rustique, location au mois ou à la semaine.\r\n4 pièces : \r\nRez-de-chaussée : cuisine aménagée ouverte sur le séjour, 1 chambres avec placards, 1 salle de bain, wc séparés.\r\nEtage : 2 chambres avec placards,\r\nGrand terrain avec tables de pique-nique.\r\n\r\nA proximité des thermes et des pistes de ski.'),
(5, 'Appartement duplex 6p', '2 Place Bellecour', 'Lyon', 69000, 120, 2500, 'http://localhost/site_immobilier/photo/logement_1613139264.jpg', 'location', 'Appartement duplex en location.\r\nSituée au centre de Lyon\r\n6 pièces : \r\nRez-de-chaussée : Grande cuisine aménagée, salle de séjour, salle à manger, 1 chambres avec placards, 1 salle de bain avec wc.\r\nEtage : 2 grandes chambres avec placards, 1 salles de bain avec wc.\r\nGrandes baies vitrées, très lumineux et spacieux. Refais à neuf.\r\n2 garages en sous-sol. Cave'),
(6, 'Maison pavillonnaire 8p', '20 rue de l\'église', 'Montlouis-sur-Loire', 37270, 160, 560000, 'http://localhost/site_immobilier/photo/logement_1613139590.jpg', 'vente', 'Maison pavillonnaire à vendre.\r\nSituée dans une petite ville proche de Tours.\r\nA proximité des écoles et des commerces.\r\n8 pièces, idéale pour une famille.\r\nRez-de-chaussée : Cuisine aménagée américaine ouvert sur grande salle à manger / salon de 35 m², 1 suite parentale chambre et salle de bain, WC.\r\nEtage : 4 chambres avec placards, 2 salles de bain, WC séparés.\r\nTriple garage.'),
(7, 'Villa moderne 8p', '2 chemin des landes', 'Castelnau-de-Médoc', 33480, 200, 600000, 'http://localhost/site_immobilier/photo/logement_1613139826.jpg', 'vente', 'Villa confortable et spacieuse, entourée d\'un terrain arboré de 1000m²\r\nSituée à mi-chemin de Bordeaux et du littoral atlantique.\r\n8 pièces, idéale pour une famille.\r\nRez-de-chaussée : Cuisine aménagée américaine ouvert sur grande salle à manger / salon de 35 m² donnant sur une veranda, 1 suite parentale chambre et salle de bain, WC.\r\nEtage : 4 chambres avec placards, 2 salles de bain, WC séparés.\r\nGrande terrasse aménagée.\r\nDouble garage.'),
(8, 'Appartement 4p', '25 rue passante', 'Montpellier', 34000, 90, 250000, 'http://localhost/site_immobilier/photo/logement_1613140003.jpg', 'location', 'Appartement de caractère situé au centre ville de Montpellier.\r\nProche tout commerces.\r\n4 pièce : cuisine aménagée séparée, grand salon / salle à manger, 3 chambres, 1 salle de bain avec baignoire, WC séparés.\r\nGarage en sous-sol.\r\nCave.\r\nPrévoir quelques menus travaux de remise à neuf.'),
(9, 'Appartement standing 5p dans résidence moderne', '3 impasse des palmiers', 'Aix-en-Provence', 13080, 120, 350000, 'http://localhost/site_immobilier/photo/logement_1613140335.jpg', 'vente', 'Grand appartement luxueux situé au dernier étage d\'un immeuble pavillonnaire moderne dans une résidence calme et sécurisée.\r\nTerrasse ouverte sans vis à vis.\r\n5 pièces : Cuisine moderne américaine ouverte sur grand Salon / salle à manger, 3 chambres avec placards, 1 bureau, 2 salles de bains, WC séparés.\r\nDeux places de parking en sous-sol, avec accès sécurisé.\r\nGrande cave.'),
(10, 'Grande Villa méditerranéenne', '10 avenue du maréchal Juin', 'Cannes', 06150, 150, 800000, 'http://localhost/site_immobilier/photo/logement_1613140957.jpg', 'vente', 'Grande Villa méditerranéenne à proximité de la croisette.\r\nA proximité des plages et des commerces.\r\n8 pièces\r\nRez-de-chaussée : Cuisine aménagée américaine ouvert sur grande salle à manger / salon de 35 m² donnant sur terrasse d\'été, 1 suite parentale chambre et salle de bain, WC.\r\nEtage : 4 chambres avec placards, 2 salles de bain, WC séparés.\r\nJardin clos, piscine chauffée.\r\nDouble garage');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `logement`
--
ALTER TABLE `logement`
  ADD PRIMARY KEY (`id_logement`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `logement`
--
ALTER TABLE `logement`
  MODIFY `id_logement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
