import { Button, Label } from 'src/components'
import './style.css';

const Error404 = () => {
  return (
    <div className='errorPage'>
        <Label 
          className='error__text error__text--header' 
          text='404'/>
        <Label 
          className='error__text error__text--core' 
          text='page not found'/>
        <Button 
          className='button button__search' 
          text='Back to Search'
          to='/JS-final-task/Home'/>
   </div>
  )
}

export default Error404;