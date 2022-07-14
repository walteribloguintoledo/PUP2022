-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2022 at 12:42 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
(13, '20220713NIDT1Z', 'BS Information Technology', 'MySQL', 1, 1);

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
(1, '20220713NIDT1Z', 'question', 'A database can be best described as a ?', 1, 1),
(2, '20220713NIDT1Z', 'choice1', 'Collection of data', 1, 1),
(3, '20220713NIDT1Z', 'choice2', 'Collection of related tables', 1, 1),
(4, '20220713NIDT1Z', 'choice3', 'Collection of tables', 1, 1),
(5, '20220713NIDT1Z', 'choice4', 'Collection of views', 1, 1),
(6, '20220713NIDT1Z', 'answer', 'Collection of data', 1, 1),
(7, '20220713NIDT1Z', 'question', 'A new Database is created by ?', 1, 1),
(8, '20220713NIDT1Z', 'choice1', 'Use database command', 1, 1),
(9, '20220713NIDT1Z', 'choice2', 'Create table command', 1, 1),
(10, '20220713NIDT1Z', 'choice3', 'Create database command', 1, 1),
(11, '20220713NIDT1Z', 'choice4', 'Crete store cammnd', 1, 1),
(12, '20220713NIDT1Z', 'answer', 'Create database command', 1, 1),
(13, '20220713NIDT1Z', 'question', 'A table can be best described as a ?', 1, 1),
(14, '20220713NIDT1Z', 'choice1', 'Collection of data', 1, 1),
(15, '20220713NIDT1Z', 'choice2', 'Collection of related tables', 1, 1),
(16, '20220713NIDT1Z', 'choice3', 'Collection of tables', 1, 1),
(17, '20220713NIDT1Z', 'choice4', 'Collection of rows and columns', 1, 1),
(18, '20220713NIDT1Z', 'answer', 'Collection of rows and columns', 1, 1),
(19, '20220713NIDT1Z', 'question', 'If today is \'2012-1-19\' what will be the output of select year(sysdate());', 1, 1),
(20, '20220713NIDT1Z', 'choice1', '19', 1, 1),
(21, '20220713NIDT1Z', 'choice2', '1', 1, 1),
(22, '20220713NIDT1Z', 'choice3', '2012', 1, 1),
(23, '20220713NIDT1Z', 'choice4', '2012-1-19', 1, 1),
(24, '20220713NIDT1Z', 'answer', '2012', 1, 1),
(25, '20220713NIDT1Z', 'question', 'If today is \'2012-1-19\' what will be the output of select dayofyear(sysdate());', 1, 1),
(26, '20220713NIDT1Z', 'choice1', '19', 1, 1),
(27, '20220713NIDT1Z', 'choice2', '1', 1, 1),
(28, '20220713NIDT1Z', 'choice3', '2012', 1, 1),
(29, '20220713NIDT1Z', 'choice4', '2012-1-19', 1, 1),
(30, '20220713NIDT1Z', 'answer', '19', 1, 1),
(31, '20220713NIDT1Z', 'question', 'If today is \'2012-1-19\' what will be the output of select month(sysdate());', 1, 1),
(32, '20220713NIDT1Z', 'choice1', '19', 1, 1),
(33, '20220713NIDT1Z', 'choice2', '1', 1, 1),
(34, '20220713NIDT1Z', 'choice3', '2012', 1, 1),
(35, '20220713NIDT1Z', 'choice4', '2012-1-19', 1, 1),
(36, '20220713NIDT1Z', 'answer', '1', 1, 1),
(37, '20220713NIDT1Z', 'question', 'Which command is used to add delete columns to an existing table?', 1, 1),
(38, '20220713NIDT1Z', 'choice1', 'Desc', 1, 1),
(39, '20220713NIDT1Z', 'choice2', 'Alter table', 1, 1),
(40, '20220713NIDT1Z', 'choice3', 'Drop table', 1, 1),
(41, '20220713NIDT1Z', 'choice4', 'Create table', 1, 1),
(42, '20220713NIDT1Z', 'answer', 'Alter table', 1, 1),
(43, '20220713NIDT1Z', 'question', 'Which command is used to add remove tablefrom a database?', 1, 1),
(44, '20220713NIDT1Z', 'choice1', 'Delete', 1, 1),
(45, '20220713NIDT1Z', 'choice2', 'Alter table', 1, 1),
(46, '20220713NIDT1Z', 'choice3', 'Drop table', 1, 1),
(47, '20220713NIDT1Z', 'choice4', 'Create table', 1, 1),
(48, '20220713NIDT1Z', 'answer', 'Drop table', 1, 1),
(49, '20220713NIDT1Z', 'question', 'Which command is used to delete all rows from a table?', 1, 1),
(50, '20220713NIDT1Z', 'choice1', 'Drop', 1, 1),
(51, '20220713NIDT1Z', 'choice2', 'Delete', 1, 1),
(52, '20220713NIDT1Z', 'choice3', 'Remove', 1, 1),
(53, '20220713NIDT1Z', 'choice4', 'Flush', 1, 1),
(54, '20220713NIDT1Z', 'answer', 'Delete', 1, 1),
(55, '20220713NIDT1Z', 'question', 'Which command shows the rows of the table emp?', 1, 1),
(56, '20220713NIDT1Z', 'choice1', 'Select * from emp;', 1, 1),
(57, '20220713NIDT1Z', 'choice2', 'Show all from emp;', 1, 1),
(58, '20220713NIDT1Z', 'choice3', 'Desc emp;', 1, 1),
(59, '20220713NIDT1Z', 'choice4', 'Drop emp;', 1, 1),
(60, '20220713NIDT1Z', 'answer', 'Select * from emp;', 1, 1),
(61, '20220713NIDT1Z', 'question', 'Which command shows the table structure of table emp?', 1, 1),
(62, '20220713NIDT1Z', 'choice1', 'Select * from emp;', 1, 1),
(63, '20220713NIDT1Z', 'choice2', 'Show all from emp;', 1, 1),
(64, '20220713NIDT1Z', 'choice3', 'Desc emp;', 1, 1),
(65, '20220713NIDT1Z', 'choice4', 'Drop emp;', 1, 1),
(66, '20220713NIDT1Z', 'answer', 'Select * from emp;', 1, 1),
(67, '20220713NIDT1Z', 'question', 'SQL means structured query language.', 1, 1),
(68, '20220713NIDT1Z', 'choice1', 'TRUE', 1, 1),
(69, '20220713NIDT1Z', 'choice2', 'FALSE', 1, 1),
(70, '20220713NIDT1Z', 'choice3', 'Maybe', 1, 1),
(71, '20220713NIDT1Z', 'choice4', 'I don\'t know', 1, 1),
(72, '20220713NIDT1Z', 'answer', 'TRUE', 1, 1),
(73, '20220713NIDT1Z', 'question', 'Which of the following is an example of relational database?', 1, 1),
(74, '20220713NIDT1Z', 'choice1', 'One to One', 1, 1),
(75, '20220713NIDT1Z', 'choice2', 'Two to Two', 1, 1),
(76, '20220713NIDT1Z', 'choice3', 'Three to Three', 1, 1),
(77, '20220713NIDT1Z', 'choice4', 'All of the above', 1, 1),
(78, '20220713NIDT1Z', 'answer', 'One to One', 1, 1),
(79, '20220713NIDT1Z', 'question', 'Full form of RDBMS is', 1, 1),
(80, '20220713NIDT1Z', 'choice1', 'Regional district management system', 1, 1),
(81, '20220713NIDT1Z', 'choice2', 'Relational database management system', 1, 1),
(82, '20220713NIDT1Z', 'choice3', 'Regular database management system', 1, 1),
(83, '20220713NIDT1Z', 'choice4', 'Regular district machine system', 1, 1),
(84, '20220713NIDT1Z', 'answer', 'Relational database management system', 1, 1),
(85, '20220713NIDT1Z', 'question', 'A row of relation generally referred to as â€¦â€¦â€¦.. and column of a relation is â€¦â€¦â€¦â€¦', 1, 1),
(86, '20220713NIDT1Z', 'choice1', 'Domain & Attribute', 1, 1),
(87, '20220713NIDT1Z', 'choice2', 'Attribute & Domain', 1, 1),
(88, '20220713NIDT1Z', 'choice3', 'Tuple & Attribute', 1, 1),
(89, '20220713NIDT1Z', 'choice4', 'Attribute & Tuple', 1, 1),
(90, '20220713NIDT1Z', 'answer', 'Tuple & Attribute', 1, 1),
(91, '20220713NIDT1Z', 'question', 'A relation has 45 tuples & 5 attributes, what will be the Degree & Cardinality of that relation?', 1, 1),
(92, '20220713NIDT1Z', 'choice1', 'Degree 5, Cardinality 45', 1, 1),
(93, '20220713NIDT1Z', 'choice2', 'Degree 45, Cardinality 5', 1, 1),
(94, '20220713NIDT1Z', 'choice3', 'Degree 50, Cardinality 45', 1, 1),
(95, '20220713NIDT1Z', 'choice4', 'Degree 50, Cardinality 2250', 1, 1),
(96, '20220713NIDT1Z', 'answer', 'Degree 5, Cardinality 45', 1, 1),
(97, '20220713NIDT1Z', 'question', '_________is the attribute or group of attributes that uniquely identify occurrence of each entity.', 1, 1),
(98, '20220713NIDT1Z', 'choice1', 'Foreign key', 1, 1),
(99, '20220713NIDT1Z', 'choice2', 'Super Key', 1, 1),
(100, '20220713NIDT1Z', 'choice3', 'Primary Key', 1, 1),
(101, '20220713NIDT1Z', 'choice4', 'All of these', 1, 1),
(102, '20220713NIDT1Z', 'answer', 'Primary Key', 1, 1),
(103, '20220713NIDT1Z', 'question', 'Which commands are used to define or redefine schema objects?', 1, 1),
(104, '20220713NIDT1Z', 'choice1', 'DDL', 1, 1),
(105, '20220713NIDT1Z', 'choice2', 'DML', 1, 1),
(106, '20220713NIDT1Z', 'choice3', 'TCL', 1, 1),
(107, '20220713NIDT1Z', 'choice4', 'both A and B', 1, 1),
(108, '20220713NIDT1Z', 'answer', 'DDL', 1, 1),
(109, '20220713NIDT1Z', 'question', 'Which is a valid CREATE TABLE statement?', 1, 1),
(110, '20220713NIDT1Z', 'choice1', 'CREATE TABLE emp add(id integer(3))', 1, 1),
(111, '20220713NIDT1Z', 'choice2', 'CREATE TABLE emp (id integers(3))', 1, 1),
(112, '20220713NIDT1Z', 'choice3', 'CREATE TABLE emp modified(id integer(3))', 1, 1),
(113, '20220713NIDT1Z', 'choice4', 'CREATE TABLE emp (id integer(3))', 1, 1),
(114, '20220713NIDT1Z', 'answer', 'CREATE TABLE emp (id integer(3))', 1, 1),
(115, '20220713NIDT1Z', 'question', 'How can you insert a new row into the \"STORE\" table.', 1, 1),
(116, '20220713NIDT1Z', 'choice1', 'INSERT ROW (1,â€Ÿ RAM SINGHâ€Ÿ) INTO STORE;', 1, 1),
(117, '20220713NIDT1Z', 'choice2', 'INSERT VALUES (1,â€Ÿ RAM SINGHâ€Ÿ) INTO STORE;', 1, 1),
(118, '20220713NIDT1Z', 'choice3', 'INSERT INTO (1,â€Ÿ RAM SINGHâ€Ÿ) STORE;', 1, 1),
(119, '20220713NIDT1Z', 'choice4', 'INSERT INTO STORE (1,â€Ÿ RAM SINGHâ€Ÿ) ', 1, 1),
(120, '20220713NIDT1Z', 'answer', 'INSERT INTO STORE (1,â€Ÿ RAM SINGHâ€Ÿ) ', 1, 1);

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
(3, '2022-H8D3-1202', 'Examinee', 'Hector', 'Fritz Lamb', 'Pace', 'Ex rerum at omnis qu', '2001-08-05', 'sipumaka@mailinator.com', 'Pa$$w0rd!', '09123456789', 'BS Computer Science'),
(4, '2022-BVWT-9894', 'Examinee', 'Gary', 'Jin Blankenship', 'Chen', 'Odit rerum dolore cu', '2014-06-21', 'guniluhede@mailinator.com', 'Pa$$w0rd!', '09124563789', 'BS Information Technology'),
(5, '2022-M2L3-6502', 'Examinee', 'Angelica', 'Genevieve Nichols', 'Hayes', 'Qui nihil atque lore', '2017-06-20', 'qyboq@mailinator.com', 'Pa$$w0rd!', '09124563789', 'BS Information Technology');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `exam_entry`
--
ALTER TABLE `exam_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `subject_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `category` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
