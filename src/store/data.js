const m = require("mithril");
// const SANTASLIST = [
//   {
//     name: "Daniel",
//     location: "Seattle, WA",
//     naughty: true,
//     nice: false,
//   },
//   {
//     name: "Yasmine",
//     location: "Seattle, WA",
//     naughty: false,
//     nice: true,
//   },
//   {
//     name: "Rowen",
//     location: "Arvada, CO",
//     naughty: false,
//     nice: true,
//   },
//   {
//     name: "Calla",
//     location: "Arvada, CO",
//     naughty: false,
//     nice: true,
//   },
//   {
//     name: "Alec",
//     location: "somewhere, TX",
//     naughty: true,
//     nice: false,
//   },
// ];



const Data = () => {
  return m.request({
    method: 'GET',
    url: 'https://601dcacbbe5f340017a19f85.mockapi.io/AddedPerson'
  }).then((people) => {
    return people
  })

};

let SANTASLIST = [];
Data()
  .then((people) => {

    SANTASLIST = people;
    // console.log("santas list", SANTASLIST)
    m.redraw();
  });


    // wrting state
 


exports.Data = () => SANTASLIST
// exports.getData = () => getData
exports.setMockData = santaslist => SANTASLIST.push(santaslist)