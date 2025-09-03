import { Card, FormatNumber, Heading, Stat } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
    title="Dashboard Acadêmico"
    description="Visão geral do sistema universitário"
    >
      <Card.Root>
        <Card.Body>
          <Stat.Root>
            <Stat.Label>Total de Estudantes</Stat.Label>
            <Stat.ValueText>
              <FormatNumber
                value={2847}/>
            </Stat.ValueText>
            <Stat.UpIndicator alignSelf="start">+12% este mês</Stat.UpIndicator>
          </Stat.Root>
        </Card.Body>
      </Card.Root>

    </DefaultLayout>
  )
}
