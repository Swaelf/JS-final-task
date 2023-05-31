import { useSelector } from 'react-redux';
import './style.css';

const ProteinPublications = () => {

    const protein = useSelector((state: any) => state.protein);

    return (
        <div className='publications'>
            { 
                protein.references.map((publications: any) => { 
                    return (
                        <div key={ publications.citation.id } className='publication__item'>
                            <span 
                                className='publication__title'>
                                    { publications.citation.title ? publications.citation.title : '' }
                            </span>

                            <span>
                                { publications.citation.authors ? publications.citation.authors.join(', ') : '' }
                            </span>

                            <span>
                                { 'Cited for: ' + publications.referencePositions ? publications.referencePositions.join(', ') : '' }
                            </span>

                            <span 
                                className='reference__container'>
                                    { publications.citation.citationCrossReferences ? 
                                        publications.citation.citationCrossReferences.map((reference: any) => {
                                            return <span 
                                                key={ reference.database } 
                                                className='reference__element'>
                                                    { reference.database }
                                                    <span className='reference__icon'></span>
                                            </span>
                                        }
                                ) : '' }</span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ProteinPublications;
