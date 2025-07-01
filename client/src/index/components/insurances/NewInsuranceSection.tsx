import { Container, Grid, Title } from "@mantine/core";
import { coverages } from "./insurancesList";
import InsuranceCard from "./InsuranceCard";

export default function NewInsuranceSection() {
  return (
    <Container component={'section'} size={'lg'} py={'calc(var(--mantine-spacing-xl) * 2'} id="seguros">
      <Title mb={'lg'}>Seguros</Title>
      <Grid>
        {
          coverages.map((coverage) => (
            <Grid.Col span={{ bas: 6, sm: 4 }} key={coverage.id}>
              <InsuranceCard {...coverage}/>
            </Grid.Col>
          ))
        }
      </Grid>
    </Container>
  )
}