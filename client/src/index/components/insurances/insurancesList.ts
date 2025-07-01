export const insuranceTypes = [
  {
    id: 'auto',
    title: 'Protegé tu auto',
    description:
      'Cobertura completa contra accidentes, robos e imprevistos. Asistencia vial 24/7 y auto sustituto sin costos ocultos.',
    image: '/assets/compressed/car-secure-comp.jpg',
    to: 'seguros-auto',
    items: [
      'Asistencia vial 24/7',
      'Auto sustituto en caso de siniestro',
      'Cobertura contra robo e incendio',
      'Daños a terceros incluidos',
    ],
  },
  {
    id: 'hogar',
    title: 'Tranquilidad en tu hogar',
    description:
      'Protege tu vivienda ante incendios, robos y daños por agua. Asistencia 24/7 y asesoría personalizada en siniestros.',
    image: '/assets/compressed/home-secure-comp1.jpg',
    to: 'seguros-hogar',
    items: [
      'Cobertura por incendio y explosión',
      'Daños por agua y filtraciones',
      'Protección contra robos',
      'Responsabilidad civil familiar',
    ],
  },
  {
    id: 'consorcio',
    title: 'Seguro de consorcio',
    description:
      'Cubre daños en áreas comunes: incendio, filtraciones y responsabilidad civil. Gestión ágil de reclamos y respaldo legal.',
    image: '/assets/compressed/apartments.jpeg',
    to: 'seguros-consorcio',
    items: [
      'Daños en áreas comunes',
      'Filtraciones y goteras',
      'Responsabilidad civil consorcial',
      'Asesoría legal y reclamos',
    ],
  },
  {
    id: 'negocio',
    title: 'Protección para tu negocio',
    description:
      'Cobertura contra robos, daños y responsabilidad civil. Asistencia legal y monitoreo preventivo para mantener tu empresa segura.',
    image: '/assets/compressed/shop-owner-3.jpeg',
    to: 'seguros-negocio',
    items: [
      'Robo y hurto de mercadería',
      'Daños por incendio y daños eléctricos',
      'Responsabilidad civil comercial',
      'Asistencia jurídica especializada',
    ],
  },
  {
    id: 'mascota',
    title: 'Cuidado para tu mascota',
    description:
      'Cobertura veterinaria, accidentes y responsabilidad civil. Red de clínicas y atención 24/7 para salud de tu compañero.',
    image: '/assets/compressed/pet-3.jpeg',
    to: 'seguros-mascota',
    items: [
      'Consultas y cirugías veterinarias',
      'Cobertura por accidente',
      'Responsabilidad civil por daños',
      'Red de clínicas afiliadas',
    ],
  },
];

import {
  IconShieldCheck,
  IconFlame,
  IconCircleDot,
  IconGlass,
  IconLock,
  IconLockOff,
  IconPlug,
  IconMotorbike,
  IconAmbulance,
  IconBike,
  IconTool,
  IconPaw,
  IconStethoscope,
  IconSearch,
  IconArmchair,
  IconBuildingStore,
  IconLayoutNavbar,
  IconPackage,
  IconTruck,
  IconCash,
  IconCalendarEvent,
  IconInfoCircle,
  IconWindow,
} from '@tabler/icons-react';

import type { Icon } from '@tabler/icons-react';

export interface Benefit {
  description: string;
  icon: Icon;
};

export interface Coverage {
  id: string;
  title: string;
  description: string;
  benefits: Benefit[];
  compBenefits: string[];
  image: string;
  bgImage: string;
  to: string;
};

