import Image from "next/image";
import LogoParceira from "../components/cores/LogoParceira";
import Marker from "../components/cores/Marker";
import Text from "../components/cores/Text";
import Title from "../components/cores/Title";
import ButtonLink from "../components/elements/ButtonLink";
import SimpleCard from "../components/patterns/SimpleCard";

function opa(){
  console.log("teste");
}
export default function Home() {
  return (
    <div className="app">
      <SimpleCard image="/mais-pet-logo-png.png">
        As Melhores Seguradoras Em Um Só Local
      </SimpleCard>
      <SimpleCard image="/mais-pet-logo-png.png">
        As Melhores Seguradoras Em Um Só Local
      </SimpleCard>
    </div>
  )
}