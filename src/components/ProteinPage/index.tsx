import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataFromServer from '../../functions/getDataFromServer';
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Button } from '../Button';
import { Label } from '../Label';
import { ProteinDetails } from '../ProteinDetails';
import { setProtein } from '../../actions/setProtein';

import './style.css';

export const ProteinPage = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const entry = useSelector((state: any) => state.entry);
    const protein = useSelector((state: any) => state.protein.results);

    const [activeButton, setActiveButton] = useState('');

    const localpath: string = `https://rest.uniprot.org/uniprotkb/${entry}`

    const handleDetails = useCallback(() => {
        setActiveButton('details');
    }, []);

    const handleFeatures = useCallback(() => {
        setActiveButton('features');
    }, [])

    const handlePublications = useCallback(() => {
        setActiveButton('publications');
    }, [])


    console.log(protein);


    return (
        <div className='proteinPage'>
            <div className='protein__header'>{ 
                (protein.primaryAccession ? protein.primaryAccession : '') + '/' + 
                (protein.uniProtkbId ? protein.uniProtkbId : '')
              }
                <Label 
                    className='itemLabel_organism'
                    text={ protein.organism ? protein.organism.scientificName : '' }/>  
              </div>
                

            <div className='protein__string'>{ 
                'protein'
              }</div>

            <div className='protein__string'>{ 
                'Deleted in lung and esophageal cancer protein 1'
              }</div>

            <div className='protein__string'>{ 
                'Gene'
              }</div>

            <div className='protein__string'>{ 
                protein.genes ? (
                    (protein.genes[0].geneName ? protein.genes[0].geneName.value ? protein.genes[0].geneName.value : '' : '') + 
                    (protein.genes[0].synonyms ? (',' + protein.genes[0].synonyms.map((gene: any) => (' ' + gene.value))) : '') 
                    ) : ''
              }</div>
            <div className='protein_button_container'>
                <div className='protein_links_container'>
                    <Button 
                        className={ activeButton==='details' ? 'protein__links protein__links--active' : 'protein__links' }
                        text='Details' 
                        onClick={ handleDetails }
                        to={ `/protein/${ protein.primaryAccession }/details` }/>

                    <Button 
                        className={ activeButton==='features' ? 'protein__links protein__links--active' : 'protein__links' }
                        text='Feature viewer' 
                        onClick={ handleFeatures }
                        to={ `/protein/${ protein.primaryAccession }/feature_viewer`}/>

                    <Button 
                        className={ activeButton==='publications' ? 'protein__links protein__links--active' : 'protein__links' }
                        text='Publications' 
                        onClick={ handlePublications }
                        to={ `/protein/${ protein.primaryAccession }/publications`}/>
                </div>

                <Button 
                    className={'protein__links protein__links--home'}
                    text='to Search' 
                    to={ `/Home` }/>
            </div>
            <Outlet/>
        </div>
    )
}