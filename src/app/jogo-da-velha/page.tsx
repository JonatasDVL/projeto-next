"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import SemiTitle from "@/components/SemiTitle";
import Square from "@/components/jogo-da-velha/SquareVelha";
import Counts from "@/components/jogo-da-velha/Counts";
import Buttons from "@/components/jogo-da-velha/Buttons";
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
  const [round, setRound] = useState(1)
  const [pontosX, setPontosX] = useState(0)
  const [pontosO, setPontosO] = useState(0)
  const [pontosE, setPontosE] = useState(0)

  function verficarGanhador(tabela: Tabela) {
    if ((tabela[0].valor == turno && tabela[1].valor == turno && tabela[2].valor == turno) || (tabela[3].valor == turno && tabela[4].valor == turno && tabela[5].valor == turno) || (tabela[6].valor == turno && tabela[7].valor == turno && tabela[8].valor == turno) || (tabela[0].valor == turno && tabela[3].valor == turno && tabela[6].valor == turno) || (tabela[1].valor == turno && tabela[4].valor == turno && tabela[7].valor == turno) || (tabela[2].valor == turno && tabela[5].valor == turno && tabela[8].valor == turno) || (tabela[0].valor == turno && tabela[4].valor == turno && tabela[8].valor == turno) || (tabela[2].valor == turno && tabela[4].valor == turno && tabela[6].valor == turno)) {
      setGanhou(turno)
      setTerminou(true)
      if (turno == "X") {
        setPontosX(pontosX + 1)
      } else {
        setPontosO(pontosO + 1)
      }
    } else if (round === 9) {
      setTerminou(true)
      setPontosE(pontosE + 1)
    }
  }

  function handleClick(id: number) {
    if (!terminou && tabela[id].valor === "" && terminou == false) {
      const novaTabela = [...tabela];
      novaTabela[id].valor = turno;
      setTabela(novaTabela);
      setRound(round + 1);
      verficarGanhador(tabela);
      setTurno(turno === "X" ? "O" : "X");
    }
  }

  function proximo() {
    setTurno("X")
    setTerminou(false)
    setGanhou("")
    setRound(1)
    setTabela([
      { id: 0, valor: "" }, { id: 1, valor: "" }, { id: 2, valor: "" },
      { id: 3, valor: "" }, { id: 4, valor: "" }, { id: 5, valor: "" },
      { id: 6, valor: "" }, { id: 7, valor: "" }, { id: 8, valor: "" },
    ])
  }

  function resetar() {
    setPontosX(0)
    setPontosO(0)
    setPontosE(0)
    proximo()
  }

  return (
    <Container addClassName="bg-zinc-900 text-white">
      <Title>Jogo-da-velha</Title>
      {terminou === false ? <SemiTitle>Vez de {turno}</SemiTitle> : <SemiTitle>Fim de Jogo</SemiTitle>}
      <div className="flex justify-center items-center mt-12 mb-6 flex-wrap gap-2 w-64">
        {tabela.map((quadrado, index) => (
          <Square key={index} id={quadrado.id} onClick={() => handleClick(quadrado.id)}>{quadrado.valor}</Square>
        ))}
      </div>
      {terminou === true ? (ganhou !== "" ? <SemiTitle>Vencedor {ganhou}</SemiTitle> : <SemiTitle>Empate</SemiTitle>) : <></>}
      <div className="flex flex-col justify-center items-center mt-6 flex-wrap gap-2 w-48">
        <div className="flex justify-center items-center gap-2">
          <Counts addClassName="w-24 h-12 rounded-t-lg">X - {pontosX}</Counts>
          <Counts addClassName="w-24 h-12 rounded-t-lg">O - {pontosO}</Counts>
        </div>
        <Counts addClassName="w-full h-12 rounded-b-lg">Empate - {pontosE}</Counts>
        <div className="flex justify-center items-center gap-2">
          <Buttons addClassName="border-red-500 hover:bg-red-500" onClick={() => resetar()}>Resetar</Buttons>
          <Buttons addClassName="border-blue-500 hover:bg-blue-500" onClick={() => proximo()}>Próximo</Buttons>
        </div>
      </div>
    </Container>
  )
}