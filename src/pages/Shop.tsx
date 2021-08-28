import React from 'react'
import { connect } from 'react-redux';
import Header from '../components/header'
import { mapStateToProps } from '../mappers';

const Shop = ({ theme }: any) => {
    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <Header></Header>
            <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                Would you take a break please
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(Shop);