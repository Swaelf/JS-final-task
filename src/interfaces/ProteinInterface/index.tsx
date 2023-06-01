export interface proteinListInterface {
    results?: (proteinInterface)[],
    newlink?: string
}

export interface proteinInterface {
    entry?: string,
    entryNames?: string,
    genesPrimary?: string,
    genes?: (genesInterface)[],
    genesSecondary?: (string|null)[],
    organism?: { scientificName?: string },
    organismName?:  string,
    sublocation?: string,
    length?: number,
    entryAudit?: { lastAnnotationUpdateDate?: string },
    comments?: (commentInterface)[],
    sequence?: { 
        length?: number, 
        molWeight?: number, 
        crc64?: string,
        value?: string
    },
    primaryAccession?: string,
    uniProtkbId?: string,
    references?: (referencesInterface)[]
}

export interface genesInterface {
    geneName?: geneInterface,
    synonyms?: geneInterface[]
}

export interface geneInterface {
    value?: string
}

export interface commentInterface {
    subcellularLocations?: (locationInterface)[]
}

export interface locationInterface {
        location?: { value?: string }
}
export interface referencesInterface {
    citation?: { 
        id?: string|number, 
        title?: string,
        authors?: (string)[],
        citationCrossReferences?: (referenceInterface)[]
    },
    referencePositions?: (string)[]
}

export interface referenceInterface {
    database?: string
}