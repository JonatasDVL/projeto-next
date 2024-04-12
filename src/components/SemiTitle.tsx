interface PropsTitulo {
  addClassName?: string;
  children: React.ReactNode;
};

export default function Titulo(props: PropsTitulo) {
  const addClassName = props.addClassName || "";
  
  return (
    <h2 className={`${addClassName} font-bold text-xl text-red-500 hover:text-gray-100 transform hover:scale-105 
    duration-200`}>
      {props.children}
    </h2>
  );
};