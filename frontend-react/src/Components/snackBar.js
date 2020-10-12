import React, { useState, useEffect } from "react";
import { Snackbar,SnackbarContent } from "@material-ui/core";


const SimpleSnackbar = (props) => {

	console.log(props)
	  const handleClose = () => {
		      props.setOpen(false);
		    };

	  useEffect (() => {
		  setTimeout(() => {props.setOpen(false)},3500)
	  },[props.open])

	  return (
		      <div>
		        <Snackbar
		          anchorOrigin={{ vertical: "bottom",horizontal: "left" }}
		          open={props.open}
		          onClose={handleClose}
		        >
		    <SnackbarContent style={{backgroundColor: props.Maintheme.palette.primary.main }}
		      message={props.contentText}
		    />
		  </Snackbar>
		      </div>
		    );
};
export default SimpleSnackbar;


