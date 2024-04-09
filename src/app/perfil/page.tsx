import "../globals.css";
import Container from "../../components/Container";
import LinkButton from "../../components/LinkButton";
import Titulo from "@/components/Title";

export default function pagePerfil(){
  return(
    <Container addClassName="bg-zinc-900">
      <Titulo>Perfil</Titulo>
      <LinkButton nomePage="Voltar" urlPage="/"/>
    </Container>
  )
}