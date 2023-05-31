
import { useSelector } from 'react-redux';
import './style.css';
import ProtvistaUniprot from 'protvista-uniprot';

window.customElements.define('protvista-uniprot', ProtvistaUniprot);

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