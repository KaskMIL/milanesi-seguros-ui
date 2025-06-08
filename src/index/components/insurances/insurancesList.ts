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

export const coverages = [
  {
    id: 'auto',
    title: 'AUTO',
    description:
      'Tu auto te lleva a donde soñás. Nosotros te acompañamos en cada kilómetro.',
    benefits: [
      'Resp. civil',
      'Robo/incendio',
      'Neumáticos',
      'Cristales',
      'Parabrisas',
      'Cerraduras',
    ],
    image: '/assets/compressed/car-secure-comp.jpg',
    to: 'seguros-auto',
  },
  {
    id: 'hogar',
    title: 'HOGAR',
    description:
      'Cada rincón tiene una historia. Protejamos eso que tanto significa.',
    benefits: [
      'Resp. civil',
      'Incendio',
      'Robo',
      'Cristales',
      'Electrodomésticos',
    ],
    image: '/assets/compressed/home-secure-comp1.jpg',
    to: 'seguros-hogar',
  },
  {
    id: 'moto',
    title: 'MOTO',
    description:
      'Moverte con libertad es un placer. Que nada interrumpa ese camino.',
    benefits: [
      'Resp. civil',
      'Robo total',
      'Incendio',
      'Accidente',
    ],
    image: '/assets/compressed/moto.jpeg',
    to: 'seguros-auto',
  },
  {
    id: 'bicicleta',
    title: 'BICICLETA',
    description:
      'Pedaleás con energía, avanzás con confianza. El respaldo también puede ser liviano.',
    benefits: [
      'Resp. civil',
      'Robo total',
      'Incendio',
      'Daño parcial',
    ],
    image: '/assets/compressed/bike.jpeg',
    to: 'seguros-auto',
  },
  {
    id: 'mascota',
    title: 'MASCOTA',
    description:
      'Son parte de la familia. Cuidarlos también es un acto de amor.',
    benefits: [
      'Resp. civil',
      'Muerte animal',
      'Gastos vet',
      'Extravío',
    ],
    image: '/assets/compressed/pet-3.jpeg',
    to: 'seguros-mascota',
  },
  {
    id: 'consorcio',
    title: 'CONSORCIO',
    description: 'Cuidamos el espacio que comparten todos los vecinos.',
    benefits: [
      'Resp. civil',
      'Incendio',
      'Cristales',
      'Robo mobiliario',
    ],
    image: '/assets/compressed/apartments.jpeg',
    to: 'seguros-consorcio',
  },
  {
    id: 'comercio',
    title: 'COMERCIO',
    description:
      'Detrás de cada mostrador hay un sueño. Que nada lo detenga.',
    benefits: [
      'Resp. civil',
      'Incendio local',
      'Carteles dañados',
      'Robo mercadería',
    ],
    image: '/assets/compressed/shop-owner-3.jpeg',
    to: 'seguros-negocio',
  },
  {
    id: 'art',
    title: 'ART',
    description: 'Cuidamos tu bienestar laboral con gestión rápida y eficaz.',
    benefits: [
      'Traslados',
      'Reintegros',
      'Turnos',
      'Info actualizada',
    ],
    image: '/assets/compressed/art.jpeg',
    to: 'seguros-auto',
  },
];
