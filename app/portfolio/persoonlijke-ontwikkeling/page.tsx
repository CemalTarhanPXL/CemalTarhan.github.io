import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Navbar from '../../../components/navbar';

export default function PersoonlijkeOntwikkeling() {
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
          Persoonlijke ontwikkeling
        </Typography>
        <Typography 
                
          sx={{
            textAlign: 'center',
            color: 'black',
          }} >
            Hier zie je een overzicht van mijn Persoonlijke ontwikkeling.
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
            maxWidth: { xs: '100%', sm: 1000 }, // Volle breedte op mobiel, 800px op grotere schermen
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
            <Typography component="span">Projectweek 2 TIN</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            In het academiejaar 2022-2023 nam ik deel aan de projectweek, georganiseerd door Hogeschool PXL, die plaatsvond in de eerste week van het tweede semester. 
            Deze week was specifiek gericht voor studenten die het vak Research Project opnemen, met als doel hen te informeren over I-Talent en voor te bereiden op het Research Project. Dit project is essentieel voor een eerste kennismaking met  een fullstack webapplicatie waarbij wordt gewerkt met user stories en agile methoden. Een aanpak die gangbaar is in veel bedrijven
            <br /><br />
            De projectweek begon op maandag om 09:00 uur met een verwelkoming en een toelichting over het programma, die ongeveer 30 minuten duurde. Vervolgens, om 09:30 uur startte de eerste inhoudelijke sessie van de dag, getiteld "Wat is I-Talent?". Tijdens deze sessie lichtten lectoren van Hogeschool PXL het concept van I-Talent toe, dat gericht is op het ontwikkelen van persoonlijke en professionele vaardigheden. Twee alumni, afgestudeerd aan Hogeschool PXL deelden hun ervaringen met I-Talent en het Research Project. 
            <br /><br />
            Zij benadrukten het belang van deze elementen in relatie tot de X-factor van de hogeschool, een kenmerk dat PXL-studenten onderscheidt door hun praktische en innovatieve aanpak. Deze sessie hielp mij om het bredere kader van mijn opleiding beter te begrijpen. De voormiddag werd afgesloten met de sessie "Ken jezelf", waarin we reflecteerden op onze persoonlijke sterktes en ontwikkelpunten. Na de middagpauze volgde een workshop over kernkwadranten, samenwerken in teamverband en reflectie, waarbij ik leerde hoe ik mijn sterke punten effectiever kan inzetten in groepswerk.
            <br />
            Op dinsdag stond een pitch over het Research Project centraal. Tijdens deze presentatie werd de opdracht in detail voorgesteld: we kregen inzicht in wat we moesten bouwen, in welke programmeertaal dit moest gebeuren en welke functionaliteiten de webapplicatie moest bevatten. In de namiddag volgde een workshop over reflectie en academisch schrijven, die van grote waarde bleek. We leerden hoe we een abstract en projectomschrijving in een academische stijl moesten opstellen. De dag werd afgesloten met een seminar, getiteld "Netwerken werkt", waarin het belang van professioneel netwerken en het gebruik van LinkedIn werden besproken. Deze sessie onderstreepte het belang van een sterk netwerk voor mijn toekomstige carrière.
            <br /><br />
            Woensdag was een intensieve dag met een workshop over "Onderzoekend handelen" en een sessie over het "Agile proces". De workshop leerde mij hoe ik systematisch onderzoek kan uitvoeren voordat ik aan een project begin, een vaardigheid die essentieel is voor het Research Project, maar ook voor toekomstige projecten zoals het IT-project en mijn stage. De sessie over agile processen bood inzicht in de scrum-methodologie en hoe deze in bedrijven wordt toegepast.
            <br /><br />
            Op donderdag, de voorlaatste dag van de projectweek werd een vier uur durende sessie georganiseerd met de titel "Learning path". Deze sessie richtte zich op het omgaan met kritiek, het geven van constructieve feedback en het ontvangen ervan. Dit was bijzonder nuttig, omdat ik leerde hoe ik feedback op een professionele manier kan verwerken en gebruiken om mijn werk te verbeteren.
            <br /><br />
            De week eindigde op vrijdag met een praktische sessie over het Research Project, waarin we ons projectvoorstel verder uitwerkten. Deze sessie bood een concrete start voor het project en stelde mij in staat om mijn ideeën helder te structureren. De projectweek was uitstekend georganiseerd en bood een waardevolle basis voor mijn verdere ontwikkeling. Ik heb niet alleen technische kennis opgedaan over agile methoden en onderzoekend handelen, maar ook mijn samenwerkingsvaardigheden en academisch schrijfvermogen verbeterd. 

          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            maxWidth: { xs: '100%', sm: 1000 }, // Volle breedte op mobiel, 800px op grotere schermen
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
            <Typography component="span">POP-sessie: Brein aan het werk! Niet storen!</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          Tijdens deze werd besproken hoe bepaalde zaken aangepakt moeten worden. Zaken zoals de verhouding tussen studeren en nemen van pauze. 
          Wat aanbod is gekomen is bijvoorbeeld de Pomodoro techniek.Deze techniek houdt in dat je 3x 25min gaat studeren met telkens na 25min,5 min pauze en na 115 min studeren neem je 20min pauze.

          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            maxWidth: { xs: '100%', sm: 1000 }, // Volle breedte op mobiel, 800px op grotere schermen
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
            <Typography component="span">POP-sessie: Popping</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            Tijdens deze sessie werd besproken hoe je	meer inzicht kunt krijgen in je eigen vaardigheden. 
            We hebben ook geoefent in het geven en ontvangen van feedback.

          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            maxWidth: { xs: '100%', sm: 1000 }, // Volle breedte op mobiel, 800px op grotere schermen
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
            <Typography component="span">EXTRA activiteit: Digitale marketing</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            Dit was een activiteit waar ik aan deel heb genomen met de studenten van PXL Business. Deze activiteit vond van 28/02/2023 t.e.m. 01/06/2023 één maal per week op een vrijdag plaats. 
            We werden opgesplitst in groepjes van 4. Het doel was om een business casus uit te werken voor de JBC met als doel kleding te verkopen aan ouders als ze komen winkelen voor hun kinderen.

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
            href="/portfolio/innovatie/"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
          >
            Innovatie
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