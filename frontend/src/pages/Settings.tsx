import React from "react";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "leaflet";
import { Helmet } from "react-helmet";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainContainer: {
    fontSize: "2rem",
    display: "flex",
    top: "5%",
    left: "10%",
    position: "fixed",
    height: "90%",
    color: "black",
    backgroundColor: "lightGrey",
    width: "80%",
    alignItems: "left",
    flexDirection: "column",
  },
  userInfoContainer: {
    paddingTop: "5rem",
    fontSize: "1rem",
    width: "30%",
    display: "flex",
    backgroundColor: "lightBlue",
    alignContent: "center",
  },
});

export const Settings = () => {
  const styles = useStyles();
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>

      <div className={styles.mainContainer}>
        User settings
        <div className={styles.userInfoContainer}>
          alshgjsagkjsahkjghsakjghkjdshkjghsakjs
        </div>
      </div>
    </>
  );
};
