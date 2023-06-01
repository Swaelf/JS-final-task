
import { proteinListInterface } from "src/interfaces";

export default async function getProteinList(path: string = '') {
  let proteinList: proteinListInterface = { results: [], newlink: ''}

  if (path) {
      await fetch(path, { method: "GET" })
          .then(response => {
            const headers = response.headers;
            proteinList.newlink = headers.get('link')?.substring(1,headers.get('link')?.indexOf('>')) as string;
            return response.json();
          })
          .then((data) => {
            proteinList.results = data.results.map((protein: any) => { 
              return { 
                  entry: protein.primaryAccession ? protein.primaryAccession : '',
                  entryNames: protein.uniProtkbId ? protein.uniProtkbId : '',
                  genesPrimary: protein.genes && protein.genes[0].geneName && protein.genes[0].geneName.value ? protein.genes[0].geneName.value : '',
                  genesSecondary: protein.genes && protein.genes[0].synonyms ? protein.genes[0].synonyms.map((gene: any) => (' ' + gene.value)) : [],
                  organismName: protein.organism ? protein.organism.scientificName : '',
                  sublocation: protein.comments && protein.comments[0] && protein.comments[0].subcellularLocations ? protein.comments[0].subcellularLocations.map((sub: any) => sub.location.value) : '',
                  length: protein.sequence ? protein.sequence.length : 0
                }
            })
          })
          .catch((error) => {window.alert('Error while getting data from Server:\n' + error.message)}) 
  }

  return proteinList;
};  