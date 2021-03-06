import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBarContext = React.createContext()

export default function CustomizedSnackbars({ children }) {
  // const classes = useStyles();
  


  const [stateSnackbar, setStateSnackbar] = React.useState({
    open: false,
    severity: '',
    message:'',
  });



  const setStateSnackbarContext = (open, message, severity) => setStateSnackbar({
    ...stateSnackbar,
    open,
    message,
    severity
  });

  const handleClose = () => setStateSnackbar({
    ...stateSnackbar,
    open: false
  });

  const { open, severity, message} = stateSnackbar;

  return (
    <SnackBarContext.Provider value={setStateSnackbarContext}>
      <div >
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </div>
      {children}
    </SnackBarContext.Provider>
    
  );
}
