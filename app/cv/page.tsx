import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Celebration from '@mui/icons-material/Celebration';
import Engineering from '@mui/icons-material/Engineering';
import Done from '@mui/icons-material/Done';
import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/navbar';
export default function CustomizedTimeline() {
  return (
    <>
      <Navbar />

      <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            </TimelineOppositeContent>
            <TimelineSeparator>
            </TimelineSeparator>
            <TimelineContent >
            <Typography variant="h6" component="span">
            </Typography>
            <Typography></Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            Jun.2025
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
                <Celebration />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
            Bachelor diploma behaald !
            </Typography>
            <Typography>Hopelijk met onderscheiding</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            Feb.2025-Mei.2025
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
                <Engineering />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Derde Stage @ Cloudar, Kontich
            </Typography>
            <Typography>Fullstack ontwikkelen van webapplicaties met Python, Next.js 15 . Implementeer LLM’s (Large Language Models) voor geautomatiseerde contentgeneratie. Serverless deployen op AWS, met gebruik van Cloudformation, Cognito, Bedrock en Amplify.</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            Feb.2022
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
                <KeyboardDoubleArrowUp />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">    
            Hogeschool PXL, Hasselt
            </Typography>
            <Typography>Start bachelor opleiding, toegepast informatica - Applicatieontwikkeling</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            Feb.2022
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary' }} />
            <TimelineDot color="secondary">
                <Done />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
            Graduaat diploma behaald !
            </Typography>
            <Typography>geslaagd met onderscheiding!</Typography>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Okt 2021 - Jan 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined" >
            <Engineering />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Tweede Stage @ Rhenus automotive, Genk
          </Typography>
          <Typography>Fullstack ontwikkelen van een webapplicatie. Backend: ASP .Net Core Frontend: Blazor</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Okt.2020 - Jan.2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined"> 
            <Engineering />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Eerste stage @ GPS, Genk
          </Typography>
          <Typography>Ontwikkelen van een desktop applicatie met ASP .Net Core</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Sep.2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <KeyboardDoubleArrowUp />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Hogeschool PXL, Hasselt
          </Typography>
          <Typography>Start opleiding programmeren</Typography>
        </TimelineContent>
       
      </TimelineItem>
    </Timeline>
    </>
  );
}
