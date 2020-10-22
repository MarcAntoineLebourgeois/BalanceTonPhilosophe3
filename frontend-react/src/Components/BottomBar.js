import React from "react";
	import {
			  Grid,
			  Typography,
			  Box,
			  IconButton,
			  Hidden,
			  withStyles,
			  withWidth,
			  isWidthUp,
			  TextField,Button
			} from "@material-ui/core"

import "../styles.css";

const styles = theme => ({
		  footerInner: {
			  	    backgroundColor: theme.palette.common.darkBlack,
			  	    paddingTop: theme.spacing(2),
			  	    paddingLeft: theme.spacing(2),
			  	    paddingRight: theme.spacing(2),
			  	    paddingBottom: theme.spacing(2),
			  	    [theme.breakpoints.up("sm")]: {
					    	      paddingTop: theme.spacing(6),
					    	      paddingLeft: theme.spacing(16),
					    	      paddingRight: theme.spacing(16),
					    	      paddingBottom: theme.spacing(6)
					    	    },
			  	    [theme.breakpoints.up("md")]: {
					    	      paddingTop: theme.spacing(6),
					    	      paddingLeft: theme.spacing(10),
					    	      paddingRight: theme.spacing(10),
					    	      paddingBottom: theme.spacing(6)
					    	    }
			  	  },
		  brandText: {
			  	    fontFamily: "'Baloo Bhaijaan', cursive",
			  	    fontWeight: 400,
			  	    color: theme.palette.common.white
			  	  },
		  footerLinks: {
			  	    marginTop: theme.spacing(2.5),
			  	    marginBot: theme.spacing(1.5),
			  	    color: theme.palette.common.white
			  	  },
		  infoIcon: {
			  	    color: `${theme.palette.common.white} !important`,
			  	    backgroundColor: "#33383b !important"
			  	  },
		  socialIcon: {
			  	    fill: theme.palette.common.white,
			  	    backgroundColor: "#33383b",
			  	    borderRadius: theme.shape.borderRadius,
			  	    "&:hover": {
					    	      backgroundColor: theme.palette.primary.light
					    	    }
			  	  },
		  link: {
			  	    cursor: "Pointer",
			  	    color: theme.palette.common.white,
			  	    "&:hover": {
					    	      color: theme.palette.primary.light
					    	    }
			  	  },
		  whiteBg: {
			  	    backgroundColor: theme.palette.common.white
			  	  }
		});


function Footer(props) {
		  const { classes, theme, width } = props;
		  return (
			  	    <footer className="BackgroundBottom">
			  	      <div className={classes.footerInner}>
			  	        <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
			  	          <Grid item xs={12} md={6} lg={4}>
			  	            <Typography variant="h6" paragraph className="text-white">
			  	              A propos du projet
			  	            </Typography>
			  	            <Typography style={{ color: "#8f9296" }} paragraph>
			  	              BTP est ne d'une volonte de clarifier et vulgariser les connaissances philosophes afin d'aider les bacheliers.
							   Cela avec une approche moderne et technologique au service de l'education. 
			  	            </Typography>
			  	          </Grid>
			  	        </Grid>
			  	      </div>
			  	    </footer>
			  	  );
		}

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));

