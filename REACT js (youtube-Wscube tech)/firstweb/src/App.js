import logo from './logo.svg';
import './App.css';

function App() {
  let name ="wscubetech"
  let l =[10,20,30,40];
  
  let  obj ={
    'name':"WS",
    'cName':" mern",
    'desc':"react js"
  }
let status= true;
  return(
    <div className='main'>
      <h1>{name}</h1>
      { l.map((v)=>{
        return ( 
          <div>{v}</div>
        )
      })}



<div >
  {obj.cName}
</div>

<div>{70*80}</div>

{
  (status) ?<h1 style={{color:'red',backgroundColor:"yellow"}} >welcome to ws</h1> :""

}

    </div>
  )
  
}

export default App;
