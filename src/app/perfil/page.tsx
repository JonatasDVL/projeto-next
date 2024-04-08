import "../globals.css";
import Container from "../../components/Container";
import LinkButton from "../../components/LinkButton";

export default function pagePerfil(){
  return(
    <Container styles="bg-zinc-900">
      <h1>perfil</h1>
      <LinkButton nomePage="Voltar" urlPage="/"/>
    </Container>
  )
}