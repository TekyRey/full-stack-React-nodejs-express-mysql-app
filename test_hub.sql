-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 01, 2021 at 06:00 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test hub`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `testkit`
--

CREATE TABLE `testkit` (
  `ttncode` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testkit`
--

INSERT INTO `testkit` (`ttncode`, `id`) VALUES
('34GC829B', 1),
('4F7YKH9G', 2),
('57UBS5J6', 3),
('8RL4ENTK', 4),
('CB8FBCCM', 5),
('CCZTQ8KW', 6),
('FEQQ6UUG', 7),
('MM2874Z6', 8),
('R9KZ2NXL', 9),
('YBQUVXHL', 10);

-- --------------------------------------------------------

--
-- Table structure for table `testResult`
--

CREATE TABLE `testResult` (
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `address` varchar(255) NOT NULL,
  `postcode` varchar(255) NOT NULL,
  `ttncode` varchar(255) NOT NULL,
  `testresult` enum('Positive','Negative','Inconclusive','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testResult`
--

INSERT INTO `testResult` (`email`, `fullname`, `age`, `gender`, `address`, `postcode`, `ttncode`, `testresult`) VALUES
('mwaka@gmail.com', 'Rehema Mwaka Baya', 23, 'male', '35tgg', '2345t4yh', '1234578', 'Positive'),
('test@test.com', 'Agesa Collins', 21, 'male', 'agesa@gmail.com', '23', '2453', 'Negative'),
('mwaka@gmail.com', 'Rehema Mwaka', 20, 'female', '12345ygh', '123ty4hwr', '4F7YKH9G', 'Negative'),
('mwakabayah@gmail.com', 'Rehema Mwaka Baya', 23, 'female', 'Malindi Kenya', '254', '8RL4ENTK', 'Positive'),
('mwakabayah@gmail.com', 'Rehema Mwaka Baya', 50, 'other', 'Malindi Kenya', '254', 'CB8FBCCM', 'Negative'),
('mwakabayah@gmail.com', 'Rehema Mwaka Baya', 50, 'other', 'Malindi Kenya', '254', 'CCZTQ8KW', 'Inconclusive'),
('test@gmail.com', 'Rehema Mwaka Baya', 20, 'male', 'Malindi Kenya', '254', 'R9KZ2NXL', 'Inconclusive');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testkit`
--
ALTER TABLE `testkit`
  ADD PRIMARY KEY (`ttncode`);

--
-- Indexes for table `testResult`
--
ALTER TABLE `testResult`
  ADD PRIMARY KEY (`ttncode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
