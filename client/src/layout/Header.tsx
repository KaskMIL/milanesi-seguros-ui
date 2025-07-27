import { useEffect, useState } from 'react';
import {
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Image,
  Stack,
  useMantineTheme,
  Menu,
  MenuDropdown,
  MenuTarget,
  MenuItem,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import './header.css';
import {
  IconBrandWhatsapp,
  IconDeviceWatch,
  // IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import { Link } from 'react-router';
import { data } from '../utils/data';

const navLinks = [
  {
    label: 'Inicio',
    to: '/',
    external: false,
  },
  {
    label: 'Seguros',
    to: '/#seguros',
    nested: [
      { label: 'Auto', to: '/seguros/auto' },
      { label: 'Moto', to: '/seguros/moto' },
      { label: 'Hogar', to: '/seguros/hogar' },
      { label: 'Consorcio', to: '/seguros/consorcio' },
      { label: 'Comercio', to: '/seguros/comercio' },
      { label: 'Mascota', to: '/seguros/mascota' },
      { label: 'Bicicleta', to: '/seguros/bicicleta' },
      { label: 'ART', to: '/seguros/art' },
    ],
    external: false,
  },
  {
    label: 'Contacto',
    to: 'https://wa.me/'+data.whatsapp,
    external: true,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const buttonColor = isMobile
    ? 
       'var(--mantine-primary-color-1)'
    : scrolled
      ? 'var(--mantine-primary-color-9)'
      : 'white';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navButtons = navLinks.map((link) =>
    link.nested ? (
      <Menu
        classNames={{ dropdown: 'submenu', item: 'item', itemLabel: 'label' }}
        key={link.label}
        trigger="hover"
        openDelay={100}
        closeDelay={100}
      >
        <MenuTarget>
          <Button variant="transparent" c={buttonColor} size="lg" fw={500}>
            {link.label}
          </Button>
        </MenuTarget>
        <MenuDropdown>
          {link.nested.map((nested) => (
            <MenuItem
              key={nested.label}
              component={Link}
              to={nested.to}
              onClick={() => isMobile && toggle()}
              style={{ fontSize: '16px', color: isMobile ? 'var(--mantine-color-gray-7)' : 'var(--mantine-color-gray-7)' }}
            >
              {nested.label}
            </MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    ) : (
      <Button
        key={link.label}
        variant="transparent"
        c={buttonColor}
        size="lg"
        fw={500}
        component={link.external ? 'a' : Link}
        to={link.external ? undefined : link.to}
        href={link.external ? link.to : undefined}
        target={link.external ? '_blank' : undefined}
        rel={link.external ? 'noopener noreferrer' : undefined}
        onClick={() => isMobile && toggle()}
      >
        {link.label}
      </Button>
    ),
  );

  return (
    <div
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <ul className={'infoHeader'}>
        {/* <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <IconMapPin size={'16px'} /> {data.address}
        </li> */}
        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <IconPhone size={'16px'} /> {data.phoneNumber}
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <IconDeviceWatch size={'16px'} /> {data.attentionTime}
        </li>
      </ul>
      <Container size="xl" py="xs">
        <Group justify="space-between">
          <a style={{ textDecoration: 'none' }} href="/">
            <Group>
              <Image
                className="logo"
                src={
                  scrolled
                    ? '/assets/isologo-color.svg'
                    : '/assets/isologo-blanco.svg'
                }
              />
            </Group>
          </a>
          <nav>
            <Group visibleFrom="sm" gap="sm">
              {navButtons}
              <Button
                variant="filled"
                color="green"
                size="lg"
                fw={500}
                leftSection={<IconBrandWhatsapp />}
                component="a"
                href={'https://wa.me/'+data.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => isMobile && toggle()}
              >
                WhatsApp
              </Button>
            </Group>
          </nav>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="md"
            color={scrolled ? 'var(--mantine-primary-color-9' : 'white'}
          />
          <Drawer
            opened={opened}
            onClose={toggle}
            size={'80%'}
            className="drawer"
            bg={'var(--mantine-primary-color-4)'}
          >
            <Stack>
              {navButtons}
              <Button
                variant="filled"
                color="green"
                size="lg"
                fw={500}
                leftSection={<IconBrandWhatsapp />}
                component="a"
                href={'https://wa.me/'+data.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toggle()}
                fullWidth
              >
                WhatsApp
              </Button>
            </Stack>
          </Drawer>
        </Group>
      </Container>
    </div>
  );
}
