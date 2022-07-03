export type Harbor = {
  id: number;
  name: string;
  image: string;
  lat: number;
  lon: number;
  isPriceHidden: boolean;
  isFree: boolean;
  canBook: boolean;
  cashOnlyBookings: boolean;
  notActivated: boolean;
  translations: Array<Translation>;
  wordpressLink: string;
  acceptBankPayments: boolean;
  acceptEpayPayments: boolean;
  acceptGoCardlessPayments: boolean;
  subscribedBerthsHiddenFromGuests: boolean;
  bookOneDayOnly: boolean;
};
