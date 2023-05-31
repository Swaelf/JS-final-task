import { useSelector } from 'react-redux';
import { Button } from 'src/components';
import './style.css';
import { useCallback, useRef } from 'react';

const ProteinDetails = () => {

    const protein = useSelector((state: any) => state.protein);
    const date = new Date(Date.parse(protein.entryAudit.lastAnnotationUpdateDate));

    const textRef = useRef<HTMLTextAreaElement>(null);

    const handleClick = useCallback(() => {
        
        textRef?.current?.select();
        document.execCommand('copy');

    }, [])

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
                <Button 
                    className='copy' 
                    onClick={ handleClick } 
                    to={ location.pathname }/>
                Copy
            </div>
            <textarea 
                ref={ textRef }
                className='details__text' 
                defaultValue={ protein.sequence.value }
                readOnly={ true }/>
        </div>
    )
}

export default ProteinDetails;