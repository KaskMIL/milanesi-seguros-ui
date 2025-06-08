import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './BadgeCard.module.css';

interface CardInsurance {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  to: string;
}

export default function InsuranceCard(props: CardInsurance) {
   const features = props.benefits.map((badge) => (
    <Badge variant="light" key={badge}>
      {badge}
    </Badge>
   ))

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={props.image} alt={props.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {props.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {props.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Beneficios
        </Text>
        <Group gap={7} mt={5}>
          {features}
          {/* {props.benefits.map((benefit) => (
            <Text key={benefit}>{benefit}</Text>
          ))} */}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Más Información
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}
