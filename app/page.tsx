import Navbar from '../components/navbar';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginX: { xs: '50px', md: '400px' }, // 100px marge op desktop, 20px op mobiel
          marginTop: '20px', // Afstand van Navbar
          textAlign: 'left',
        }}
      >
        <Typography variant="h4" component="div" sx={{ marginBottom: '16px' }}>
          Hi, Welkom op mijn website!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '24px' }}>
          Even een korte voorstelling. <br />
          Ik ben Cemal Tarhan, geboren in Lommel (België), gehuwd met Derya Gultepe en vader van een zoon Mikail. <br />
          Mijn interesses liggen voornamelijk in sportieve activiteiten. Sinds enkele jaren ben ik bezig met calisthenics, ik speel ook wekelijks zaalvoetbal. <br />
          Daarnaast gaan we af en toe zwemmen met mijn zoon in mijn vrije tijd. <br />
          Ik ben natuurlijk ook geïnteresseerd in technologie en softwareontwikkeling.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Gestapeld op mobiel, naast elkaar op desktop
            gap: '20px', // Afstand tussen afbeeldingen
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '40px', // Extra ruimte onderaan
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '300px' }, // Volle breedte op mobiel, vaste breedte op desktop
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtiele schaduw
            }}
          >
            <Image
              src="/images/trouw.jpeg" // Zorg dat dit pad correct is
              alt="Tijdens trouw broertje"
              width={300}
              height={200}
              style={{ objectFit: 'cover' }} // Verwijder width/height uit style
            />
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '300px' },
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src="/images/zwembad.png" // Zorg dat dit pad correct is
              alt="Zwemmen met Mikail"
              width={300}
              height={200}
              style={{ objectFit: 'cover' }} // Verwijder width/height uit style
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}