import {
  somar,
  subtrair,
  multiplicar,
  dividir,
} from "../calculadora/operacoes.js";

// descrição   +   função que será executada

test("Testar a função somar", () => {
  // expectativa de retorno 30
  const resultado = somar(10, 20);
  expect(resultado).toBe(30);
});

test("Testar a função subtrair", () => {
  // expectativa de retorno 40
  const resultado = subtrair(90, 50);
  expect(resultado).toBe(40);
});

test("Testar a função multiplicar", () => {
  // expectativa de retorno 63
  const resultado = multiplicar(9, 7);
  expect(resultado).toBe(63);
});

test("Testar a função dividir", () => {
  // expectativa de retorno 4
  const resultado = dividir(16, 4);
  expect(resultado).toBe(4);
});
