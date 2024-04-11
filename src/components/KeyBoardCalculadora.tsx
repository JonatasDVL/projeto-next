import Square from '@/components/Square';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import ButtonCalculadora from './ButtonCalculadora';

interface PropsKeyBoardCalculadora{
  onClick: (valor: string, simbolo: string | JSX.Element) => void;
}

export default function KeyBoardCalculadora(props: PropsKeyBoardCalculadora) {
  const handleClick = (valor: string) => { // Definindo a função de clique
    props.onClick(valor, ''); // Passando o valor do botão para a função onClick
  };
  const botoesCalculadora = [
    {
      "simbolo": "C",
      "valor": "clearAll"
    },
    {
      "simbolo": <BackspaceOutlinedIcon/>,
      "valor": "backSpace"
    },
    {
      "simbolo": "%",
      "valor": "/100"
    },
    {
      "simbolo": "÷",
      "valor": "/"
    },
    {
      "simbolo": "7",
      "valor": "7"
    },
    {
      "simbolo": "8",
      "valor": "8"
    },
    {
      "simbolo": "9",
      "valor": "9"
    },
    {
      "simbolo": "×",
      "valor": "*"
    },
    {
      "simbolo": "4",
      "valor": "4"
    },
    {
      "simbolo": "5",
      "valor": "5"
    },
    {
      "simbolo": "6",
      "valor": "6"
    },
    {
      "simbolo": "-",
      "valor": "-"
    },
    {
      "simbolo": "1",
      "valor": "1"
    },
    {
      "simbolo": "2",
      "valor": "2"
    },
    {
      "simbolo": "3",
      "valor": "3"
    },
    {
      "simbolo": "+",
      "valor": "+"
    },
    {
      "simbolo": <SwapHorizOutlinedIcon/>,
      "valor": ""
    },
    {
      "simbolo": "0",
      "valor": "0"
    },
    {
      "simbolo": ".",
      "valor": "."
    },
    {
      "simbolo": "=",
      "valor": "="
    },
  ];

  return (
    <Square addClassName='justify-center flex-wrap gap-1 mb-5'>
      {botoesCalculadora.map((botao, index) => (
        <ButtonCalculadora key={index} botaoSimbolo={botao.simbolo} onClick={() => handleClick(botao.valor)} />
      ))}
    </Square>
  );
};