import React,{ Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "../index.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: 100,
    },
    alineacionBotones:{
        textAlign: 'center',
    },
    inputEntrada:{
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


 

    const Calcular = (props)=>{

    const classes = useStyles(); 

    console.log(`Usando props ${props.nombresito}`)

    return(

        <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.inputEntrada}>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic"  fullWidth label={props.valor} className={classes.textGrande} variant="outlined" />
                  </form>
                </Paper>
              </Grid>
            </Grid>
        </div>

    );

}

export default Calcular;