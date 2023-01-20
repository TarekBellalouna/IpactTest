const axios = require("axios");
const { toJson } = require("unsplash-js");

exports.getImages = async () => {
  try {
    return axios.get(
      `${process.env.UNSPLASH_URL}photos/?client_id=${process.env.accessKey}`
    );
  } catch (err) {
    throw Error("something went wrong");
  }
};

exports.searchImagesByName = async (searchTerm) => {
  try {
    return axios.get(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&page=1`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.accessKey}`,
        },
      }
    );
  } catch (err) {
    throw Error("something went wrong");
  }
};
