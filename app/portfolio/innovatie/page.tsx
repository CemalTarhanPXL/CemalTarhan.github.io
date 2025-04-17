import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Navbar from '../../../components/navbar';

export default function Innovatie() {
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
          Innovatie
        </Typography>
        <Typography 
            sx={{
            textAlign: 'center',
            color: 'black',
            }} >
            Hier zie je een overzicht van de innovatie route en hackaton die ik heb bijgewoond.
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
            backgroundColor: 'rgba(141, 167, 202, 0.1)'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Innovatieroute: DDD - Domain Driven Design</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            Deze innovatie route was verspreid over drie weken, waarbij we per week één dag de sessie hebben gevolgd. 
            In de eerste sessie werd een introductie gegeven over Domain-Driven Design (DDD). 
            Tijdens de tweede sessie hebben we ons gericht op event storming. 
            In de derde en laatste sessie kregen we een business case die we in groepjes moesten uitwerken.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            maxWidth: { xs: '100%', sm: 1000  },
            width: '100%',
            marginBottom: '16px',
            backgroundColor: 'rgba(141, 167, 202, 0.1)'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Hackaton: Pitch Please!</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            Op 1 december 2023 nam ik deel aan het "Pitch Please!"-hackaton georganiseerd door Cegeka in samenwerking met het Agentschap Innoveren & Ondernemen. De dag begon om 16:00 uur met een ontvangst waar cake en koffie werden geserveerd. Dit moment bood een informele setting om kennis te maken met andere deelnemers en een ontspannen sfeer te creëren voor de rest van het programma. 
            <br /><br />
            Om 16:30 uur volgde een inleiding over het programma gevolgd door een toelichting op de uitdagingen van de dag. Tijdens deze kick off werd de planning van de dag toegelicht en wat van de deelnemers precies wordt verwacht, wie er kan aangesproken worden voor hulp en welke materialen we mochten gebruiken. Gedurende de hele avond werden enkele uitdagingen georganiseerd die tijdens deze kick off zijn toegelicht. We werden ook in teams verdeel en werden aan het werk gezet voor onze eerste missie. 
            <br /><br />
            Om 17:15 uur begon de eerste workshop, "Spaghetti Challenge & Debrief", waarin we verder bouwden op het thema van samenwerking en probleemoplossing. Elke groep kreeg de taak om met behulp van spaghetti, touw, een marshmallow en plakband een zo hoog mogelijke toren te bouwen. Het doel van deze oefening was om teamwork en creatief denken te stimuleren waarbij in de team kennis en ideeën moesten uitwisselen om tot een succesvol resultaat te komen. Aan deze inleidende opdracht waren geen prijzen of punten verbonden maar het bood een waardevolle kans om de samenwerking binnen de groep te versterken.
            <br /><br />
            De tweede workshop, om 17:40 uur, richtte zich op het "Value Proposition Canvas" en het genereren van ideeën. Tijdens deze sessie kregen we de opdracht om zoveel mogelijk ideeën te bedenken om onze gekozen uitdaging uit te werken. In mijn groep brainstormden we over een app voor duurzame mobiliteit, wat leidde tot een breed scala aan concepten, variërend van carpoolfunctionaliteiten tot een beloningssysteem voor milieuvriendelijk reisgedrag. Vervolgens moesten we onze ideeën een concrete vorm geven door ze te analyseren en te prioriteren op basis van haalbaarheid en impact. Uiteindelijk kozen we één idee om verder uit te werken tot een gedetailleerd plan.
            <br /><br />
            Om 19:00 uur volgde een workshop over het "Business Model Canvas". Tijdens deze workshop wordt er gedacht over alle stukjes van de puzzel die nodig zijn om de plan een vorm te geven. Na een korte pauze om 19:30 uur, genaamd "Pizza Time" waar iedereen werd getrakteerd op lekkere pizza van brunos foodcorner en lekker drinken. 
            <br /><br />
            Om 20:45 uur volgde de "Pitch & Voorbeiding". Tijdens deze workshop moesten we een plan maken over hoe we het gaan overbrengen naar de jury. We moesten een pitch van 3 minuten voorbereiden.
            Het hoogtepunt van de dag was om 21:30 uur, tijdens de "Start Jury Pitching". Elk team kreeg drie minuten om hun idee te presenteren, gevolgd door drie minuten vragen van de jury. Ik heb zelf geen pitch gegeven maar 2 andere teamleden hebben dat gedaan. De pitch verliep goed. 
            <br /><br />
            Om 23:15 uur werd de winnaar bekendgemaakt tijdens de "Stemming Jury & Bekendmaking Winnaar", gevolgd door een receptie om 23:30 uur, waar we konden netwerken en successen vieren. Het evenement was goed georganiseerd en bood een uitstekende balans tussen theorie, praktijk en netwerken.

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
            href="/portfolio/seminaries/"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
          >
            Seminaries
          </Button>
        </div>
      </div>
    </>
  );
}