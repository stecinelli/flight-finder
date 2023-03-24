export interface IContext {
  isRound: boolean, 
  setIsRound: React.Dispatch<React.SetStateAction<boolean>>,
  isOneWay: boolean, 
  setisOneWay: React.Dispatch<React.SetStateAction<boolean>>,
  placeFrom: string, 
  setplaceFrom: React.Dispatch<React.SetStateAction<string>>,
  placeTo: string, 
  setPlaceTo: React.Dispatch<React.SetStateAction<string>>,
  departureDate: string, 
  setDepartureDate: React.Dispatch<React.SetStateAction<string>>,
  returnDate: string, 
  setReturnDate: React.Dispatch<React.SetStateAction<string>>,
  qntAdults: number, 
  setQntAdults: React.Dispatch<React.SetStateAction<number>>,
  qntChildren: number, 
  setQntChildren: React.Dispatch<React.SetStateAction<number>>,
  flightsListReturn: IFlight[] | undefined,
  setflightsListReturn: React.Dispatch<React.SetStateAction<IFlight[] | undefined>>,
  flightsListDeparture: IFlight[] | undefined,
  setflightsListDeparture: React.Dispatch<React.SetStateAction<IFlight[] | undefined>>,
  isDeparSelec: boolean,
  setIsDeparSelec: React.Dispatch<React.SetStateAction<boolean>>,
  getFlightsList: () => void,
  selectDeparFlight: (flight_id: string) => void,
  selectRetFlight: (flight_id: string) => void,
  bookingInfo: IBookInfo | null,
  setBookingInfo: React.Dispatch<React.SetStateAction<IBookInfo | null>>,
  modalShow: boolean, 
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>,
  modalErrorShow: boolean, 
  setModalErrorShow: React.Dispatch<React.SetStateAction<boolean>>,
  bookFlight: () => void,
}

export interface IFlight {
  flight_id: string,
  departureAt: string,
  arrivalAt: string,
  availableSeats: number,
  layover?: {
    flight_id: string,
    departureAt: string,
    arrivalAt: string,
    availableSeats: number,
    prices: {
      currency: string,
      adult: number,
      child: number
    }
  },
  waitHours?: number,
  prices: {
    currency: string,
    adult: number,
    child: number
  }
};

export interface IFlightsRoute {
  route_id: string,
  departureDestination: string,
  arrivalDestination: string,
  itineraries: IFlight[]
}

export interface IBooking {
  flight_id: string,
  bookedSeats: number,
  userName: string, 
  email: string
}

export interface IBookInfo {
  departureFlight: string,
  returnFlight?: string,
  name?: string,
  email?: string,
}

export interface ISearch {
  departureDestination: string,
  arrivalDestination: string,
  date?: string
}

export interface IFlightInfo  {
  flight_id: string,
  departureDestination: string,
  arrivalDestination: string,
  departureAt: string,
  arrivalAt: string,
}