import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material"

const FunStuffItem: React.FC<{item: any; index: number}> = ({item, index}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Grid
      item
      container
      sx={{
        flexDirection: {xs: "row", sm: index % 2 === 0 ? "row-reverse" : "row"},
        justifyContent: "space-between",
      }}>
      <Grid item xs={12} sm={5} sx={{alignItems: "center", mb: {xs: 2, sm: 0}}}>
        <Typography variant="h6" sx={{whiteSpace: {sx: "unset", sm: "pre"}, textAlign: "left"}}>
          {" "}
          {item.title}
        </Typography>
        <Typography variant="body1" sx={{ml: 4, whiteSpace: "pre-line"}}>
          {" "}
          {item.body}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <img src={item.image} alt={item.title} width={isMobile ? "100%" : ""} />
      </Grid>
    </Grid>
  )
}

const FunStuffItemsList: React.FC<{items: any[]}> = ({items}) => {
  return (
    <Grid container maxWidth={"lg"} justifyContent="center" sx={{py: 5}}>
      {items.map((item: any, index: number) => (
        <Grid item key={index} xs={10} sx={{mb: {xs: 10, sm: 10}}}>
          <FunStuffItem item={item} index={index} key={index} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FunStuffItemsList
