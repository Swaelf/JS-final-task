import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableRow, Loader } from 'src/components';
import { addProtein, updateLink } from 'src/actions';
import getProteinList from 'src/functions/getProteinList';
import './style.css';
import { proteinInterface, proteinListInterface, stateInterface } from 'src/interfaces';

const TableRows = () => {

  const proteinList: (proteinInterface)[] = useSelector((state: stateInterface) => state.proteinList as (proteinInterface)[]);
  const link: string = useSelector((state: stateInterface) => state.link);
  const dispatch = useDispatch();
  const listRef = useRef<HTMLDivElement>(null);

  const [load, setLoad] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
 
  useEffect(() => {

    const container = listRef.current 

    const handleScroll = () => {
      if (container) {
        if ((Math.floor(container.scrollHeight - container.scrollTop) + 1) === container.clientHeight) {
          if (link) {
            setLoad(true);
            setScrollPosition(container.scrollTop);
            getProteinList(link)
              .then((List: proteinListInterface) => { 
                List.results?.map((protein: proteinInterface) => dispatch(addProtein(protein)));
                List.newlink ? dispatch(updateLink(List.newlink)) : '';
              })
              .catch(error => window.alert('error while fetch: ' + error.message))
              .finally(() => { setLoad(false); })
            }
        }
      }
    };

    if (container) {
      container?.addEventListener('scroll', handleScroll);
      container.scrollTop = scrollPosition;
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [ link, load ]);

  if ( load ) {
    return <Loader/>
  } 

return (
    <div className='tableRows' ref={ listRef }>
      { proteinList.map((protein: proteinInterface, i: number) => {
        return <TableRow 
          key={ protein.primaryAccession ? protein.primaryAccession : i } 
          index={ i }
          entry={ protein.entry }
          entryNames={ protein.entryNames }
          genes={ protein.genesPrimary + ((protein.genesSecondary?.join('') !== '') ? (', ' + protein.genesSecondary?.join(', ')) : '') }
          organism={ protein.organismName?.substring(0, protein.organismName?.indexOf('(') > 0 ? protein.organismName.indexOf('(') : protein.organismName.length) }
          sublocation={ protein.sublocation }
          length={ protein.length }
          />
        })}   
    </div>
  )
};

export default TableRows;


