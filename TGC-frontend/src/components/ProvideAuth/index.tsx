import React, { createContext } from 'react';
import { ContextProps } from './types';
import { useProvideAuth } from '../../hooks/useProvideAuth';

const initialContext = {
    userData: null,
    userToken: null,
    tournamentId: 1,
    saveTournament: () => null,
    signin: () => null,
    setUser: () => null,
    signout: () => null
}

export const authContext = createContext<ContextProps>(initialContext);

export const ProvideAuth = ({ children }: any) => {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}