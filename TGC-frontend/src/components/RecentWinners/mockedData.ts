import australiaFlag from '../../images/australia-flag.svg';
import usaFlag from '../../images/usa-flag.svg';
import brazilFlag from '../../images/brazil-flag.svg';
import canadaFlag from '../../images/canada-flag.svg';
import { IPlace } from '../WinnerCard/types';

export const mockedWinners: IPlace[] = [
  {
    id: 0,
    place: 'SB #59',
    winners: [
      {
        id: 0,
        name: 'Karen0',
        countryLogo: australiaFlag,
      }
    ]
  },
  {
    id: 1,
    place: 'SB #58',
    winners: [
      {
        id: 0,
        name: 'Stog',
        countryLogo: usaFlag,
      }
    ]
  },
  {
    id: 2,
    place: 'WB #7',
    winners: [
      {
        id: 0,
        name: 'miss',
        countryLogo: brazilFlag,
      },
      {
        id: 1,
        name: 'meow',
        countryLogo: canadaFlag,
      },
      {
        id: 2,
        name: 'meow',
        countryLogo: canadaFlag,
      }
    ]
  },
]