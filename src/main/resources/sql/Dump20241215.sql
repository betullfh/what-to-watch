CREATE DATABASE  IF NOT EXISTS `filmdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `filmdb`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: filmdb
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `film` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `release_year` int NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (3,'Science Fiction',8.6,'Interstellar','Christopher Nolan',2014,NULL),(4,'Science Fiction',8.8,'Inception','Christopher Nolan',2010,'https://via.placeholder.com/300x450?text=Inception'),(5,'Science Fiction',8.6,'Interstellar','Christopher Nolan',2014,'https://via.placeholder.com/300x450?text=Interstellar'),(6,'Action',9,'The Dark Knight','Christopher Nolan',2008,'https://via.placeholder.com/300x450?text=The+Dark+Knight'),(7,'Science Fiction',8.7,'The Matrix','The Wachowskis',1999,'https://via.placeholder.com/300x450?text=The+Matrix'),(8,'Crime',8.9,'Pulp Fiction','Quentin Tarantino',1994,'https://via.placeholder.com/300x450?text=Pulp+Fiction'),(9,'Drama',9.3,'The Shawshank Redemption','Frank Darabont',1994,'https://via.placeholder.com/300x450?text=The+Shawshank+Redemption'),(10,'Drama',8.8,'Forrest Gump','Robert Zemeckis',1994,'https://via.placeholder.com/300x450?text=Forrest+Gump'),(11,'Drama',8.8,'Fight Club','David Fincher',1999,'https://via.placeholder.com/300x450?text=Fight+Club'),(12,'Crime',9.2,'The Godfather','Francis Ford Coppola',1972,'https://via.placeholder.com/300x450?text=The+Godfather'),(13,'Crime',9,'The Godfather: Part II','Francis Ford Coppola',1974,'https://via.placeholder.com/300x450?text=The+Godfather+Part+II'),(14,'Fantasy',9,'The Lord of the Rings: The Return of the King','Peter Jackson',2003,'https://via.placeholder.com/300x450?text=The+Return+of+the+King'),(15,'Fantasy',8.8,'The Lord of the Rings: The Fellowship of the Ring','Peter Jackson',2001,'https://via.placeholder.com/300x450?text=The+Fellowship+of+the+Ring'),(16,'Fantasy',8.8,'The Lord of the Rings: The Two Towers','Peter Jackson',2002,'https://via.placeholder.com/300x450?text=The+Two+Towers'),(17,'Science Fiction',8.7,'Star Wars: Episode V - The Empire Strikes Back','Irvin Kershner',1980,'https://via.placeholder.com/300x450?text=Empire+Strikes+Back'),(18,'Action',8,'The Avengers','Joss Whedon',2012,'https://via.placeholder.com/300x450?text=The+Avengers'),(19,'Action',8.4,'Avengers: Endgame','Anthony Russo, Joe Russo',2019,'https://via.placeholder.com/300x450?text=Endgame'),(20,'Romance',7.9,'Titanic','James Cameron',1997,'https://via.placeholder.com/300x450?text=Titanic'),(21,'Action',8.5,'Gladiator','Ridley Scott',2000,'https://via.placeholder.com/300x450?text=Gladiator'),(22,'Animation',8.5,'The Lion King','Roger Allers, Rob Minkoff',1994,'https://via.placeholder.com/300x450?text=The+Lion+King'),(23,'Animation',8.3,'Toy Story','John Lasseter',1995,'https://via.placeholder.com/300x450?text=Toy+Story');
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `films`
--

DROP TABLE IF EXISTS `films`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `films` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `release_year` int DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `films`
--

LOCK TABLES `films` WRITE;
/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` VALUES (1,'Inception','Sci-Fi',2010,'Christopher Nolan',8.8),(2,'The Dark Knight','Action',2008,'Christopher Nolan',9.0),(3,'Interstellar','Sci-Fi',2014,'Christopher Nolan',8.6),(4,'Parasite','Thriller',2019,'Bong Joon Ho',8.6),(5,'The Godfather','Crime',1972,'Francis Ford Coppola',9.2);
/*!40000 ALTER TABLE `films` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-15  2:15:23
