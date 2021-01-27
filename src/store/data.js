const SANTASLIST = [
  {
    name: "Daniel",
    location: "Seattle, WA",
    naughty: true,
    nice: false,
  },
  {
    name: "Yasmine",
    location: "Seattle, WA",
    naughty: false,
    nice: true,
  },
  {
    name: "Rowen",
    location: "Arvada, CO",
    naughty: false,
    nice: true,
  },
  {
    name: "Calla",
    location: "Arvada, CO",
    naughty: false,
    nice: true,
  },
  {
    name: "Alec",
    location: "somewhere, TX",
    naughty: true,
    nice: false,
  },
];

exports.getMockData = () => SANTASLIST
exports.setMockData = santaslist => SANTASLIST.push(santaslist)
