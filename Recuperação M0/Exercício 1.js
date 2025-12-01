function controleDeEstoque() {
  let estoque = 50;
  let vendidosManha = 12;
  let vendidosTarde = 7;
  let devolvidos = 3;

  // a) Reduz o estoque pelas vendas da manhã
  estoque -= vendidosManha;

  // b) Reduz pelas vendas da tarde e adiciona devoluções
  estoque -= vendidosTarde;
  estoque += devolvidos;

  // c) Entrada de 10 unidades e saída de 5
  estoque += 10;
  estoque -= 5;

  // d) Redução pela metade
  estoque /= 2;
}
controleDeEstoque();