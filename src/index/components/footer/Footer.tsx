import {
  IconBrandInstagram,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Container,
  Group,
  Image,
} from '@mantine/core';
import classes from './FooterSocial.module.css';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={'xl'}>
        <Group>
          <Image w={80} src={'/assets/logo.jpeg'} />
        </Group>
        <Group
          gap={0}
          className={classes.links}
          justify='flex-end'
          wrap='nowrap'
        >
          <ActionIcon component='a' href='https://instagram.com' target='_blank' size='lg' color='gray' variant='subtle'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
