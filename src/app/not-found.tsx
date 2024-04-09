import LinkButton from '@/components/LinkButton';
import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container addClassName="bg-zinc-900">
      <h1 className="font-bold text-4xl mb-5 text-red-500 transform hover:scale-105 duration-200">
        404<span className='border-l-2 p-2 m-2 border-red-500'>Not Found</span>
      </h1>
      <p className="font-bold text-mb mb-5 text-gray-400" >Esta página não foi encontrada</p>
      <LinkButton nomePage="Voltar a Home" urlPage="/" addClassName="border-red-500 text-gray-400 hover:text-zinc-900 hover:bg-red-500"/>
    </Container>
  );
}
