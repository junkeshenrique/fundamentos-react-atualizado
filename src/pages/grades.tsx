import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      title="Gestão de Notas"
      description="Gerencie as notas e avaliações dos estudantes">

      <Heading color="red">Dashboard Acadêmico</Heading>
    </DefaultLayout>
  )
}
