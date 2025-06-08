import { Container, Overlay, Title, Text } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

interface InsuranceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function InsuranceHero(props: InsuranceHeroProps) {
  return (
    <section className={classes.wrapper} style={{ backgroundImage: `url(${props.image})` }}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Seguros de {props.title}
        </Title>
         <Container size={640}>
          <Text size="xl" className={classes.description}>
            {props.description}
          </Text>
        </Container>
      </div>
    </section>
  );
}