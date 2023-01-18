import React from 'react'
import { Button } from '@mui/material'

import './Questions.css'

export default function questionPages (){
    return (

        <div className='questionsTitle'>
            I WOULD LIKE MY DAILY Q. TO BE ABOUT
            <div>
                <div className='questionChoices'>
                <Button sx={{ width: 200, fontFamily: 'MenloRegular', fontSize:15, color: 'white', border: 0.5, borderColor: '#929292', borderRadius: 0 }}>JAVASCRIPT</Button>
                </div>
                <div>
                <Button sx={{ width: 200, marginTop: 2, fontFamily: 'MenloRegular',fontSize:15, color: 'white', border: 0.5, borderColor: '#929292', borderRadius: 0 }}>PYTHON</Button>
                </div>
                <div>
                <Button sx={{ width: 200, marginTop: 2, fontFamily: 'MenloRegular',fontSize:15, color: 'white', border: 0.5, borderColor: '#929292', borderRadius: 0 }}>CSS</Button>
                </div>
                <div>
                <Button sx={{ width: 200, marginTop: 2, fontFamily: 'MenloRegular', fontSize:15, color: 'white', border: 0.5, borderColor: '#929292', borderRadius: 0 }}>HTML</Button>
                </div>
                <div>
                <Button sx={{ width: 200, marginTop: 2, fontFamily: 'MenloRegular', fontSize:15, color: 'white', border: 0.5, borderColor: '#929292', borderRadius: 0 }}>ALL</Button>
                </div>
            </div>
        </div>
    )
}