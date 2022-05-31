import Image from "next/image";

import { Grid, Typography } from "@mui/material";

const ReadingItem: React.FC<{item: any, index: number}> = ({item, index}) => {
  return (
    <Grid item container sx={{flexDirection: {xs: "row", sm: index %2 === 0? "row-reverse" :"row"}, justifyContent: "space-between"}}>
      <Grid item xs={12} sm={5} sx={{alignItems: "center"}}>
        <Typography variant="h4" gutterBottom>{item.title}</Typography>
        <Typography variant="body2" gutterBottom>{item.author}</Typography>
        <br />
        <Typography variant="body1" gutterBottom>Genre: {item.genre}</Typography>
        <br />
        <Typography variant="body1" gutterBottom>{item.review}</Typography>
        <br /><br />
        <Typography variant="body1" sx={{fontWeight: "bold"}} gutterBottom>Rating: {item.rating} / 10</Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <img src={item.image} alt={item.title} width="100%" />
      </Grid>
    </Grid>
  )
}


const ReadingItemsList: React.FC<{items: any[]}> = ({items}) => {
  return (
    <Grid container maxWidth={"lg"} justifyContent="center" sx={{mt: 5}}>
      {
        items.map((item: any, index: number) => (
          <Grid item key={index} xs={10} sx={{mb: {xs: 10, sm: 20}}}>
            <ReadingItem item={item} index={index} key={index}/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ReadingItemsList
