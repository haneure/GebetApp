import { useState } from "react";
import Gebetans, { Gebetan } from "./Gebetans";

const GebetanProvider: React.FC = props => {
    const [gebetans, setGebetan] = useState<Gebetan[]>([]);

    const addGebetan1 = (id: string, name: string, ket: string, gender: string, image: string) => {
        const newGebetan: Gebetan = {
            id: id,
            name: name,
            ket: ket,
            gender: gender,
            image: image
        };
        setGebetan((currGebetan) => {return currGebetan.concat(newGebetan)});
    }

    const deleteGebetan1 = (id: string) => {
        for(let i = 0; i < gebetans.length; i++){
            if(gebetans[i].id == id){
                gebetans.splice(i, 1);
                break;
            }
        }
    }

    return (
        <Gebetans.Provider value = {{
            gebetans, 
            addGebetan: addGebetan1,
            deleteGebetan: deleteGebetan1
        }}>{props.children}
        </Gebetans.Provider>
    );
};

export default GebetanProvider;