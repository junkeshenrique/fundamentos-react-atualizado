import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Teachers() {
  return (
    <DefaultLayout
      title="Gestão de Professores"
      description="Gerencie informações do corpo docente">

      <Heading color="red">Dashboard Acadêmico</Heading>
    </DefaultLayout>
  )
}
