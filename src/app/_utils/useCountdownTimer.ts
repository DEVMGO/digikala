import { useEffect, useState } from "react";

export const useCountdownTimer = (
  isValid: boolean,
  time: number,
  startDate: number | null
) => {
  const tenHoursInSeconds = time;
  const [timer, setTimer] = useState<number>(() => {
    const now = new Date().getTime();
    if (isValid && startDate) {
      if (now < startDate) {
        return Math.floor((startDate - now) / 1000);
      } else if (now < startDate + tenHoursInSeconds * 1000) {
        return Math.floor((startDate + tenHoursInSeconds * 1000 - now) / 1000);
      }
    }
    return 0;
  });

  useEffect(() => {
    if (isValid && !!startDate) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        if (now < startDate) {
          setTimer(Math.floor((startDate - now) / 1000));
        } else if (now < startDate + tenHoursInSeconds * 1000) {
          setTimer(
            Math.floor((startDate + tenHoursInSeconds * 1000 - now) / 1000)
          );
        } else {
          setTimer(0);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isValid, startDate, tenHoursInSeconds]);

  const countdownTimer = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return { timer, countdownTimer };
};
