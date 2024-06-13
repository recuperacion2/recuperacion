-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2024 a las 15:51:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recuperacion2`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR` (IN `_marca` VARCHAR(10), IN `_almacenamiento` INT(4), IN `_ram` INT(2))   BEGIN

INSERT INTO computador (marca, almacenamiento, ram )
VALUES (_marca, _almacenamiento, _ram);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_EDITAR` (IN `_ID` INT(10), IN `_ram` INT(2), IN `_almacenamiento` INT(4), IN `_marca` INT(10))   BEGIN

UPDATE computador
SET marca = _marca, 
almacenamiento = _almacenamiento, 
ram = _ram 
WHERE id = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR` (IN `_ID` INT)   BEGIN 

DELETE FROM computador WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR` (IN `_ID` INT)   BEGIN

SELECT * FROM computador
WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR` ()   BEGIN

SELECT * FROM computador;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computador`
--

CREATE TABLE `computador` (
  `id` int(2) NOT NULL,
  `marca` varchar(10) NOT NULL,
  `almacenamiento` int(4) NOT NULL,
  `ram` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `computador`
--

INSERT INTO `computador` (`id`, `marca`, `almacenamiento`, `ram`) VALUES
(1, 'ASUS', 256, 8),
(2, 'HP', 1000, 16),
(4, 'DELL', 256, 16);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `computador`
--
ALTER TABLE `computador`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `computador`
--
ALTER TABLE `computador`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
