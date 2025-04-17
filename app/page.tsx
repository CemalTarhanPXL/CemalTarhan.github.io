"use client";

import Navbar from '../components/navbar';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  const textLines = [
    "Gepassioneerde in het full stack ontwikkelen van webapplicaties.",
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: '40px',
          textAlign: 'left',
          backgroundColor: 'rgba(70, 158, 165, 0.15)',
          minHeight: '10vh',
          padding: '40px',
          width: '100%',
          color: '#FFFFFF',
        }}
      >
        {/* Tekstgedeelte */}
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: 'rgba(30, 51, 71, 0.83)',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Hi, ik ben Cemal!
          </Typography>
          {textLines.map((line, index) => (
            <Typography
              key={index}
              variant="h5"
              sx={{
                color: 'rgba(30, 51, 71, 0.99)',
                marginBottom: '8px',
                lineHeight: 1.6,
                animation: `newTypewriter 5s steps(70, end) ${index * 2}s forwards, newBlinkCaret 3s step-end infinite`,
                overflow: 'hidden',
                borderRight: '2px solid #B0B0B0',
                whiteSpace: 'nowrap',
                width: '0',
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>

        {/* Afbeelding, gecentreerd */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Centreer de afbeelding horizontaal
            marginTop: '40px',
            marginBottom: '40px',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '300px' }, // Volle breedte op mobiel, vaste breedte op desktop
              maxWidth: '300px',
              height: '300px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/images/ik.png" // Zorg dat dit pad correct is
              alt="Foto van Cemal"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }} // Verwijder width/height uit style
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '20px',
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '40px',
          }}
        />
      </Box>
      {/* CSS voor animaties */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes newTypewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes newBlinkCaret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #B0B0B0;
          }
        }
      `}</style>
    </>
  );
}