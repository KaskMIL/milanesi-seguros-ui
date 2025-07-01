import { Box, Image } from "@mantine/core";
import "./HomeDescription.css"

const services = [
  'assets/seguros/fedpat-logo-alta.png',
  'assets/seguros/logo-la-caja.svg',
  'assets/seguros/logo-rivadavia.png',
  'assets/seguros/logo-sancor.svg',
  'assets/seguros/provincia-logo.png',
];

export function ServiceSlider() {
  // Repetimos la lista para simular un scroll infinito
  const items = [...services, ...services];

  return (
    <Box
      bg={'var(--mantine-primary-color-9)'}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
      id="nosotros"
    >
      <Box
        style={{
          display: "inline-block",
          animation: "scroll 30s linear infinite",
        }}
      >
        {items.map((service, idx) => (
          <Box
            key={idx}
            component="span"
            mx="xl"
            py={'xl'}
            style={{
              display: "inline-flex",
            }}
          >
            <Image src={service} h={128} w={256} fit='contain' />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
