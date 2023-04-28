import { ChartState, Threshold } from "./types";

// Current reading Component functions
export const updateThreshold = (threshold: Threshold): boolean => {
  if (
    threshold.current <= threshold.upper &&
    threshold.current >= threshold.lower
  ) {
    return true;
  }
  return false;
};

// ApexChart Component Functions
export const updateData = (timeline: string, cn: Function) => {
  cn((oldState: ChartState) => ({
    ...oldState,
    selection: timeline,
  }));

  switch (timeline) {
    case 'one_month':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('28 Jan 2013').getTime(),
        new Date('27 Feb 2013').getTime()
      );
      break;
    case 'six_months':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('27 Sep 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      );
      break;
    case 'one_year':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('27 Feb 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      );
      break;
    case 'ytd':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('01 Jan 2013').getTime(),
        new Date('27 Feb 2013').getTime()
      );
      break;
    case 'all':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('23 Jan 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      );
      break;
    default:
  }
};

export const graphConfig = ({
  data,
  measurement,
  threshold,
}: {
  data: Array<Array<number>>;
  measurement: string;
  threshold: Threshold;
}): ChartState => {
  const state: ChartState = {
    series: [
      {
        name: measurement,
        data,
      },
    ],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'Temperature Distribution',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        // labels: {
        //   formatter: function (val: number) {
        //     return (val / 1000000).toFixed(0);
        //   },
        // },
        title: {
          text: measurement,
        },
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 10,
        // title: {
        //   text: 'Days',
        // },
      },
      tooltip: {
        shared: false,
        x: {
          format: 'dd MMM yyyy',
        },
        // y: {
        //   formatter: function (val: number) {
        //     return (val / 1000000).toFixed(0);
        //   },
        // },
      },
      annotations: {
        yaxis: [
          {
            y: threshold.upper,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: `Upper Threshold ${threshold.upper}`,
            },
          },
          {
            y: threshold.lower,
            borderColor: '#E3A100',
            label: {
              borderColor: '#E3A100',
              style: {
                color: '#fff',
                background: '#E3A100',
              },
              text: `Lower Threshold ${threshold.lower}`,
            },
          },
        ],
      },
    },
    selection: 'one_year',
  };
  return state;
};

export const handleMediaQuery = (match: boolean, cn: Function) => {
  if (match) {
    cn(match);
  }
  // console.log(match);
};
