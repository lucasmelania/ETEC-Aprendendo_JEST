import {
  quadrado,
  areaTriangulo,
  porcentagem,
} from "../calculadora/novasfuncionalidades";

// descrição   +   função que será executada

test("Testar a função quadrado de um numero", () => {
  // expectativa de retorno 49
  const resultado = quadrado(7);
  expect(resultado).toBe(49);
});

test("Testar a função area do triangulo", () => {
  // expectativa de retorno 20
  const resultado = areaTriangulo(10, 4);
  expect(resultado).toBe(20);
});

test("Testar a função porcentagem", () => {
  // expectativa de retorno 9
  const resultado = porcentagem(90);
  expect(resultado).toBe(9);
});
