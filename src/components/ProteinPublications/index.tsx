import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import getDataFromServer from '../../functions/getDataFromServer';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../Button';

import './style.css';
import Interface from './Interface';
import { useSelector } from 'react-redux';

export const ProteinPublications = () => {

    const location = useLocation();
    const protein = useSelector((state: any) => state.protein.results);

    

    return (
        <div className='publications'>
            { 
                protein.references.map((publications: any) => { 
                    return (
                        <div key={ publications.citation.id } className='publication__item'>
                            <span 
                                className='publication__title'>
                                    { publications.citation.title }
                            </span>

                            <span>
                                { publications.citation.authors ? publications.citation.authors.join(', ') : '' }
                            </span>

                            <span>
                                { 'Cited for: ' + publications.referencePositions ? publications.referencePositions.join(', ') : '' }
                            </span>

                            <span 
                                className='reference__container'>
                                    { publications.citation.citationCrossReferences ? 
                                        publications.citation.citationCrossReferences.map((reference: any) => {
                                            return <span 
                                                key={ reference.database } 
                                                className='reference__element'>
                                                    { reference.database }
                                                    <span className='reference__icon'></span>
                                            </span>
                                        }
                                ) : '' }</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

//{ publications.citation.citationCrossReferences }