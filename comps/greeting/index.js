import React from "react";
import Paper from "material-ui/Paper";
import CircularProgress from "material-ui/CircularProgress";
import FontIcon from "material-ui/FontIcon";
import { green500 } from "material-ui/styles/colors";
import "flexboxgrid";
import "material-design-icons/iconfont/material-icons.css";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

export default props => {
  return (
    <Paper className={style.container} zDepth={5}>
      <div className={cx("row", "middle-xs", "center-xs", style.fullHeight)}>
        <div className="col-xs">
          <div className="box">
            {(() => {
              if (!props.ready) {
                return <CircularProgress />;
              } else {
                return <FontIcon className="material-icons" color={green500}>done</FontIcon>;
              }
            })()}
          </div>
        </div>
      </div>
    </Paper>
  );
};
