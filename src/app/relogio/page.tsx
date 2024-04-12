"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Buttons from "@/components/relogio/Buttons";
import PainelAlarme from "@/components/relogio/PainelAlarme";
import PainelCronometro from "@/components/relogio/PainelCronometro";
import PainelRelogio from "@/components/relogio/PainelRelogio";
import PainelTemporizador from "@/components/relogio/PainelTemporizador";
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

import { useEffect, useState } from "react";

export default function PageRelogio() {

  const [tempo, setTempo] = useState(new Date())
  const [segundoAtual, setSegundoAtual] = useState(tempo.getSeconds())
  const [minutoAtual, setMinutoAtual] = useState(tempo.getMinutes())
  const [horaAtual, setHoraAtual] = useState(tempo.getHours())
  const [diaDaSemanaAtual, setDiaDaSemanaAtual] = useState(tempo.getDay())
  const [diaAtual, setDiaAtual] = useState(tempo.getDate())
  const [mesAtual, setMesAtual] = useState(tempo.getMonth())
  const [anoAtual, setAnoAtual] = useState(tempo.getFullYear())
  const [tipo, setTipo] = useState("Relógio")

  useEffect(() => {
    const interval = setInterval(() => {
      const novoTempo = new Date();
      setTempo(novoTempo);
      setSegundoAtual(novoTempo.getSeconds());
      setMinutoAtual(novoTempo.getMinutes());
      setHoraAtual(novoTempo.getHours());
      setDiaDaSemanaAtual(novoTempo.getDay());
      setDiaAtual(novoTempo.getDate());
      setMesAtual(novoTempo.getMonth());
      setAnoAtual(novoTempo.getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container addClassName="text-white bg-zinc-900">
      <Title>{tipo}</Title>
      <div className="mt-5 flex justify-center items-center gap-5">
        <Buttons tipoDoButton="Alarme" tipo={tipo} onClick={() => setTipo("Alarme")}><AccessAlarmOutlinedIcon /></Buttons>
        <Buttons tipoDoButton="Relógio" tipo={tipo} onClick={() => setTipo("Relógio")}><AccessTimeOutlinedIcon /></Buttons>
        <Buttons tipoDoButton="Temporizador" tipo={tipo} onClick={() => setTipo("Temporizador")}><HourglassEmptyIcon /></Buttons>
        <Buttons tipoDoButton="Cronometro" tipo={tipo} onClick={() => setTipo("Cronometro")}><TimerOutlinedIcon /></Buttons>
      </div>

      {tipo === "Relógio" ?
        <PainelRelogio diaAtual={diaAtual} mesAtual={mesAtual} anoAtual={anoAtual} diaDaSemanaAtual={diaDaSemanaAtual} horaAtual={horaAtual} minutoAtual={minutoAtual} segundoAtual={segundoAtual} />
        : tipo === "Temporizador" ? <PainelTemporizador/>
        : tipo === "Cronometro" ? <PainelCronometro/>
        : tipo === "Alarme" ? <PainelAlarme/> : ""
      }

    </Container>
  )
}