import { Button } from '../Button';

import './style.css';
import { useSelector } from 'react-redux';

export const ProteinDetails = () => {

    const protein = useSelector((state: any) => state.protein.results);
    const date = new Date(Date.parse(protein.entryAudit.lastAnnotationUpdateDate))

    return (
        <div className='details'>
            <div className='details__container'>
                <div className='details__items'>
                    <span>Length</span>
                    <span>{ protein.sequence.length }</span>
                    <span>Mass (Da)</span>
                    <span>{ protein.sequence.molWeight }</span>
                </div>
                <div className='details__items'>
                    <span>Last updated</span>
                    <span>{ date.toDateString().substring(4) }</span>
                    <span>Checksum</span>
                    <span>{ protein.sequence.crc64 }</span>
                </div>
            </div>
            <div className='button_copy_container'>
                <Button className='copy'/>
                Copy
            </div>
            <label className='details__text'>{ protein.sequence.value }</label>
        </div>
    )
}