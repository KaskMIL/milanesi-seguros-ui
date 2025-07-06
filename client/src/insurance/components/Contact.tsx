import {
  Button,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
  Text,
  Container,
  Alert,
} from '@mantine/core';
import { ContactBody, usePostContact } from '../hooks/contact';
import { useForm } from '@mantine/form';

interface ContactProps {
  insuranceType: string;
}

export default function Contact(props: ContactProps) {
  const postContact = usePostContact();
  const form = useForm<ContactBody>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      category: props.insuranceType,
    },
    validate: {
      name: (name) => {
        if (!name) {
          return 'El nombre es obligatorio';
        }
        if (name.length < 3) {
          return 'El nombre tiene que tener minimo 5 caracteres';
        }
      },
      email: (email) => {
        if (!email) {
          return 'El mail es obligatorio';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return 'Debe usar un email válido';
        }
      },
      phoneNumber: (phone) => {
        if (!phone) {
          return 'El numero de teléfono es obligatorio';
        }
      },
      message: (message) => {
        if (!message) {
          return 'El mensaje es requerido';
        }
      },
    },
    transformValues: (values) => {
      return {
        ...values,
        phoneNumber: values.phoneNumber.toString(),
      };
    },
  });

  return (
    <section
      style={{
        backgroundColor: 'var(--mantine-primary-color-9',
        padding: 'calc(var(--mantine-spacing-xl)*2) 0',
      }}
    >
      <Container component={'section'} size={'lg'}>
        <Title mb={'xs'} c={'white'}>
          Cotizá ahora!
        </Title>
        <Text mb={'lg'} c={'white'}>
          Dejanos un mensaje y nos pondremos en contacto lo antes posible
        </Text>
        <Paper
          p={'md'}
          component="form"
          onSubmit={form.onSubmit((values) => postContact.mutate(values, {
            onSuccess: () => {
              form.reset();
            }
          }))}
        >
          <SimpleGrid cols={{ base: 1, sm: 4 }}>
            <TextInput
              label="Nombre"
              withAsterisk
              {...form.getInputProps('name')}
            />
            <Select
              label="Tip de seguro"
              withAsterisk
              readOnly
              data={[
                { label: 'Auto', value: 'auto' },
                { label: 'Moto', value: 'moto' },
                { label: 'Bicicleta', value: 'bicicleta' },
                { label: 'Mascota', value: 'mascota' },
                { label: 'Hogar', value: 'hogar' },
                { label: 'Consorcio', value: 'consorcio' },
                { label: 'Comercio', value: 'comercio' },
                { label: 'ART', value: 'art' },
              ]}
              {...form.getInputProps('category')}
            />
            <TextInput
              label="Email"
              withAsterisk
              {...form.getInputProps('email')}
            />
            <NumberInput
              label="Telefono"
              hideControls
              withAsterisk
              {...form.getInputProps('phoneNumber')}
            />
          </SimpleGrid>
          <Textarea
            label="Mensaje"
            withAsterisk
            {...form.getInputProps('message')}
          />
          {
            postContact.isSuccess && (
              <Alert mt={'md'} color='green' title='Mensaje enviado con éxito!'>
                Un representante se comunicara con usted a la brevedad.
              </Alert>
            )
          }
          {
            postContact.isError && (
              <Alert color='red' title='No se ha podido enviar su mensaje.'>
                Un representante se comunicara con usted a la brevedad.
                Muchas gracias!
              </Alert>
            )
          }
          <Button
            mt={'md'}
            size="md"
            color="var(--mantine-primary-color-9)"
            type="submit"
            loading={postContact.isPending}
          >
            Cotizar seguro
          </Button>
        </Paper>
      </Container>
    </section>
  );
}
