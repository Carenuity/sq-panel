import { ApexOptions } from "apexcharts";

export interface UserName {
 firstName: string;
 lastName: string;
};

export interface PagePath {
 url: string;
 name: string;
}

export interface Threshold {
  current: number;
  upper: number;
  lower: number;
}

export interface ChartState {
  series: any;
  options: ApexOptions;
  selection: string;
}
