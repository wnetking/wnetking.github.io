import React from 'react';
import DateRange from '@material-ui/icons/DateRange';
import { getAllMonths } from '../utils';
import { experience } from '../DATA.json';

export const Experience = () => {
  return (
    <div>
      <h2 className="tc">Experience</h2>
      {experience.map(
        (item, key) =>
          item && (
            <div key={key} className="block row-print">
              <p>
                <b>{'Position'}: </b>
                {item.position}{' '}
                    | <b>{'Company'}: </b>
                {item.company}
              </p>
              <p className="date">
                <span>
                  <DateRange />{' '}
                  <span>
                    {item.from} -{' '}
                    {item.to}.{' '}
                    {getAllMonths(
                      item.from,
                      item.to,
                      'year(s)',
                      'month(s)'
                    )}
                  </span>
                </span>
              </p>
              <p>
                {item.responsibility}
              </p>
            </div>
          )
      )}
    </div>
  );
}

export default Experience;
