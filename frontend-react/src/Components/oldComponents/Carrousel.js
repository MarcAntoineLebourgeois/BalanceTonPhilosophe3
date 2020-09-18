import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList,GridListTile,GridListTileBar,CardActionArea,Typography,Grid} from '@material-ui/core';
import ListeSujetDissert from '../../Data/ListeSujetDissert'
import ListeThemes from '../../Data/ListeThemes'
import ListePhilosophes from '../../Data/ListePhilosophes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
    fontSize: 12,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const Carrousel = ({
  handleClick1,
  handleClick2,
  handleClick3,
  setDissert,
  ExempleThemes2,
  ExemplePhilosophe2
}) => {
  const classes = useStyles();

  const SelectDissert = (x) => {
    handleClick1();
    setDissert(x)
  }

  return (
    <>
    <Grid 
    container 
    direction="row" 
    justify="center" 
    alignItems="center"
    xs={12} sm={12} md={10} lg={8} xl={8} 
    style={{margin: "auto", padding: 5}}
    >

      <Grid item container direction="row" justify="left" alignItems="flex-start" style={{padding:15}}>
        <Typography variant="subtitle1" style={{fontSize: 14}}> Sujets de dissertation </Typography>
        <div className={classes.root} style={{width: '100%', height: 160}}>
          <GridList className={classes.gridList} cols={2.5} >
            {ListeSujetDissert.map(tile => { 
              return(
              <GridListTile key={tile.img} style={{height: 150, maxWidth: 150}}>
                  <img src={tile.img} alt={tile.title} />
                <CardActionArea >  
                    <GridListTileBar onClick={e => {SelectDissert(e.target.textContent)}} style={{}} title={tile.title} classes={{title: classes.title,root: classes.titleBar}} />
                </CardActionArea>
              </GridListTile>
            )})}
          </GridList >
        </div>
      </Grid>
      <Grid item container direction="row" justify="left" alignItems="flex-start" style={{padding:15}}>
        <Typography variant="subtitle1" style={{fontSize: 14}}> Themes </Typography>
        <div className={classes.root} style={{width: '100%', height: 160}}>
          <GridList className={classes.gridList} cols={2.5} >
            {ListeThemes.map(tile => { 
              return(
              <GridListTile key={tile.img} style={{height: 150, maxWidth: 150}}>
                  <img src={tile.img} alt={tile.title} />
                <CardActionArea >  
                    <GridListTileBar onClick={e => {ExempleThemes2(e.target.textContent)}} style={{}} title={tile.title} classes={{title: classes.title,root: classes.titleBar}} />
                </CardActionArea>
              </GridListTile>
            )})}
          </GridList >
        </div>
      </Grid>
      <Grid item container direction="row" justify="left" alignItems="flex-start" style={{padding:15}}>
        <Typography variant="subtitle1" style={{fontSize: 14}}> Philosophes </Typography>
        <div className={classes.root} style={{width: '100%', height: 160}}>
          <GridList className={classes.gridList} cols={2.5} >
            {ListePhilosophes.map(tile => { 
              return(
              <GridListTile key={tile.img} style={{height: 150, maxWidth: 150}}>
                  <img src={tile.img} alt={tile.title}  style={{height: 150,width: 151}}/>
                <CardActionArea >  
                    <GridListTileBar onClick={e => {ExemplePhilosophe2(e.target.textContent)}} style={{}} title={tile.title} classes={{title: classes.title,root: classes.titleBar}} />
                </CardActionArea>
              </GridListTile>
            )})}
          </GridList >
        </div>
      </Grid>
      
    </Grid>
    </>
  );
}

export default Carrousel;