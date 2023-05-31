export default async function getProteinList(path: string = '') {
    let protein: any = {};

    if (path) {
        await fetch(path, { method: "GET" })
            .then(response => { return response.json() })
            .then((data) => { protein = data })
            .catch((error) => {window.alert('Error while getting data from Server:\n' + error.message)}) 
  }

  return protein;
};  