import React, { useState, useEffect } from "react";
import { Snackbar,SnackbarContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SimpleSnackbar = (props) => {
	const history = useHistory();
	  const handleClose = () => {
		      props.setOpen(false);
		    };

	  useEffect ( () => {
		
		//setTimeout(() => {props.setOpen(false)},3000)
		
	  },[props.open])

	  return (
		      <div>
		        <Snackbar
		          anchorOrigin={{ vertical: "bottom",horizontal: "left" }}
		          open={props.open}
				  onClose={handleClose}
				  autoHideDuration={3000}
		        >
		    <SnackbarContent style={{backgroundColor: props.Maintheme.palette.primary.main }}
		      message={props.contentText}
		    />
		  </Snackbar>
		      </div>
		    );
};
export default SimpleSnackbar;


