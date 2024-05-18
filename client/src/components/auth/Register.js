import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        userType: 'buyer'
    });

    const { firstName, lastName, email, phone, password, userType } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({ firstName, lastName, email, phone, password, userType });
    };

    return (
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
                <select name="userType" value={userType} onChange={e => onChange(e)}>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
    );
};

export default connect(null, { register })(Register);
