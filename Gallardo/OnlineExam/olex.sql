-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2022 at 12:02 PM
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
(1, '20220707CP8IXG', 'BS Biology', 'Parts of the Cell', 1, 1),
(2, '20220707VETGUH', 'BS Mathematics', 'Algebra', 1, 1),
(3, '202207075EN7R3', 'BS Mathematics', 'Algebra', 2, 1),
(4, '20220707CUOH4R', 'BS Computer Science', 'Data Analytics', 1, 1);

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
(1, '20220707VETGUH', 'question', 'Ex ducimus rerum ve', 1, 1),
(2, '20220707VETGUH', 'choice1', 'Numquam debitis quia', 1, 1),
(3, '20220707VETGUH', 'choice2', 'Blanditiis sit ea op', 1, 1),
(4, '20220707VETGUH', 'choice3', 'Et ad veniam non qu', 1, 1),
(5, '20220707VETGUH', 'choice4', 'Qui quisquam fuga E', 1, 1),
(6, '20220707VETGUH', 'answer', 'Enim unde officiis a', 1, 1),
(7, '20220707VETGUH', 'question', 'Pariatur Iusto adip', 1, 1),
(8, '20220707VETGUH', 'choice1', 'Aut cillum aut et co', 1, 1),
(9, '20220707VETGUH', 'choice2', 'Nulla laboriosam au', 1, 1),
(10, '20220707VETGUH', 'choice3', 'Voluptatem iste offi', 1, 1),
(11, '20220707VETGUH', 'choice4', 'Esse id quo velit v', 1, 1),
(12, '20220707VETGUH', 'answer', 'Deserunt quis et har', 1, 1),
(13, '202207075EN7R3', 'question', 'Do repellendus Null', 2, 1),
(14, '202207075EN7R3', 'choice1', 'Omnis atque facere v', 2, 1),
(15, '202207075EN7R3', 'choice2', 'Reprehenderit quas u', 2, 1),
(16, '202207075EN7R3', 'choice3', 'Est ut officiis volu', 2, 1),
(17, '202207075EN7R3', 'choice4', 'Similique iste aliqu', 2, 1),
(18, '202207075EN7R3', 'answer', 'Libero ad quo labore', 2, 1),
(19, '202207075EN7R3', 'question', 'Anim est voluptas su', 2, 1),
(20, '202207075EN7R3', 'choice1', 'Recusandae Ad moles', 2, 1),
(21, '202207075EN7R3', 'choice2', 'Velit fugit aut es', 2, 1),
(22, '202207075EN7R3', 'choice3', 'Eum et tenetur et in', 2, 1),
(23, '202207075EN7R3', 'choice4', 'Voluptate adipisicin', 2, 1),
(24, '202207075EN7R3', 'answer', 'Sint rerum cupiditat', 2, 1),
(25, '202207075EN7R3', 'question', 'Tempore proident l', 2, 1),
(26, '202207075EN7R3', 'choice1', 'Quis dolorum eaque i', 2, 1),
(27, '202207075EN7R3', 'choice2', 'Est quas in volupta', 2, 1),
(28, '202207075EN7R3', 'choice3', 'Laborum deserunt ut ', 2, 1),
(29, '202207075EN7R3', 'choice4', 'Blanditiis qui vero ', 2, 1),
(79, '20220707CUOH4R', 'question', 'Hic autem sint error', 1, 1),
(80, '20220707CUOH4R', 'choice1', 'Veniam voluptatem ', 1, 1),
(81, '20220707CUOH4R', 'choice2', 'Elit mollitia conse', 1, 1),
(82, '20220707CUOH4R', 'choice3', 'Sequi quas magni des', 1, 1),
(83, '20220707CUOH4R', 'choice4', 'Veniam amet sapien', 1, 1),
(84, '20220707CUOH4R', 'answer', 'Sint incididunt des', 1, 1),
(85, '20220707CUOH4R', 'question', 'Qui necessitatibus q', 1, 1),
(86, '20220707CUOH4R', 'choice1', 'Tempor nulla itaque ', 1, 1),
(87, '20220707CUOH4R', 'choice2', 'Cillum enim dolore e', 1, 1),
(88, '20220707CUOH4R', 'choice3', 'Atque amet mollit a', 1, 1),
(89, '20220707CUOH4R', 'choice4', 'Tempore ad laboris ', 1, 1),
(90, '20220707CUOH4R', 'answer', 'Quidem proident lau', 1, 1);

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
(11, 3952, 'PHP Basics'),
(12, 2507, 'PHP Basics'),
(13, 6233, 'Algebra'),
(14, 3061, 'Business Mathematics'),
(15, 1720, 'Parts of the Cell'),
(16, 4108, 'Myer Brigs Behavioral Psychology');

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
(1, '2022-S6NL-7019', 'Exam Creator', 'Ed John Paul', 'Del Rosario', 'Gallardo', '64 South Sikap St Brgy. Plainview Mandaluyong City', '1999-06-28', 'edjohnpaulgallardo28@gmail.com', 'gallardo28', '09392608805', NULL),
(2, '2022-BYP7-1770', 'Examinee', 'Erasmus', 'Cally Dickson', 'Spencer', 'In deleniti aliquam ', '1979-10-18', 'cisaxy@mailinator.com', 'Pa$$w0rd!', '09124563789', 'BS');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `exam_entry`
--
ALTER TABLE `exam_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
