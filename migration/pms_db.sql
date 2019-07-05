-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2019 at 05:38 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `pms_group`
--

CREATE TABLE `pms_group` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pms_group_assignment`
--

CREATE TABLE `pms_group_assignment` (
  `group_assignment_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pms_person_info`
--

CREATE TABLE `pms_person_info` (
  `person_id` int(11) NOT NULL,
  `person_first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_phone_no` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_gender` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_age` int(3) DEFAULT NULL,
  `person_picture` text COLLATE utf8_unicode_ci,
  `person_country` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_address` text COLLATE utf8_unicode_ci,
  `person_occupation` text COLLATE utf8_unicode_ci,
  `person_hobbies` text COLLATE utf8_unicode_ci,
  `person_comment` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pms_group`
--
ALTER TABLE `pms_group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `pms_group_assignment`
--
ALTER TABLE `pms_group_assignment`
  ADD PRIMARY KEY (`group_assignment_id`);

--
-- Indexes for table `pms_person_info`
--
ALTER TABLE `pms_person_info`
  ADD PRIMARY KEY (`person_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pms_group`
--
ALTER TABLE `pms_group`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pms_group_assignment`
--
ALTER TABLE `pms_group_assignment`
  MODIFY `group_assignment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pms_person_info`
--
ALTER TABLE `pms_person_info`
  MODIFY `person_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
