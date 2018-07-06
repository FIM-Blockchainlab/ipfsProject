import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
   {
    title: 'Printer',
    icon: 'ion-printer',
    expanded: true,
    children: [
      {
        title: 'Status',
        link: '/pages/printer/status',
      },
      {
        title: 'Control and Cam',
        link: '/pages/printer/control',
      },
      {
        title: 'Job Schedule',
        link: '/pages/printer/schedule',
      },
    ],
  },
  {
    title: 'Print-Jobs',
    icon: 'nb-compose',
    expanded: true,
    children: [
      {
        title: 'Create new Job',
        link: '/pages/print-jobs/create-job',
      },
      {
        title: 'Jobs and Licenses',
        link: '/pages/print-jobs/licenses',
      },
    ],
  },
];
