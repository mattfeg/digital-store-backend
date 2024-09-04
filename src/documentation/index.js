exports.Marcas = {
  marca_id: 1212,
  marca_nome: "Nike",
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Avaliacoes = {
  avaliacao_id: 1,
  avaliacao_opiniao: "String",
  avaliacao_nota: 1,
  usuario_id: 1,
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Categorias = {
  categoria_id: 1,
  categoria_nome: "String",
  categoria_descricao: "String",
  produtos: [],
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Enderecos = {
  endereco_id: 1212,
  endereco_estado: "String",
  endereco_cidade: "String",
  endereco_bairro: "String",
  endereco_rua: "String",
  endereco_numero: "String",
  endereco_complemento: "String",
  endereco_referencia: "String",
  endereco_cep: "12345-67",
  usuario_id: 1,
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Imagens = {
  pedido_id: 1,
  pedido_status: true,
  pedido_descricao: "String",
  pedido_imagem: 1,
  itens: [],
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Pedidos = {
  pedido_id: 1,
  pedido_status: "Em andamento",
  pedido_descricao: "String",
  pedido_imagem: 1,
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Produtos = {
  produto_id: 1,
  produto_nome: "String",
  produto_descricao: "String",
  produto_preco: 100,
  produto_status: true,
  produto_estoque: 50,
  produto_peso: 150,
  produto_em_promocao: false,
  produto_destaque: false,
  produto_tags: "String",
  marca_id: 1,
  categoria_id: 1,
  produto_imagems: [],
  produto_tamanho: 1,
  genero_id: 1,
  colecao_id: 1,
  pedidoItens: [],
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};
exports.Usuarios = {
  usuario_id: 1,
  usuario_email: "email@email.com",
  usuario_senha: "String",
  usuario_nome: "String",
  usuario_cpf: "123.123.123-12",
  usuario_celular: "8591234-5678",
  usuario_newsletter: false,
  usuario_avaliacoes: [],
  usuario_endereco: 1,
  carrinhos: 1,
  desejos: 1,
  criado_em: "2024-08-27 00:59:36",
  atualizado_em: "2024-08-27 00:59:36"
};