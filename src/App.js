

import {useEffect, useState} from "react";

function App() {

    const [arr,setArr]=useState([]);
    const [arr_2,setArr_2]=useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response)=>{

            return response.json()
        })
            .then((json)=>{
                setArr(json);
                setArr_2(json)
            })
    },[])


    const handleCompAll=()=>{

        const data=arr_2.map((item)=>{

                return  item

        })

        return setArr(data)
    }

    const handleCompFalse=()=>{

       const data=arr.filter((item)=>{
           if(item.completed===true){
               return false
           }
           else {
               return  true
           }
       })

        return setArr(data)
    }
    const handleCompTrue=()=>{
        const data=arr.filter((item)=>{
            if(item.completed===false){
                return false
            }
            else {
                return true
            }
        })

        return setArr(data)
    }
  return (
   <div className="app">
     <div className="stk_button">
       <button className="but but_all" onClick={handleCompAll}>All</button>
       <button className="but but_1" onClick={handleCompFalse}>comleted false</button>
       <button className="but but_2" onClick={handleCompTrue}>completed true</button>
     </div>
       <div>
           <div className="content_zag">
               <div className="count">count</div>
               <div className="class_id">id</div>
               <div className="class_text_zag">title</div>

           </div>
       </div>
       {arr.map((item,index)=>{

           return (
             <div className="content">
               <div className="count">{index+1}</div>
               <div className="class_id">{item.id}</div>
               <div className="class_text">{item.title}</div>

             </div>)}
       ) }
   </div>)
}

export default App;
