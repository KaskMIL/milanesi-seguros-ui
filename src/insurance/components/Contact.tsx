import {
  Button,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

interface ContactProps {
  insuranceType: string;
}

export default function Contact(props: ContactProps) {
  return (
    <section
      style={{
        padding:
          'calc(var(--mantine-spacing-md)*4) calc(var(--mantine-spacing-md)*4)',
        // backgroundColor: 'var(--mantine-color-gray-1',
        backgroundColor: 'var(--mantine-primary-color-9',
      }}
    >
      <Title mb={'xl'} c={'white'}>Cotizá ahora!</Title>
      <Paper withBorder p={'md'}>
        <SimpleGrid cols={{ base: 1, sm: 4 }}>
          <TextInput label="Nombre" />
          <Select
            label="Tip de seguro"
            value={props.insuranceType}
            readOnly
            data={[
              { label: 'Auto', value: 'auto' },
              { label: 'Moto', value: 'moto' },
              { label: 'Mascota', value: 'mascota' },
              { label: 'Consorcio', value: 'consorcio' },
              { label: 'Comercio', value: 'comercio' },
              { label: 'ART', value: 'art' },
            ]}
          />
          <TextInput label="Email" />
          <NumberInput label="Telefono" hideControls />
        </SimpleGrid>
        <Textarea label="Mensaje" />
        <Button mt={'md'} size='md' color='var(--mantine-primary-color-9'>Cotizar seguro</Button>
      </Paper>
    </section>
  );
}
