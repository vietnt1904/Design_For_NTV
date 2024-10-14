import { useEffect, useState } from "react";

export const useCountdown = (targetDate) => {
  const countdownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countdownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countdownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const months = Math.floor(countDown / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [months, days, hours, minutes, seconds];
};
