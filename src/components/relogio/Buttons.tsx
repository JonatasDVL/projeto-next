interface PropsButtonsCounts{
  addClassName?: string;
  children: React.ReactNode;  
  tipo: string;
  tipoDoButton: string;
  onClick: () => void;
};

export default function ButtonsCounts(props: PropsButtonsCounts) {
  const { addClassName, children, tipoDoButton, tipo, onClick } = props;

  let clickOn = ""

  if (tipoDoButton == tipo){
    clickOn = "bg-neutral-800 rounded-full w-8 h-8"
  }

  return (
    <button className={`${addClassName} ${clickOn} font-bold hover:text-zinc-950 transform hover:scale-105 duration-200 flex justify-center items-center`} onClick={onClick}>
      {children}
    </button>
  );
}