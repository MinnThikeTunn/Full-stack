
import React,{useState,useEffect } from 'react';
import useResize from '../../../../utils/useResize';
import '../../../../Styles/Degree.css';
import Heading from '../Components/Heading';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';

function HPC() {

  const windowWidth = useResize("Embedded Systems (ES)");
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper className='p-[5%]'>
      <Heading name="Embedded Systems (ES)" />
      <BodyPart />
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
