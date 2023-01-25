import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Stack } from '@mui/material';
import Auth from '../utils/auth';
import fishBones from "../assets/Avatars/Fish bones.png";

const Navbar = () => {

    return (
        <nav>
            <div className='mx-w-6xl mx-auto px-10 py-10'>
            <div className='flex justify-between'>
             <Stack        
                direction="row"
                justifyContent="flex-end"
                spacing={4}
                >

                <Avatar
                alt="avatar"
                src={fishBones}
                sx={{width:50,
                     height: 50,
                    }}
                /> 
                {Auth.loggedIn() ? (
             <div>
                <Link className="text-lg" to="/dashboard">
                    {Auth.getProfile().data.username}
                </Link>
                 <Button
                variant="text"
                onClick={Auth.logout}
                sx={{
                    width: 100,
                    fontFamily: "MenloRegular",
                    fontSize: 15,
                    color: 'white',
                    m: 0.5
                          }}
                >
                    LOG OUT
                </Button>
                </div>
                 
             ): (
                null
             )}
            </Stack>
            
            </div>
            </div>
        </nav>
    )

}

export default Navbar;