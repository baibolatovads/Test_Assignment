# Django & React application
Web application with the ability to conduct A/B tests on the price of a product (segment A price = 10$, segment B price = 20$).
In this application, traffic is distributed as evenly as possible, 50% of users will see the price from segment A, the other half of users will see the price of segment B. 
The backend part of the application was written on Django, the React framework was used for the frontend side.

## Running

1. `docker-compose build`
1. `docker-compose up`
1. There should now be two servers running:
  - [http://0.0.0.0:8001](http://0.0.0.0:8001) is the Django app
  - [http://0.0.0.0:81](http://0.0.0.0:81) is the React app
  
