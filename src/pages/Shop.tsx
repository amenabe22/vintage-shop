import React from 'react'
import { connect } from 'react-redux';
import Header from '../components/header'
import { mapStateToProps } from '../mappers';

const Shop = ({ theme }: any) => {
    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <Header></Header>
        </div>
    );
}

export default connect(mapStateToProps)(Shop);