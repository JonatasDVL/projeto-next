interface PropsButtonsCounts{
  addClassName?: string;
  children: React.ReactNode;
  onClick: () => void;
};

export default function ButtonsCounts(props: PropsButtonsCounts) {
  const { addClassName, children, onClick } = props;

  return (
    <button className={`text-2xl text-gray-200 font-bold w-24 h-24  rounded-full hover:text-zinc-900  transform hover:scale-105 duration-200 ${addClassName}`} onClick={onClick}>
      {children}
    </button>
  );
}