-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2022 at 12:05 PM
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
(13, '20220713NIDT1Z', 'BS Information Technology', 'MySQL', 1, 1),
(15, '20220715ZIBL7D', 'BS Computer Science', 'Data Analytics', 1, 1),
(25, '20220715YZGOC1', 'BS Information Technology', 'PHP Basics', 1, 1),
(27, '20220718KLFZYT', 'BS Computer Science', 'Data Analytics', 2, 1);

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
(19, '20220713NIDT1Z', 'question', 'If today is ''2012-1-19'' what will be the output of select year(sysdate());', 1, 1),
(20, '20220713NIDT1Z', 'choice1', '19', 1, 1),
(21, '20220713NIDT1Z', 'choice2', '1', 1, 1),
(22, '20220713NIDT1Z', 'choice3', '2012', 1, 1),
(23, '20220713NIDT1Z', 'choice4', '2012-1-19', 1, 1),
(24, '20220713NIDT1Z', 'answer', '2012', 1, 1),
(25, '20220713NIDT1Z', 'question', 'If today is ''2012-1-19'' what will be the output of select dayofyear(sysdate());', 1, 1),
(26, '20220713NIDT1Z', 'choice1', '19', 1, 1),
(27, '20220713NIDT1Z', 'choice2', '1', 1, 1),
(28, '20220713NIDT1Z', 'choice3', '2012', 1, 1),
(29, '20220713NIDT1Z', 'choice4', '2012-1-19', 1, 1),
(30, '20220713NIDT1Z', 'answer', '19', 1, 1),
(31, '20220713NIDT1Z', 'question', 'If today is ''2012-1-19'' what will be the output of select month(sysdate());', 1, 1),
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
(71, '20220713NIDT1Z', 'choice4', 'I don''t know', 1, 1),
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
(115, '20220713NIDT1Z', 'question', 'How can you insert a new row into the "STORE" table.', 1, 1),
(116, '20220713NIDT1Z', 'choice1', 'INSERT ROW (1,â€Ÿ RAM SINGHâ€Ÿ) INTO STORE;', 1, 1),
(117, '20220713NIDT1Z', 'choice2', 'INSERT VALUES (1,â€Ÿ RAM SINGHâ€Ÿ) INTO STORE;', 1, 1),
(118, '20220713NIDT1Z', 'choice3', 'INSERT INTO (1,â€Ÿ RAM SINGHâ€Ÿ) STORE;', 1, 1),
(119, '20220713NIDT1Z', 'choice4', 'INSERT INTO STORE (1,â€Ÿ RAM SINGHâ€Ÿ) ', 1, 1),
(120, '20220713NIDT1Z', 'answer', 'INSERT INTO STORE (1,â€Ÿ RAM SINGHâ€Ÿ) ', 1, 1),
(235, '20220715ZIBL7D', 'question', 'A voluminous amount of structured, semi-structured, and unstructured data that has the potential to be mined for information.', 1, 1),
(236, '20220715ZIBL7D', 'choice1', 'Small Data', 1, 1),
(237, '20220715ZIBL7D', 'choice2', 'Meta Data', 1, 1),
(238, '20220715ZIBL7D', 'choice3', 'Statistical Data', 1, 1),
(239, '20220715ZIBL7D', 'choice4', 'Big Data', 1, 1),
(240, '20220715ZIBL7D', 'answer', 'Big Data', 1, 1),
(241, '20220715ZIBL7D', 'question', 'A free, Java-based programming framework that supports the processing of large data sets in a distributed computing environment.', 1, 1),
(242, '20220715ZIBL7D', 'choice1', 'Hadoop', 1, 1),
(243, '20220715ZIBL7D', 'choice2', 'Python', 1, 1),
(244, '20220715ZIBL7D', 'choice3', 'R', 1, 1),
(245, '20220715ZIBL7D', 'choice4', 'Apache Groovy', 1, 1),
(246, '20220715ZIBL7D', 'answer', 'Hadoop', 1, 1),
(247, '20220715ZIBL7D', 'question', 'The branch of data mining concerned with the prediction of future probabilities and trends.', 1, 1),
(248, '20220715ZIBL7D', 'choice1', 'In-memory Analytics', 1, 1),
(249, '20220715ZIBL7D', 'choice2', 'Predictive Analytics', 1, 1),
(250, '20220715ZIBL7D', 'choice3', 'Behavioral Analytics', 1, 1),
(251, '20220715ZIBL7D', 'choice4', 'Big Data Analytics', 1, 1),
(252, '20220715ZIBL7D', 'answer', 'Predictive Analytics', 1, 1),
(253, '20220715ZIBL7D', 'question', 'The science of examining raw data with the purpose of drawing conclusions about that information.', 1, 1),
(254, '20220715ZIBL7D', 'choice1', 'Data Analytics', 1, 1),
(255, '20220715ZIBL7D', 'choice2', 'In-memory Analytics', 1, 1),
(256, '20220715ZIBL7D', 'choice3', 'Descriptive Analytics', 1, 1),
(257, '20220715ZIBL7D', 'choice4', 'Predictive Analytics', 1, 1),
(258, '20220715ZIBL7D', 'answer', 'Data Analytics', 1, 1),
(259, '20220715ZIBL7D', 'question', 'An approach to querying data when it resides in a computerâ€™s random access memory (RAM), as opposed to querying data that is stored on physical disks.', 1, 1),
(260, '20220715ZIBL7D', 'choice1', 'Deep Analytics', 1, 1),
(261, '20220715ZIBL7D', 'choice2', 'Data Visualisation', 1, 1),
(262, '20220715ZIBL7D', 'choice3', 'In-memory Analytics', 1, 1),
(263, '20220715ZIBL7D', 'choice4', 'Data Analytics', 1, 1),
(264, '20220715ZIBL7D', 'answer', 'In-memory Analytics', 1, 1),
(265, '20220715ZIBL7D', 'question', 'What is the name of the programming framework originally developed by Google that supports the development of applications for processing large data sets in a distributed computing environment?', 1, 1),
(266, '20220715ZIBL7D', 'choice1', 'Hive', 1, 1),
(267, '20220715ZIBL7D', 'choice2', 'Zookeeper', 1, 1),
(268, '20220715ZIBL7D', 'choice3', 'Hadoop', 1, 1),
(269, '20220715ZIBL7D', 'choice4', 'MapReduce', 1, 1),
(270, '20220715ZIBL7D', 'answer', 'Hadoop', 1, 1),
(271, '20220715ZIBL7D', 'question', 'A method of storing data within a system that facilitates the collocation of data in various schemata and structural forms.', 1, 1),
(272, '20220715ZIBL7D', 'choice1', 'Data Visualisation', 1, 1),
(273, '20220715ZIBL7D', 'choice2', 'Data Lake', 1, 1),
(274, '20220715ZIBL7D', 'choice3', 'Big Data Management', 1, 1),
(275, '20220715ZIBL7D', 'choice4', 'Deep Analytics', 1, 1),
(276, '20220715ZIBL7D', 'answer', 'Data Lake', 1, 1),
(277, '20220715ZIBL7D', 'question', 'Leading analyst firm Gartner defines Big Data from three aspects, all starting with the letter V. Which of these are not a part of their consideration of big data?', 1, 1),
(278, '20220715ZIBL7D', 'choice1', 'Value', 1, 1),
(279, '20220715ZIBL7D', 'choice2', 'Volume', 1, 1),
(280, '20220715ZIBL7D', 'choice3', 'Variety', 1, 1),
(281, '20220715ZIBL7D', 'choice4', 'Velocity', 1, 1),
(282, '20220715ZIBL7D', 'answer', 'Value', 1, 1),
(283, '20220715ZIBL7D', 'question', 'Where did Hadoop get its name?', 1, 1),
(284, '20220715ZIBL7D', 'choice1', 'A fictional character from literature', 1, 1),
(285, '20220715ZIBL7D', 'choice2', 'Toy elephant', 1, 1),
(286, '20220715ZIBL7D', 'choice3', 'Itâ€™s an acronym', 1, 1),
(287, '20220715ZIBL7D', 'choice4', 'It''s a synonym of Data', 1, 1),
(288, '20220715ZIBL7D', 'answer', 'Toy elephant', 1, 1),
(289, '20220715ZIBL7D', 'question', 'Last summer, Splunk announced a new product to search, access and report on Hadoop data sets. What is this product called?', 1, 1),
(290, '20220715ZIBL7D', 'choice1', 'Splunk Storm', 1, 1),
(291, '20220715ZIBL7D', 'choice2', 'Splunk Cloud', 1, 1),
(292, '20220715ZIBL7D', 'choice3', 'Hunk', 1, 1),
(293, '20220715ZIBL7D', 'choice4', 'MongoDB', 1, 1),
(294, '20220715ZIBL7D', 'answer', 'Hunk', 1, 1),
(295, '20220715ZIBL7D', 'question', 'According to a study conducted by IBM, what is the largest single source where data is gathered?', 1, 1),
(296, '20220715ZIBL7D', 'choice1', 'Email', 1, 1),
(297, '20220715ZIBL7D', 'choice2', 'Social Media', 1, 1),
(298, '20220715ZIBL7D', 'choice3', 'Business Transactions', 1, 1),
(299, '20220715ZIBL7D', 'choice4', 'Log Data', 1, 1),
(300, '20220715ZIBL7D', 'answer', 'Business Transactions', 1, 1),
(301, '20220715ZIBL7D', 'question', '___________ Analysis is used to analyze a system in terms of its requirements to identify its impact on customersâ€™ satisfaction. Fill in the blank.', 1, 1),
(302, '20220715ZIBL7D', 'choice1', 'Kano', 1, 1),
(303, '20220715ZIBL7D', 'choice2', 'Paretto', 1, 1),
(304, '20220715ZIBL7D', 'choice3', 'RootCause', 1, 1),
(305, '20220715ZIBL7D', 'choice4', 'Impact', 1, 1),
(306, '20220715ZIBL7D', 'answer', 'Kano', 1, 1),
(307, '20220715ZIBL7D', 'question', 'What does SAAS stand for?', 1, 1),
(308, '20220715ZIBL7D', 'choice1', 'System Aerosurface Actuator Simulation', 1, 1),
(309, '20220715ZIBL7D', 'choice2', 'Systems as a Service', 1, 1),
(310, '20220715ZIBL7D', 'choice3', 'Software acting as Service', 1, 1),
(311, '20220715ZIBL7D', 'choice4', 'Software as a Service', 1, 1),
(312, '20220715ZIBL7D', 'answer', 'Software as a Service', 1, 1),
(313, '20220715ZIBL7D', 'question', 'According to a very recent Jaspersoft Survey, what is the most popular big data store?', 1, 1),
(314, '20220715ZIBL7D', 'choice1', 'Relational Databases', 1, 1),
(315, '20220715ZIBL7D', 'choice2', 'Hadoop HDFS', 1, 1),
(316, '20220715ZIBL7D', 'choice3', 'Hadoop HDFS', 1, 1),
(317, '20220715ZIBL7D', 'choice4', 'MongoDB', 1, 1),
(318, '20220715ZIBL7D', 'answer', 'Relational Databases', 1, 1),
(319, '20220715ZIBL7D', 'question', 'Which of the following is/are correct types of data?', 1, 1),
(320, '20220715ZIBL7D', 'choice1', 'Semi-structured Data', 1, 1),
(321, '20220715ZIBL7D', 'choice2', 'Unstructured Data', 1, 1),
(322, '20220715ZIBL7D', 'choice3', 'Semi Data', 1, 1),
(323, '20220715ZIBL7D', 'choice4', 'Both a & b', 1, 1),
(324, '20220715ZIBL7D', 'answer', 'Both a & b', 1, 1),
(325, '20220715ZIBL7D', 'question', 'Which of the following is a component of Hadoop?', 1, 1),
(326, '20220715ZIBL7D', 'choice1', 'YARN', 1, 1),
(327, '20220715ZIBL7D', 'choice2', 'HDFS', 1, 1),
(328, '20220715ZIBL7D', 'choice3', 'MapReduce', 1, 1),
(329, '20220715ZIBL7D', 'choice4', 'All of the Above', 1, 1),
(330, '20220715ZIBL7D', 'answer', 'All of the Above', 1, 1),
(331, '20220715ZIBL7D', 'question', 'The archive file created in Hadoop has the extension of', 1, 1),
(332, '20220715ZIBL7D', 'choice1', '.hrh', 1, 1),
(333, '20220715ZIBL7D', 'choice2', '.har', 1, 1),
(334, '20220715ZIBL7D', 'choice3', '.hrc', 1, 1),
(335, '20220715ZIBL7D', 'choice4', '.hrar', 1, 1),
(336, '20220715ZIBL7D', 'answer', '.har', 1, 1),
(337, '20220715ZIBL7D', 'question', 'What license is Apache Hadoop distributed under?', 1, 1),
(338, '20220715ZIBL7D', 'choice1', 'Apache License 2.0', 1, 1),
(339, '20220715ZIBL7D', 'choice2', 'Shareware', 1, 1),
(340, '20220715ZIBL7D', 'choice3', 'Mozilla Public License', 1, 1),
(341, '20220715ZIBL7D', 'choice4', 'Commercial', 1, 1),
(342, '20220715ZIBL7D', 'answer', 'Apache License 2.0', 1, 1),
(343, '20220715ZIBL7D', 'question', 'Which of the following platforms does Apache Hadoop run on?', 1, 1),
(344, '20220715ZIBL7D', 'choice1', 'Bare metal', 1, 1),
(345, '20220715ZIBL7D', 'choice2', 'Unix-like', 1, 1),
(346, '20220715ZIBL7D', 'choice3', 'Cross-platform', 1, 1),
(347, '20220715ZIBL7D', 'choice4', 'Debian', 1, 1),
(348, '20220715ZIBL7D', 'answer', 'Cross-platform', 1, 1),
(349, '20220715ZIBL7D', 'question', 'Apache Hadoop achieves reliability by replicating the data across multiple hosts and hence does not require ________ storage on hosts.', 1, 1),
(350, '20220715ZIBL7D', 'choice1', 'Standard RAID levels', 1, 1),
(351, '20220715ZIBL7D', 'choice2', 'RAID', 1, 1),
(352, '20220715ZIBL7D', 'choice3', 'ZFS', 1, 1),
(353, '20220715ZIBL7D', 'choice4', 'Operating system', 1, 1),
(354, '20220715ZIBL7D', 'answer', 'RAID', 1, 1),
(565, '20220715YZGOC1', 'question', 'Which function will you use to convert an HTML page into a format that can be saved in database conveniently', 1, 1),
(566, '20220715YZGOC1', 'choice1', 'Stripslashes()', 1, 1),
(567, '20220715YZGOC1', 'choice2', 'Htmlentities()', 1, 1),
(568, '20220715YZGOC1', 'choice3', 'Htmlspecialchars()', 1, 1),
(569, '20220715YZGOC1', 'choice4', 'None of the choices', 1, 1),
(570, '20220715YZGOC1', 'answer', 'Htmlspecialchars()', 1, 1),
(571, '20220715YZGOC1', 'question', 'Which of following statements will be used to fetch SINGLE record from a MySql resultset', 1, 1),
(572, '20220715YZGOC1', 'choice1', 'Mysql_connect', 1, 1),
(573, '20220715YZGOC1', 'choice2', 'Mysql_query', 1, 1),
(574, '20220715YZGOC1', 'choice3', 'Mysql_fetch_array', 1, 1),
(575, '20220715YZGOC1', 'choice4', 'Mysql_fetch_row', 1, 1),
(576, '20220715YZGOC1', 'answer', 'Mysql_fetch_row', 1, 1),
(595, '20220718KLFZYT', 'question', 'A voluminous amount of structured, semi-structured, and unstructured data that has the potential to be mined for information.', 2, 1),
(596, '20220718KLFZYT', 'choice1', 'Small Data', 2, 1),
(597, '20220718KLFZYT', 'choice2', 'Meta Data', 2, 1),
(598, '20220718KLFZYT', 'choice3', 'Statistical Data', 2, 1),
(599, '20220718KLFZYT', 'choice4', 'Big Data', 2, 1),
(600, '20220718KLFZYT', 'answer', 'Big Data', 2, 1),
(601, '20220718KLFZYT', 'question', 'A free, Java-based programming framework that supports the processing of large data sets in a distributed computing environment.', 2, 1),
(602, '20220718KLFZYT', 'choice1', 'Hadoop', 2, 1),
(603, '20220718KLFZYT', 'choice2', 'Python', 2, 1),
(604, '20220718KLFZYT', 'choice3', 'R', 2, 1),
(605, '20220718KLFZYT', 'choice4', 'Apache Groovy', 2, 1),
(606, '20220718KLFZYT', 'answer', 'Hadoop', 2, 1),
(607, '20220718KLFZYT', 'question', 'The branch of data mining concerned with the prediction of future probabilities and trends.', 2, 1),
(608, '20220718KLFZYT', 'choice1', 'In-memory Analytics', 2, 1),
(609, '20220718KLFZYT', 'choice2', 'Predictive Analytics', 2, 1),
(610, '20220718KLFZYT', 'choice3', 'Behavioral Analytics', 2, 1),
(611, '20220718KLFZYT', 'choice4', 'Big Data Analytics', 2, 1),
(612, '20220718KLFZYT', 'answer', 'Predictive Analytics', 2, 1);

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
-- Table structure for table `token_auth`
--

