import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { config } from './config';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Layout from './components/Layout'; // Import the new layout component
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-config';

const queryClient = new QueryClient();

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Add more routes as needed */}
              </Routes>
            </Layout>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </I18nextProvider>
  )
}


function About() {
  return <h1>About Page</h1>;
}

export default App;
