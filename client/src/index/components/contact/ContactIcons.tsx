import { IconAt, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';
import { data } from '../../../utils/data';

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const DATA = [
  { title: 'Correo Electronico', description: data.email, icon: IconAt },
  { title: 'Teléfono', description: data.phoneNumber, icon: IconPhone },
  // { title: 'Dirección', description: data.address, icon: IconMapPin },
  {
    title: 'Horario de Atención',
    description: data.attentionTime,
    icon: IconSun,
  },
];

export function ContactIconsList() {
  const items = DATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
