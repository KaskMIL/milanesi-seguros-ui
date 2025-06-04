import { IconBrandInstagram } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './ContactUs.module.css';
import { ContactIconsList } from './ContactIcons';

const social = [
  
  { icon: IconBrandInstagram, path: 'https://instagram.com' },
];

export default function Contact() {
  const icons = social.map(({ icon: Icon, path }, index) => (
    <ActionIcon component='a' href={path} target='_blank' key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Box className={classes.wrapper} id='contacto'>
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

        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="juanPerez@email.com"
            required
            // radius="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nombre"
            placeholder="Juan Perez"
            mt="md"
            // radius="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Tu mensaje"
            placeholder="Me gustaria tener informacion sobre como puedo obtener un seguro para mi negocio."
            minRows={4}
            mt="md"
            // radius="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control} radius={0} size='md'>
              Enviar Mensaje
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </Container>
    </Box>
  );
}