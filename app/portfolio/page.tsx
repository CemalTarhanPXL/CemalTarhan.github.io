"use client";

import Navbar from '../../components/navbar';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Definieer de inhoud van de kaarten
const cards = [
  {
    title: "Innovatie",
    description: "Ontdek mijn werk en projecten op het gebied van innovatie.",
    path: "/portfolio/innovatie",
  },
  {
    title: "Persoonlijke Ontwikkeling",
    description: "Leer meer over mijn persoonlijke groei en ontwikkelingsreis.",
    path: "/portfolio/persoonlijke-ontwikkeling",
  },
  {
    title: "Seminaries",
    description: "Informatie over de seminaries die ik heb bijgewoond.",
    path: "/portfolio/seminaries",
  },
];

export default function Portfolio() {
  const router = useRouter();

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '200px',
          flexWrap: 'wrap', // Zorgt ervoor dat kaarten goed worden weergegeven op kleinere schermen
          gap: '16px', // Ruimte tussen kaarten
          padding: '16px',
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 275,
              maxWidth: 345,
               // Geeft aan dat de kaart klikbaar is
            }}
            onClick={() => handleCardClick(card.path)} // Navigeer bij klikken op de kaart
          >
            <Card variant="outlined" sx={{ 
                cursor: 'pointer', 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Achtergrondkleur van de kaart
                borderRadius: '8px', // Ronde hoeken voor de kaart
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)', // Verander de achtergrondkleur bij hover
                },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtiele schaduw
                }}>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {card.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation(); // Voorkom dat de kaartklik wordt geactiveerd
                    handleCardClick(card.path);
                  }}
                >
                  Bekijk Meer
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </div>
    </>
  );
}