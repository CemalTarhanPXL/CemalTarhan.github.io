import Navbar from '../../components/navbar';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function About() {
  const skills = [
    { name: 'Java', src: '/images/Java.png' },
    { name: 'Angular', src: '/images/angular.png' },
    { name: 'AWS', src: '/images/AWS.png' },
    { name: 'Docker', src: '/images/docker.jpg' },
    { name: 'Python', src: '/images/python.png' },
    { name: 'Vue.js', src: '/images/VUE.png' },
    { name: 'NextJS', src: '/images/Nextjs.png' },

  ];

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'rgba(148, 218, 223, 0.03)', width: '100%',  }}>
        <Box
          sx={{
            marginX: { xs: '50px', md: '10%' },
            marginTop: '20px',
            textAlign: 'left',
          }}
        >
          <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                marginBottom: '16px',
                textAlign: 'left',
                color: 'rgb(8, 18, 51)', 
              }}
            >
              WIE BEN IK
            </Typography>
            <Typography
              sx={{
                marginBottom: '24px',
                textAlign: 'left',
                lineHeight: 1.6,
                color: 'rgb(13, 27, 41)',
              }}
            >
              Ik ben Cemal Tarhan, geboren in Lommel(België), gehuwd met Derya en vader van een zoon Mikail. 
              Mijn interesses liggen voornamelijk in sportieve activiteiten. Sinds enkele jaren ben ik bezig met calisthenics, ik speel ook wekelijks zaalvoetbal. Daarnaast gaan we af en toe zwemmen met mijn zoon in mijn vrije tijd.
              Wat mijn competenties betreft, ben ik een gestructureerde, praktische en resultaatgerichte werker met een sterke focus op uitvoering. Ik werk het liefst binnen duidelijke richtlijnen en methodes, waarbij ik taken afrond met een praktische en oplossingsgerichte aanpak. Ik heb een voorkeur voor zekerheid boven risico’s. In mijn communicatie ben ik kritisch en objectief. Daarnaast ben ik emotioneel stabiel en stressbestendig, waardoor ik ook onder druk kalm en gefocust blijf. Ik werk graag zelfstandig, al ben ik behulpzaam wanneer dat nodig is, en hecht minder belang aan frequente sociale interactie. Wat niet uitsluit dat ik niet in groep wil of zou kunnen werken.
              <br /><br />
              Mijn ambities is om tewerkgesteld te zijn als software ontwikkelaar. Ik hoop mijn loopbaan zo spoedig te kunnen starten als ontwikkelaar een rol waarin ik mijn programmeervaardigheden volledig kan inzetten. Binnen vijf jaar streef ik ernaar om door te groeien naar de positie van een senior ontwikkelaar waarbij ik mijn technische kennis en ervaring verder uitbreid.
              Op school heb ik als student de basisprincipes van programmeren geleerd zoals het werken met programmeertalen en het oplossen van technische vraagstukken. Gezien de informaticasector voortdurend in ontwikkeling is, besef ik dat het essentieel is om zelfstandig op de hoogte te blijven van de nieuwste technologieën en updates. Om mijn vaardigheden als ontwikkelaar te versterken, streef ik ernaar mijn kennis van hedendaagse frameworks en programmeertechnieken verder uit te breiden door deze updates te volgen.
            </Typography>
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
          >
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
                src="/images/trouw.jpeg"
                alt="Tijdens trouw broertje"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
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
                src="/images/zwembad.png"
                alt="Zwemmen met Mikail"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Box>
      </div>
      <div style={{ width: '100%'}}>
        <Box
          sx={{
            marginX: { xs: '50px', md: '10%' },
            marginTop: '20px',
            textAlign: 'left',
            paddingY: '40px',
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              marginBottom: '16px',
              textAlign: 'right',
              color: 'rgb(18, 24, 44)', // Rode kleur zoals in de screenshot
            }}
          >
            VAARDIGHEDEN
          </Typography>
          {/* Vaardighedenraster */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // 2 kolommen op mobiel
                sm: 'repeat(4, 1fr)', // 4 kolommen op desktop
              },
              gap: '20px',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            {skills.map((skill, index) => (
              <Box
                key={index}
                sx={{
                  border: '2px solid rgb(9, 7, 19)', // Rode rand
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '120px',
                  padding: '20px',
                  transition: 'transform 0.3s ease', // Subtiele hover-animatie
                  '&:hover': {
                    transform: 'scale(1.05)', // Lichte vergroting bij hover
                  },
                }}
              >
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain', marginBottom: '10px' }}
                />
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
}