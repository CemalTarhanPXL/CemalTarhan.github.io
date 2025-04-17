import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useRedirectIfNotAllowed } from '../lib/useRedirectIfNotAllowed';
import ClientWrapper from '../ClientWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            margin: 0;
            background: linear-gradient(135deg, #1e3c72, #2a5298, #3b4371);
            background-size: 200% 200%;
            animation: gradientShift 15s ease infinite;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
          }

          /* Gradiënt animatie */
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Sterrenveld */
          .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
          }

          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.7;
            animation: twinkle 3s infinite alternate;
          }

          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.7; }
          }

          /* Genereer willekeurige sterren */
          ${Array.from({ length: 50 })
            .map(
              (_, i) => `
                .star:nth-child(${i + 1}) {
                  width: ${Math.random() * 2 + 1}px;
                  height: ${Math.random() * 2 + 1}px;
                  top: ${Math.random() * 100}%;
                  left: ${Math.random() * 100}%;
                  animation-delay: ${Math.random() * 2}s;
                }
              `
            )
            .join('')}
        `}</style>
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <CssBaseline />
            <div className="stars">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="star" />
              ))}
            </div>
            <ClientWrapper>{children}</ClientWrapper>


        </AppRouterCacheProvider>
      </body>
    </html>
  );
}