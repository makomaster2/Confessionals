CREATE DATABASE  IF NOT EXISTS `confessionals` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `confessionals`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: confessionals
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `adhd`
--

DROP TABLE IF EXISTS `adhd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adhd` (
  `adhd_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `adhd_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`adhd_id`),
  KEY `fk_userid_idx` (`user_id`),
  CONSTRAINT `fk_userid` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adhd`
--

LOCK TABLES `adhd` WRITE;
/*!40000 ALTER TABLE `adhd` DISABLE KEYS */;
INSERT INTO `adhd` VALUES (8,1,'Hey everyone!','2022-04-12 09:39:31'),(9,2,'I\'m not feeling like myself today','2022-04-12 09:39:31'),(10,3,'Let\'s talk about that','2022-04-12 09:39:31'),(11,4,'I\'m not sure if I\'m ready','2022-04-12 09:39:31'),(12,5,'You\'ve got this, I believe in you','2022-04-12 09:39:31'),(13,3,'I feel better already','2022-04-12 09:39:31'),(14,4,'You inspired me to share my story and open up about my feelings','2022-04-12 09:39:31'),(15,1,'I am also sad','2022-04-12 09:49:46'),(16,1,'asdfsdfsdf','2022-04-12 10:26:08'),(17,1,'cvbcvbcvb','2022-04-12 10:26:14'),(18,1,'cvbcvb','2022-04-12 10:26:28');
/*!40000 ALTER TABLE `adhd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `anxiety`
--

DROP TABLE IF EXISTS `anxiety`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anxiety` (
  `anxiety_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `anxiety_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`anxiety_id`),
  KEY `fk_useranxiety_idx` (`user_id`),
  CONSTRAINT `fk_useranxiety` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anxiety`
--

LOCK TABLES `anxiety` WRITE;
/*!40000 ALTER TABLE `anxiety` DISABLE KEYS */;
INSERT INTO `anxiety` VALUES (1,1,'I\'m feeling really anxious right now.','2022-04-12 11:33:13'),(2,3,'Are you Alright?','2022-04-12 11:33:49'),(3,2,'Yeah this morning you looked rushed','2022-04-12 11:41:01'),(4,4,'How long have you felt like this?','2022-04-12 11:42:25'),(5,5,'I\'ve  been mediating recently and it\'s helped.','2022-04-12 11:43:46'),(6,1,'Yeah i looked into mediation I\'ll definitely try it.','2022-04-12 11:46:03'),(7,2,'And also make sleep a priority helps.','2022-04-12 11:47:45'),(8,3,'That does help','2022-04-12 11:49:02');
/*!40000 ALTER TABLE `anxiety` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `depression`
--

DROP TABLE IF EXISTS `depression`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `depression` (
  `depression_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `depression_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`depression_id`),
  KEY `fk_userdepression_idx` (`user_id`),
  CONSTRAINT `fk_userdepression` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depression`
--

LOCK TABLES `depression` WRITE;
/*!40000 ALTER TABLE `depression` DISABLE KEYS */;
INSERT INTO `depression` VALUES (1,1,'I\'m not seeing the progress i want to see in my career. I\'ve been really down about it. Any Advice?','2022-04-12 11:50:19'),(2,2,'Do you have any goals?','2022-04-12 12:00:19'),(3,1,'Not any specfics but i just thought I\'d be in a better spot by now.','2022-04-12 12:01:33'),(4,1,'It\'s really been having an affect on my production at work','2022-04-12 12:05:13'),(5,3,'Are you being overworked?','2022-04-12 12:40:48'),(6,4,'Maybe you should talk to your employer.','2022-04-12 12:41:36');
/*!40000 ALTER TABLE `depression` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rage`
--

DROP TABLE IF EXISTS `rage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rage` (
  `rage_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `rage_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rage_id`),
  KEY `fk_userrage_idx` (`user_id`),
  CONSTRAINT `fk_userrage` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rage`
--

LOCK TABLES `rage` WRITE;
/*!40000 ALTER TABLE `rage` DISABLE KEYS */;
INSERT INTO `rage` VALUES (1,1,'I\'m really getting upset about gas prices ','2022-04-12 13:00:11'),(2,2,'I know right! I can\'t feel up my truck','2022-04-12 13:00:11'),(3,3,'I had to buy a Corolla!','2022-04-12 13:00:11'),(4,1,'What\'s the gas mileage?','2022-04-12 13:00:11'),(5,2,'I gotta catch a ride.','2022-04-12 13:00:11'),(6,3,'40 mpg ','2022-04-12 13:00:11');
/*!40000 ALTER TABLE `rage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL DEFAULT 'Anonymous',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'TheRealDrake'),(2,'IAMSAD'),(3,'TheRealGage'),(4,'TheRealJosh'),(5,'TheRealGarfield');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 13:02:32
