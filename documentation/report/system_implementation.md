## System Implementation
To develop our single page application (SPA), we adopted the MEAN Stack (MongoDB, Express, Angular, and Node.js). Their detailed features and implementation are described in each section below, but in a nutshell, they are:
>* MongoDB: NoSQL type document-oriented database management system which stores data in JSON like format as a collection of atypical data structures.
>* AngularJS: Front-end framework which is suitable for developing SPA written in JavaScript.
>* Express: Web application framework that runs on Node.js.
>* Node.js: server-side JavaScript environment which uses an asynchronous, event-driven model that is fast and  efficient.

By using the MEAN stack, it is possible to develop applications entirely with JavaScript in a unified manner. Also, JavaScript facilitates the handling of data in JSON format thereby the passing of data between the client and server sides, and MongoDB. Therefore, it will be possible to design a simple, consistent, and maintainable architecture. 
Moreover, in this project, the advantage of being able to develop uniformly in JavaScript contributed significantly in terms of saving learning costs, given the considerable time constraints.

In this section, we demonstrate, firstly the technical features of the app layer by layer (i.e., the frontend, the backend(database), and the middle-tier), followed by the overall workflow of the app with the example of the Art-Detective game, and finally, the deployment.

### Front End
Our application was planned to have five main sections:
* Front Page
* Timeline
* Fun Facts
* Art Detective
* About

Except for the Art Detective, the rest of sections will be static content. That is, users are able to read the content by clicking specific buttons or scroll the page rather than interact with the application. As a framework, Angular provides a convenient way to manage and organise different components under the application. 

AppComponent is the main component of the application. We independently developed different sections under their corresponding components. We designed the architecture shown as below to stack all the components and build the front end of our application. Three components, info-popup, play-popup, and Quiz-popup, have very similar content and structure. They implement the function of modal window and used by the Timeline, Fun Facts, and Art Detective respectively.

