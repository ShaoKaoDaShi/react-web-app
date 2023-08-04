import React from "react";
import { observer } from "mobx-react-lite";
const GlobalTimer = observer(({timer}) => {
  return <h1>globalSecondsPassed: {timer.secondsPassed}</h1>;
});

export default GlobalTimer;
