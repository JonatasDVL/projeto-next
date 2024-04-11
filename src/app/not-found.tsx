import LinkButton from '@/components/LinkButton';
import Container from '@/components/Container'
import Titulo from "@/components/Title"

export default function NotFound() {
  return (
    <Container addClassName="bg-zinc-900">
      <Titulo addClassName='mb-5'>
        404<span className='border-l-2 p-2 m-2 border-red-500'>Not Found</span>
      </Titulo>
      <p className="font-bold text-mb mb-5 text-gray-400" >Esta página não foi encontrada</p>
      <LinkButton nomePage="Voltar a Home" urlPage="/" addClassName="border-red-500 text-gray-400 hover:text-zinc-900 hover:bg-red-500"/>
    </Container>
  );
}
