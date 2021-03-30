import React,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
//import Alert from '@material-ui/lab/Alert';
//import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
}));


function Ejemplo(){

    const classes = useStyles();
    const [ventana,setClics] = useState(0);

    /*useEffect(()=>{
    document.title = `Cantidad de clics ${clics}`;
    })  */
    return(
        <Container fixed>
           
        <div>
        <Button
        onClick = {()=> setClics(ventana+1)}
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Contar {ventana}
      </Button>
      </div>
      </Container>

    );

}

export default Ejemplo;