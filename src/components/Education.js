import React from 'react';
import DateRange from '@material-ui/icons/DateRange';
import { education } from '../DATA.json';

export const Education = () => {
  return (
    <div>
      <h2 className="tc">Education</h2>
      {education.map(
        (item, key) =>
          item && (
            <div key={key} className="block row-print">
              <p>
                <b>{item.name}</b>{' '}
                    | <b>{'Degree'}:</b>{' '}
                {item.degree}
              </p>
              <p />
              <p className="date">
                <span>
                  <DateRange />{' '}
                  <span>
                    {item.date}
                  </span>
                </span>
              </p>
              <p>
                {item.faculty}
              </p>
            </div>
          )
      )}
    </div>
  );
}

export default Education;
