
import { useSelector } from 'react-redux';
import ProtvistaUniprot from 'protvista-uniprot';
import { stateInterface } from 'src/interfaces';
import './style.css';

window.customElements.define('protvista-uniprot', ProtvistaUniprot);

const ProteinFeatureView = () => {

    const protein = useSelector((state: stateInterface) => state.protein);
    const element = <protvista-uniprot accession={ protein.primaryAccession as string }/>
         
    return (
        <div  className='featureView'>
            <div className='view__container'>
                { element ? element : <div>loading</div> } 
            </div>
        </div>
    )
}

export default ProteinFeatureView;