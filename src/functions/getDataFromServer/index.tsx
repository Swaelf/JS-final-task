
export default async function getDataFromServer(path?: string = '') {
  let items: any;

  if (path) {
      await fetch(path, { method: "GET" })
          .then((data) => data.json())
          .then((data) => items = data)
          .catch((error) => {window.alert('Error while getting data from Server:\n' + error.message)}) 
  }

  return items;
};  