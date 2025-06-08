import { Overlay, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export default function InsuranceHero() {
  return (
    <div className={classes.wrapper} style={{ backgroundImage: 'url(/assets/compressed/car-driving.jpeg)' }}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Seguro de Autos
        </Title>
      </div>
    </div>
  );
}