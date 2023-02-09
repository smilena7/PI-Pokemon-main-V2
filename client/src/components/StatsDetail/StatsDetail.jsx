import React from "react";
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
          <div className={style.bgBarStatsDetail}>
            <div /* style={barStyles(hp)} */ />
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
          <div className={style.bgBarStatsDetail}>
            <div /* style={[style.barStatsDetail, barStyles(attack)]} */ />
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
          <div className={style.bgBarStatsDetail}>
            <div /* style={[style.barStatsDetail, barStyles(defense)]} */ />
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
          <div className={style.bgBarStatsDetail}>
            <div /* style={[style.barStatsDetail, barStyles(speed)]} */ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDetail;
