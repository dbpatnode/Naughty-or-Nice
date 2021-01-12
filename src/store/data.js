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
    name: "Rowan",
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
];

exports.getMockData = () => SANTASLIST
exports.setMockData = santaslist => SANTASLIST.push(santaslist)
