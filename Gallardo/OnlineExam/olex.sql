-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2022 at 12:02 PM
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
  `uid` varchar(50) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `uid`, `category`) VALUES
(1, '2476', 'BS Information Technology'),
(2, '3799', 'BS Business Administration'),
(3, '2185', 'BS Computer Science'),
(4, '2683', 'BS Computer Engineering');

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
(1, '', 'BS Computer Engineering', 'Fundamentals of Accounting', 1, 1),
(2, '', 'BS Accountancy', 'JavaScript 1', 1, 1);

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
(1, '', 'question', 'Tempore et nobis de', 1, 1),
(2, '', 'choice1', 'Omnis suscipit possi', 1, 1),
(3, '', 'choice2', 'Facilis eiusmod quia', 1, 1),
(4, '', 'choice3', 'Quibusdam cupidatat ', 1, 1),
(5, '', 'choice4', 'Doloribus cumque iur', 1, 1),
(6, '', 'answer', 'Autem perspiciatis ', 1, 1),
(7, '', 'question', 'Incididunt non sunt ', 1, 1),
(8, '', 'choice1', 'Asperiores eos anim', 1, 1),
(9, '', 'choice2', 'Ut corporis ad nostr', 1, 1),
(10, '', 'choice3', 'Perspiciatis asperi', 1, 1),
(11, '', 'choice4', 'Neque iusto qui odit', 1, 1),
(12, '', 'answer', 'Fuga Amet voluptat', 1, 1),
(13, '', 'question', 'Error pariatur Nihi', 1, 1),
(14, '', 'choice1', 'Aliquid commodi elit', 1, 1),
(15, '', 'choice2', 'Doloribus deserunt n', 1, 1),
(16, '', 'choice3', 'Labore similique arc', 1, 1),
(17, '', 'choice4', 'Pariatur Reiciendis', 1, 1),
(18, '', 'answer', 'Assumenda quo harum ', 1, 1),
(19, '', 'question', 'Laborum Necessitati', 1, 1),
(20, '', 'choice1', 'Sit ex magna pariat', 1, 1),
(21, '', 'choice2', 'Asperiores consequat', 1, 1),
(22, '', 'choice3', 'Iste elit est inve', 1, 1),
(23, '', 'choice4', 'Voluptatem enim qui', 1, 1),
(24, '', 'answer', 'Sint beatae soluta c', 1, 1),
(25, '', 'question', 'Quae dolores id et r', 1, 1),
(26, '', 'choice1', 'Officiis ut fugit e', 1, 1),
(27, '', 'choice2', 'Beatae laborum tempo', 1, 1),
(28, '', 'choice3', 'Cumque quia esse cu', 1, 1),
(29, '', 'choice4', 'Ut eum ea non deleni', 1, 1),
(30, '', 'answer', 'Perspiciatis aut cu', 1, 1),
(31, '', 'question', 'Nam nesciunt totam ', 1, 1),
(32, '', 'choice1', 'Molestiae accusamus ', 1, 1),
(33, '', 'choice2', 'Quia in eum ut sit ', 1, 1),
(34, '', 'choice3', 'Reprehenderit qui mo', 1, 1),
(35, '', 'choice4', 'Repudiandae fuga In', 1, 1),
(36, '', 'answer', 'Deserunt et eos nih', 1, 1),
(37, '', 'question', 'Quo quis tenetur dol', 1, 1),
(38, '', 'choice1', 'Expedita aliquip in ', 1, 1),
(39, '', 'choice2', 'Aut exercitation und', 1, 1),
(40, '', 'choice3', 'Non corporis dolorib', 1, 1),
(41, '', 'choice4', 'Consequatur est fac', 1, 1),
(42, '', 'answer', 'Et nostrud natus non', 1, 1),
(43, '', 'question', 'Ea unde qui sint rec', 1, 1),
(44, '', 'choice1', 'Eaque at excepturi v', 1, 1),
(45, '', 'choice2', 'Ea est eveniet arc', 1, 1),
(46, '', 'choice3', 'Aperiam eiusmod qui ', 1, 1),
(47, '', 'choice4', 'Tempora neque aute m', 1, 1),
(48, '', 'answer', 'Et ut et aliqua Con', 1, 1);

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
(4, '', 'Lacey', 'Barrett Mercer', 'Schultz', 'BS Information Technology');

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
  `keyIndex` varchar(20) NOT NULL,
  `value` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `subjectName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `uid`, `subjectName`) VALUES
(1, '', 'JavaScript 1'),
(2, '', 'PHP 1'),
(3, '', 'Computer Maintenance '),
(4, '', 'Fundamentals of Accounting'),
(5, '0', 'Multimedia'),
(6, '2185', 'Artificial Inteligence'),
(7, '3799', 'Brock Battle'),
(8, '3799', 'Artificial Inteligence');

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
(1, '', 'Exam Creator', 'Griffin', 'Rooney Conrad', 'Burnett', 'Consequatur Cum qui', '2018-04-03', 'vyme@mailinator.com', 'Pa$$w0rd!', '09456011731', NULL),
(2, '', 'Exam Creator', 'Carly', 'Carl English', 'Wilson', 'Et mollitia Nam impe', '2014-03-28', 'cajejy@mailinator.co', 'Pa$$w0rd!', '09392608855', NULL),
(3, '', 'Exam Creator', 'Timothy', 'Stephen Donovan', 'House', 'Voluptate enim dolor', '1971-10-21', 'vyfiriz@mailinator.c', 'Pa$$w0rd!', '09361594872', NULL),
(4, '', 'Exam Creator', 'Elliott', 'Justina Dennis', 'Molina', 'Omnis minim consecte', '1984-04-18', 'pyri@mailinator.com', 'Pa$$w0rd!', '09457689000', NULL),
(5, '', 'Exam Creator', 'Oren', 'Neville Bruce', 'Dotson', 'Lorem harum earum un', '1979-01-02', 'suge@mailinator.com', 'Pa$$w0rd!', '09392608855', NULL),
(6, '', 'Exam Creator', 'Anne', 'Mechelle Faulkner', 'Owens', 'Dolor culpa quia ar', '1982-03-20', 'bixicyqu@mailinator.', 'Pa$$w0rd!', '09361594872', NULL),
(7, '', 'Exam Creator', 'Cooper', 'Jackson Dominguez', 'Garrett', 'In est tempor in vel', '2004-04-19', 'gocug@mailinator.com', 'Pa$$w0rd!', '09351404870', NULL),
(8, '', 'Exam Creator', 'Daquan', 'Harlan Carrillo', 'Fulton', 'Sed fugit iste est ', '1986-02-01', 'xygyqaki@mailinator.', 'Pa$$w0rd!', '09392608855', NULL),
(9, '', 'Examinee', 'Cain', 'Wynter Merrill', 'Compton', 'Saepe sunt cupiditat', '2003-03-20', 'pixekaj@mailinator.c', 'Pa$$w0rd!', '09392608805', NULL),
(10, '', 'Examinee', 'Quinlan', 'Joseph Kirkland', 'Wise', 'Itaque ducimus occa', '2014-11-01', 'teticaxyge@mailinato', 'Pa$$w0rd!', '09392608805', 'BS Information Technology'),
(18, '', 'Examinee', 'Jason', 'Axel Gibbs', 'Allen', 'Eos est asperiores ', '1971-09-13', 'vixu@mailinator.com', 'Pa$$w0rd!', '09392608805', 'BS Computer Science'),
(19, '', 'Examinee', 'Farrah', 'Patience Acosta', 'Flores', 'Eveniet nihil magna', '1980-06-05', 'juserohu@mailinator.com', 'Pa$$w0rd!', '09124563789', 'BS Accountancy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `exam_entry`
--
ALTER TABLE `exam_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
