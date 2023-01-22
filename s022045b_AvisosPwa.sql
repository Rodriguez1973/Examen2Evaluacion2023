-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-01-2022 a las 08:26:15
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `s022045b_AvisosPwa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Articulos`
--

CREATE TABLE `Articulos` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `idFamilia` int(11) NOT NULL,
  `PrecioCoste` float NOT NULL,
  `PrecioVenta` float NOT NULL,
  `Stock` int(11) NOT NULL,
  `StockMinimo` int(11) NOT NULL,
  `UnidadesVendidas` int(11) NOT NULL,
  `NumeroVentas` int(11) NOT NULL,
  `SumaEstrellas` int(11) NOT NULL,
  `UrlImagen` varchar(150) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Articulos`
--

INSERT INTO `Articulos` (`id`, `Nombre`, `idFamilia`, `PrecioCoste`, `PrecioVenta`, `Stock`, `StockMinimo`, `UnidadesVendidas`, `NumeroVentas`, `SumaEstrellas`, `UrlImagen`) VALUES
(1, 'Bolso Seora Rojo. Asas.', 8, 600, 167, 2, 1, 13, 7, 23, 'bolso.jpg'),
(3, 'Cinturon caballero. Color negro', 8, 56, 76, 4, 2, 34, 12, 48, 'cinturon.jpg\r\n'),
(4, 'PUlsera oro. Dos', 8, 456, 678, 1, 1, 9, 5, 16, 'pulsera.jpg'),
(8, 'Reloj analogico', 8, 123, 175, 1, 2, 1, 1, 4, 'reloj.jpg'),
(9, 'Sombero negro rayas blanzas', 8, 45, 40, 5, 1, 6, 4, 11, 'sombrero.jpg'),
(10, 'Camisetas azules . 2 x 1', 6, 10, 22, 2, 2, 2, 2, 8, 'camiseta.jpg\r\n'),
(11, 'Jersey lana Rayas Gruesas Gris Negro', 6, 8, 45, 1, 1, 6, 4, 12, 'jersey.jpg'),
(12, 'Pajarita rosa.', 6, 5, 10, 1, 0, 1, 1, 2, 'pajarita.jpg'),
(13, 'Pantalon azul, decoracion', 6, 13, 26, 1, 1, 5, 4, 12, 'pantalon.jpg'),
(14, 'Vestido negro. Etiqueta', 6, 134, 234, 2, 1, 7, 5, 20, 'vestido.jpg\r\n'),
(16, 'Conector USB', 2, 2, 8, 12, 10, 103, 81, 243, 'conector.jpg'),
(17, 'Conexiones PC Sobremesa.Repuesto', 2, 8, 16, 3, 1, 30, 30, 60, 'conexiones.jpg'),
(18, 'Disco interno mecanico. 1 TB', 2, 30, 42, 5, 3, 123, 100, 300, 'disco.jpg'),
(19, 'Placa Base. Asus', 2, 75, 87, 2, 1, 5, 2, 8, 'placa.jpg'),
(20, 'Ordenador portatil. Lenovo ', 2, 345, 567, 2, 1, 5, 4, 20, 'portatil.jpg'),
(21, 'Disco SSD- 125 Tb', 2, 34, 52, 4, 8, 7, 5, 19, 'ssd.jpg'),
(22, 'Tablet', 2, 234, 342, 1, 1, 1, 1, 4, 'tablet.jpg'),
(23, 'Instalacion Conexion por fibra', 1, 1, 1, 100, 2, 80, 60, 180, 'figra.jpg'),
(24, 'Configuracion red de aras local', 1, 100, 100, 1, 1, 1, 1, 5, 'red.jpg'),
(25, 'Router. Instalacion Casa', 1, 1, 1, 1, 1, 134, 30, 120, 'router.jpg'),
(26, 'Telefono fijo', 1, 123, 145, 1, 1, 50, 40, 120, 'telefonofijo.jpg'),
(27, 'Wifi red barrio', 1, 1, 1, 1, 1, 1, 1, 4, 'wifi.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Clientes`
--

CREATE TABLE `Clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `email` varchar(70) NOT NULL,
  `localidad` varchar(40) NOT NULL,
  `provinca` varchar(20) NOT NULL,
  `codigoPostal` varchar(5) NOT NULL,
  `cif_nif` varchar(9) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Clientes`
--

INSERT INTO `Clientes` (`id`, `nombre`, `direccion`, `telefono`, `email`, `localidad`, `provinca`, `codigoPostal`, `cif_nif`) VALUES
(1, 'aaaaaaaaaaa', 'aaa', '11', 'aaaaaa', 'aaaa', 'aaaaa', 'aaaa', 'aaaa'),
(2, 'aaaaaaaaaaaaaaa', '1', '1', '1', '1', '1', '1', '1'),
(3, 'bbbbbbbbb', '2', '2', '2', '2', '', '2', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Familia`
--

CREATE TABLE `Familia` (
  `id` int(11) NOT NULL,
  `Descripcion` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Familia`
--

INSERT INTO `Familia` (`id`, `Descripcion`) VALUES
(1, 'Telefonía'),
(2, 'Informática'),
(6, 'Ropa'),
(8, 'Accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tecnicos`
--

CREATE TABLE `Tecnicos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `email` varchar(70) NOT NULL,
  `localidad` varchar(40) NOT NULL,
  `provinca` varchar(20) NOT NULL,
  `codigoPostal` varchar(5) NOT NULL,
  `cif_nif` varchar(9) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Tecnicos`
--

INSERT INTO `Tecnicos` (`id`, `nombre`, `direccion`, `telefono`, `email`, `localidad`, `provinca`, `codigoPostal`, `cif_nif`) VALUES
(1, 'Perico de los Palotes', 'C/La huerta s/n', '94567896', 'perico@gmail.com', 'Aranda de Duero', 'Burgos', '09400', '1234567P'),
(2, 'Perico de los Palotes', 'C/La huerta s/n', '94567896', 'perico@gmail.com', 'Aranda de Duero', 'Burgos', '09400', '1234567P'),
(3, 'Epifanio Peludo', 'C/Amapoles 12', '56789045', 'pi@famio.pe', 'Zazuar', 'Burgos', '09492', '3456789p'),
(4, 'Epifanio Peludo', 'C/Amapoles 12', '56789045', 'pi@famio.pe', 'Zazuar', 'Burgos', '09492', '3456789p');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Articulos`
--
ALTER TABLE `Articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Clientes`
--
ALTER TABLE `Clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Familia`
--
ALTER TABLE `Familia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Tecnicos`
--
ALTER TABLE `Tecnicos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Articulos`
--
ALTER TABLE `Articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `Clientes`
--
ALTER TABLE `Clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Familia`
--
ALTER TABLE `Familia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `Tecnicos`
--
ALTER TABLE `Tecnicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
