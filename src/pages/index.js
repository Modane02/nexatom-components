import Image from "next/image";
import LogoParceira from "../components/cores/LogoParceira";
import Marker from "../components/cores/Marker";
import Text from "../components/cores/Text";
import Title from "../components/cores/Title";
import ButtonLink from "../components/elements/ButtonLink";
import LogoNavBar from "../components/patterns/LogoNavBar";
import SimpleCard from "../components/patterns/SimpleCard";

export default function Home() {
  return (
    <div className="app">
      <LogoNavBar backgroundColor="red" logoSrc="/mais-pet-logo-png.png" whatsapp="18996080815" telefone="1832734074" textColor="light"/>
      <ButtonLink background="success" color="light" href="/" border="success" round="rounded">Sucesso!</ButtonLink>
      <SimpleCard image="/mais-pet-logo-png.png">Texto <Marker italic bold color="blue">Marcado</Marker></SimpleCard>
      <ButtonLink background="transparent" color="success" href="/" border="success" round="rounded">Sucesso!</ButtonLink>
    </div>
  )
}