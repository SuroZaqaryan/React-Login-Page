import React, { useEffect } from 'react';
import axios from 'axios';
import '../../../App.css'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import validate from '../../Form/FormValidate/FormValidate'
import useForm from "../useForm/useForm";
import { Link } from "react-router-dom";

const SignUp = props => {
    const { values, errors, handleChange, handleSubmit } = useForm(
        login,
        validate
    );

    function login() {
        axios.post('http://192.168.1.186:3000/api/auth/register', values)
            .then(response => {
                console.log(response)
            });
    }

    const formContainer = {
        maxWidth: '444px',
        margin: '6rem auto',
        boxShadow: '0px 16px 40px #F2F2F2',
        background: '#fff',
        borderRadius: '8px',
        padding: '32px',
    };

    const form = {
        background: '#F7F7F7',
        borderRadius: '8px',
        border: 'none',
        fontSize: '16px',
        color: '#343434',
        padding: '12px 16px',
    };

    const btnSubmit = {
        background: '#9847EA',
        borderRadius: '8px',
        border: 'none',
        padding: '12px 0',
        fontWeight: '500',
        link: {
            color: '#9847EA',
            textDecoration: 'none',
        }
    }

    return (
        <div className="section is-fullheight">
            <div className="container">
                <form onSubmit={handleSubmit} style={formContainer} noValidate>
                    <div style={{ marginBottom: '48px' }} className="text-center title">
                        <p>Sign Up</p>
                    </div>
                    <div className='d-flex field'>
                        <div style={{ marginRight: '13px' }}>
                            <input
                                style={form}
                                autoComplete="off"
                                className={`input ${errors.name && "is-danger"} w-100`}
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={values.name || ""}
                                placeholder='First name'
                                required
                            />
                            {errors.name && (
                                <p className="error">{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <input
                                style={form}
                                autoComplete="off"
                                className={`input ${errors.username && "is-danger"} w-100`}
                                type="text"
                                name="username"
                                onChange={handleChange}
                                value={values.username || ""}
                                placeholder='Last name'
                                required
                            />
                            {errors.username && (
                                <p className="error">{errors.username}</p>
                            )}
                        </div>
                    </div>
                    <div className="field">
                        <input
                            style={form}
                            autoComplete="off"
                            className={`input ${errors.email && "is-danger"} w-100`}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email || ""}
                            placeholder='Email'
                            required
                        />
                        {errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>
                    <div className="field">
                        <input
                            style={form}
                            className={`input ${errors.password && "is-danger"} w-100`}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password || ""}
                            placeholder='Password'
                            required
                        />
                        {errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>
                    <div className="field">
                        <input
                            style={form}
                            className={`input ${errors.confirmPassword && "is-danger"} w-100`}
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={values.confirmPassword || ""}
                            placeholder='Confirm Password '
                            required
                        />
                        {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <Button onClick={login} style={btnSubmit} className="w-100" variant="primary">
                        Submit
                    </Button>

                    <Row style={{ marginTop: '56px' }} className="text-center">
                        <p>Have an account ? <span className='sign-in'>
                            <Link style={btnSubmit.link} to={'/sign-in'}>Sign Up</Link></span></p>
                    </Row>
                </form>
            </div>
        </div>
    );
}

export default SignUp;