-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2022 at 07:12 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evax`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `gouvernourat` varchar(255) NOT NULL,
  `inscrits` double DEFAULT NULL,
  `convoques` double DEFAULT NULL,
  `uneDose` double DEFAULT NULL,
  `completed` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `gouvernourat`, `inscrits`, `convoques`, `uneDose`, `completed`) VALUES
(1, 'Tunis', 835.662, 833.217, 774.283, 700.015),
(2, 'Sfax', 714.092, 712.486, 654.162, 591.728),
(3, 'Nabeul', 566.31, 564.518, 510.214, 442.415),
(4, 'Ben Arous', 521.594, 520.238, 488.177, 443.138),
(5, 'Sousse', 513.873, 512.827, 475.891, 433.21),
(6, 'Ariana', 445.719, 444.378, 414.878, 369.532),
(7, 'Bizerte', 427.202, 426.443, 386.794, 340.094),
(8, 'Monastir', 394.57, 393.791, 365.184, 325.863),
(9, 'Kairouan', 321.908, 321.397, 276.537, 224.272),
(10, 'Mannouba', 302.293, 301.64, 278.513, 241.279),
(11, 'Kasserine', 299.612, 299.335, 267.676, 218.204),
(12, 'Jendouba', 273.205, 272.764, 245.457, 211.191),
(13, 'Mahdia', 263.238, 262.84, 235.795, 206.414),
(14, 'Sidi Bouzid', 260.159, 259.645, 218.11, 189.266),
(15, 'Gafsa', 251.954, 251.583, 230.861, 209.073),
(16, 'Gabes', 245.159, 244.825, 225.322, 200.222),
(17, 'Beja', 221.388, 221.156, 204.88, 180.718),
(18, 'Le Kef', 172.719, 172.503, 160.224, 140.081),
(19, 'Medenine', 170.862, 170.285, 148.438, 134.136),
(20, 'Siliana', 146.251, 146.102, 132.727, 110.736),
(21, 'Zaghouan', 139.321, 139.174, 128.393, 113.884),
(22, 'Djerba', 114.325, 114.041, 105.877, 97.86),
(23, 'Kebili', 103.292, 103.213, 94.446, 82.089),
(24, 'Tozeur', 81.249, 81.175, 77.519, 70.836),
(25, 'Tataouine', 71.344, 71.268, 63.664, 57.466);

-- --------------------------------------------------------

--
-- Table structure for table `citoyen`
--

CREATE TABLE `citoyen` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `convoque` tinyint(4) NOT NULL,
  `dateInscri` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `citoyen`
--

INSERT INTO `citoyen` (`id`, `name`, `email`, `address`, `convoque`, `dateInscri`) VALUES
(1, 'john doe1', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(2, 'john doe2', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-16 00:00:00'),
(3, 'john doe3', 'guidara@yahoo.fr', 'Tunis', 1, '2022-03-16 00:00:00'),
(4, 'john doe4', 'guidara@yahoo.fr', 'Tunis', 1, '2022-03-16 00:00:00'),
(5, 'john doe5', 'fatma.guidara@insat.u-carthage.tn', 'Tunis', 1, '2022-03-16 00:00:00'),
(6, 'john doe6', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(7, 'john doe7', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(8, 'john doe8', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(9, 'john doe9', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(10, 'john doe10', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(11, 'john doe11', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(12, 'john doe12', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(13, 'john doe13', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(14, 'john doe14', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(15, 'john doe15', 'guidara@yahoo.fr', 'Tunis', 1, '2022-03-16 00:00:00'),
(16, 'john doe16', 'rami201ra@outlook.fr', 'Tunis', 1, '2022-03-16 00:00:00'),
(17, 'john doe17', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(18, 'john doe18', 'guidarafatma87@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(19, 'john doe19', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(20, 'john doe20', 'guidara@yahoo.fr', 'Tunis', 1, '2022-03-16 00:00:00'),
(21, 'john doe21', 'guidara@yahoo.fr', 'Tunis', 1, '2022-03-16 00:00:00'),
(22, 'john doe22', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-16 00:00:00'),
(23, 'john doe23', 'fatma.guidara@insat.u-carthage.tn', 'Tunis', 1, '2022-03-16 00:00:00'),
(24, 'john doe24', 'fatma.guidara@insat.u-carthage.tn', 'Tunis', 1, '2022-03-16 00:00:00'),
(25, 'john doe25', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(26, 'john doe26', 'fatma.guidara@gmail.com' 'Tunis', 0, '2022-03-15 00:00:00'),
(27, 'john doe27', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(28, 'john doe28', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(29, 'john doe29', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(30, 'john doe30', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(31, 'john doe31', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(32, 'john doe32', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(33, 'john doe33', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(34, 'john doe34', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(35, 'john doe35', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(36, 'john doe36', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(37, 'john doe37', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(38, 'john doe38', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(39, 'john doe39', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(40, 'john doe40', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(41, 'john doe41', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(42, 'john doe42', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(43, 'john doe43', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(44, 'john doe44', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00'),
(45, 'john doe45', 'fatma.guidara@gmail.com', 'Tunis', 1, '2022-03-15 00:00:00'),
(46, 'john doe46', 'fatma.guidara@gmail.com', 'Tunis', 0, '2022-03-15 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `drugstore`
--

CREATE TABLE `drugstore` (
  `id` int(11) NOT NULL,
  `drugstoreName` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `drugstorePhone` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `drugstoreAddress` varchar(255) NOT NULL,
  `cin` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `pharmacistPhone` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `drugstore`
--

INSERT INTO `drugstore` (`id`, `drugstoreName`, `state`, `drugstorePhone`, `category`, `drugstoreAddress`, `cin`, `firstName`, `lastName`, `pharmacistPhone`, `email`, `fax`) VALUES
(8, 'Pharmacy', 'Sfax', 28354511, 'night', 'Sakiet Ezzit, 3021', 11120188, 'Fatma', 'Guidara', 28354511, 'fatma.guidara@insat.u-carthage.tn', 74251686),
(9, 'Pharmacy', 'Sfax', 75251686, 'day', 'Sakiet Ezzit, 3021', 11120188, 'Fatma', 'Guidara', 28354511, 'fatma.guidara@insat.u-carthage.tn', 74251686);

-- --------------------------------------------------------

--
-- Table structure for table `qa`
--

CREATE TABLE `qa` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `imageLink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `qa`
--

