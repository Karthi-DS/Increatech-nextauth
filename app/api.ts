import React from 'react'
import axios from 'axios';
  
const api="https://cloudide.co.in/workspace/reactor2/public/traininguser/"

const  apifunc=
    axios.create({
        baseURL:api,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json"
          },
        timeout:5000
    })



export {apifunc};
