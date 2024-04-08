import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container styles="bg-zinc-900">
        <h1 className="font-bold text-4xl mb-5 text-red-500 transform hover:scale-105 duration-200">404 | Not Found</h1>
        <p className="font-bold text-mb mb-5 text-gray-400" >Esta página não foi encontrada</p>
    </Container>
  );
}
