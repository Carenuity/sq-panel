import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartState, Threshold } from '../utils/types';
import { graphConfig, updateData } from '../utils/common';

const ApexChart = ({
  threshold,
  measurement,
  data,
}: {
  data: Array<Array<number>>;
  measurement: string;
  threshold: Threshold;
}) => {
  const [state, setState] = useState(
    graphConfig({ data, threshold, measurement })
  );

  useEffect(() => {
    setState(
      graphConfig({ data, threshold, measurement })
    );
  }, [threshold, data, measurement]);

  return (
    <>
      <div id='chart'>
        <div className='toolbar'>
          <button
            id='one_month'
            onClick={() => updateData('one_month', setState)}
            className={`${
              state.selection === 'one_month' ? 'active' : ''
            } btn btn-light btn-sm`}
          >
            1M
          </button>
          &nbsp;
          <button
            id='six_months'
            onClick={() => updateData('six_months', setState)}
            className={`${
              state.selection === 'six_months' ? 'active' : ''
            } btn btn-light btn-sm`}
          >
            6M
          </button>
          &nbsp;
          <button
            id='one_year'
            onClick={() => updateData('one_year', setState)}
            className={`${
              state.selection === 'one_year' ? 'active' : ''
            } btn btn-light btn-sm`}
          >
            1Y
          </button>
          &nbsp;
          <button
            id='ytd'
            onClick={() => updateData('ytd', setState)}
            className={`${
              state.selection === 'ytd' ? 'active' : ''
            } btn btn-light btn-sm`}
          >
            YTD
          </button>
          &nbsp;
          <button
            id='all'
            onClick={() => updateData('all', setState)}
            className={`${
              state.selection === 'all' ? 'active' : ''
            } btn btn-light btn-sm`}
          >
            ALL
          </button>
        </div>

        <div id='chart-timeline'>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type='area'
            height={350}
          />
        </div>
      </div>
    </>
  );
};

export default ApexChart;
