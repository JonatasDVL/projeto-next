interface PropsButtonsCounts{
  addClassName?: string;
  botaoSimbolo: string | React.ReactNode;
  onClick: () => void;
};

export default function ButtonCalculadora(props: PropsButtonsCounts){
  const { addClassName, onClick, botaoSimbolo} = props;
  
  return(
    <button className={`${addClassName} flex justify-center items-center rounded-full text-2xl px-4 py-2  w-12 h-12 hover:bg-zinc-400 transform duration-200`} onClick={onClick}>
      {botaoSimbolo}
    </button>
  )
}