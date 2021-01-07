// import data from "../data";
const data = require("../data");

const root = (req, res, next) => {
  return res.status(200).json(filterData(req._parsedUrl.path));
};

const filterData = (path) => {
  const fakeDb = data.response;
  const formattedPath = path.slice(1).split("/");
  let resp = {};
  formattedPath.forEach((path, index) => {
    if (index === 0) {
      resp = fakeDb[path];
    } else {
      resp = resp[path];
    }
  });

  const { children, list } = resp;
  return resp ? (children ? list : resp) : { message: "No Data Found" };
};

module.exports.root = root;
