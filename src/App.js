import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import fetchRewards from "./api/fetchRewards";

const App = () => {

    const [occupations, setOccupations] = useState([]);
    const [statesEl, setStatesEl] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const { data } = await fetchRewards.get('/form', {
                params: {
                    format: 'json',
                    origin: '*'
                }
            });

            setOccupations(data.occupations);
            setStatesEl(data.states);

        }

        getData()

    }, [])

    return (
        <div className="container">
            <Form occupations={occupations} states={statesEl} />
        </div>
    )
}

export default App;