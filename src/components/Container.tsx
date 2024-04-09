interface PropsContainer {
  addClassName?: string;
  children: React.ReactNode;
}

export default function Container(props: PropsContainer) {
  return (
    <main className={`flex flex-col justify-center items-center h-screen w-screen ${props.addClassName}`}>
      {props.children}
    </main>
  )
}