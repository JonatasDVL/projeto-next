import Titulo from '@/components/Title';
import Container from '../components/Container'
import LinkButton from '../components/LinkButton';

export default function PageHome() {
    const dataPages = [
      {
        "nome": "Perfil",
        "url": "perfil"
      },
      {
        "nome": "Contador",
        "url": "contador"
      },
      {
        "nome": "Calculadora",
        "url": "calculadora"
      },
      {
        "nome": "Jogo da Velha",
        "url": "jogo-da-velha"
      },
      {
        "nome": "teste3",
        "url": "teste3"
      },
      {
        "nome": "teste2",
        "url": "teste2"
      },
      {
        "nome": "teste3",
        "url": "teste3"
      }
    ]
    return (
      <Container addClassName="bg-zinc-900">
        <Titulo addClassName='mb-5'>Projetos</Titulo>
        <div className="flex justify-start flex-wrap w-1/2 gap-5 px-5 py-5 border-2 border-zinc-500 rounded-md">
          {dataPages.map((page, index) => (
            <LinkButton key={index} nomePage={page.nome} urlPage={page.url} addClassName='flex-1'/>
          ))}
        </div>
      </Container>
  );
}

// deixar melhor aquele quadro com os buttons
