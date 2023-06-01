
import { useSelector } from 'react-redux';
import ProtvistaUniprot from 'protvista-uniprot';
import { stateInterface } from 'src/interfaces';
import { Loader } from 'src/components'
import './style.css';
import { useEffect, useState } from 'react';

window.customElements.define('protvista-uniprot', ProtvistaUniprot);

const ProteinFeatureView = () => {

    const protein = useSelector((state: stateInterface) => state.protein);
    const [element, setElement] = useState<JSX.Element>();

    useEffect(() => {
        generateProtVistaElement(protein.primaryAccession as string)
                    .then((result) => { 
                        setElement(result);
                    })
    }, [])
         
    return (
        <div  className='featureView'>
            <div className='view__container'>
                { element ? element : <Loader/> } 
            </div>
        </div>
    )
}

async function generateProtVistaElement ( entry: string ) {
    const element = await <protvista-uniprot accession={ entry }/>
    return element;
}

export default ProteinFeatureView;