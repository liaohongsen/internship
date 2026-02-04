
export interface ScheduleItem {
  time: string;
  activity: string;
  details?: string[];
}

export interface DaySchedule {
  day: number;
  title: string;
  items: ScheduleItem[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Pricing {
  duration: string;
  price: string;
}
