const apiKey = "oJBMOGwLHkMlDQWaxWbWpwsGm5H0nYM3";

const getGifs = ({ keyword = "morty" } = {}) => {


  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });

      return gifs;
    });
};


export default getGifs;