CREATE TABLE `token_auth` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `userType` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `token` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `token_auth`
--

INSERT INTO `token_auth` (`id`, `uid`, `userType`, `category`, `token`, `status`) VALUES
(6, '2022-2EX8-7389', 'Exam Creator', '', 'AB477C23-F257-06ED-39D6-32C1D511063D', 0),
(7, '2022-2EX8-7389', 'Exam Creator', '', '477C6271-49DA-BB0A-D0E6-DBBC41947FB1', 0),
(8, '2022-5BV6-1160', 'Examinee', 'BS Computer Science', '804DC2A9-9790-EB5E-F106-F7CD1B4590FB', 0),
(9, '2022-2EX8-7389', 'Exam Creator', '', '3CF830EC-149F-B3E2-7DA8-8AAB9BEAD3E5', 0),
(10, '2022-5BV6-1160', 'Examinee', 'BS Computer Science', '5CBCBF19-03F8-5AD6-68C6-666F59918665', 0),
(11, '2022-2EX8-7389', 'Exam Creator', '', 'B857AE63-6747-F3DA-A6CF-2EF32EC5D7DE', 0),
(12, '2022-2EX8-7389', 'Exam Creator', '', '6070523A-336E-8A68-CA9B-67330AC8F1E6', 0),
(13, '2022-2EX8-7389', 'Exam Creator', '', '241E3CF9-0B7C-E223-17D9-F871E9D11DEA', 0),
(14, '2022-2EX8-7389', 'Exam Creator', '', 'F55515D2-0F4A-7A4F-D518-4E5EC91C9226', 0),
(15, '2022-2EX8-7389', 'Exam Creator', '', 'AF78CF5C-41B2-5C5B-C06F-765DE0F572C2', 0);

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
(5, '2022-M2L3-6502', 'Examinee', 'Angelica', 'Genevieve Nichols', 'Hayes', 'Qui nihil atque lore', '2017-06-20', 'qyboq@mailinator.com', 'Pa$$w0rd!', '09124563789', 'BS Information Technology'),
(6, '2022-7ILY-3243', 'Examinee', 'Wylie', 'Gil Mendez', 'Griffith', 'Praesentium sunt ten', '1970-12-05', 'vozewukity@mailinator.com', 'Pa$$w0rd!', '09392608805', 'BS Information Technology'),
(7, '2022-5BV6-1160', 'Examinee', 'Bo', 'George Ayers', 'Ball', 'Culpa quisquam dolor', '1995-12-09', 'buzyra@mailinator.com', 'Pa$$w0rd!', '09392608805', 'BS Computer Science'),
(8, '2022-RTXF-7339', 'Examinee', 'Irene', 'Jillian Santiago', 'Oneal', 'Do voluptas tenetur ', '1994-11-28', 'rajaxeg@mailinator.com', 'Pa$$w0rd!', '09251645789', 'BS Information Technology');

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
-- Indexes for table `token_auth`
--
ALTER TABLE `token_auth`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `exam_entry`
--
ALTER TABLE `exam_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=613;
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
-- AUTO_INCREMENT for table `token_auth`
--
ALTER TABLE `token_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
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
