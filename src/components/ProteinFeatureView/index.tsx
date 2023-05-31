
import { useLocation } from 'react-router-dom';
import './style.css';
import { ProtvistaUniprot } from 'protvista-uniprot';
import { Label } from 'src/components';

const ProteinFeatureView = () => {

    const location = useLocation();
    //const element = new ProtvistaUniprot();
    //console.log(element)

    return (
        <div  className='featureView'>
             <Label text=' temp '/>
        </div>
    )
}

export default ProteinFeatureView;