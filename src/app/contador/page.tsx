"use client";
import "../globals.css";
import Container from "../../components/Container";
import LinkButton from "../../components/LinkButton";
import Titulo from "@/components/Title";
import { useState, useEffect } from "react";
import ButtonsCounts from "../../components/ButtonsCounts";

export default function PageContador() {
  const [valor, setValor] = useState(0);
  const [cor, setCor] = useState("bg-blue-500");

  useEffect(() => {
    if (valor === 0) {
      setCor("bg-blue-500");
    } else if (valor > 0) {
      setCor("bg-green-500");
    } else {
      setCor("bg-red-500");
    }
  }, [valor]);

  return (
    <Container addClassName="bg-zinc-900">
      <Titulo addClassName="mb-10">Contador</Titulo>
        <h2 className={`${cor} text-2xl text-gray-200 font-bold px-4 py-2 rounded-md mb-4 hover:text-zinc-900 hover:bg-gray-200`}>{valor}</h2>
        <div className="flex gap-2 mb-14 items-end">
          <ButtonsCounts addClassName="bg-red-500 hover:bg-red-700" onClick={() => {setValor(valor-1)}}>-1</ButtonsCounts>
          <ButtonsCounts addClassName="bg-blue-500 hover:bg-blue-700" len="w-20 h-20" onClick={() => {setValor(0)}}>0</ButtonsCounts>
          <ButtonsCounts addClassName="bg-green-500 hover:bg-green-700" onClick={() => {setValor(valor+1)}}>+1</ButtonsCounts>
        </div>
      <LinkButton nomePage="Voltar" urlPage="/" />
    </Container>
  );
}