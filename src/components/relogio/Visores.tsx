interface PropsVisores {
  addClassName?: string;
  type: string;
  time: number;
}

export default function Visores(props: PropsVisores) {
  const {addClassName, type, time} = props;
  
  return (
    <div className="w-24 h-24 bg-zinc-950 rounded-md flex flex-col justify-center items-center hover:scale-105 transform duration-200 shadow-md shadow-black ">
      <p className="text-4xl">{time.toString().length == 1 ? "0" + time : time}</p>
      <p className="text-m">{type}</p>
    </div>
  );
}