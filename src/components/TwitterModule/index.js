import React, { useEffect, useState } from "react";
import axios from "axios";

import { getFormatedURL } from "../../utils";
import TwitterModuleRow from "../TwitterModuleRow";
import { twitterDataSample } from "../../consts/testData";
import "./index.css";

const TwitterModule = () => {
  let [userTwitts, setUserTwitts] = useState(twitterDataSample);
  const count = 10;
  // TODO: Get rid of duplicates when slow internet it calls API with same params
  // const removeDuplicats = (arr) =>
  //   arr.filter(
  //     (userObj, index, array) =>
  //       array.findIndex((userObj2) => userObj.id === userObj2.id) === index
  //   );
  // TODO: Implement Backend
  // useEffect(() => {
    // const fetchTwitts = async () => {
    //   const url =
    //     userTwitts.length === 0
    //       ? getFormatedURL(count)
    //       : getFormatedURL(count, userTwitts[0].id);
    //   const result = await axios(url).catch((e) => {
    //     // Send Sentry report
    //   });
    //   if ((result && result.status) === 200) {
    //     setUserTwitts([...result.data, ...userTwitts]);
    //     // After API reaches 10k it keeps returning last 10 twitts
    //     // which creates duplicates
    //   }
    // };
    // const interval = setInterval(() => {
    //   // fetchTwitts();
    // }, 2000);
    // return () => clearInterval(interval);

  // }, [userTwitts]);

  return (
    <div className="TwitterModule">
      {userTwitts.map((userObject, index) => (
        <TwitterModuleRow {...userObject} key={`TwitterModuleRow${index}`} />
      ))}
    </div>
  );
};

export default TwitterModule;
