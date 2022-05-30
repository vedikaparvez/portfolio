import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import TimeLine from "@mui/lab/Timeline"
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const WorkItem: React.FC<{item: any, isMobile: Boolean}> = ({item, isMobile}) => {
  return (
    <TimelineItem >
      <TimelineOppositeContent sx={{textAlign:"center", pb: 10, display: {xs: 'none', sm: "block"}}}>
      {item.image && (<img src={item.image} height="100%" width="100%" alt={item.title}/>)}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {item.title && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{textAlign: "left"}}>
        <Typography variant="h5" gutterBottom color="GrayText">{item.year}</Typography>
        <Box textAlign={"left"} sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent:"center", pb: {xs: 10, sm: 0}}}>
            {item.title && <Typography variant="h5" gutterBottom>{item.title}</Typography>}
            {item.points && (
            <ul>
              {item.points.map((point: string, index: number) => <li key={index}>{point}</li>)}
            </ul>
            )}
            {isMobile && item.image &&  <img src={item.image} height="100%" width="100%" alt={item.title} />}
        </Box>
      </TimelineContent>
    </TimelineItem>
  )
}


const WorkItemsList: React.FC<{items: any[]}> = ({items}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  return (
    <TimeLine position={isMobile ? "right": "alternate"}>
      {items.map((item: any, index: number) => <WorkItem item={item} key={index} isMobile={isMobile} />)}
    </TimeLine>
  )
}

export default WorkItemsList
