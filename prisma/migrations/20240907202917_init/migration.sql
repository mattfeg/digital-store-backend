-- CreateTable
CREATE TABLE `avaliacoes` (
    `avaliacao_id` INTEGER NOT NULL AUTO_INCREMENT,
    `avaliacao_opiniao` VARCHAR(255) NOT NULL,
    `avaliacao_nota` INTEGER NOT NULL,
    `avaliacao_data` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `usuario_id` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`avaliacao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enderecos` (
    `endereco_id` INTEGER NOT NULL AUTO_INCREMENT,
    `endereco_estado` VARCHAR(25) NOT NULL,
    `endereco_cidade` VARCHAR(50) NOT NULL,
    `endereco_bairro` VARCHAR(25) NOT NULL,
    `endereco_rua` VARCHAR(50) NOT NULL,
    `endereco_numero` VARCHAR(10) NOT NULL,
    `endereco_complemento` VARCHAR(100) NULL,
    `endereco_referencia` VARCHAR(100) NULL,
    `endereco_cep` VARCHAR(10) NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `enderecos_usuario_id_key`(`usuario_id`),
    PRIMARY KEY (`endereco_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `produto_id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto_nome` VARCHAR(255) NOT NULL,
    `produto_descricao` TEXT NOT NULL,
    `produto_preco` INTEGER NOT NULL,
    `produto_status` BOOLEAN NOT NULL DEFAULT true,
    `produto_estoque` INTEGER NOT NULL,
    `produto_peso` INTEGER NULL,
    `produto_em_promocao` BOOLEAN NOT NULL DEFAULT false,
    `produto_destaque` BOOLEAN NOT NULL DEFAULT false,
    `produto_tags` INTEGER NULL,
    `marca_id` INTEGER NULL,
    `categoria_id` INTEGER NULL,
    `genero_id` INTEGER NULL,
    `colecao_id` INTEGER NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`produto_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `desejos` (
    `desejo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `desejos_usuario_id_key`(`usuario_id`),
    PRIMARY KEY (`desejo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `desejoItens` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `desejo_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,

    UNIQUE INDEX `desejoItens_desejo_id_produto_id_key`(`desejo_id`, `produto_id`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carrinhos` (
    `carrinho_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `carrinhos_usuario_id_key`(`usuario_id`),
    PRIMARY KEY (`carrinho_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carrinhoItens` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `carrinho_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `carrinhoItens_carrinho_id_produto_id_key`(`carrinho_id`, `produto_id`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `pedido_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_data` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `pedido_status` VARCHAR(191) NOT NULL DEFAULT 'Em Andamento',
    `pedido_descricao` VARCHAR(191) NULL,
    `pedido_imagem` VARCHAR(191) NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`pedido_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidoItens` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `preco_unitario` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `pedidoItens_pedido_id_produto_id_key`(`pedido_id`, `produto_id`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colecoes` (
    `colecao_id` INTEGER NOT NULL AUTO_INCREMENT,
    `colecao_nome` VARCHAR(30) NOT NULL,
    `colecao_descricao` VARCHAR(255) NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`colecao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generos` (
    `genero_id` INTEGER NOT NULL AUTO_INCREMENT,
    `genero_nome` VARCHAR(30) NOT NULL,
    `genero_descricao` VARCHAR(255) NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`genero_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `categoria_id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoria_nome` VARCHAR(30) NOT NULL,
    `categoria_descricao` VARCHAR(255) NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`categoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marcas` (
    `marca_id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca_nome` VARCHAR(50) NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`marca_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tamanhos` (
    `tamanho_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tamanho_altura` INTEGER NOT NULL,
    `tamanho_comprimento` INTEGER NOT NULL,
    `tamanho_largura` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `tamanhos_produto_id_key`(`produto_id`),
    PRIMARY KEY (`tamanho_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagens` (
    `imagem_id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem_url` VARCHAR(500) NULL,
    `produto_id` INTEGER NOT NULL,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`imagem_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_email` VARCHAR(200) NOT NULL,
    `usuario_senha` VARCHAR(255) NULL,
    `usuario_nome` VARCHAR(100) NOT NULL,
    `usuario_cpf` VARCHAR(20) NOT NULL,
    `usuario_celular` VARCHAR(20) NULL,
    `usuario_newsletter` BOOLEAN NULL DEFAULT false,
    `criado_em` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizado_em` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `usuario_email`(`usuario_email`),
    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `avaliacoes` ADD CONSTRAINT `avaliacoes_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enderecos` ADD CONSTRAINT `enderecos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_marca_id_fkey` FOREIGN KEY (`marca_id`) REFERENCES `marcas`(`marca_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`categoria_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_genero_id_fkey` FOREIGN KEY (`genero_id`) REFERENCES `generos`(`genero_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_colecao_id_fkey` FOREIGN KEY (`colecao_id`) REFERENCES `colecoes`(`colecao_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `desejos` ADD CONSTRAINT `desejos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `desejoItens` ADD CONSTRAINT `desejoItens_desejo_id_fkey` FOREIGN KEY (`desejo_id`) REFERENCES `desejos`(`desejo_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `desejoItens` ADD CONSTRAINT `desejoItens_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`produto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carrinhos` ADD CONSTRAINT `carrinhos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carrinhoItens` ADD CONSTRAINT `carrinhoItens_carrinho_id_fkey` FOREIGN KEY (`carrinho_id`) REFERENCES `carrinhos`(`carrinho_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carrinhoItens` ADD CONSTRAINT `carrinhoItens_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`produto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidoItens` ADD CONSTRAINT `pedidoItens_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`pedido_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidoItens` ADD CONSTRAINT `pedidoItens_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`produto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tamanhos` ADD CONSTRAINT `tamanhos_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`produto_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagens` ADD CONSTRAINT `imagens_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`produto_id`) ON DELETE CASCADE ON UPDATE CASCADE;
