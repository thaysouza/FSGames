-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Dez-2020 às 06:42
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(9, 'thay souza', 'Roupas lindas e de ótima qualidade, chegaram antes do prazo !!!', '2020-11-02 23:31:11');

-- --------------------------------------------------------

--
-- Estrutura da tabela `escolha`
--

CREATE TABLE `escolha` (
  `idproduto` int(11) NOT NULL,
  `idtipos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `escolha`
--

INSERT INTO `escolha` (`idproduto`, `idtipos`) VALUES
(1, 3),
(2, 1),
(3, 3),
(4, 1),
(5, 2),
(6, 1),
(7, 2),
(8, 1),
(9, 2),
(10, 3),
(11, 1),
(12, 3),
(13, 3),
(14, 1),
(10, 1),
(11, 3),
(12, 1),
(13, 2),
(14, 3),
(15, 1),
(16, 1),
(17, 3),
(18, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `opcao`
--

CREATE TABLE `opcao` (
  `idtipos` int(11) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `opcao`
--

INSERT INTO `opcao` (`idtipos`, `tipo`) VALUES
(1, 'P'),
(2, 'M'),
(3, 'G');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idproduto` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `produto` varchar(50) NOT NULL,
  `valor` float NOT NULL,
  `quantidade` int(10) DEFAULT NULL,
  `valortotal` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idproduto`, `nome`, `endereco`, `telefone`, `produto`, `valor`, `quantidade`, `valortotal`) VALUES
(1, 'tamiris souza', 'rua das flores', '2222-4444', 'geladeira', 6.389, 2, 12.778),
(2, 'roberto silva', 'rua oliveira', '4444-5555', 'geladeira', 6.389, 1, 6.389),
(3, 'Aluicio da silva', 'rua um', '5555-5555', 'geladeira', 6.389, 1, 6.389),
(4, 'pedro henrique', 'rua carlos muiranda', '2222-2222', 'geladeira', 6.389, 1, 6.389),
(5, 'luciana vitoria', 'rua euclides coelho', '7778-89655', 'Lavadora', 2179.9, 1, 2179.9),
(6, 'camila santos', 'rua dos estrados', '4562-85590', 'lavadora', 2179.9, 1, 2179.9),
(7, 'Amanda aparecida', 'rua estrela de belem', '5896-8695', 'microondas', 436.05, 1, 436.05),
(8, 'leticia moraes', 'rua camargo', '4444-5555', 'Fogão', 1129, 3, 3.387),
(9, 'tauan da silva', 'rua ipoema', '7896-1236', 'Fogão', 1129, 3, 3.387),
(10, 'sabrina ferreira', 'rua laranjeira', '7896-1236', 'lava-louças', 2799.9, 1, 2799.9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `preco` decimal(7,2) NOT NULL,
  `precofinal` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `imagem`, `preco`, `precofinal`) VALUES
(1, 'jardineira', 'Linda jardineira com 30 % de desconto na primeira compra.', './imagem/img1.jpg', '109.98', '99.99'),
(2, 'jardineira', 'Linda jardineira com 30 % de desconto na primeira compra.', './imagem/img2.jpg', '89.99', '79.99'),
(3, 'blusa', 'Linda blusa com 30 % de desconto na primeira compra.', './imagem/img3.png', '59.99', '49.99'),
(4, 'blusa', 'Linda blusa com 30 % de desconto na primeira compr...', './imagem/img4.jpg', '65.00', '45.99'),
(5, 'blusa', 'Linda blusa com 30 % de desconto na primeira compr...', './imagem/img5.jpg', '78.99', '68.99'),
(6, 'saia', 'Linda saia com 30 % de desconto na primeira compr...', './imagem/img6.jpg', '89.99', '79.99'),
(7, 'saia', 'Linda saia com 30 % de desconto na primeira compr...', './imagem/img7.jpg', '64.99', '54.99'),
(8, 'saia', 'Linda saia com 30 % de desconto na primeira compr...', './imagem/img8.jpg', '89.99', '79.99'),
(9, 'saia', 'Linda saia com 30 % de desconto na primeira compr...', './imagem/img9.jpg', '79.99', '69.99'),
(10, 'jaqueta', 'Linda jaqueta com 30 % de desconto na primeira compr...', './imagem/img10.png', '159.99', '139.99'),
(11, 'jaqueta', 'Linda jaqueta com 30 % de desconto na primeira compr...', './imagem/img11.jpg', '129.99', '109.99'),
(12, 'vestido', 'Lindo vestido com 30 % de desconto na primeira compr...', './imagem/img12.jpg', '89.99', '79.99'),
(13, 'vestido', 'Lindo vestido com 30 % de desconto na primeira compr...', './imagem/img13.jpg', '109.98', '99.99'),
(14, 'calca', 'Linda calça com 30 % de desconto na primeira compr...', './imagem/img14.jpg', '89.99', '79.99'),
(15, 'calca', 'Linda calça com 30 % de desconto na primeira compr...', './imagem/img15.jpg', '79.99', '69.99'),
(16, 'sapato', 'Lindo sapato com 30 % de desconto na primeira compr...', './imagem/img16.png', '149.99', '139.99'),
(17, 'diverso', 'Linda roupa com 30 % de desconto na primeira compr...', './imagem/img17.jpg', '79.99', '69.99'),
(18, 'diverso', 'Linda roupa com 30 % de desconto na primeira compr...', './imagem/img18.jpg', '89.99', '79.99');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `escolha`
--
ALTER TABLE `escolha`
  ADD KEY `idproduto` (`idproduto`),
  ADD KEY `idtipos` (`idtipos`);

--
-- Índices para tabela `opcao`
--
ALTER TABLE `opcao`
  ADD PRIMARY KEY (`idtipos`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idproduto`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idproduto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT de tabela `opcao`
--
ALTER TABLE `opcao`
  MODIFY `idtipos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `escolha`
--
ALTER TABLE `escolha`
  ADD CONSTRAINT `escolha_ibfk_1` FOREIGN KEY (`idproduto`) REFERENCES `produtos` (`idproduto`),
  ADD CONSTRAINT `escolha_ibfk_2` FOREIGN KEY (`idtipos`) REFERENCES `opcao` (`idtipos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
