const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const api = 'gQTes67aIhMF5vgksRcG';
const link = `${url}/${api}/scores`;

const getData = async () => {
  const scores = await fetch(link)
    .then((res) => res.json())
    .then((resData) => resData.result)
    .catch((err) => err);
  return scores;
};

const postData = async (userName, userScore) => {
  const dataPost = await fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return dataPost;
};

export { getData, postData };