![](https://i.imgur.com/bHGbava.png)

The above diagram demonstrates the relationship between main component and subcomponents under Angular architecture. For Art Detective, backend development was added to the architecture.

We used Angular as a framework to build our application. Angular provides many modules that can be easily installed and reproduced. We installed the module “fullpage” to construct the scrolling pages of the application. After the fullpage had been installed, we added extra subcomponents to manage the files for different sections. Fullpage has several hands-on functions such as slides, so content can be distributed into multiple pages. Most of our front end developments are based on the public sharing templates and modified in some ways by us. We carefully reviewed the policy and license when we were finding the templates. If we used the public sharing templates from Codepen, we followed the principles of the [MIT License](https://tldrlegal.com/license/mit-license). You can find out more about licensing of Codepen [here](https://blog.codepen.io/documentation/licensing/).

#### Front page
Front page was made of plain css and html files. We used the [template](https://html5up.net/aerial) from HTML5 UP and conformed its [Creative Commons license](https://html5up.net/license). We changed the background image and redesigned the style of font in the title. For the title, we applied an animation effect from Olivia Ng [works](https://codepen.io/oliviale/pen/YgzNzK) which was shared in public on Codepen.

#### Timeline
Timeline consisted of two slides. Each slide is an independent component under the Angular framework. The overall design of the timeline used the [template](https://codepen.io/jeffglenn/pen/KNYoKa/) made by Jeff Glenn from Codepen. To create a modal window for illustrating the details of each period in art history, we imported the overlay module and defined the functions and styles inside the folder - “info-popup”. Info-popup contains two components, one is info, which takes care of details of the modal windows. Another component is the info-button, which is the place that controls the “More” button in the timeline.

#### Fun Facts
FunFact includes 12 slides. We used the same entrance as the next game ArtDective on the first page, which is a [template](https://codepen.io/parph/pen/GGdwZM) designed by parph, to provide users introductions to the game, and present the experience of entering the 3D museum. The second slide displays all the periods, with ten buttons linked to ten other slides for specific periods. They introduce the paintings and provide more understanding with dynamic display buttons, which is composed of "Quiz-popup". In the modal window of the fun facts, we use CSS to control the size, making them match the overall page display and avoid protruding to other parts.

#### Art Detective
Art Detective used the same template as fun facts to build the introduction page. For the second slide, we refer to the [template](https://codepen.io/Booligoosh/pen/mKPpQp) designed by Booligoosh to make a menu to let users choose the period that they want to play. When users place the mouse on the picture (wrapped in "PlayBotten"), css is used to control its dynamic changes: it will become brighter and be covered with a play translucent mask. When users click on the picture, a game interface controlled by "Play" will pop up. When the user clicks on a different part of the picture in the game, the difference will be marked, and the progress of the game and the description of the difference will be updated.

#### About Page
The About page was based on the [template](https://codepen.io/woranov/pen/NRqLWK/) designed by Alex. We redesigned the tabs and changed the style. There are three tabs, including Introduction, Team, and Reference. Users can use different tabs to learn further information about our application.

#### API use (Service)
We introduced Service (service.ts) in Angular as an interface to interact with the backend API. By the service.ts, we made the frontend files more structurally manageable: the functionality regarding HTTP requests from the frontend was decoupled from the component files and unified in the single file. This architecture is expected to benefit when additional functionality is added in the future and the API use becomes more complex. Specifically, we introduced the HTTPClient module to implement a method in the service.ts that makes an HTTP get request. When the popup for each question in the Art-Detective game is launched, the get function in service.ts is called and, as return value, the data from the backend (the database) is retrieved. The data is recieved in JSON format, but the HTTPClient module passes the data to the frontend component as an Observable object, so it can be handled by "subscribe" method in the component. The main source code in the service.ts file is shown below:
```javascript
// art-detelctive.service.ts
private REST_API_SERVER = "http://localhost:3000/artdetective";
```
```javascript
public getAll(){
  return this.httpClient.get(this.REST_API_SERVER);
}

public getByID(id) {
  return this.httpClient.get(this.REST_API_SERVER + "/" + id);
}
```

### Back End (Database)
We adopted [MongoDB](https://www.mongodb.com) for our database because of:
1) Its familiarity with Node.js. MongoDB stores its data in a proprietary data format called BSON. It is a data format that is highly compatible with JSON. In particular, when creating web applications with Node.js, it is possible to store JavaScript objects in the database almost as-is. This feature allows us to develop relatively intuitively.
2) Its suitability for SPA. It is fast and able to deal with high volumes of access.
3) Its flexibility in terms of the data structure. Unlike SQL-based databases, MongoDB is a document-oriented database that does not require any pre-defined structure for the data stored in its storage. This feature is a perfect match for agile development. (On the other hand, this flexible structure of MongoDB can also be a drawback as it could undermine the consistency of the data structure. However, this issue can be dealt with by using a feature of Mongoose module. The details will be described below.)
#### Data Structure and Data Model
To fully utilize the flexibility of the data structure of MongoDB, we adopted our data structure as non-relational. In particular, we develop our dataset with a nested JSON format structure.

Given the time constaraint, we have mainly focussed on developing only a database for the Art-Detective game. The data of a question of Art-Detective game primarily contains 2 potentially different parts: 
> * the data associated with materials of quizzes, such as the title of artworks, URL of images, and instruction descriptions. 
> * the data that are necessary to show the answers, such as the data to distinguish a point where there's an answer and description of answers. 

To handle this complexity while satisfying usability, we stored a whole data in a single JSON object, whereas we split the dataset into the two different layers (i.e. adopted a nested structure). Because of this, the data structure became easier to handle intuitively and thereby easier to retrieve necessary data from the frontend-side. In addition to this, the same design is applicable for other game datasets, so a future expansion is supposed to be straightforward based on the current design. These features ensure the scalability of the database.

Thus, by using MongoDB, we were able to implement a database with a flexible and convenient data structure. However, as mentioned above, the fact that there are no restrictions on the data structure could be problematic in maintaining data consistency. This is an issue that should be properly addressed when considering scalability.
To deal with this issue, we introduced the Mongoose. It is a module for handling MongoDB from Node.js, which has some useful features, such as being able to impose certain restrictions on the data structure to store. This feature is called "schema", and it allows us to generate a "model" with certain constraints on the data structure (e.g. data type restriction, maximum/minimum value, non-null value requirement, etc.). As a result, we became able to store data in MongoDB in more safety way.

Specifically, for the Art-Detective game, we constructed the data model, which specifies the data type to be stored, requires non-null values for information that must be stored, and requires a unique value for the ID that is given to each group of dat in order to distinguish each group of data. 

> Note: Originally, MongoDB has a function to set a unique ID automatically when storing data, so there is no need to add another ID separately, but we decided to put an additional ID so that respond effectively to calls from the frontend based on a nature of our current architectural design. This point may be improved in the future.
- [Data-model of Art Detective game](https://github.com/yujenyu/Group11_Project/blob/341e53c58318615c99b469a2a5cf76f683bfbb74/site/server/models/artdetective-model.js)
- [Detailed contents of Art Detective dat](https://github.com/yujenyu/Group11_Project/blob/341e53c58318615c99b469a2a5cf76f683bfbb74/site/server/data/artdetective-data.json) 

#### Database Imprementation
The art-detective game requires relatively simple database operation: store the dataset to the database in advance and send a part of them back in response to a request from the frontend via the middle tier. (Details about database operation and its implementaion are described in the next section.) 
Therefore, it was important to check that the data was stored in an appropriate form in the database at each stage of development. Of course, we could have accessed the database directly and checked the information one by one, but as the visual interface was not necessarily useful, we decided to use a tool with a good GUI. Initially, we tried to use [Robomongo](https://robomongo.org), but in the end, also taking into account the deployment stage, we decided to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), a cloud MongoDB service (DBaaS) which allow us to see collections of data in the database on a web browser. As a result, we could share what kind of data stored in the database among our team members and make our development process more efficient. 


### Middle Tier
#### Overall Architecture
Our middle-tier is implemented by using [Node.js](https://nodejs.org/) as its core, with appropriate utilization of [Express](https://expressjs.com) and [Mongoose](https://mongoosejs.com). The overall structure is designed to be simple whereas we have implemented each function in separate files in order to make the structure clear, manageable and scalable. The functions and relationships between them are shown below:

![](https://github.com/yujenyu/Group11_Project/blob/dev/documentation/diagrams/middle-tier.png?raw=true)
> - server.js: This is the core of the middle-tier that creates the server, setting up the path to the router (routes.js), setting up the database, and calling the frontend dist files.
> - routes.js: As an interface to the frontend, it sends back appropriate data retrieved from the database via the Mongoose model (model.js) in response to each HTTP request from the frontend.
> - db.js: It establishes a connection with the database at the start of the server, and sets up the database through the controller (dbm.js).
> - dbm.js: It provides the functionality to manipulate the database directly from the middle-tier. Its current function is to initialize the database when the server and database are launched and thereby ensure that it is stored the appropriate data.
> - model.js: This is a data model by Mogoose that accesses the information in the database via requests from the middle-tier. Also, it manages data in the database in accordance with the pre-defined data structure.
#### Implementaion
In developing the middle-tier, we made development process more efficient by introducing the [nodemon](https://www.npmjs.com/package/nodemon), which observes the source code and automatically restarts the server as the source code changed. It eliminated the hassle of restarting the server each time.
In addition, to streamline the work process, we separated the backend development (including the middle-tier) from the frontend development. Although this division of work is quite effective, it requires that the frontend and the backend developers have consistent ideas about the final system-wide integration. In particular, for the exchange of data via API, the format and structure of the data to be exchanged, the format of the requests to the API, and the design of the URI endpoints must be well agreed upon and developed accordingly. If it's not, there is a risk of significant rework.
We recognized the importance of this issue sometime after we started work, then the frontend and the backend developers spent some time discussing and reviewed our development processes to be more consistent on the points mentioned above. Precisely, we determined that the data structure to store in the database, the data format (JSON), the URI endpoint, the timing when HTTP requests sent, and what kind of dataset is necessary to respond to each request. Also, the frontend developers separated their actual data, which would store in the database, into an independent file. This made the integration process much easier, as the frontend only had to change the data source from the file to the backend API. Furthermore, we used Postman to separately check if the backend API correctly works during each step of development (more on this in the Evaluation part). As a result, although there was some rework in the early stages, in the end, we were able to integrate the frontend in a very efficient way.
#### RESTful API
Currently, the backend API in our app is fairly simple, but with future scalability in mind, the API is implemented according to RESTful principles. RESTful APIs have many features, but we were particularly conscious of designing the URI in an appropriate manner. This is particularly important as it will make it easier to develop API interaction for future expansion beyond Art-Detective games, such as the addition of other features or games and the implementation of user authentication and user-specific content features. As the relevant source code is shown as follows, the routing is designed to be manageable intuitively, e.g.```http://HOST/CONTENTS_NAME/...```.
In addition, a routes.js file has been implemented so as to unify the routing functions for each feature of the app. Therefore, when additional features are added in the future, the extension related to this can be carried out efficiently.
```javascript
// server.js
app.use('/artdetective', ArtDetectiveRoutes);
```
```javascript
// artdetective-routes.js
router.get('/:id', (req, res) => {
    const dataId = req.params.id;
    ArtDetectiveModel.findOne(({paintingNumber: dataId}), (err, data) => {
        if(err) {return res.status(422).send({error: 'page not found'});}
        return res.json(data);
    })
})
```
The get function above sends a request to the database to get the appropriate JSON data object in accordance with the received dataID, which is a unique value specifying the data in the database. Then, it returns the JSON object to the frontend.

 Workflow () Workflow (Sequence Diagram)
Regarding the illustration of the app's overall workflow, the Art-Detective game process is a good example of how the frontend and the backend interact in the whole system. The sequence of the data handling process is shown below: 

![](https://github.com/yujenyu/Group11_Project/blob/dev/documentation/diagrams/sequence_diagram.png?raw=true)

As shown above, when users enter the game, jump to ArtDetectiveP2 (that is, the menu interface), select and click the PlayButton in the menu, a paintingNumber will be dispatched to PlayComponent. During the initialization process of PlayComponent, it will initiate a request to the backend through Service.Then, in response to the HTTP request from the frontend, the router in the backend properly converts the request into a query to the database. The query is sent via the data model which handles the database. As a result, a certain set of data are sent back from the database and returned to the frontend.
When users are playing the game, click on the canvas, the coordinate point clicked by the mouse will be obtained, PlayCompont will check whether the coordinate point meets the requirements, and display different changes according to the result. If the users want to exit the game, click outside the pop-up window, the game will exit, and PlayCompont will be terminated.

### Deployment
For Deploy, we adopted [Docker](https://www.docker.com) to launch both containers of a web server built with node.js and MongoDB at once. Files related to the frontend are automatically built in the docker image when the docker-compose file is executed. Also, regarding MongoDB, the docker-compose file is configured to automatically establish a connection between different ports (currently, loacalhost:3000 and 27017). Therefore, it is enough to run ```docker compose up [-d]``` only. Furthermore, as for MongoDB, the user information needs to be registered at the initial start-up, and the template of the .env file necessary for this will be distributed separately.

> Note: In the development phase, we used MongoDB Atlas, a cloud database, but we decided to use MongoDB's docker image for deployment, as we did not want to share the credentials for authentication widely for security concern.