module CONSTANTS {

  export const DATE_FORMAT: string = 'DD/MM/YYYY h:mma';
  export const DATE_ONLY_FORMAT: string = 'DD/MM/YYYY';
  export const EMAIL_REGEX = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$';

  export const DURATION_DATA = [{
      value: 15,
      text: '15 minutes'
    },
    {
      value: 30,
      text: '30 minutes'
    },
    {
      value: 45,
      text: '45 minutes'
    },
    {
      value: 60,
      text: '1 hour'
    },
    {
      value: 90,
      text: '1.5 hours'
    },
    {
      value: 120,
      text: '2 hours'
    },
    {
      value: 150,
      text: '2.5 hours'
    },
    {
      value: 180,
      text: '3 hours'
    }];

  export const FEATURES_DATA = [
    {
      value: 'tv',
      text: 'TV'
    },
    {
      value: 'phone',
      text: 'Phone'
    }
  ];

  export const SOCKET_URL = 'http://localhost:5555';

}

export = CONSTANTS;
