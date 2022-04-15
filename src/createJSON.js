const fs = require("fs");
const path = require("path");

// Reading data for csv file
// let data = fs.readFileSync("d.csv", { encoding: "utf-8" });
let data = fs.readFileSync(path.join(__dirname, "data", "servicesAll.csv"), {
  encoding: "utf-8",
});

// Change data to array
data = data.split("\n");

// Delete empty lines
data = data.filter((line) => line.split(",").at(0) != "");

// select first row as objects property
const objPropertys = data[0].split(",").map((x) => x.trim());

// Create an empty object
const obj = new Object();

data.slice(1, -1).forEach((line) => {
  let data2 = line.split(",").map((x) => x.trim());
  let data2Name = data2[0];

  obj[data2Name] = {};

  data2.forEach((item, i) => {
    obj[data2Name][objPropertys[i]] = item;
  });
});

//

//

fs.writeFileSync(
  path.join(__dirname, "data", "data0.json"),
  JSON.stringify(obj)
);
