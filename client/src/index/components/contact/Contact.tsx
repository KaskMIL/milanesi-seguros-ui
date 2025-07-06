import { IconBrandInstagram } from '@tabler/icons-react';
import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Container,
  Group,
  NumberInput,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './ContactUs.module.css';
import { ContactIconsList } from './ContactIcons';
import { ContactBody, usePostContact } from '../../../insurance/hooks/contact';
import { useForm } from '@mantine/form';

const social = [{ icon: IconBrandInstagram, path: 'https://instagram.com' }];

export default function Contact() {
  const postContact = usePostContact();

  const form = useForm<ContactBody>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      category: '',
    },
    validate: {
      name: (name) => {
        if (!name) {
          return 'El nombre es requerido';
        }
        if (name.length < 3) {
          return 'El nombre tiene que tener minimo 5 caracteres';
        }
      },
      email: (email) => {
        if (!email) {
          return 'El mail es requerido';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return 'Debe usar un email válido';
        }
      },
      phoneNumber: (phone) => {
        if (!phone) {
          return 'El numero de teléfono es requerida';
        }
      },
      message: (message) => {
        if (!message) {
          return 'El mensaje es requerido';
        }
      },
      category: (cat) => {
        if (!cat) {
          return 'La categoria del seguro es requerida';
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

  const icons = social.map(({ icon: Icon, path }, index) => (
    <ActionIcon
      component="a"
      href={path}
      target="_blank"
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Box className={classes.wrapper} id="contacto">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contactanos!</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Dejanos un mensaje y te contactaremos en las proximas horas
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>

          <form
            className={classes.form}
            onSubmit={form.onSubmit((values) => postContact.mutate(values))}
          >
            <TextInput
              label="Nombre"
              withAsterisk
              placeholder="Juan Perez"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              withAsterisk
              placeholder="juanPerez@email.com"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('email')}
            />
            <NumberInput
              label="Telefono"
              hideControls
              withAsterisk
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('phoneNumber')}
            />
            <Select
              label="Tipo de seguro"
              withAsterisk
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
            <Textarea
              label="Tu mensaje"
              withAsterisk
              placeholder="Me gustaria tener informacion sobre como puedo obtener un seguro para mi negocio."
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('message')}
            />
            {postContact.isSuccess && (
              <Alert mt={'md'} color="green" title="Mensaje enviado con éxito!">
                Un representante se comunicara con usted a la brevedad.
              </Alert>
            )}
            {postContact.isError && (
              <Alert color="red" title="No se ha podido enviar su mensaje.">
                Un representante se comunicara con usted a la brevedad. Muchas
                gracias!
              </Alert>
            )}
            <Group justify="flex-end" mt="md">
              <Button
                className={classes.control}
                radius={0}
                size="md"
                type="submit"
                loading={postContact.isPending}
              >
                Enviar Mensaje
              </Button>
            </Group>
          </form>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
