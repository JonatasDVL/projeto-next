"use client";
import Titulo from '@/components/Title';
import Container from '@/components/Container'
import LinkButton from '@/components/LinkButton';
import Square from '@/components/calculadora/SquareCalculadora';
import { useState } from 'react';
import KeyBoardCalculadora from '@/components/calculadora/KeyBoardCalculadora';

export default function PageCalculadora() {
  const [valor, setValor] = useState("0");

  function handleClick(value: string) {
    if (value === "=") {
      const operadores = ["+", "-", "/", "*"]
      const ultimo = valor.substr(valor.length - 1)
      if (operadores.includes(ultimo)) {
        setValor(String(eval(valor.substr(0, valor.length - 1))))
      } else {
        setValor(String(eval(valor)))
      }
    } else if (value === "clearAll") {
      setValor("0");
    } else if (value === "backSpace") {
      setValor(valor.substr(0, valor.length - 1));
      if (valor.length == 0) {
        setValor("0")
      }
    } else {
      const operadores = ["+", "-", "/", "*"]
      const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      const ultimo = valor.substr(valor.length - 1)
      let valorTemp = valor.replaceAll('+', '#').replaceAll('-', '#').replaceAll('*', '#').replaceAll('/', '#')
      const arrayDeNumeros = valorTemp.split("#")
      const ultimoValor = arrayDeNumeros[arrayDeNumeros.length - 1]
      
      if (valor === "0" && !operadores.includes(value) && value != "." && value != "/100") {
        setValor(value);
      } else if ((operadores.includes(value) && !operadores.includes(ultimo)) || (value === "/100" && !operadores.includes(ultimo)) || (numeros.includes(value)) || (value === "0" && (ultimoValor != "0" || ultimoValor.includes("."))) || (value === "." && !ultimoValor.includes(".") && !operadores.includes(ultimo))) {
        setValor(valor + value);
      }
    }
  };

  return (
    <Container addClassName="bg-zinc-900">
      <Titulo addClassName='mb-5'>Calculadora</Titulo>
      <Square addClassName='justify-end gap-5 text-2xl'>{valor === "" ? 0 : valor}</Square>
      <KeyBoardCalculadora onClick={handleClick} />
      <LinkButton nomePage="Voltar" urlPage="/" />
      <p className='mt-6 text-sm text-white'>Projeto Incompleto</p>

    </Container>
    
  );
};