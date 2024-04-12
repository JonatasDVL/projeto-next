interface PropsSquareVelha {
  addClassName?: string;
  children: React.ReactNode;
}

export default function SquareVelha(props: PropsSquareVelha) {
  const {children, addClassName} = props;

  return(
    <div className={`${addClassName} flex justify-center items-center text-2xl border-2 text-gray-200 font-bold border-zinc-500`}>
      {children}
    </div>
  )
}