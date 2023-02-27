import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

import { useCountdown } from './hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className='earlybird-container'>

      <div className="expired-notice">
        <span>EVENT STARTED </span>

      </div>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className='earlybird-container'>

        <div className="show-counter">
          <a className="countdown-link">

            <div className='early'>
              <p><br />EVENT<br />ONGOING</p><br />
            </div>
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 60} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          </a>
        </div>
      </div>
    </>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;