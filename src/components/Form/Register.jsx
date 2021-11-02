import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import validate from '../Form/FormValidate/FormValidate'
import useForm from "./useForm/useForm";

const Register = props => {
    const { values, errors } = useForm(
        validate
    );

    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('test@mail.com');
    const [password, setPassword] = useState('123123123');
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (email === 'admin@mail.ru') {
            setAdmin('admin')
        }
        if (email === '' || password === '') {
            setError('Fill in all the fields')
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email address is invalid')
        }
        else if (password.length < 8) {
            setError('Password must be 8 or more characters')
        }
        else {
            setError('')
            axios.post('http://192.168.1.186:3000/api/auth/login', values)
                .then(response => {
                    console.log(response)
                });
            setLoggedIn(true);
            props.parentCallback(true);
        }
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
        color: '#fff',
        fontWeight: '500',
        link: {
            color: '#9847EA',
            textDecoration: 'none',
        }
    }

    return (
        <div className="section is-fullheight">
            {loggedIn && 
            <Redirect
            to={{
              pathname: "/Dashboard",
              state: { type: admin }
            }}
          />
          
            }
            <div className="container">
                <form onSubmit={handleSubmit} style={formContainer} noValidate>
                    <div style={{ marginBottom: '48px' }} className="text-center title">
                        <p>Sign In</p>
                    </div>

                    <div className="field">
                        <input
                            style={form}
                            autoComplete="off"
                            className={`input ${errors.email && "is-danger"} w-100`}
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder='Email'
                            required
                        />

                    </div>
                    <div className="field">
                        <input
                            style={form}
                            className={`input ${errors.password && "is-danger"} w-100`}
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='Password'
                            required
                        />
                        <p className="error">{error}</p>
                    </div>


                    <button type='submit' style={btnSubmit} className="w-100">
                    Submit
                    </button>

                    <Row style={{ marginTop: '56px' }} className="text-center">
                        <p>Have an account ? <span className='sign-in'>

                            <Link style={btnSubmit.link} to={'/sign-up'}>Sign in</Link>

                        </span></p>
                    </Row>
                </form>
            </div>

        </div>
    );
}

export default Register;