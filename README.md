# Flight Finder

In this app I created an API with Express and Typescript and a frontend with React (Boostrap) and Typescript.

<img src="/Screenshot Web - Flight Finder.jpg" alt="Screenshot Web" title="Screenshot Web" width="35%" height="35%"/>

## API
- GET: `api/flights`. This return a list of all flights in JSON-format.
- GET: `api/booking`. This return all bookings in JSON-format.
- POST: `api/booking`. This create a booking.
- PUT: `api/booking`. This change (name or quantity of) a booking.
- DELETE: `api/booking`. This delete a booking.

## Frontend

- It display a search form, were you need to input 'From' and 'To and you can add other filters as dates and qnts.
- It display all the flights that correspond to your search. 
     PS:If is a round trip, at first it will display all the departure flights and after selection all the return flights
- It book your flight.
- It shows all the booked flights for an specific e-mail.

## Setup
- server is in another repo 👉 https://github.com/stecinelli/flights-api
- in this repo, go to flight-finder and do a npm i && npm start
