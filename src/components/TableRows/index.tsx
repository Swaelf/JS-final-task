import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableRow, Loader } from 'src/components';
import { addProtein, updateLink } from 'src/actions';
import getProteinList from 'src/functions/getProteinList';
import './style.css';

const TableRows = () => {

  const proteinList: any = useSelector((state: any) => state.proteinList);
  const link: any = useSelector((state: any) => state.link);
  const dispatch = useDispatch();
  const listRef = useRef<HTMLDivElement>(null);

  const [load, setLoad] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
 
  useEffect(() => {

    const container = listRef.current 

    const handleScroll = () => {
      if (container) {
        console.log(container.scrollTop, '---', container.clientHeight);
        if ((Math.floor(container.scrollHeight - container.scrollTop) + 1) === container.clientHeight) {
          if (link) {
            setLoad(true);
            setScrollPosition(container.scrollTop);
            getProteinList(link)
              .then((proteinList) => { 
                proteinList.results.map((protein: any) => dispatch(addProtein(protein)));
                proteinList.newlink ? dispatch(updateLink(proteinList.newlink)) : '';
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
      { proteinList.map((protein: any, i: number) => {
        return <TableRow 
          key={ protein.primaryAccession ? protein.primaryAccession : i } 
          index={ i }
          entry={ protein.entry }
          entryNames={ protein.entryNames }
          genes={ protein.genes + ((protein.genesSecondary != '') ? (', ' + protein.genesSecondary) : '') }
          organism={ protein.organism.substring(0, protein.organism.indexOf('(') > 0 ? protein.organism.indexOf('(') : protein.organism.length) }
          sublocation={ protein.sublocation }
          length={ protein.length }
          />
        })}   
    </div>
  )
};

export default TableRows;


