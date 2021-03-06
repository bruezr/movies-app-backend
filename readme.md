# Movies App (Backend) 🎬  NodeJS + Express + MongoDB + JWT +  BCRYPT +  AJV  

Sirve información de películas desde una Mongo DB para alimentar al [Frontend de Movies App](https://github.com/bruezr/movies-app-frontend) 

## Detalles 👀


- Validación del request body con AJV - Aplica para POST, PUT y Sign Up de usuarios. Ademas se valida que no haya usuarios duplicados, tomando el mail del user como UID

- POST, PUT & DELETE validan el JWT del header que reciben, son routes protegidas

- Las contraseñas se almacenan en la DB hasheadas con un salt

- Se envia al cliente, por medio de custom header (si es un sign up satisfactorio), un JWT con un payload de su ID para ahorrar querys en la DB

- Deploy en Heroku con sync automatico del branch master de GitHub

- Error handler global para todos los endpoint

-  Por motivos de seguridad todas los datos sensibles se almacenan en variables de entorno


## Endpoints

Endpoints Movies     | Method        | ¿Necesita Auth?   |  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/270a79c044b38139cc0f)
-------------        | ------------- | -------------     |  -----------
/api/movies         | GET           | NO                | 
/api/movies/movieId  | GET           | NO                |
/api/movies/movieId  | POST          | SI                |
/api/movies/movieId  | DELETE        | SI                |
/api/movies/movieId  | PUT           | SI                |


Endpoints Users     | Method        | ¿Necesita Auth?   |  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/049ce07efcbb140ae0a4)
-------------        | ------------- | -------------     |  -----------
/api/users/me        | GET           | SI                | 
/api/users          | POST          | NO                |

Endpoint Auth     | Method        | ¿Necesita Auth?   |  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/93d880706486cfac84b2)
-------------        | ------------- | -------------     |  -----------
/api/auth          | POST          | NO                |