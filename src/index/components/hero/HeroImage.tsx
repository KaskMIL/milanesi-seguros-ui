import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageRight.module.css';
import { data } from '../../../utils/data';

export default function HeroImageRight() {
  return (
    <div className={classes.root} id='inicio'>
      <Container size={'lg'} style={{ display: 'flex', alignItems: 'center' }} h={'100%'}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Tu tranquilidad, protegida.
            </Title>

            <Text className={classes.description} mt={30}>
              Planes flexibles que protegen tu <strong>casa, tus bienes y tu vehículo</strong> con asesoramiento personalizado 24/7.
            </Text>
            <Text className={classes.description} mt={30}>
              Soluciones simples para cuidarte hoy y siempre.
            </Text>

            <Button
              color='var(--mantine-primary-color-8)'
              size="xl"
              className={classes.control}
              mt={40}
              component='a'
              href={'https://wa.me/'+data.whatsapp}
            >
              Asegurate hoy
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}