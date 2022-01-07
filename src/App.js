import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import fetchRewards from "./api/fetchRewards";

const App = () => {

    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const { data } = await fetchRewards.get('/form', {
                params: {
                    format: 'json',
                    origin: '*'
                }
            });

            setOccupations(data.occupations);
            setStates(data.states);

        }

        getData()

    }, [occupations, states])

    return (
        <div className="container">
            <Form occupations={occupations} states={states} />
        </div>
    )
}

export default App;