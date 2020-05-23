const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async create(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const ghResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const techsArr = parseStringAsArray(techs);
      const { name = login, avatar_url, bio } = ghResponse.data;

      const location = {
        type: "Point",
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArr,
        location,
      });

      console.log(name, avatar_url, bio, github_username);
    }

    return res.json(dev);
  },

  async getAll(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async read(req, res) {
    //if there are querystring filters then it will be filtered
    console.log(req.query);
    if (req.query === {}) {
      const { latitude, longitude, techs } = req.query;
      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return res.json({ devs: devs });
    }

    // if querystring is empty, get all
    const devs = await Dev.find();
    return res.json(devs);
  },

  async filter(req, res) {
    console.log(req.query);
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs: devs });
  },
};
