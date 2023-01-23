import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';

const Navbar = () => {

    return (
        <nav className='w-full bg-transparent fixed py-4 top-0 left-0 right-0 text-stone-100'>
            <div>
                <h2>deadCoder</h2>
            </div>
            {Auth.loggedIn() ? (
                <>
                <Link className="font-semibold" to="/dashbaord">
                    {Auth.getProfile().data.username}
                </Link>
                <Avatar
                alt="avatar"
                src={Auth.getProfile.data.avatar}
                />
                </>
            ): (
                null
            )}
        </nav>
    )

}

export default Navbar;