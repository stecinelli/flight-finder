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
  flightsListReturn: IFlightsRoute | null,
  setflightsListReturn: React.Dispatch<React.SetStateAction<IFlightsRoute | null>>,
  flightsListDeparture: IFlightsRoute | null,
  setflightsListDeparture: React.Dispatch<React.SetStateAction<IFlightsRoute | null>>
  getFlightsList: () => void
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

export interface ISearch {
  departureDestination: string,
  arrivalDestination: string,
  date?: string
}