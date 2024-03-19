import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google' 
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={inter.className}/>
}
