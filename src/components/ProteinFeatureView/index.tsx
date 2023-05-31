
import { useSelector } from 'react-redux';
import './style.css';
import { useEffect } from 'react';

const ProteinFeatureView = () => {

    const protein = useSelector((state: any) => state.protein);

    let element = 
        <div className='view__container'>
            <protvista-uniprot 
                accession={ protein.primaryAccession }/>
        </div>;
         
    return (
        <div  className='featureView'>
             { element ? element : <div></div> } 
        </div>
    )
}

export default ProteinFeatureView;