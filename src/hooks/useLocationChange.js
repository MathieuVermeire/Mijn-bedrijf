import React from 'react';
import { useLocation } from 'react-router-dom';


export const useLocationChange = (action) => {
  const location = useLocation()
  React.useEffect(() => { action(location) }, [location])
}
