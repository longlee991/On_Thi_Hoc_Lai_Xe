import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { use } from 'react';
function Home() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try{
                const res = await fetch(`http://localhost:9999/question`);
                const data = await res.json();
                setQuestions(data);
            }catch (err){
                console.log(err);
            }
        }
    }, []);

  return (
    <>
      
    </>
  )
}

export default Home;
