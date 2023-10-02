import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const LearnDeckBySelectedMethod: React.FC = () => {

  const { method } = useParams<{ method: string }>();
  
  return (
    <>
      metoda: {method}
    </>
  )
}

export default LearnDeckBySelectedMethod