import { useState, useEffect } from "react";
import Visores from "@/components/relogio/Visores";


interface PropsPainelTemporizador {

}

export default function PainelTemporizador(props: PropsPainelTemporizador) {
  const { } = props;

  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(5)
  const [horas, setHoras] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      if (segundos !== 0 || minutos !== 0 || horas !== 0) {
        if ((horas > 0 || minutos > 0) && segundos === 0) {
          if (minutos === 0) {
            setHoras(prevHoras => prevHoras - 1);  
            setMinutos(59)
          } else {
            setMinutos(prevMinutos => prevMinutos - 1);
          }
          setSegundos(59);
        } else {
          setSegundos(prevSegundos => prevSegundos - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [segundos, minutos]);

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <Visores type="Horas" time={horas} />:
      <Visores type="Minutos" time={minutos} />:
      <Visores type="Segundos" time={segundos} />


    </div>
  )
}