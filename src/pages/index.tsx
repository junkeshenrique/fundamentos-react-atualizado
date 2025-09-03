import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
    title="Calendário Acadêmico"
    description="Gerencie os cursos oferecidos pela universidade.">

      <Heading color="red">Dashboard Acadêmico</Heading>
    </DefaultLayout>
  )
}
