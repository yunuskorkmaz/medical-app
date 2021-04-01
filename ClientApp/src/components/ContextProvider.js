import React from 'react';
import HospitalStore from '../stores/hospitalStore';

export const HospitalContext = React.createContext(null);

export const HospitalContextProvider = ({ children }) => {
    return (<HospitalContext.Provider value={new HospitalStore()}>{children}</HospitalContext.Provider>)
}