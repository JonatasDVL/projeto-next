interface PropsSquare {
  addClassName?: string;
  children: React.ReactNode;
}

export default function Square(props: PropsSquare) {
  const addClassName = props.addClassName || "";
  return(
    <div className={`flex ${addClassName} w-64 px-5 py-5 border-2 overflow-hidden text-gray-200 font-bold border-zinc-500 rounded-md`}>
      {props.children}
    </div>
  )
}
