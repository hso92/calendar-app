import React, { useEffect } from "react";

import CalendarElement from "../CalendarElement";

import { GridList, Typography } from "@material-ui/core";

import * as styles from "./style.css";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalenderBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
  fetchSchedule
}) => {
  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement
              day={date}
              month={month}
              schedules={schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalenderBoard;
