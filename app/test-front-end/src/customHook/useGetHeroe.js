import React from 'react'
import axios from "axios"
import { setList } from '../actions';
import { useDispatch } from 'react-redux';
const useGetHeroe = () => {
const dispatch = useDispatch()
async function getHeroes()
{
axios.get('http://localhost:3333/data', {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }})
  .then((response) => {
    setTimeout(() => {
      
     response.data.map((data,i)=>{ dispatch(setList(data))})

       
    }, 3000);
  })
  .catch((error) => {
    console.log(error);
  });
}
  return {getHeroes}
}

export default useGetHeroe