import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Redirect to='/' />
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
           
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="mt-3 text-center text-3xl">Verify Account</h2>
                <p className="mt-2 text-center text-1xl">This will take you through to the login page</p>
        
                <button 
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' 
                onClick={verify_account}
                style={{ marginTop: '50px' }}
                type='button'
                >
            
                Verify Account
                
                </button>
            </div>
           
        </div>
        
    );
};




export default connect(null, { verify })(Activate);
