const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1da9585438msh6663a66d42828a2p1d79e5jsn15788eb99dd3",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};

fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
