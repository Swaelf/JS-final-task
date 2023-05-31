import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Button, Label } from 'src/components';
import { setCurrentPath } from 'src/actions';

import './style.css';

const ProteinPage = () => {

    const dispatch = useDispatch();

    const search = useSelector((state: any) => state.search);
    const protein = useSelector((state: any) => state.protein);

    const proteinClear = {
        entry: protein.primaryAccession ? protein.primaryAccession : '',
        entryNames: protein.uniProtkbId ? protein.uniProtkbId : '',
        genes: protein.genes && protein.genes[0].geneName && protein.genes[0].geneName.value ? protein.genes[0].geneName.value : '',
        genesSecondary: protein.genes && protein.genes[0].synonyms ? protein.genes[0].synonyms.map((gene: any) => (' ' + gene.value)) : [],
        organism: protein.organism ? protein.organism.scientificName : '',
        sublocation: protein.comments && protein.comments[0] && protein.comments[0].subcellularLocations ? protein.comments[0].subcellularLocations.map((sub: any) => sub.location.value) : '',
        length: protein.sequence ? protein.sequence.length : 0
    }   
    
    let initialTab: string = '/';
    if (location.pathname.match('details')) { initialTab = 'details' }
    if (location.pathname.match('feature_viewer')) { initialTab = 'features' }
    if (location.pathname.match('publications')) { initialTab = 'publications' }
    
    const [activeButton, setActiveButton] = useState(initialTab);

    const handleDetails = useCallback(() => {
        setActiveButton('details');
        dispatch(setCurrentPath(`/protein/${ proteinClear.entry }/details`));
    }, []);

    const handleFeatures = useCallback(() => {
        setActiveButton('features');
        dispatch(setCurrentPath(`/protein/${ proteinClear.entry }/feature_viewer`));
    }, [])

    const handlePublications = useCallback(() => {
        setActiveButton('publications');
        dispatch(setCurrentPath(`/protein/${ proteinClear.entry }/publications`));
    }, [])


    return (
        <div className='proteinPage'>
            <div className='protein__header'>
                { proteinClear.entry + '/' + proteinClear.entryNames }
                <Label 
                    className='itemLabel_organism'
                    text={ proteinClear.organism }/>  
            </div>
                
            <div className='protein__string'>
                { 'protein' }
            </div>

            <div className='protein__string'>
                { 'Deleted in lung and esophageal cancer protein 1' }
            </div>

            <div className='protein__string'>
                { 'Gene' }
            </div>

            <div className='protein__string'> 
               { proteinClear.genes + ((proteinClear.genesSecondary != '') ? (', ' + protein.genesSecondary) : '') }
            </div>

            <div className='protein_button_container'>
                <div className='protein_links_container'>
                    <Button 
                        className={ activeButton==='details' ? 'protein__links protein__links--active' : 'protein__links' }
                        text='Details' 
                        onClick={ handleDetails }
                        to={ `/protein/${ proteinClear.entry }/details` }/>

                    <Button 
                        className={ activeButton==='features' ? 'protein__links protein__links--active' : 'protein__links' }
                        text='Feature viewer' 
                        onClick={ handleFeatures }
                        to={ `/protein/${ proteinClear.entry }/feature_viewer`}/>

                    <Button 
                        className={ activeButton==='publications' ? 'protein__links protein__links--active' : 'protein__links' }
                        text='Publications' 
                        onClick={ handlePublications }
                        to={ `/protein/${ proteinClear.entry }/publications`}/>
                </div>

                <Button 
                    className={'protein__links protein__links--home'}
                    text='to Search' 
                    to={ '/search?query=' + search }/>
            </div>
            <Outlet/>
        </div>
    )
}

export default ProteinPage;