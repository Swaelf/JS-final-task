import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { TableRow } from '../TableRow';
import { Label } from '../Label';

import './style.css';
import getDataFromServer from '../../functions/getDataFromServer';
import { addItem } from '../../actions/addItem';
import { updateSearch } from '../../actions/updateSearch';
import { updateLink } from '../../actions/updateLink';

export const TableRows = () => {

  const items: any = useSelector((state: any) => state.items);
  const link: any = useSelector((state: any) => state.link);

  console.log(items);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listRef = useRef(null);

  useEffect(() => {
    const container = listRef.current ? listRef.current : { 
      scrollTop: 10, 
      scrollHeight: 10, 
      clientHeight: 10, 
      addEventListener: ((scroll: string, handleScroll: any) => {}),
      removeEventListener: ((scroll: string, handleScroll: any) => {})
    };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if ((Math.floor(scrollHeight - scrollTop) + 1) === clientHeight) {
        if (link) {
          getDataFromServer(link)
            .then((items) => {
              items.results.results.map((item: any) => dispatch(addItem(item)));
              dispatch(updateLink(items.newlink));
            });
          }
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [ link ]);

  return (
          <div className='tableRows' ref={ listRef }>
            { items.map((protein: any, i: number) => {
              return <TableRow 
                key={ protein.primaryAccession ? protein.primaryAccession : i } 
                index={ i }
                entry={ protein.primaryAccession ? protein.primaryAccession : '' }
                entryNames={ protein.uniProtkbId ? protein.uniProtkbId : '' }
                genes={ 
                  protein.genes ? (
                    (protein.genes[0].geneName ? protein.genes[0].geneName.value ? protein.genes[0].geneName.value : '' : '') + 
                    (protein.genes[0].synonyms ? (',' + protein.genes[0].synonyms.map((gene: any) => (' ' + gene.value))) : '') 
                    ) : '' 
                  }
                organism={ protein.organism ? protein.organism.scientificName : '' }
                sublocation={ 
                  protein.comments ? protein.comments[0] ? protein.comments[0].subcellularLocations.map((sub: any) => sub.location.value) : '' : ''
                }
                length={ protein.sequence ? protein.sequence.length : 10 }
                />
              })}   
         </div>
  )
}


