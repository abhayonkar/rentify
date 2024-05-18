import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} required />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
        </form>
    );
};

export default connect(null, { login })(Login);
