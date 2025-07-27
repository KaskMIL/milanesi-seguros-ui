import { Box, Image } from "@mantine/core";
import "./HomeDescription.css"

const services = [
  'assets/seguros/atm-2.png',
  'assets/seguros/galeno-logo.png',
  'assets/seguros/galicia-marce.jpeg',
  'assets/seguros/hdi-seguros-seeklogo.png',
  'assets/seguros/Mercantil-Andina-logo.jpg',
  'assets/seguros/fedpat-logo-alta.png',
  'assets/seguros/logo-rivadavia.png',
  'assets/seguros/logo-sancor.svg',
  // 'assets/seguros/provincia-logo.png',
];

export function ServiceSlider() {
  // Repetimos la lista para simular un scroll infinito
  const items = [...services, ...services];

  return (
    <Box
      bg={'white'}
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
            <Image src={service} h={128} w={256} fit='contain' bg={idx === 6 ? '#121D46' : 'transparent'} px={idx === 6 ? 'sm' : 0} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
