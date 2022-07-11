-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2022 at 12:15 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `olex`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `uid`, `category`) VALUES
(1, 1422, 'BS Information Technology'),
(2, 6198, 'BS Computer Science'),
(3, 2918, 'BS Business Administration'),
(4, 7385, 'BS Electronics Engineering'),
(5, 8939, 'BS Mathematics'),
(6, 8144, 'BS Civil Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `category` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `level` int(2) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `uid`, `category`, `subject`, `level`, `status`) VALUES
(9, '20220711GKTYR5', 'BS Information Technology', 'MySQL', 1, 1),
(10, '20220711CAVGBD', 'BS Information Technology', 'PHP Basics', 1, 1),
(11, '20220711DW785Q', 'BS Computer Science', 'Data Analytics', 1, 1),
(12, '202207112LDYJZ', 'BS Computer Science', 'MySQL', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `examtaken`
--

CREATE TABLE `examtaken` (
  `id` int(11) NOT NULL,
  `uid` int(20) NOT NULL,
  `examSubject` varchar(100) NOT NULL,
  `examCategory` varchar(100) NOT NULL,
  `score` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `exam_entry`
--

CREATE TABLE `exam_entry` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `keyIndex` varchar(50) NOT NULL,
  `value` varchar(1000) NOT NULL,
  `level` int(2) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exam_entry`
--

INSERT INTO `exam_entry` (`id`, `uid`, `keyIndex`, `value`, `level`, `status`) VALUES
(91, '20220711GKTYR5', 'question', 'A database can be best described as a ?', 1, 1),
(92, '20220711GKTYR5', 'choice1', 'Collection of data', 1, 1),
(93, '20220711GKTYR5', 'choice2', 'Collection of related tables', 1, 1),
(94, '20220711GKTYR5', 'choice3', 'Collection of tables', 1, 1),
(95, '20220711GKTYR5', 'choice4', 'Collection of views', 1, 1),
(96, '20220711GKTYR5', 'answer', 'Collection of data', 1, 1),
(97, '20220711GKTYR5', 'question', 'A new Database is created by ?', 1, 1),
(98, '20220711GKTYR5', 'choice1', 'Use database command', 1, 1),
(99, '20220711GKTYR5', 'choice2', 'Create table command', 1, 1),
(100, '20220711GKTYR5', 'choice3', 'Create database command', 1, 1),
(101, '20220711GKTYR5', 'choice4', 'Crete store cammnd', 1, 1),
(102, '20220711GKTYR5', 'answer', 'Create database command', 1, 1),
(103, '20220711CAVGBD', 'question', 'Which of following statements will be used to fetch SINGLE record from a MySQL resultset', 1, 1),
(104, '20220711CAVGBD', 'choice1', 'Mysql_connect', 1, 1),
(105, '20220711CAVGBD', 'choice2', 'Mysql_query', 1, 1),
(106, '20220711CAVGBD', 'choice3', 'Mysql_fetch_array', 1, 1),
(107, '20220711CAVGBD', 'choice4', 'Mysql_fetch_row', 1, 1),
(108, '20220711CAVGBD', 'answer', 'Mysql_fetch_row', 1, 1),
(109, '20220711CAVGBD', 'question', 'What is correct syntax of connecting to a MySql database', 1, 1),
(110, '20220711CAVGBD', 'choice1', 'Mysql_connect($username,$password)', 1, 1),
(111, '20220711CAVGBD', 'choice2', 'Connect_mysql($username,$password)', 1, 1),
(112, '20220711CAVGBD', 'choice3', 'Mysql_connect("localhost",$username,$password)', 1, 1),
(113, '20220711CAVGBD', 'choice4', 'None of the choices', 1, 1),
(114, '20220711CAVGBD', 'answer', 'Mysql_connect("localhost",$username,$password)', 1, 1),
(115, '20220711DW785Q', 'question', 'A voluminous amount of structured, semi-structured, and unstructured data that has the potential to be mined for information.', 1, 1),
(116, '20220711DW785Q', 'choice1', 'Small Data', 1, 1),
(117, '20220711DW785Q', 'choice2', 'Meta Data', 1, 1),
(118, '20220711DW785Q', 'choice3', 'Statistical Data', 1, 1),
(119, '20220711DW785Q', 'choice4', 'Big Data', 1, 1),
(120, '20220711DW785Q', 'answer', 'Big Data', 1, 1),
(121, '20220711DW785Q', 'question', 'A free, Java-based programming framework that supports the processing of large data sets in a distributed computing environment.', 1, 1),
(122, '20220711DW785Q', 'choice1', 'Hadoop', 1, 1),
(123, '20220711DW785Q', 'choice2', 'Python', 1, 1),
(124, '20220711DW785Q', 'choice3', 'R', 1, 1),
(125, '20220711DW785Q', 'choice4', 'Apache Groovy', 1, 1),
(126, '20220711DW785Q', 'answer', 'Hadoop', 1, 1),
(127, '202207112LDYJZ', 'question', 'SQL means structured query language.', 1, 1),
(128, '202207112LDYJZ', 'choice1', 'TRUE', 1, 1),
(129, '202207112LDYJZ', 'choice2', 'FALSE', 1, 1),
(130, '202207112LDYJZ', 'choice3', 'Maybe', 1, 1),
(131, '202207112LDYJZ', 'choice4', 'I don''t know', 1, 1),
(132, '202207112LDYJZ', 'answer', 'TRUE', 1, 1),
(133, '202207112LDYJZ', 'question', 'Which of the following is an example of relational database?', 1, 1),
(134, '202207112LDYJZ', 'choice1', 'One to One', 1, 1),
(135, '202207112LDYJZ', 'choice2', 'Two to Two', 1, 1),
(136, '202207112LDYJZ', 'choice3', 'Three to Three', 1, 1),
(137, '202207112LDYJZ', 'choice4', 'All of the above', 1, 1),
(138, '202207112LDYJZ', 'answer', 'One to One', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`id`, `uid`, `firstname`, `middlename`, `lastname`, `category`) VALUES
(1, '', 'John', 'Leslie Ballard', 'Farrell', 'BS Computer Engineering'),
(2, '', 'John', 'Leslie Ballard', 'Farrell', 'BS Computer Engineering'),
(3, '', 'Basia', 'Bernard Franco', 'Rasmussen', 'BS Computer Science'),
(4, '', 'Lacey', 'Barrett Mercer', 'Schultz', 'BS Information Technology'),
(5, '', 'Tyrone', 'Rudyard Salas', 'Watkins', 'BS'),
(6, '', 'Linus', 'Marsden Finley', 'Leon', 'BS'),
(7, '', 'Josiah', 'Risa Small', 'Glover', 'BS Information Technology'),
(8, '2022-AZEK-3717', 'Karen', 'Flavia Alexander', 'Bruce', 'BS Biology');

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `examineeFirstName` varchar(50) NOT NULL,
  `examineeMiddleName` varchar(50) NOT NULL,
  `examineeLastName` varchar(50) NOT NULL,
  `ExamTitle` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `score` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `keyIndex` varchar(50) NOT NULL,
  `value` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `subjectName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `uid`, `subjectName`) VALUES
(1, 1422, 'PHP Basics'),
(2, 6198, 'Data Analytics'),
(3, 2918, 'Business Mathematics'),
(4, 7385, 'Physics and Circuits'),
(5, 8939, 'Algebra'),
(6, 1422, 'JavaScript 1'),
(7, 6198, 'JavaScript 1'),
(8, 6198, 'PHP Basics'),
(9, 8939, 'Basic Mathematics'),
(10, 8144, 'Calculus'),
(11, 1422, 'MySQL'),
(12, 6198, 'MySQL');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `userType` varchar(20) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uid`, `userType`, `firstname`, `middlename`, `lastname`, `address`, `birthday`, `email`, `password`, `contact`, `category`) VALUES
(1, '2022-2EX8-7389', 'Exam Creator', 'Ed John Paul', 'Del Rosario', 'Gallardo', '64 South Sikap St Brgy. Plainview Mandaluyong City', '1999-06-28', 'edjohnpaulgallardo28@gmail.com', 'gallardo28', '09392608805', NULL),
(2, '2022-FZIU-9422', 'Examinee', 'Hayes', 'Carlos Lyons', 'Whitfield', 'Laborum Alias et ut', '1986-09-03', 'dajalujahu@mailinator.com', 'Pa$$w0rd!n', '09251645789', 'BS'),
(3, '2022-H8D3-1202', 'Examinee', 'Hector', 'Fritz Lamb', 'Pace', 'Ex rerum at omnis qu', '2001-08-05', 'sipumaka@mailinator.com', 'Pa$$w0rd!', '09123456789', 'BS Computer Science');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam_entry`
--
ALTER TABLE `exam_entry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `exam_entry`
--
ALTER TABLE `exam_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;
--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `subject_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `category` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
