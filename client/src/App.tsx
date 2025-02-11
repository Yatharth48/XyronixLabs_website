import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.tsx';
import './App.css';
import { ThemeProvider } from "./Assets/Themes/theme-provider.tsx"
import { Switch } from "./components/ui/mode-switch.tsx"


function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <Header />
      <main>
        <Switch />
        <Outlet />
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;