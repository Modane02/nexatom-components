import Image from "next/image";
import { useRef, useState } from "react";
import AnimatedHamburgerIcon from "../components/cores/AnimatedHamburgerIcon";
import InputField from "../components/cores/InputField";
import LogoParceira from "../components/cores/LogoParceira";
import Marker from "../components/cores/Marker";
import Text from "../components/cores/Text";
import Title from "../components/cores/Title";
import ButtonLink from "../components/elements/ButtonLink";
import CallToActionText from "../components/elements/CallToActionText";
import NameInput from "../components/elements/NameInput";
import LogoNavBar from "../components/patterns/LogoNavBar";
import SideCTACard from "../components/patterns/SideCTACard";
import SimpleCard from "../components/patterns/SimpleCard";

export default function Home() {
  
  const [val, setVal] = useState(null);
  var valorTeste = null;
  const fun = (value) => {valorTeste = value;}
  const refForm = useRef(null);
  const handleSubmitButton = () => {refForm.current.dispatchEvent(new Event("submit",{cancelable: true, bubbles: true}));}
  const handleSubmitForm = (event)=>{event.preventDefault();alert("AEEEE"); console.log("Submitou!");console.log(val);}
  return (
    <div className="app">
      {/*
      <LogoNavBar backgroundColor="red" logoSrc="/mais-pet-logo-png.png" whatsapp="18996080815" telefone="1832734074" textColor="light"/>
      <ButtonLink background="success" color="light" href="/" border="success" round="rounded">Sucesso!</ButtonLink>
      <SimpleCard image="/mais-pet-logo-png.png">Texto <Marker italic bold color="blue">Marcado</Marker></SimpleCard>
      <ButtonLink background="transparent" color="success" href="/" border="success" round="rounded">Sucesso!</ButtonLink>
      */}
      {/*
      <div style={{width: "200px"}}>
        <CallToActionText title="Seguro para Carro" titleSize="h3" textColor="dark" buttonColor="primary" buttonText="Saiba Mais">Garanta as melhores condições e coberturas par seu Carro. Cobertura completa que cabe no seu bolso, simule agora.</CallToActionText>
      </div>
      */}
      {/*
      <LogoNavBar backgroundColor="red" logoSrc="/mais-pet-logo-png.png" whatsapp="18996080815" telefone="1832734074" textColor="light"/>

      <SideCTACard orientation="left" title="Seguro para Carro" textColor="dark" buttonColor="primary" buttonText="Saiba Mais" image="/mais-pet-logo-png.png">
        Garanta as melhores condições e coberturas par seu Carro. Cobertura completa que cabe no seu bolso, simule agora.
      </SideCTACard>
      <SideCTACard orientation="right" title="Seguro para Carro" textColor="dark" buttonColor="primary" buttonText="Saiba Mais" image="/mais-pet-logo-png.png">
        Garanta as melhores condições e coberturas par seu Carro. Cobertura completa que cabe no seu bolso, simule agora.
      </SideCTACard>
      <SideCTACard orientation="left" title="Seguro para Carro" textColor="dark" buttonColor="primary" buttonText="Saiba Mais" image="/mais-pet-logo-png.png">
        Garanta as melhores condições e coberturas par seu Carro. Cobertura completa que cabe no seu bolso, simule agora.
      </SideCTACard>
      <SideCTACard orientation="right" title="Seguro para Carro" textColor="dark" buttonColor="primary" buttonText="Saiba Mais" image="/mais-pet-logo-png.png">
        Garanta as melhores condições e coberturas par seu Carro. Cobertura completa que cabe no seu bolso, simule agora.
      </SideCTACard>
      */}
      {/*<LogoNavBar backgroundColor="red" logoSrc="/mais-pet-logo-png.png" whatsapp="18996080815" telefone="1832734074" textColor="light"/>*/}
      <form ref={refForm} id="testForm" onSubmit={(event)=>{alert(valorTeste);console.log(val);event.preventDefault;}}>
        <NameInput setDad={setVal}/>

        <ButtonLink
          type="submit" 
          background="success" 
          color="light"
          onclick={handleSubmitButton}
        >
          Submitar!!!
        </ButtonLink> 
      </form>
      {/**
       * Orientação Formulário:
       * 3 classes
       * Formulário com botão onde pega as classes input e reside o useState
       * Input com rest onde vai ter regra de negócio, placeholder e fazer as budega de mostrar
       * Input com os estilos, onde terá toda a regra de modificação
       * Modificar origem da pasta de `InputField`, colocando como molecule, não atom.
       */}
    </div>
  )
}