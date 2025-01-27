//* REST API - "Representational State Transfer" Application Programming Interface 
//? It is a software that allows two applications to communicate with each other over the internet and through various devices. Every time you access an app like Facebook or check the weather on your smartphone, an API is used.

//? A RESTful API is an architectural style for an application programming interface (API) that uses HTTP requests to access and use data. REST is not a programming language.

//? http://thapatechnical.com/api/users

//? CREATE ----------- POST --------------  /api/createUser
//? READ ------------- GET  --------------  /api/readUser 
//? UPDATE ----------- PUT(it update all the things) / PATCH(only update the things which we wanted)  ---------------  /api/updateUser  
//? DELETE ----------- DELETE ------------- /api/deleteUser 


//! As per the REST(Representational State Transfer) architecture, the server does not store any state about the client session on the server-side. Statelessness means that every HTTP request happens in complete isolation. When the client makes an HTTP request, It includes all information necessary for the server to fulfill that request.