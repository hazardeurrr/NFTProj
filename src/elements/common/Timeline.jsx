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
          November 1st 2021
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
            Release
          </Typography>
          <br></br>
          <Typography variant="subtitle" component="span" color="gray">
            10 000 Raving Crabs to be minted
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          2500 mints
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
            For Club members
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          5000 mints
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
            The Club becomes interactive
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="gray"
        >
          7500 mints
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
          10 000 mints
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
            More interaction
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            Rave together
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color="secondary">
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            New world & new economy...
          </Typography><br></br>
          <Typography variant="subtitle" component="span" color="gray">
            More than just NFTs...
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}