INSERT INTO `qa` (`id`, `name`, `category`, `imageLink`) VALUES
(1, 'When First Vaccination', 'FirstDose', 'https://evax.tn/vendor/faq/gallery/img9.jpeg'),
(2, 'Who can Vaccinate?', 'FirstDose', 'https://evax.tn/vendor/faq/gallery/img7.jpeg'),
(3, 'Who is addressed to change his vaccination passport?', 'Travellers', 'https://evax.tn/vendor/faq/gallery/img6.jpeg'),
(4, 'Dose for travelling', 'Travellers', 'https://evax.tn/vendor/faq/gallery/img5.jpeg'),
(5, 'When Do I vaccinate the second dose', 'SecondDose', 'https://evax.tn/vendor/faq/gallery/img10.jpeg'),
(6, 'Second dose\'s damand in Tunisia', 'SecondDose', 'https://evax.tn/vendor/faq/gallery/img3.jpeg'),
(7, 'Where Second Dose?', 'SecondDose', 'https://evax.tn/vendor/faq/gallery/img1.jpeg'),
(8, 'I have Finsihed with more than one dose', 'All', 'https://evax.tn/vendor/faq/gallery/img4.jpeg'),
(9, 'When Do i vaccinate', 'All', 'https://evax.tn/vendor/faq/gallery/img13.jpeg'),
(10, 'Who can vaccinates?', 'All', 'https://evax.tn/vendor/faq/gallery/img12.jpeg'),
(11, 'Who can have second dose', 'All', 'https://evax.tn/vendor/faq/gallery/img8.jpeg'),
(12, 'Dose for travelling needs', 'Travellers', 'https://evax.tn/vendor/faq/gallery/img5.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_b925beb664f6010e1d86b996eb` (`gouvernourat`);

--
-- Indexes for table `citoyen`
--
ALTER TABLE `citoyen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_6b72c9a3010ee0ac79e8b30c60` (`name`);

--
-- Indexes for table `drugstore`
--
ALTER TABLE `drugstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qa`
--
ALTER TABLE `qa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_aa316c92dfa40bd34accc6a72e` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `citoyen`
--
ALTER TABLE `citoyen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `drugstore`
--
ALTER TABLE `drugstore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `qa`
--
ALTER TABLE `qa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
