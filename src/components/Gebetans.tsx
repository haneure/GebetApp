import React from "react";

export interface Gebetan {
    id: string,
    name: string,
    ket: string,
    gender: string,
    image: string
}

interface Context{
    gebetans: Gebetan[];
    addGebetan: (id: string, name: string, ket: string, gender: string, image: string) => void;
    deleteGebetan: (id: string) => void;
}

const Gebetans = React.createContext<Context>({
    gebetans: [],
    addGebetan: () => {},
    deleteGebetan: () => {}
});

export default Gebetans;