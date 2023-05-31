import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, Input, Label } from 'src/components';
import './style.css';

const FilterModal = () => {

  const location = useLocation();
  const geneRef = useRef(null);
  const organismdRef = useRef(null);
  const sequenceRef_1 = useRef(null);
  const sequenceRef_2 = useRef(null);
  const anotationRef = useRef(null);
  const lengthRef = useRef(null);

  const auth: any = useSelector((state: any) => state.auth);
  console.log(auth);

  const handleClick = useCallback(() => {

      console.log( geneRef.current?.value );
      console.log( organismdRef.current?.value );
      console.log( sequenceRef_1.current?.value );
      console.log( sequenceRef_2.current?.value );
      console.log( anotationRef.current?.value );
      console.log( lengthRef.current?.value );
  }, [location]); 


  return (
    <div className='filrterModal__container'>
      <Label 
        className='filter_label' 
        text='Filters'/>

      <Input 
        className='filter_input' 
        placeholder='Enter Gene Name' 
        inputRef={ geneRef }
        text='Gene Name'/>

      <Input 
        className='filter_input' 
        placeholder='Select an option' 
        inputRef={ organismdRef }
        text='Organism'/>

      <div>
      <Label 
          className='sequence_label' 
          text='Sequence length'/>

        <div className='sequence'>

          <Input 
            className='filter_input input_sequence' 
            placeholder='From' 
            inputRef={ sequenceRef_1 }
            text=''/>

          <Label 
            className='sequence_label' 
            text=''/>

          <Input 
            className='filter_input input_sequence' 
            placeholder='To' 
            inputRef={ sequenceRef_2 }
            text=''/>
        </div>
      </div>

      <Input 
        className='filter_input' 
        placeholder='Select an option' 
        inputRef={ anotationRef }
        text='Annotation score'/>

      <Input 
        className='filter_input' 
        placeholder='Select' 
        inputRef={ lengthRef }
        text='Protein with'/>
        
      <div className='filter_button_container'>
        <Button 
          className='button button__filter--cancel' 
          text='cancel' 
          to={ location.pathname.replace('/filter', '') + location.search }/>

        <Button 
          className='button button__filter--apply' 
          onClick={ handleClick }
          text='Apply Filters' 
          to={ location.pathname.replace('/filter', '') + location.search }/>
      </div>
   </div>
  )
}

export default FilterModal;