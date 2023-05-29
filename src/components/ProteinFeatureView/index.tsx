import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import getDataFromServer from '../../functions/getDataFromServer';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Label } from '../Label';



import './style.css';
import Interface from './Interface';

export const ProteinFeatureView = () => {

    

    const location = useLocation();

    return (
        <div className='featureView'>

        </div>
    )
}