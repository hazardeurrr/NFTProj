import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="gray"
        >
          November 10th 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Raving Crabs Release
          </Typography>
          <br></br>
          <Typography variant="subtitle" component="span" color="gray">
            6666 Raving Crabs to be minted
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          1111 mints
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Giveaway
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            For Club Members<br></br>
            <b>10 Raving Crabs to win</b>
          </Typography>
        </TimelineContent>
      </TimelineItem>      

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          2222 mints
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color="secondary">
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Radio
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            The Club gets its own radio
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          4444 mints
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector/>

       
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Interaction
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            The Club becomes interactive<br></br>Rave together
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          6666 mints
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Crab battle
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            Represent your faction<br></br>
            <b>10 ETH Prize Pool</b>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="gray"
        >
          Q1 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color="secondary">
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Pixel Crabs NFTs
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            Pixels know how to rave as well !<br></br>
            <b>FREE MINT</b> for every Raving Crab owner
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}