export const coverages: Coverage[] = [
  {
    id: 'auto',
    title: 'Auto',
    description:
      'Tu auto te lleva a donde soñás. Nosotros te acompañamos en cada kilómetro.',
    benefits: [
      { description: 'Responsabilidad civil', icon: IconShieldCheck },
      { description: 'Daños por robo, hurto o incendio', icon: IconFlame },
      { description: 'Neumáticos', icon: IconCircleDot },
      { description: 'Cristales', icon: IconGlass },
      { description: 'Parabrisas', icon: IconWindow },
      { description: 'Cerraduras', icon: IconLock },
    ],
    compBenefits: [
      'Resp. civil',
      'Robo/incendio',
      'Neumáticos',
      'Cristales',
      'Parabrisas',
      'Cerraduras',
    ],
    image: '/assets/compressed/car-secure-comp.jpg',
    bgImage: '/assets/compressed/car-driving.jpeg',
    to: 'seguros-auto',
  },
  {
    id: 'hogar',
    title: 'Hogar',
    description:
      'Cada rincón tiene una historia. Protejamos eso que tanto significa.',
    benefits: [
      { description: 'Responsabilidad civil', icon: IconShieldCheck },
      { description: 'Incendio', icon: IconFlame },
      { description: 'Robo', icon: IconLockOff },
      { description: 'Cristales', icon: IconGlass },
      { description: 'Electrodomésticos', icon: IconPlug },
    ],
    compBenefits: [
      'Resp. civil',
      'Incendio',
      'Robo',
      'Cristales',
      'Electrodomésticos',
    ],
    image: '/assets/compressed/home-secure-comp1.jpg',
    bgImage: '/assets/compressed/home-family.jpeg',
    to: 'seguros-hogar',
  },
  {
    id: 'moto',
    title: 'Moto',
    description:
      'Moverte con libertad es un placer. Que nada interrumpa ese camino.',
    benefits: [
      { description: 'Responsabilidad civil', icon: IconShieldCheck },
      { description: 'Robo Total', icon: IconMotorbike },
      { description: 'Incendio', icon: IconFlame },
      { description: 'Accidente', icon: IconAmbulance },
    ],
    compBenefits: [
      'Resp. civil',
      'Robo total',
      'Incendio',
      'Accidente',
    ],
    image: '/assets/compressed/moto.jpeg',
    bgImage: '/assets/compressed/moto-2.jpeg',
    to: 'seguros-auto',
  },
  {
    id: 'bicicleta',
    title: 'Bicicleta',
    description:
      'Pedaleás con energía, avanzás con confianza. El respaldo también puede ser liviano.',
    benefits: [
      { description: 'Responsabilidad civil', icon: IconShieldCheck },
      { description: 'Robo total', icon: IconBike },
      { description: 'Incendio', icon: IconFlame },
      { description: 'Daño parcial', icon: IconTool },
    ],
    compBenefits: [
      'Resp. civil',
      'Robo total',
      'Incendio',
      'Daño parcial',
    ],
    image: '/assets/compressed/bike.jpeg',
    bgImage: '/assets/compressed/bike-2.jpeg',
    to: 'seguros-auto',
  },
  {
    id: 'mascota',
    title: 'Mascota',
    description:
      'Son parte de la familia. Cuidarlos también es un acto de amor.',
    benefits: [
      { description: 'Responsabilidad civil por la tenencia de las mascotas', icon: IconShieldCheck },
      { description: 'Muerte de la mascota por accidente o por enfermedad', icon: IconPaw },
      { description: 'Gastos de veterinaria en caso de accidente o enfermedad', icon: IconStethoscope },
      { description: 'Gastos por extravío', icon: IconSearch },
    ],
    compBenefits: [
      'Resp. civil',
      'Muerte animal',
      'Gastos vet',
      'Extravío',
    ],
    image: '/assets/compressed/pet-3.jpeg',
    bgImage: '/assets/compressed/pet-2.jpeg',
    to: 'seguros-mascota',
  },
  {
    id: 'consorcio',
    title: 'Consorcio',
    description: 'Cuidamos el espacio que comparten todos los vecinos.',
    benefits: [
      { description: 'Responsabilidad civil', icon: IconShieldCheck },
      { description: 'Incendio', icon: IconFlame },
      { description: 'Cristales', icon: IconGlass },
      { description: 'Robo de mobiliario', icon: IconArmchair },
    ],
    compBenefits: [
      'Resp. civil',
      'Incendio',
      'Cristales',
      'Robo mobiliario',
    ],
    image: '/assets/compressed/apartments.jpeg',
    bgImage: '/assets/compressed/apartments.jpeg',
    to: 'seguros-consorcio',
  },
  {
    id: 'comercio',
    title: 'Comercio',
    description:
      'Detrás de cada mostrador hay un sueño. Que nada lo detenga.',
    benefits: [
      { description: 'Responsabilidad civil', icon: IconShieldCheck },
      { description: 'Daños al local por incendio', icon: IconBuildingStore },
      { description: 'Daños a los carteles y marquesinas', icon: IconLayoutNavbar },
      { description: 'Daños a la mercadería por incendio', icon: IconPackage },
      { description: 'Robo', icon: IconLockOff },
    ],
    compBenefits: [
      'Resp. civil',
      'Incendio local',
      'Carteles dañados',
      'Robo mercadería',
      'Robo',
    ],
    image: '/assets/compressed/shop-owner-3.jpeg',
    bgImage: '/assets/compressed/shop-owner-2.jpeg',
    to: 'seguros-negocio',
  },
  {
    id: 'art',
    title: 'ART',
    description: 'Cuidamos tu bienestar laboral con gestión rápida y eficaz.',
    benefits: [
      { description: 'Solicitar traslados', icon: IconTruck },
      { description: 'Gestionar reintegros', icon: IconCash },
      { description: 'Turnos', icon: IconCalendarEvent },
      { description: 'Información actualizada', icon: IconInfoCircle },
    ],
    compBenefits: [
      'Traslados',
      'Reintegros',
      'Turnos',
      'Info actualizada',
    ],
    image: '/assets/compressed/art.jpeg',
    bgImage: '/assets/compressed/art-2.jpeg',
    to: 'seguros-auto',
  },
];
