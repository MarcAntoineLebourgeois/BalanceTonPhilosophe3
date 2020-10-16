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
			  	    paddingTop: theme.spacing(8),
			  	    paddingLeft: theme.spacing(2),
			  	    paddingRight: theme.spacing(2),
			  	    paddingBottom: theme.spacing(6),
			  	    [theme.breakpoints.up("sm")]: {
					    	      paddingTop: theme.spacing(10),
					    	      paddingLeft: theme.spacing(16),
					    	      paddingRight: theme.spacing(16),
					    	      paddingBottom: theme.spacing(10)
					    	    },
			  	    [theme.breakpoints.up("md")]: {
					    	      paddingTop: theme.spacing(10),
					    	      paddingLeft: theme.spacing(10),
					    	      paddingRight: theme.spacing(10),
					    	      paddingBottom: theme.spacing(10)
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
			  	            <form>
			  	              <Box display="flex" flexDirection="column">
			  	                <Box mb={1}>
			  	                  <TextField
			  	                    variant="outlined"
			  	                    multiline
			  	                    placeholder="Get in touch with us"
			  	                    inputProps={{ "aria-label": "Get in Touch" }}
			  	                    InputProps={{
							    	                      className: classes.whiteBg
							    	                    }}
			  	                    rows={4}
			  	                    fullWidth
			  	                    required
			  	                  />
			  	                </Box>
			  	                <Button
			  	                  color={theme.palette.common.white}
			  	                  variant="outlined"
			  	                  type="submit"
			  	                >
			  	                  Send Message
			  	                </Button>
			  	              </Box>
			  	            </form>
			  	          </Grid>
			  	            <Grid item xs={12} md={6} lg={4}>
			  	              <Box display="flex" justifyContent="center">
			  	              Coucou
			  			</Box>
			  	            </Grid>
			  	          <Grid item xs={12} md={6} lg={4}>
			  	            <Typography variant="h6" paragraph className="text-white">
			  	              About the Company
			  	            </Typography>
			  	            <Typography style={{ color: "#8f9296" }} paragraph>
			  	              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
			  	              euismod convallis velit, eu auctor lacus vehicula sit amet.
			  	            </Typography>
			  	          </Grid>
			  	        </Grid>
			  	      </div>
			  	    </footer>
			  	  );
		}

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));

