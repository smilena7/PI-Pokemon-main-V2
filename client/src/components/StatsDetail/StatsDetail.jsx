import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import style from "./StatsDetail.module.css";

const StatsDetail = (props) => {
  const { hp, attack, defense, speed } = props;

  /* const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  }; */

  return (
    <div className={style.contentStatsDetail}>
      <p className={style.titleStatsDetail}>Base Stats:</p>

      {/* hp */}
      <div className={style.blockStatsDetail}>
        <div className={style.blockTitleStatsDetail}>
          <p className={style.nameStatsDetail}>hp:</p>
        </div>
        <div className={style.blockInfoStatsDetail}>
          <p className={style.numberStatsDetail}>{hp}</p>
          <div>
            <ProgressBar
              bgcolor={hp >= 49 ? "#00ac17" : "#ff3e3e"}
              progress={hp}
            />
          </div>
        </div>
      </div>

      {/* attack */}
      <div className={style.blockStatsDetail}>
        <div className={style.blockTitleStatsDetail}>
          <p className={style.nameStatsDetail}>attack:</p>
        </div>
        <div className={style.blockInfoStatsDetail}>
          <p className={style.numberStatsDetail}>{attack}</p>
          <div>
            <ProgressBar
              bgcolor={attack >= 49 ? "#00ac17" : "#ff3e3e"}
              progress={attack}
            />
          </div>
        </div>
      </div>

      {/* defense */}
      <div className={style.blockStatsDetail}>
        <div className={style.blockTitleStatsDetail}>
          <p className={style.nameStatsDetail}>defense:</p>
        </div>
        <div className={style.blockInfoStatsDetail}>
          <p className={style.numberStatsDetail}>{defense}</p>
          <div>
            <ProgressBar
              bgcolor={defense >= 49 ? "#00ac17" : "#ff3e3e"}
              progress={defense}
            />
          </div>
        </div>
      </div>

      {/* speed */}
      <div className={style.blockStatsDetail}>
        <div className={style.blockTitleStatsDetail}>
          <p className={style.nameStatsDetail}>speed:</p>
        </div>
        <div className={style.blockInfoStatsDetail}>
          <p className={style.numberStatsDetail}>{speed}</p>
          <div>
            <ProgressBar
              bgcolor={speed >= 49 ? "#00ac17" : "#ff3e3e"}
              progress={speed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDetail;
