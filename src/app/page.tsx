import Container from '../components/Container'
import LinkButton from '../components/LinkButton';

export default function Home() {
    const dataPages = [
      {
        "nome": "Perfil",
        "url": "perfil"
      },
      {
        "nome": "Contador",
        "url": "contador"
      }
    ]
    return (
      <Container styles="bg-zinc-900">
        <h1 className="font-bold text-4xl mb-5 text-red-500 hover:text-gray-100 transform hover:scale-105 duration-200">Projetos</h1>
        <div className="flex justify-start flex-wrap w-1/2 gap-5 px-4 py-2 border-2 border-zinc-500 rounded-md">
          {dataPages.map((page, index) => (
            <LinkButton key={index} nomePage={page.nome} urlPage={page.url}/>
          ))}
        </div>
      </Container>
  );
}
