interface PropsButtonsCounts{
  addClassName?: string;
  children: React.ReactNode;  
  onClick: () => void;
};

export default function ButtonsCounts(props: PropsButtonsCounts) {
  const { addClassName, children, onClick } = props;

  return (
    <button className={`${addClassName} text-lg font-bold w-24 text-gray-200 border-2 py-2 px-4 rounded-md hover:text-zinc-900 transform hover:scale-105 duration-200 flex justify-center`} onClick={onClick}>
      {children}
    </button>
  );
}