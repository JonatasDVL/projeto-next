interface PropsTitulo {
  addClassName?: string;
  children: React.ReactNode;
};

export default function Titulo(props: PropsTitulo) {
  const addClassName = props.addClassName || "";
  
  return (
    <h1 className={`font-bold text-4xl mb-5 text-red-500 hover:text-gray-100 transform hover:scale-105 
    duration-200 ${addClassName}`}>
      {props.children}
    </h1>
  );
};