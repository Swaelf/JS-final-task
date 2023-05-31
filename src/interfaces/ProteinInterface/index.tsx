

/*export interface proteinInterface {
    primaryAccession?: string,
    uniProtkbId?: string,
    genes?: [ geneInterface ],
    organism?: { scientificName?: string },
    sequence?: { 
        accession?: string, 
        length?: number 
    },
    comments?: [ commentInterface ]
};*/

export interface proteinInterface {
    entry?: string,
    entryNames?: string,
    genes?: string,
    genesSecondary?: (string|null)[],
    organism?:  string,
    sublocation?: (string|null)[],
    length?: number
}

/*export interface geneInterface {
    geneName?: { value?: string }, 
    synonyms?: [ { value?: string } ]
};

export interface commentInterface { 
    subcellularLocations?: [ subLocInterface ]
};

export interface subLocInterface { 
    location?: { value?: string } 
};*/
