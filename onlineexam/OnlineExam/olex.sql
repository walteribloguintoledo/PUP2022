-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2022 at 12:11 PM
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
(2, 3952, 'BS Computer Science'),
(4, 2693, 'BS Computer Engineering'),
(5, 3061, 'BS Business Administration'),
(6, 4108, 'BS Psychology'),
(7, 2757, 'BS Accountancy'),
(8, 1720, 'BS Biology'),
(10, 6233, 'BS Mathematics'),
(11, 2507, 'BS Information Technology');

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
(1, '', 'BS Computer Science', 'Data Analytics', 1, 1),
(2, '', 'BS Computer Engineering', 'Robotics', 1, 1),
(3, '', 'BS Computer Science', 'Data', 1, 1),
(4, '', 'BS Computer Science', 'Data Analytics', 2, 1),
(5, '', 'BS Computer Science', 'Data Analytics', 3, 1),
(6, '20225XF8JI', 'BS Computer Engineering', 'Robotics of the Modern World', 1, 1),
(7, '202245KC1F', 'BS Biology', 'Parts of the Cell', 2, 1);

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
(1, '', 'question', 'Ut quis blanditiis v', 1, 1),
(2, '', 'choice1', 'Omnis nulla aut aut ', 1, 1),
(3, '', 'choice2', 'Rerum ut quis quo al', 1, 1),
(4, '', 'choice3', 'Nisi dolor numquam i', 1, 1),
(5, '', 'choice4', 'Duis eos earum unde ', 1, 1),
(6, '', 'answer', 'Unde repudiandae eu ', 1, 1),
(7, '', 'question', 'Tempora aliqua Nihi', 1, 1),
(8, '', 'choice1', 'Sunt minus lorem pr', 1, 1),
(9, '', 'choice2', 'Non voluptas labore ', 1, 1),
(10, '', 'choice3', 'Quo sint sed eos a', 1, 1),
(11, '', 'choice4', 'Reprehenderit dolor', 1, 1),
(12, '', 'answer', 'Minima aut atque in ', 1, 1),
(13, '', 'question', 'Nostrud veniam maxi', 1, 1),
(14, '', 'choice1', 'Consequuntur quia au', 1, 1),
(15, '', 'choice2', 'Magnam non qui rerum', 1, 1),
(16, '', 'choice3', 'Consequuntur quia au', 1, 1),
(17, '', 'choice4', 'Quis ea ut voluptate', 1, 1),
(18, '', 'answer', 'Modi animi placeat', 1, 1),
(19, '', 'question', 'Est ut qui velit ass', 1, 1),
(20, '', 'choice1', 'Consequuntur quia au', 1, 1),
(21, '', 'choice2', 'Ullamco ducimus vol', 1, 1),
(22, '', 'choice3', 'Consequuntur quia au', 1, 1),
(23, '', 'choice4', 'Quis ea ut voluptate', 1, 1),
(24, '', 'answer', 'Facilis sunt necessi', 1, 1),
(25, '', 'question', 'Minima eveniet cumq', 1, 1),
(26, '', 'choice1', 'Incidunt deserunt e', 1, 1),
(27, '', 'choice2', 'Debitis qui qui aspe', 1, 1),
(28, '', 'choice3', 'Consequuntur quia au', 1, 1),
(29, '', 'choice4', 'Quis ea ut voluptate', 1, 1),
(30, '', 'answer', 'Facilis sunt necessi', 1, 1),
(31, '', 'question', 'In saepe quia enim s', 2, 1),
(32, '', 'choice1', 'Tenetur culpa venia', 2, 1),
(33, '', 'choice2', 'Animi molestiae qui', 2, 1),
(34, '', 'choice3', 'Ex sed consequatur n', 2, 1),
(35, '', 'choice4', 'Rem ullam corporis u', 2, 1),
(36, '', 'answer', 'Autem sit dolorum mo', 2, 1),
(37, '', 'question', 'Aliquam in iure eius', 2, 1),
(38, '', 'choice1', 'Laborum aliqua Id r', 2, 1),
(39, '', 'choice2', 'Magnam facere deseru', 2, 1),
(40, '', 'choice3', 'Magnam non laborum i', 2, 1),
(41, '', 'choice4', 'Voluptatem modi inci', 2, 1),
(42, '', 'answer', 'Aut molestiae sint q', 2, 1),
(43, '', 'question', 'Nam a hic distinctio', 2, 1),
(44, '', 'choice1', 'Excepturi enim proid', 2, 1),
(45, '', 'choice2', 'Commodo aperiam et c', 2, 1),
(46, '', 'choice3', 'Qui dolores sit tem', 2, 1),
(47, '', 'choice4', 'Ducimus veritatis u', 2, 1),
(48, '', 'answer', 'Exercitationem molli', 2, 1),
(49, '', 'question', 'Facilis voluptas des', 3, 1),
(50, '', 'choice1', 'Accusantium unde exe', 3, 1),
(51, '', 'choice2', 'Eos sunt doloribus d', 3, 1),
(52, '', 'choice3', 'Voluptatem blanditi', 3, 1),
(53, '', 'choice4', 'Eos commodo aut eos', 3, 1),
(54, '', 'answer', 'Beatae consequatur a', 3, 1),
(55, '', 'question', 'Voluptates magnam vo', 3, 1),
(56, '', 'choice1', 'Enim dolorem quisqua', 3, 1),
(57, '', 'choice2', 'Quia qui minim conse', 3, 1),
(58, '', 'choice3', 'Vitae magnam nisi en', 3, 1),
(59, '', 'choice4', 'Tempora explicabo V', 3, 1),
(60, '', 'answer', 'Quo eu laborum Ab q', 3, 1),
(61, '', 'question', 'Dolore labore et ad ', 3, 1),
(62, '', 'choice1', 'Quia reprehenderit ', 3, 1),
(63, '', 'choice2', 'Elit animi in non ', 3, 1),
(64, '', 'choice3', 'Ad occaecat quam et ', 3, 1),
(65, '', 'choice4', 'Dolor tempora fuga ', 3, 1),
(66, '', 'answer', 'Recusandae Dolorum ', 3, 1),
(67, '', 'question', 'Eos eum voluptatum ', 3, 1),
(68, '', 'choice1', 'Temporibus rerum adi', 3, 1),
(69, '', 'choice2', 'Saepe soluta omnis q', 3, 1),
(70, '', 'choice3', 'Minim provident in ', 3, 1),
(71, '', 'choice4', 'Rem nesciunt impedi', 3, 1),
(72, '', 'answer', 'Aliquip consequatur', 3, 1),
(73, '', 'question', 'Quaerat possimus al', 3, 1),
(74, '', 'choice1', 'Consequat Pariatur', 3, 1),
(75, '', 'choice2', 'Blanditiis neque vol', 3, 1),
(76, '', 'choice3', 'In a eveniet dolore', 3, 1),
(77, '', 'choice4', 'Deleniti nihil est ', 3, 1),
(78, '', 'answer', 'Nihil fugiat praesen', 3, 1),
(79, '', 'question', 'Qui laudantium iste', 1, 1),
(80, '', 'choice1', 'Omnis molestiae ea m', 1, 1),
(81, '', 'choice2', 'Praesentium corporis', 1, 1),
(82, '', 'choice3', 'Vel nostrud non quam', 1, 1),
(83, '', 'choice4', 'Aut delectus sapien', 1, 1),
(84, '', 'answer', 'Ut quis nesciunt ne', 1, 1),
(85, '', 'question', 'Mollit quod nostrud ', 1, 1),
(86, '', 'choice1', 'Quisquam temporibus ', 1, 1),
(87, '', 'choice2', 'Modi elit quod null', 1, 1),
(88, '', 'choice3', 'Nulla voluptatum et ', 1, 1),
(89, '', 'choice4', 'Recusandae Irure lo', 1, 1),
(90, '', 'answer', 'Deserunt cillum aut ', 1, 1),
(91, '', 'question', 'Autem incididunt exp', 2, 1),
(92, '', 'choice1', 'Aut consequatur odit', 2, 1),
(93, '', 'choice2', 'Magnam non qui rerum', 2, 1),
(94, '', 'choice3', 'Consequuntur quia au', 2, 1),
(95, '', 'choice4', 'Mollit dignissimos v', 2, 1),
(96, '', 'answer', 'Facilis sunt necessi', 2, 1),
(97, '', 'question', 'Quis illum sunt ad ', 2, 1),
(98, '', 'choice1', 'Tempor ut et debitis', 2, 1),
(99, '', 'choice2', 'Sit rem architecto ', 2, 1),
(100, '', 'choice3', 'Vel eos dolor in ap', 2, 1),
(101, '', 'choice4', 'Ipsum recusandae Si', 2, 1),
(102, '', 'answer', 'Non cillum voluptati', 2, 1),
(103, '', 'question', 'Voluptatem in ut co', 2, 1),
(104, '', 'choice1', 'Eveniet ab qui cill', 2, 1),
(105, '', 'choice2', 'Commodi ut illo id o', 2, 1),
(106, '', 'choice3', 'Atque magnam deserun', 2, 1),
(107, '', 'choice4', 'Voluptas velit dolor', 2, 1),
(108, '', 'answer', 'Esse fugiat fugiat', 2, 1);

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

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `uid`, `keyIndex`, `value`) VALUES
(1, 0, 'No. of Items for Lev', 20),
(2, 0, 'No. of Items for Lev', 30),
(3, 0, 'No. of Items for Lev', 50),
(4, 0, 'No. of Items for Lev', 80),
(5, 0, 'No. of Items for Level 1', 20),
(6, 0, 'No. of Items for Level 2', 30),
(7, 0, 'No. of Items for Level 3', 50),
(8, 0, 'No. of Items for Level 1', 80);

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
(3, 3952, 'Data Analytics'),
(4, 3952, 'Artificial Intelligence'),
(6, 2693, 'Robotics of the Modern World'),
(8, 3061, 'Fundamentals of Accounting'),
(9, 2757, 'Fundamentals of Accounting'),
(10, 1720, 'Parts of the Cell');

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
(20, '', 'Exam Creator', 'Ed John Paul ', 'Del Rosario', 'Gallardo', '64 South Sikap St Brgy. Plainview Mandaluyong City', '1999-06-28', 'edjohnpaulgallardo@gmail.com', 'gallardo28', '09392608855', NULL),
(27, '2022-3YON-9529', 'Exam Creator', 'Dahlia', 'Oprah Walton', 'Talley', 'Eligendi voluptas eu', '1997-06-22', 'lime@mailinator.com', 'Pa$$w0rd!', '09392608805', NULL),
(28, '2022-HJ9U-2261', 'Examinee', 'Blaine', 'Nell Decker', 'Mendez', 'Odit enim repellendu', '1992-07-03', 'qibododeh@mailinator.com', 'Pa$$w0rd!', '09392608805', 'BS'),
(29, '2022-GIUL-5983', 'Examinee', 'Vivian', 'Jocelyn Compton', 'Diaz', 'Tempora at enim magn', '2022-07-09', 'vagosovygu@mailinator.com', 'Pa$$w0rd!', '09124563789', 'BS'),
(30, '2022-DACY-6551', 'Examinee', 'Joelle', 'Carol Austin', 'Mendez', 'Est laudantium ipsu', '1977-04-06', 'majokol@mailinator.com', 'Pa$$w0rd!', '09392608805', 'BS');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `exam_entry`
--
ALTER TABLE `exam_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
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
