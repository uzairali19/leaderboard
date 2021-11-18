const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const api = 'auuNVZySyDUue602v5rq';
const link = `${url}/${api}/scores`;

const getData = async () => {
  const scores = await fetch(link)
    .then((res) => res.json())
    .then((resData) => resData.result)
    .catch((err) => {
      return err;
    });
  return scores;
};

export { getData };
