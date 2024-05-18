import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';

const Dashboard = ({ getProperties, property: { properties, loading } }) => {
    useEffect(() => {
        getProperties();
    }, [getProperties]);

    return loading ? <div>Loading...</div> : (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>{property.place}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    property: state.property
});

export default connect(mapStateToProps, { getProperties })(Dashboard);
