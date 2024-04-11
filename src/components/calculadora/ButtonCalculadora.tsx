interface PropsButtonsCounts {
  addClassName?: string;
  botaoSimbolo: string | React.ReactNode;
  onClick: () => void;
};

export default function ButtonCalculadora(props: PropsButtonsCounts) {
  const { addClassName, onClick, botaoSimbolo } = props;
  let especial = ""
  if (props.botaoSimbolo == "=") {
    especial = "bg-red-500 hover:bg-red-400"
  } else {
    especial = "hover:bg-zinc-400"
  }

  return (
      <button className={`${addClassName} ${especial} flex justify-center items-center rounded-full text-2xl px-4 py-2  w-12 h-12 transform duration-200`} onClick={onClick}>
        {botaoSimbolo}
      </button>
    )
}