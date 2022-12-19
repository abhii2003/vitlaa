import React from 'react';
import {useState , useEffect} from 'react';
import Cliploader from 'react-spinners/ClipLoader';



export default  function Loader(){
    const[loading , setLoading] = useState(false);
    useEffect(() => {
        setLoading(true );
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }, []);
      {
        loading?
        <Cliploader color={"#ffff"} loading={loading} size={100} />:
        <div></div>
        
      }
}