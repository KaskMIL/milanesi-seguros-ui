import { useEffect, useState } from 'react';
import { Burger, Button, Container, Drawer, Group, Image, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import './header.css';
import {
  IconBrandWhatsapp,
  IconDeviceWatch,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation().pathname;
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const isProperties = location === '/seguros';
  const buttonColor = isMobile ? (scrolled ? 'var(--mantine-primary-color-9)' : 'white') : (scrolled ? 'var(--mantine-primary-color-9)' : 'white');


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const navButtons = (
    <>
      <Button
        variant="transparent"
        c={buttonColor}
        size="lg"
        fw={500}
        component={Link}
        to={'/#seguros'}
        onClick={() => {
          if (isMobile) {
            toggle();
          }
        }}
      >
        Seguros
      </Button>
      {/* {isProperties ? (
        <Button
          variant="transparent"
          c={buttonColor}
          size="lg"
          fw={500}
          component={'a'}
          href={'/#seguros'}
          onClick={() => {
          if (isMobile) {
            toggle();
          }
        }}
        >
          Nosotros
        </Button>
      ) : (
        <Button
          variant="transparent"
          c={buttonColor}
          size="lg"
          fw={500}
          component={'a'}
          href="#about"
          onClick={() => {
          if (isMobile) {
            toggle();
          }
        }}
        >
          Nosotros
        </Button>
      )} */}
      <Button
        variant="transparent"
        c={buttonColor}
        size="lg"
        fw={500}
        component="a"
        href={`https://wa.me/1123456789`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (isMobile) {
            toggle();
          }
        }}
      >
        Contacto
      </Button>
      <Button
        variant="filled"
        color="green"
        size="lg"
        fw={500}
        leftSection={<IconBrandWhatsapp />}
        component="a"
        href={`https://wa.me/1123456789`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (isMobile) {
            toggle();
          }
        }}
      >
        WhastApp
      </Button>
    </>
  );

  return (
    <div
      className={
        isProperties
          ? 'headerProperties'
          : `header ${scrolled ? 'scrolled' : ''}`
      }
    >
      <ul
        className={'infoHeader'}
      >
        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <IconMapPin size={'16px'} /> Calle Falsa 1234, Bella Vista
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <IconPhone size={'16px'} /> 11-1234-5678
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <IconDeviceWatch size={'16px'} /> Lu - Vie 8:00am a 18:00pm
        </li>
      </ul>
      <Container size="xl" py="xs">
        <Group justify="space-between">
          <a style={{ textDecoration: 'none' }} href='/'>
          <Group>
          <Image className='logo' src={scrolled ? '/assets/isologo-color.svg' : '/assets/isologo-color-1.svg'} />
          {/* <Stack align='center' gap={0}>
            <Text
              mb={-14}
              ta={'center'}
              fw={600}
              fz={isMobile ? 'h2' : 'h1'}
              c={buttonColor}
            >
            Seguros
            </Text>
            <Text
              ta={'center'}
              fw={200}
              fz={isMobile ? 'h3' : 'h2'}
              c={buttonColor}
              >
              MILANESI
            </Text>
          </Stack> */}
        </Group>
        </a>
          {/* <Image className='logo' src="/assets/logo.jpeg" /> */}
          <Group visibleFrom="sm">
            {navButtons}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='md' color={buttonColor} />
          <Drawer opened={opened} onClose={toggle} size={'80%'} className='drawer' bg={'var(--mantine-primary-color-4)'}>
            <Stack>{navButtons}</Stack>
          </Drawer>
        </Group>
      </Container>
    </div>
  );
}

