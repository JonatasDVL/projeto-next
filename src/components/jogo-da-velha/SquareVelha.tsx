interface PropsSquareVelha {
  id: number;
  children: React.ReactNode;
  onClick: () => void;
}

export default function SquareVelha(props: PropsSquareVelha) {
  const {id, children, onClick } = props;

  return(
    <button className={`flex justify-center items-center text-4xl w-16 h-16 border-2 text-gray-200 font-bold border-zinc-500 rounded-md hover:bg-slate-800 tranform hover:scale-105`} onClick={onClick}>
      {children}
    </button>
  )
}
