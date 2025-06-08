import { Box, Container, Grid, Stack, Title, useMantineTheme } from '@mantine/core';
import { Benefit } from '../../index/components/insurances/insurancesList';
import { useMediaQuery } from '@mantine/hooks';

interface InsuranceBenefitsProps {
  benefits: Benefit[];
}

export default function InsuranceBenefits(props: InsuranceBenefitsProps) {
  const cols = 12 / props.benefits.length;
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  return (
    <Container size={'xl'} py={'calc(var(--mantine-spacing-md) * 4)'}>
      <Grid gutter={{ base: 'md', sm: 'md' }}>
        {props.benefits.map((benefit) => (
          <Grid.Col key={benefit.description} span={{ base: 6, sm: cols }}>
            <Stack align="center">
              <Box
                w={isMobile ? 80 : 110}
                h={isMobile ? 80 : 110}
                p="md"
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <benefit.icon
                  size="58px"
                  color="var(--mantine-primary-color-5)"
                />
              </Box>
              <Title ta={'center'} size={isMobile ? 'h5' : 'h4'} fw={500} order={2}>
                {benefit.description}
              </Title>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
