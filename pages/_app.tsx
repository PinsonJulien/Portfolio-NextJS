import { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.scss';

export interface StateProps {
  lightMode: boolean;
  switchLightMode: () => void;
}

export default function App({ Component, pageProps }: AppProps) {
  const [lightMode, setLightMode] = React.useState<boolean>(true);
  const switchLightMode = () => setLightMode(!lightMode);

  const stateProps: StateProps = {
    lightMode,
    switchLightMode,
  };

  return (
    <Component 
      {...pageProps}
      {...stateProps}
    />
  );
}