import { AppShell, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";
import Header from "./Header";
import { useLocation } from "react-router";
import { useMediaQuery } from "@mantine/hooks";

interface Layout {
  children: ReactNode
};

export default function Layout({ children }: Layout) {
  const location = useLocation().pathname;
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const isProperties = location === '/propiedades';
  const height = isProperties ? (isMobile ? '92px' : 0) : '0';

  return (
    <AppShell header={{ height: height }}>
      <AppShell.Header style={{ border: 'none' }}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}