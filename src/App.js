import React from 'react'
import './App.css';
import contacts from "./contacts.json";

let contact=[]
for (let i= 0; i< 5; i++)
contact.push(contacts[i])


function App() {
  const [contactArr, setContactArr]= React.useState(contact)
   let randomlySlelectedContact =contacts[Math.floor(Math.random()*contacts.length)];
   const sortContactsByName=()=> {
      let x=[...contactArr]
       x= x.sort(function(a, b) {
        let nameA = a.name;
        let nameB = b.name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      
      });
      console.log(x)
      setContactArr(x)
      }

   
   const sortContactsByPopularity=()=>{
      let newArr=[...contactArr]
      newArr= newArr.sort(function(a,b){
        let nameA = a.popularity;
        let nameB = b.popularity;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      


      });
      console.log(newArr)
      setContactArr(newArr)
   }
   const removeContact=(name)=>{
        let newArr=[...contactArr]
        newArr= newArr.filter((celeb)=>{
        return celeb.name !==name;
        });
        console.log(newArr)
       setContactArr(newArr)

      }
       
        // const index = newArr.Id.findIndex(a => a.id === id);
        //  if (index === -1) return;
        //  newArr.Id.splice(index, 1);


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th className='Title'>Iron Contacts</th>
          </tr>
          <th>
            <button onClick={()=>setContactArr(contactArr.concat(randomlySlelectedContact)) }>Add Random Contact
            </button>
          </th>
          <tr>
            <th>Picture</th>
            <button onClick={()=>sortContactsByName() }>Sort Name
            </button>
            <th>Name </th>
            <button onClick={()=>sortContactsByPopularity() }>Sort by popularity
            </button>
            <th>Popularity</th>
          </tr>  
      </thead>
      <tbody>{contactArr.map(item=>{
        console.log(item)
        return (
          <div style={{display:'flex', flexDirection:'column',margin: '150 px',padding: '100 px',}}>
              <p className='Celebrity'>{item.name}</p> 
                <img src={item.pictureUrl} alt=''></img>
              <p className='Popularity'>{item.popularity}</p> 
              <button onClick={()=> removeContact(item.name)}>Remove</button>
          </div> 
          )
          })}
         
      </tbody>
    </table>
    </div>
  );
}
const DisplayContact=(props)=>{
  const [contactArr, SetContactArr]= React.useState(contact)
  return (
<div>
<p>name= {props.name}</p>
<p>picture= {props.picture}</p>
<p>popularity= {props.popularity}</p>
<tbody>{contactArr.map(contactArr=>{
   })} </tbody>
    
</div>

  );
}

export default App;
