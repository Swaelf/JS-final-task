
export default async function getDataFromServer(path: string = '') {
  let items: any = {results: [], newlink: ''}

  if (path) {
      await fetch(path, { method: "GET" })
          .then(response => {
            const headers = response.headers;
            console.log('length =', headers.get('length'))
            items.newlink = headers.get('link')?.substring(1,headers.get('link')?.indexOf('>'));
            return response.json();
          })
          .then((data) => items.results = data)
          .catch((error) => {window.alert('Error while getting data from Server:\n' + error.message)}) 
  }

  return items;
};  