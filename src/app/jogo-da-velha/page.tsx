"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Square from "@/components/jogo-da-velha/SquareVelha";
import SemiTitle from "@/components/SemiTitle";
import { useState } from "react";

export default function PageJogoDaVelha() {
  const [tabela, setTabela] = useState([
    { id: 0, valor: "" }, { id: 1, valor: "" }, { id: 2, valor: "" }, 
    { id: 3, valor: "" }, { id: 4, valor: "" }, { id: 5, valor: "" }, 
    { id: 6, valor: "" }, { id: 7, valor: "" }, { id: 8, valor: "" }, 
  ]);

  type Tabela = { id: number; valor: string }[];

  const [turno, setTurno] = useState("X")   
  const [terminou, setTerminou] = useState(false)
  const [ganhou, setGanhou] = useState("")
  const [round, setRound] = useState(0)

  function verficarGanhador(tabela: Tabela){
    if ((tabela[0].valor == turno && tabela[1].valor == turno && tabela[2].valor == turno) || (tabela[3].valor == turno && tabela[4].valor == turno && tabela[5].valor == turno) || (tabela[6].valor == turno && tabela[7].valor == turno && tabela[8].valor == turno) || (tabela[0].valor == turno && tabela[3].valor == turno && tabela[6].valor == turno) || (tabela[1].valor == turno && tabela[4].valor == turno && tabela[7].valor == turno) || (tabela[2].valor == turno && tabela[5].valor == turno && tabela[8].valor == turno) || (tabela[0].valor == turno && tabela[4].valor == turno && tabela[8].valor == turno) || (tabela[2].valor == turno && tabela[4].valor == turno && tabela[6].valor == turno)) {
      setGanhou(turno)
      setTerminou(true)
    } else if (round === 9) {
      setTerminou(true)
    }
  }

  function handleClick(id: number) {
    if (!terminou && tabela[id].valor === "" && terminou == false) {
      const novaTabela = [...tabela];
      novaTabela[id].valor = turno;
      setTabela(novaTabela);
      setRound(round+1);
      verficarGanhador(tabela);
      setTurno(turno === "X" ? "O" : "X");
    }
  }

  return (
    <Container addClassName="bg-zinc-900 text-white">
      <Title>Jogo-da-velha</Title>
      {terminou === false ? <SemiTitle>Vez de {turno}</SemiTitle> : <SemiTitle>Fim de Jogo</SemiTitle>}
      {terminou === true ? (ganhou !== "" ? <SemiTitle>Vencedor {ganhou}</SemiTitle> : <SemiTitle>Empate</SemiTitle>) : <></>}
      <div className="flex justify-center items-center mt-10 flex-wrap gap-2 w-64">
      {tabela.map((quadrado, index) => (
        <Square key={index} id={quadrado.id} onClick={() => handleClick(quadrado.id)}>{quadrado.valor}</Square>
      ))}
      </div>
    </Container>
  )
}