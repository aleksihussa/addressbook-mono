import axios from "axios";
import React from "react";

export const getCoordinates = async (address: string) =>
  await axios
    .get("/api/coordinates?address=" + address)
    .then((asdga) => {
      console.log(asdga.data);
      return asdga.data.coordinates;
    })
    .catch((err) => console.error(err));
