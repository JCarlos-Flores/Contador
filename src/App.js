
import {useEffect, React, useState} from 'react';
import './App.css';

function App() {
  
  const [ valor, setValor] = useState (0);
   const sumar =() =>{
    setValor (valor+1);
    }
   const res =() =>{
    setValor (0);
    }
   const restar =() =>{
    setValor (valor-1);
    }

   const [diff,setDiff]=useState (null)
   const [initial,setInitial]= useState(null)
 
   const tick=() =>{
       setDiff(new Date(+new Date()-initial ))
    };
   const start = () => {setInitial(+new Date()) 
    }
    useEffect(()=>{
      if(initial){
        requestAnimationFrame (tick);
          }
        },[initial]);
    useEffect(()=>{
      if(diff){
       requestAnimationFrame(tick); 
      }  
    },[diff]);

  return (
    <div className="App" onClick={start}>
      <h1> Contador</h1>
    <h2> {valor} </h2>
    <button onClick={sumar}> Aumentar </button>
    <button onClick={res}> Restablecer </button>
    <button onClick={restar}> Disminuir </button>
      <h2 className="timer"> {timeFormat(diff)} </h2>

    </div>

    
  );

}
const timeFormat =(date)=>{
    if(!date) return " 00:00:00 ";
    
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    let cm = Math.round(date.getMilliseconds()/10);
    
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    cm = cm < 10 ? "0" + cm : cm;
    return `$ {mm}: $ {ss} : $ {cm} `;
};

export default App;
