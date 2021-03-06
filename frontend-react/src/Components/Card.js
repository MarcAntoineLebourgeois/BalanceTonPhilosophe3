import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardMedia, Button} from '@material-ui/core';
import { Link as Links } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },  
  appBar: {
    position: 'static',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

}));

const Cards = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction='row'alignItems="center" justify="center" spacing={2} >
        {props.responseDicts.map((responseDict,i) => {
        return(
        <Grid item>  
        <Card key={responseDict.Philosophe} style={{minWidth: 320,maxWidth: 320 ,padding: 5}}>
            <CardHeader title={responseDict.Philosophe} />
            <CardMedia className={classes.media} image={responseDict.Image} />
            <Grid container direction='row'alignItems="center" justify="center" >
            <Links to={`/theme/${props.form.Theme}/${responseDict.Philosophe}`} style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary" onClick={() => props.ChangeResponseDicts(responseDict)}>
                {responseDict.Philosophe} {props.form.Theme.length > 0 && "sur"} {props.form.Theme.map(themes =>{return(themes + "/")})}
              </Button>
            </Links>
            </Grid>
        </Card>
        </Grid> 
        
        )})}
    </Grid>
  );
}
//{ListeThemes.map(themes => {return(themes +"/")})}<p />

export default Cards;

/* 


                <CardActions disableSpacing>
                    <IconButton
                    className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                    onClick={() => handleExpandClick(i)}
                    aria-expanded={expanded === i}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>                
                            Siecle: {responseDict.Siecle}<p />
                            Nation: {responseDict.Nationalite}<p />
                            Theme: {responseDict.Theme.map(themes => {return(themes +"/")})}<p />
                            {responseDict.Texte}
                        </Typography>
                    </CardContent>
                </Collapse>


  const handleClickOpen = (i) => {setOpen(expanded === i ? -1 : i)};
  const handleClose = () => {setOpen(false)};
  const [open, setOpen] = React.useState(false);
  const [expanded] = useState(false);

              <Dialog fullScreen open={open === i} onClose={handleClose} >
                <AppBar>
                  <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    {responseDict.Philosophe}
                    </Typography>
                  </Toolbar>
                </AppBar>  
                <Grid 
                  item
                  style={{padding:10,marginTop: 50, marginLeft: 'auto',marginRight: 'auto'}}
                  xs={11} sm={10} md={9} lg={8} xl={7} 
                >
                  <>
                  <Typography>
                    {responseDict.Siecle}
                  </Typography>
                  <p/>
                  <Typography>
                    Nationalite: {responseDict.Nationalite}
                  </Typography>
                  <p/>
                  {responseDict.Theme.map((ListeThemes,i) => {
                    return(
                    <>
                      <p/>
                      <Typography > 
                        Theme: {ListeThemes.map(themes => {return(themes +"/")})}
                      </Typography>
                      <p/>
                      <Typography >   
                        {responseDict.Texte[i]}
                      </Typography>
                    </>
                    )
                    })} 
                  </>
                </Grid>
              </Dialog>





*/