"use client";
import "../globals.css";
import Container from "../../components/Container";
import LinkButton from "../../components/LinkButton";
import Titulo from "@/components/Title";
import { useState } from "react";
import ButtonsCounts from "../../components/ButtonsCounts";

export default function pageContador() {
  const [valor, setValor] = useState(0);

  return (
    <Container addClassName="bg-zinc-900">
      <Titulo>Contador</Titulo>
        <h2 className="bg-white text-2xl font-bold px-4 py-2 rounded-md mb-4">{valor}</h2>
        <div className="flex gap-2 mb-4">
          <ButtonsCounts addClassName="bg-red-500" onClick={() => {setValor(valor-1)}}>-1</ButtonsCounts>
          <ButtonsCounts addClassName="bg-blue-500" onClick={() => {setValor(0)}}>0</ButtonsCounts>
          <ButtonsCounts addClassName="bg-green-500" onClick={() => {setValor(valor+1)}}>+1</ButtonsCounts>
        </div>
      <LinkButton nomePage="Voltar" urlPage="/" />
    </Container>
  );
}