interface PropsButtonsCounts{
  addClassName?: string;
  children: React.ReactNode;
  onClick: () => void;
};

export default function ButtonsCounts(props: PropsButtonsCounts) {
  const { addClassName, children, onClick } = props;

  return (
    <button className={`text-2xl text-white font-bold w-12 h-12  rounded-full ${addClassName}`} onClick={onClick}>
      {children}
    </button>
  );
}