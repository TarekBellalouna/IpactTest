const { getImages, searchImagesByName } = require("../helpers/unsplash_api");
const Search = require("../models/search");
exports.getAllImages = async (req, res) => {
  try {
    const { data } = await getImages();
    res.json(data);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

exports.getImagesByName = async (req, res) => {
  try {
    const keyword = req.query.word;
    const search = await Search.findOne({ keyword });
    if (search) return res.json(search.searchData);
    const { data } = await searchImagesByName(keyword);
    const searchDataList = await data.results.map((el) => ({
      urls: { small: el.urls.small },
      user: {
        username: el.user.username,
        profile_image: { small: el.user.profile_image.small },
      },
    }));
    await Search.create({
      keyword,
      searchData: searchDataList,
    });
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
