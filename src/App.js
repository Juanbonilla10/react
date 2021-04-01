import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from  '@material-ui/core/Container';

import "./index.css";
import "./Componentes/Operaciones";
import Calcular from './Componentes/Calculadora';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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




export default function FullWidthGrid() {
  
  const classes = useStyles();
  
  const [valorIngresado,setClics] = useState("");

  var [valorResultado,setValorResultado]= useState("0");

  const[valorParaMultiplicar,setValorMultiplicar] = useState("1");

  var [valorParaDivision,setValorDivision] = useState("1");

function sumar(primeraValor,segundoValor){
  setValorResultado(parseInt(primeraValor) + parseInt(segundoValor));
}
function multiplicar(primeraValorultiplicado,segundoValorMultiplicado){
  setClics("0");
  setValorResultado(parseInt(primeraValorultiplicado) * parseInt(segundoValorMultiplicado));
  setValorMultiplicar(parseInt(primeraValorultiplicado) * parseInt(segundoValorMultiplicado));
} 
function dividir(primeraValorDividido,segundoValorDividido){
  setValorDivision(parseInt(segundoValorDividido) / parseInt(primeraValorDividido));
  setValorResultado(parseInt(segundoValorDividido) / parseInt(primeraValorDividido));
  console.log(`El valor del resultado es ` + parseInt(primeraValorDividido) / parseInt(segundoValorDividido));
  //debugger
} 
function restar(primeraValorRestar,segundoValorRestado){
  setValorResultado(parseInt(segundoValorRestado) - parseInt(primeraValorRestar));
}

function ejecucionEntrada(primerNumeroIngresado){

  if(primerNumeroIngresado.target.name==='/'){
    if(valorParaDivision!=="1"){
      dividir(valorIngresado,valorParaDivision);  
      setClics("0");
    }else{
      setValorDivision(valorIngresado);
      setClics("0");
    }  
  }else if(primerNumeroIngresado.target.name==='+'){ 
    sumar(valorIngresado,valorResultado);
    setClics("0");
  }else if(primerNumeroIngresado.target.name==='-'){
    if(valorResultado!=='0'){
      restar(valorIngresado,valorResultado);
      setClics("0");
    }else{
      valorResultado(valorIngresado);
      setClics("0");
    }
  }
  else if (primerNumeroIngresado.target.name ==='*'){
    multiplicar(valorIngresado,valorParaMultiplicar)
  }else if(primerNumeroIngresado.target.name==='CE'){
    setClics(valorIngresado.slice(0, -1));
  }else if(primerNumeroIngresado.target.name==='C'){
    setValorResultado("0");
    setClics("0");
  }else if(primerNumeroIngresado.target.name==='%'){
    setClics(primerNumeroIngresado.target.name);
  }else{
    setClics(valorIngresado.concat(primerNumeroIngresado.target.name));
    setTimeout(console.log(`Numero ingresado ${valorIngresado}`),3000);
    ;
  }
  }

  

  return (
    <Container maxWidth="sm" className="contorno">     
      <Calcular nombresito="Ingrese un valor " valor={valorResultado}/>
      <br></br>
      <div className={classes.root}>
        <Grid container spacing={1}>

          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="%" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="%" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="CE" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="CE" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="C" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="C" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="/" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="/" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="9" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="9" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="8" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="8" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="7" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="7" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="*" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="*" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="6" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="6" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="5" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="5" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button" className="relleno"  name="4" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="4" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="-" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="-" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="3" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="3" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="2" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="2" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="1" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="1" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="+" variant="outlined" color="secondary" onClick = {ejecucionEntrada} value="+" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input   type="button"  className="relleno" name="0" variant="contained" color="secondary" onClick = {ejecucionEntrada} value="0" />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.alineacionBotones}>
            <input  type="button"  className="relleno" name="," variant="contained" color="secondary" onClick = {ejecucionEntrada} value=","/>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.alineacionBotones}>
            <input type="button" className="cambioBotonSolo relleno" name="="  variant="contained" color="secondary" onClick = {ejecucionEntrada} value="=" />
          </Grid>

        </Grid>
      </div>
    </Container>
  );
}
