CREATE DATABASE  IF NOT EXISTS `confessionals` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
  `username` varchar(45) NOT NULL DEFAULT 'Anonymous',
  `adhd_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`adhd_id`),
  CONSTRAINT `fk_useradhd` FOREIGN KEY (`adhd_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adhd`
--

LOCK TABLES `adhd` WRITE;
/*!40000 ALTER TABLE `adhd` DISABLE KEYS */;
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
  `username` varchar(45) NOT NULL DEFAULT 'Anonymous',
  `anxiety_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`anxiety_id`),
  CONSTRAINT `fk_useranxiety` FOREIGN KEY (`anxiety_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anxiety`
--

LOCK TABLES `anxiety` WRITE;
/*!40000 ALTER TABLE `anxiety` DISABLE KEYS */;
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
  `username` varchar(45) NOT NULL DEFAULT 'Anonymous',
  `depression_post` varchar(800) NOT NULL,
  `postdate` varchar(45) DEFAULT 'CURRENT_TIMESTAMP',
  PRIMARY KEY (`depression_id`),
  CONSTRAINT `fk_userdepression` FOREIGN KEY (`depression_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depression`
--

LOCK TABLES `depression` WRITE;
/*!40000 ALTER TABLE `depression` DISABLE KEYS */;
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
  `username` varchar(45) NOT NULL DEFAULT 'Anonymous',
  `rage_post` varchar(800) NOT NULL,
  `postdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rage_id`),
  CONSTRAINT `fk_userrage` FOREIGN KEY (`rage_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rage`
--

LOCK TABLES `rage` WRITE;
/*!40000 ALTER TABLE `rage` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2022-04-08 15:03:41
