import {
  // Button,
  Container,
  Group,
  List,
  ThemeIcon,
  Title,
  Text,
  Image,
  Box,
  Button,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './InsurancesSection.module.css';
import { Link } from 'react-router';

interface InsuranceItem {
  id: string,
    title: string,
    description:string;
    image: string;
    to: string;
    items: string[]
}

interface InsuranceSectionProps {
  insurance: InsuranceItem;
  imagePosition: 'left' | 'right';
}

export default function InsurancesSection({ insurance, imagePosition }: InsuranceSectionProps) {

  return (
    <Box bg={imagePosition === 'right' ? 'var(--mantine-color-gray-1)' : 'var(--mantine-primary-color-9)' }>
      <Container size='md'>
        <div className={imagePosition === 'right' ? classes.innerRight : classes.innerLeft }>
          <div className={classes.content} style={{ color: imagePosition === 'right' ? 'black' : 'white' }}>
            <Title style={{ color: imagePosition === 'right' ? 'black' : 'white' }} className={classes.title}>{insurance.title}</Title>
            <Text c='dimmed' mt='md'>
              {insurance.description}
            </Text>

            <List
              mt={30}
              spacing='sm'
              size='sm'
              icon={
                <ThemeIcon
                  size={20}
                  radius='xl'
                  color='var(--mantine-color-milanesiColors-6)'
                >
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {insurance.items.map((item, idx) => (
                <List.Item key={idx}>{item}</List.Item>
              ))}
            </List>

            <Group mt={30}>
              <Button
                component={Link}
                to={insurance.to}
              >
                Conocé Mas!
              </Button>
            </Group>
          </div>
          <Image
            src={insurance.image}
            fallbackSrc='https://placehold.co/600x400'
            fit={'cover'}
            radius="md"
            className={classes.image}
          />
        </div>
      </Container>
    </Box>
  );
}
