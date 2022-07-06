// rafce  
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";


const Home = () => { 
const [tutorials, setTutorials] = useState();

const url ='https://tutorials-api-cw.herokuapp.com/api/tutorials';
//! GET
const getTutorials = async () =>{
    try {
        const {data} = await axios.get(url);
        setTutorials(data)   
    } catch (error) {
        console.log(error);
    }
}
//? Sadece Component mount oldugunda istek yapar
useEffect(() => { 
    getTutorials();
}, [])



//! POST 
const addTutorial = async (tutor) => {
    try {
        await axios.post(url, tutor)
    } catch (error) {
        console.log(error);
    }
    getTutorials();
}

//! DELETE
const deleteTutorial = async(id) =>{
    try {
        await axios.delete(`${url}/${id}`)
    } catch (error) {
        console.log(error);
    }
    getTutorials()
}


const editTutorial = async (id, title, desc) =>{
    try {
        await axios.put(`${url}/${id}`, {title:title, description: desc})
    } catch (error) {
        console.log(error);
    }
    getTutorials()
}


  return (
    <div>
        <AddTutorial addTutorial={addTutorial}/>
        <TutorialList 
        tutorials={tutorials} 
        deleteTutorial={deleteTutorial} 
        editTutorial={editTutorial}
        
        />
    </div>
  )
}

export default Home