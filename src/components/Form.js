import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetchRewards from "../api/fetchRewards";

const Form = ({ occupations, states }) => {

    const { register, handleSubmit } = useForm();

    const [submitStatus, setSubmitStatus] = useState(false);

    const occupationsOpts = occupations.map(occupation => {
        return (
            <option className="occupation__option" key={occupation}>
                {occupation}
            </option>
        )
    })

    const statesOpts = states.map(state => {
        return (
            <option className="state__option" key={state.abbreviation}>
                {state.name}
            </option>
        )
    })

    const onSubmit = (data) => {

        fetchRewards.post('/form', data).then(res => {
            if (res.status === 200) {
                setSubmitStatus(true);
            }
        })
    }

    return (
        <div className="form">
            <div className="form-heading">
                <h2>Sign up</h2>
            </div>
            {
                submitStatus ? (
                    <h3>Success, thanks for the signing up!</h3>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <input type="text" id="full-name" {...register("name")} placeholder="Full Name" required />
                </div>
                <div className="form-field">
                    <input type="email" id="email" {...register("email")} placeholder="Email" required />
                </div>
                <div className="form-field">
                    <input type="password" id="password" {...register("password")} placeholder="Password" required />
                </div>
                <div className="form-field">
                    <select className="form__select" {...register("occupation")} required>
                        { occupationsOpts }
                    </select>
                    <select className="form__select" {...register("state")} required>
                        { statesOpts }
                    </select>
                </div>
                <button type="submit" className="form-btn">Go</button>
            </form>
                )
            }
        </div>
    )
}

export default Form;