import Visores from "@/components/relogio/Visores";

interface PropsPainelRelogio {
  diaAtual: number;
  mesAtual: number;
  anoAtual: number;
  diaDaSemanaAtual: number;
  horaAtual: number;
  minutoAtual: number;
  segundoAtual: number;
  
}

export default function PainelRelogio(props: PropsPainelRelogio) {
  const { diaAtual, mesAtual, anoAtual, diaDaSemanaAtual, horaAtual, minutoAtual, segundoAtual } = props;

  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        <Visores type="Horas" time={horaAtual} />:
        <Visores type="Minutos" time={minutoAtual} />:
        <Visores type="Segundos" time={segundoAtual} />
      </div>
      <p className="mt-6">{diaDaSemanaAtual === 0 ? "Domingo" : diaDaSemanaAtual === 1 ? "Segunda-feira" : diaDaSemanaAtual === 2 ? "Terça-feira" : diaDaSemanaAtual === 3 ? "Quarta-feira" : diaDaSemanaAtual === 4 ? "Quinta-feira" : diaDaSemanaAtual === 5 ? "Sexta-feira" : diaDaSemanaAtual === 6 ? "Sábado" : ""}, {diaAtual.toString().length == 1 ? "0" + diaAtual : diaAtual}/{mesAtual.toString().length == 1 ? "0" + mesAtual : mesAtual}/{anoAtual}</p>
    </div>
  );
}