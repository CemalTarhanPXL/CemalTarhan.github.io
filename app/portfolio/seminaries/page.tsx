import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Navbar from '../../../components/navbar';
import { babelIncludeRegexes } from 'next/dist/build/webpack-config';

export default function Seminarie() {
  return (
    <>
      <Navbar />
      <div>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: 'center',
            marginTop: '20px',
            fontWeight: 'bold',
            color: '#1976d2',
          }}
        >
          Seminarie
        </Typography>
        <Typography 
        
          sx={{
            textAlign: 'center',
            color: 'black',
          }} >
            Hier zie je een overzicht van de seminaries die ik heb bijgewoond.
            <br />
            Omdat ik in mijn vervolgtraject zit was ik vrijgesteld voor het volgen van de seminaries.
            Maar de onderwerpen die aanbod zijn gekomen tijdens deze seminaries hebben mij overtuigd om de seminarie bij te wonen.
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%', // Zorgt ervoor dat de accordion de volledige breedte gebruikt
          maxWidth: '100%', // Maximaliseer de breedte op grotere schermen
          alignItems: 'center',
          marginTop: '20px', // Afstand van de Navbar
          padding: '0 16px', // Padding aan de zijkanten voor kleinere schermen
        }}
      >
        <Accordion
          sx={{
            maxWidth: { xs: '100%', sm: 1000 }, // Volle breedte op mobiel, 600px op grotere schermen
            width: '100%', // Zorgt ervoor dat de accordion de maximale breedte gebruikt
            marginBottom: '16px', // Afstand tussen accordeons
            backgroundColor: 'rgba(17, 117, 247, 0.1)'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Prototyping van een full-stack applicatie</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            Deze seminarie werd georganiseerd door het bedrijf Accentura.
            We hebben als opener tijdens deze seminarie dan ook eerst een intro gekregen over het bedrijf.
            Na een boeiende presentatie zijn we aan de slag gegaan met een applicatie die woordparen kan genereren met de frontend geschreven in Flutter en de backend in Python. 

          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            maxWidth: { xs: '100%', sm: 1000 },
            width: '100%',
            marginBottom: '16px',
            backgroundColor: 'rgba(17, 117, 247, 0.1)'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Flutter </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            Een seminarie georganiseerd door het bedrijf kabisa.
            We hebben eerst een algemene informatie gekregen over Dart en Flutter.
            Nadien hebben we in visual studio code gewerkt aan een applicatie waar je elkaar kudo punten kunt geven wanneer je collega iets vriendelijks doet.

         </AccordionDetails>
        </Accordion>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            href="/portfolio/persoonlijke-ontwikkeling/"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
          >
            Persoonlijke Ontwikkeling
          </Button>
          <Button
            variant="contained"
            href="/portfolio/innovatie/"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
          >
            Innovatie
          </Button>
        </div>
      </div>
    </>
  );
}