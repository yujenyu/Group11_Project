
![image](game_material/pic1.png)
## Team
Masashi Asai: <zb20884@bristol.ac.uk>

Chun-Yu Chen: <hz20566@bristol.ac.uk>

Yu-Jen Yu: <yujen.yu.2020@bristol.ac.uk>

Zhengwu Song: <lu20732@bristol.ac.uk>

Lauren(Ya-Shiuan) Chian: <da20602@bristol.ac.uk>

# Documentation

## Introduction
↓ click the picture below to watch video ↓
[![Video Link](https://i.imgur.com/0pVmCAr.jpg)](https://clipchamp.com/watch/W3l3Aw2bVoW?utm_source=share&utm_medium=social&utm_campaign=watch)

---

History on Canvas is an art educational application. The application will make learning art history more interesting and fun. People from different times of history used art as a media to express their thought and creativity. Art also acts like a mirror that artists use to reflect society. We can find that some greatest movements in art were inspired by the society where they were existing. Learning art history makes us know our past and enhances aesthetic perspective. 

Our team focuses on the critical thinking that our users can leverage from the application. Based on this [reference](https://github.com/yujenyu/Group11_Project/blob/master/Meetings/16.1CriticalThinkingThruArtHistActivities.pdf), users can gain different levels of critical thinking through art history activities. It is the main aim that we want to build the games in our application that could cover those different levels. From low to high, there are six different levels we want to integrate in the application:
1. Remembering
1. Understanding
1. Applying
1. Analyzing
1. Evaluating
1. Creating

In History on Canvas, users will find brief introductions of different movements through the timeline. We summarised the movements which start from Reinancess to Abstract Expression and focus on the painting. Users can enjoy two interesting games: Fun Facts and Art Detective. Fun Facts will let users guess short stories behind the masterpieces. Art Detective will challenge users to spot the differences between original paintings and modification ones. You can watch our introduction video to preview the whole application.

The project objectives will be:
* Make a easy to use application, which users can learn about art history
* Design games that are interesting and educational
* Users can enhance different levels of critical thinking through our application
* The application can be easily extended, so developers could include more features and contents in the future

## Background and Motivation

Problem-solving skills, critical thinking, creative outlet highlighted as significant benefits of art education. The Education Endowment Foundation in the UK compiled evidence from a series of [research projects](https://educationendowmentfoundation.org.uk/evidence-summaries/evidence-reviews/arts-education/) about the arts and their impact on brain development. Studying art isn’t intended to prepare all students to become artists. It educates us about our predecessors. The precise value of art goes far beyond monetary value, and depicts the soul of a culture. Arts have favourable effects on cognitive abilities, self-esteem and social behaviour. However, there are many social issues surrounding art education recently.

First, educational resources decrease. According to a [BBC survey](https://www.bbc.com/news/education-42862996) in 2018, creative arts subjects are being cut back in many schools in England. Schools told the BBC that the increased emphasis on core academic subjects, together with funding pressures, were the most common reasons for cutting back on resources for creative subjects. At a time when Covid-19 is raging, this problem seems to be [getting worse](https://www.tes.com/news/arts-being-cut-allow-covid-catch-teachers-warn). [More schools](https://www.grandforksherald.com/news/education/7017850-Artist-in-the-Classroom-employees-describe-loss-for-students-as-result-of-programs-elimination) are trying to make up for lost resources and learning time during the Covid pandemic by reducing time for creative and practical subjects. 

Second, the opportunities for people to be exposed to art outside the campus are also significantly reduced. [YouGov poll](https://www.fenews.co.uk/press-releases/67007-new-yougov-poll-reveals-1-in-2-adults-being-held-back-from-engaging-with-the-arts) reveals that more than half of Brits are faced with barriers when looking to engage with the arts. The study reveals that 50% of adults believe barriers prevent their participation in artistic activities. The most prevalent issue cited was that of not knowing enough about art or the artistic process. Also, due to the Covid pandemic, Brits reduced [the frequency of visiting art exhibitions](https://yougov.co.uk/topics/arts/trackers/how-often-brits-go-to-art-galleries-and-exhibitions).
![](https://i.imgur.com/xb8zBbL.png)

Our app is dedicated to improving these issues.  We hope to provide a different route for the public to access art through stress-free and straightforward games, combining educational significance and fun, making it easier for the public to reach art and overcoming obstacles and restrictions caused by the Covid pandemic with an online application.


## System Implementation

### Stack architecture and system design
To develop our single page application (SPA), we adopted the MEAN Stack (MongoDB, Express, Angular, and Node.js). Their detailed features and implementation are described in each section below, but in a nutshell, they are:
>* MongoDB: NoSQL type document-oriented database management system which stores data in JSON like format as a collection of atypical data structures.
>* AngularJS: Front-end framework which is suitable for developing SPA written in JavaScript.
>* Express: Web application framework that runs on Node.js.
>* Node.js: server-side JavaScript environment which uses an asynchronous, event-driven model that is fast and  efficient.

By using the MEAN stack, it is possible to develop applications entirely with JavaScript in a unified manner. Also, JavaScript facilitates the handling of data in JSON format thereby the passing of data between the client and server sides, and MongoDB. Therefore, it will be possible to design a simple, consistent, and maintainable architecture. 
Moreover, in this project, the advantage of being able to develop uniformly in JavaScript contributed significantly in terms of saving learning costs, given the considerable time constraints.

(TBA: diagram + explanation)


### Back End (Database)
We adopted [MongoDB](https://www.mongodb.com) for our database because of:
1) Its familiarity with Node.js. MongoDB stores its data in a proprietary data format called BSON. It is a data format that is highly compatible with JSON. In particular, when creating web applications with Node.js, it is possible to store JavaScript objects in the database almost as-is. This feature allows us to develop relatively intuitively.
2) Its suitability for SPA. It is fast and able to deal with high volumes of access.
3) Its flexibility in terms of the data structure. Unlike SQL-based databases, MongoDB is a document-oriented database that does not require any pre-defined structure for the data stored in its storage. This feature is a perfect match for agile development. (On the other hand, this flexible structure of MongoDB can also be a drawback as it could undermine the consistency of the data structure. However, this issue can be dealt with by using a feature of Mongoose module. The details will be described below.)
#### Data Structure and Data Model
To fully utilize the flexibility of the data structure of MongoDB, we adopted our data structure as non-relational. In particular, we develop our dataset with a nested JSON format structure.

Given the time constraint, we have mainly focussed on developing only a database for the Art-Detective game. The data of a question of Art-Detective game primarily contains 2 potentially different parts: 
> * the data associated with materials of quizzes, such as the title of artworks, URL of images, and instruction descriptions. 
> * the data that are necessary to show the answers, such as the data to distinguish a point where there's an answer and description of answers. 

To handle this complexity while satisfying usability, we stored a whole data in a single JSON object, whereas we split the dataset into the two different layers (i.e. adopted a nested structure). Because of this, the data structure became easier to handle intuitively and thereby easier to retrieve necessary data from the frontend-side. In addition to this, the same design is applicable for other game datasets, so a future expansion is supposed to be straightforward based on the current design. These features ensure the scalability of the database.

Thus, by using MongoDB, we were able to implement a database with a flexible and convenient data structure. However, as mentioned above, the fact that there are no restrictions on the data structure could be problematic in maintaining data consistency. This is an issue that should be properly addressed when considering scalability.
To deal with this issue, we introduced the Mongoose. It is a module for handling MongoDB from Node.js, which has some useful features, such as being able to impose certain restrictions on the data structure to store. This feature is called "schema", and it allows us to generate a "model" with certain constraints on the data structure (e.g. data type restriction, maximum/minimum value, non-null value requirement, etc.). As a result, we became able to store data in MongoDB in more safety way.

Specifically, for the Art-Detective game, we constructed the data model, which specifies the data type to be stored, requires non-null values for information that must be stored, and requires a unique value for the ID that is given to each group of dat in order to distinguish each group of data. 

> Note: Originally, MongoDB has a function to set a unique ID automatically when storing data, so there is no need to add another ID separately, but we decided to put an additional ID so that respond effectively to calls from the frontend based on a nature of our current architectural design. This point may be improved in the future.
- [Data-model of Art Detective game(create a link later)]()
- [Detailed description of Art Detective data(create a link later)]() 


#### Database Imprementation
The art-detective game requires relatively simple database operation: store the dataset to the database in advance and send a part of them back in response to a request from the frontend via the middle tier. (Details about database operation and its implementaion are described in the next section.) 
Therefore, it was important to check that the data was stored in an appropriate form in the database at each stage of development. Of course, we could have accessed the database directly and checked the information one by one, but as the visual interface was not necessarily useful, we decided to use a tool with a good GUI. Initially, we tried to use [Robomongo](https://robomongo.org), but in the end, also taking into account the deployment stage, we decided to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), a cloud MongoDB service (DBaaS) which allow us to see collections of data in the database on a web browser. As a result, we could share what kind of data stored in the database among our team members and make our development process more efficient. 


### Middle Tier
#### Overall Architecture
Our middle-tier is implemented by using [Node.js](https://nodejs.org/) as its core, with appropriate utilization of [Express](https://expressjs.com) and [Mongoose](https://mongoosejs.com). The overall structure is designed to be simple, but in order to make the structure clear, manageable and scalable, we have implemented each function as separate files. The functions and relationships between them are shown below.

![](https://imgur.com/2RR0v6H.png)
> - server.js: This is the core of the middle-tier that creates the server, setting up the path to routes.js, setting up the database, and calling the frontend dist files.
> - routes.js: As an interface to the frontend, it sends back appropriate data retrieved from the database via the Mongoose model (model.js) in response to each HTTP request from the frontend.
> - db.js: It establishes a connection with the database at the start of the server, and sets up the database through the controller (dbm.js).
> - dbm.js: It provides the functionality to manipulate the database directly from the middle-tier. Its current function is to initialize the database when the server and database are launched and thereby ensure that it is stored the appropriate data.
> - model.js: This is a data model by Mogoose that accesses the information in the database via requests from the middle-tier. Also, it manages data in the database in accordance with the pre-defined data structure.
#### Implementaion
#### RESTful API
Currently, the backend API in our app is fairly simple, but with future scalability in mind, the API is implemented according to RESTful principles. RESTful APIs have many features, but we were particularly conscious of designing the URI in an appropriate manner. This is particularly important as it will make it easier to develop API interaction for future expansion beyond Art-Detective games, such as the addition of other features or games and the implementation of user authentication and user-specific content features. As the relevant source code is shown as follows, the routing is designed to be manageable intuitively, e.g.```http://HOST/CONTENTS_NAME/...```.
In addition, a routes.js file has been implemented so as to unify the routing functions for each feature of the app. Therefore, when additional parts are added in the future, the future extension (both adding a new feature and adding a new type of processing API request) can be carried out efficiently.
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
We introduced Service (service.ts) in Angular as an interface to interact with the backend API. By the service.ts, we made the frontend files more structurally manageable: the functionality regarding HTTP requests from the frontend was decoupled from the component files and unified in service.ts file. This architecture is expected to benefit when additional functionality is added in the future and the API use becomes more complex. Specifically, we introduced the HTTPClient module to implement a method in the service.ts that makes an HTTP get request. When the popup for each question in the Art-Detective game is launched, the get function in service.ts is called and, as return value, the data from the backend (the database) is retrieved. The data sent back from the backend is in JSON format, but the HTTPClient module passes the data to the frontend component as an Observable object, so it can be handled by "subscribe" method in the component. The main source code in the service.ts file is shown below:
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

### Deployment
For Deploy, we adopted [Docker](https://www.docker.com) to launch both containers of a web server built with node.js and MongoDB at once. Files related to the frontend are automatically built in the docker image when the docker-compose file is executed. Also, regarding MongoDB, the docker-compose file is configured to automatically establish a connection between different ports (currently, loacalhost:3000 and 27017). Therefore, it is enough to run ```docker compose up [-d]``` only. Furthermore, as for MongoDB, the user information needs to be registered at the initial start-up, and the template of the .env file necessary for this will be distributed separately.

> Note: In the development phase, we used MongoDB Atlas, a cloud database, but we decided to use MongoDB's docker image for deployment, as we did not want to share the credentials for authentication widely for security reasons. 

## UX Design
In this part, each of us discuss lots of ideas for our web as a group, combining variety of ideas and research to implement it. According to some users’ feedback, we modified the interface and design pattern to convenience the user. We follow the minimalist design and intuitive thinking, expect someone who use our web with enjoyable experience.

### Design Process and ideation

In the beginning, we discussed the topic and type of game, the chart below shows the initial idea of our project. Our central idea is art education, following this concept we decided to develop “Fun Facts” and “Art Detective” game. According to design thinking, user-centered design is which we follow.


<img width="1171" alt="Screenshot 2021-05-03 at 23 02 51" src="https://user-images.githubusercontent.com/74121985/117168301-eeb30300-adbf-11eb-9df4-de2af0f0f192.png">


The mind map below shows the game type we had at the stage.


<img width="800" alt="Screenshot 2021-05-03 at 23 25 02" src="https://user-images.githubusercontent.com/74121985/117169093-b3650400-adc0-11eb-9445-d11783d0d737.png">


In addition, the following mind map shows issues we may had. For example, the first step we considered is our user’s generation, it affected the design of our web and the contents. After the discussion, we decided to focus on university student and teenager. Research indicated that the average time people spent on a website just under 15 seconds, therefore we need to catch their eye at the start.


<img width="800" alt="Screenshot 2021-05-03 at 23 50 19" src="https://user-images.githubusercontent.com/74121985/117169631-2b332e80-adc1-11eb-9e20-21e168df1528.png">


Moreover, the art history is boundless, in our web we emphasise on oil painting and the timeline of art history is from Renaissance to Abstract Expressionism. Here’s the timeline of our project.


![Drawing](https://user-images.githubusercontent.com/74121985/117169310-e8715680-adc0-11eb-8c6a-f7205ebb54c1.jpg)


### Early prototyping

![](https://i.imgur.com/dLYPZK5.jpg)



### Identification of interacting users and broader stakeholders.

| Name          | Age          | About                                   |
| ------------  | ------------ |---------------------------------------- |
| Arthur        | 23 | A postgrad student who has lots of experience of developing web as a front end engineer. He has no idea about art, he want to know more about art history without pressure. |
| Henry         | 32 | A chip engineer who doesn’t have many experience of playing computer games. He think online game always need to pay much attention and time to play, and he prefer intuitive game instead of complex one especially in his leisure time. |
| Marina        | 18 | A undergrad student who major in art and she doesn’t like to play video games at all. If there’s a way to gain more knowledge in a easy way, she would like to give it a try. |
| Vanessa       | 25 |  A theater designer who love to play digital game after work. She prefer to play strategy games, but never tried web game. If there’s a way to learn something by playing a web game, she would love to try.|

### UX approach – design heuristics

* Visibility of system status and connect to the real world

The topic of our web is art history, our design pattern included variety of oil painting which related to artistic theme. Each of our page is surrounded by masterpiece and simple icon, helping user easier to learn and remember how the interface works. It’s clear to choose which period of art you want to know and play, separated by different iconic painting with title and time. We chose pictures instead of verbose contents, minimize the information of history, created a beginner friendly web is our ultimate objective.

* User control

On our web, we decided to make user easy to switch between each page by scrolling up to down and left to right. To provide user exit the pop up menu, there’s a “X” on the upper-left corner. However, pop up info of timeline page can be quit just by clicking out of the pop up window. We make user easy to exit and have more freedom to do their task.

* Error prevention

It’s necessary to alert user when they’re making an error, with the intention to make it easy for them to do whatever it is they are doing without making a mistake. We made some necessary sign for them to follow.

* Efficiency of use and minimalist design

Instead of use four buttons for each page in front page, we changed the idea into a menu button, it’s a shortcut for novice users. When user click it, the menu will pop up a window. It makes our first page more minimalistic. In timeline page, we chose slide style to implement each period of art.

* Help and documentation

On our web, we provide documentation to help users understand how to complete their tasks. In the game page, there’s an introduction and guide before playing, helping user understand the rule and how to play before next step.



### Understanding of user group

[This](https://www.youtube.com/watch?v=anribnNDmAQ) is our preliminary prototyping video.

We provided questionnaires to target users around us to learn about the experience of interface design, and got 10 feedbacks and 2 suggestions.

In this regard, we discussed and made corresponding design changes:

1. Because of the positive feedback from users, we believe that the overall full-page design can be retained.
![](https://i.imgur.com/UAFCsK4.jpg)

2. Regarding the beauty of the page presentation, we thought there was still room for improvement. Referring to two suggestions on interface presentation, we redesigned the display of the homepage and timeline, and changed the pictures in the fun facts to full display. We simulated the presentation of the museum’s paintings, hoping to provide users with a better experience.
![](https://i.imgur.com/Z4Iw0gk.jpg)
![](https://i.imgur.com/ucr5jNM.jpg)

3. In the third part, we believe that the survey shows the user’s interest in the app is highly positively correlated with their interest in art history, and the interest in the app is slightly higher than their own interest, so our app does not make users disappointed.
![](https://i.imgur.com/rnVO3iI.jpg)

4. In the last part, user feedback shows that everyone is very interested in finding out the differences by playing games, but fun facts are less attractive. We think this is related to the degree of interaction of the game, so we decided to add a dynamic exploration button to the fun facts, hoping to increase the vividness.
![](https://i.imgur.com/6nSZOgf.jpg)




### Wireframes and interaction flow diagrams for final key subsystems

The following diagrams is our wireframes which shows the interaction flow.

![](https://i.imgur.com/KeQPAyM.jpg)

![](https://i.imgur.com/thZ5ZqY.jpg)

![](https://i.imgur.com/3Mp33yn.jpg)



### Reference

* https://www.nngroup.com/articles/ten-usability-heuristics/
* https://www.invisionapp.com/inside-design/6-stages-ux-process/
* https://careerfoundry.com/en/blog/ux-design/what-are-user-flows/
* https://www.experienceux.co.uk/faqs/what-is-wireframing/


## Sprints & Project Management
- [Meeting Minutes](https://github.com/yujenyu/Group11_Project/blob/master/Meetings/meeting.md)
- [Issues and Milestones](https://github.com/yujenyu/Group11_Project/issues)
- [Technical Note](https://hackmd.io/_tVdvtt7Q_GleFZ5sQNuZg?view)

Everyone in our group plays a role in the development:

| Name         | Role                                   |
| ------------ | -------------------------------------- |
| Masashi Asai | Backend Developer                      |
| Lauren Chian | Frontend Developer                     |
| Chun-Yu Chen | Project Management                     |
| Yu-Jen Yu    | UI/UX Designer                         |
| Zhengwu Song | Frontend Developer and Backend Support |

We regularly hold the meetings twice a week on Microsoft Teams. We set a clear topic and came up with ideas and decisions in every meeting. You can find out the meeting minutes in this [link](https://github.com/yujenyu/Group11_Project/blob/master/Meetings/meeting.md).
We mainly use our group Github to track the development progress and do version control. We created five feature branches, whitch correspond to the five main sections of our application (front page, timeline, fun facts, art detective, and about page) and backend development. We allocated each section to different members for developing the front end.

| Main Section  | Member           |
| ------------- | ---------------- |
| Front Page    | Chun-Yu, Masashi |
| Timeline      | Chun-Yu, Yu-Jen  |
| Fun Facts     | Lauren           |
| Art Detective | Zhengwu          |
| About         | Chun-Yu          |

Yu-Jen did the overall UI design for the whole application. As a backend developer in our group, Masashi did the research and integrated both frontend and backend. Dev(development) is the branch that we put all the sections together to test and visulise the whole application. Finally, we will merge dev branch with main branch to release our final version. 

Although we work independently in the different parts, we always check other branches and make suggestions for others. We use the “Issues” function in our repo to track questions, bugs, invalid functions, or enhancement requests. You can easily find the specific issues by filtering the tags. Furthermore, we set several milestones to mark the significant achievement of the works. You can review our issues and milestones in this [link](https://github.com/yujenyu/Group11_Project/issues). In summary, we have created X issues and X milestones. 

We did not plan a sprint to intensively do developing together, because not all of our members are in the same timezone. However, by using the issues on GitHub, we build an efficient and clear channel to communicate. We also use HackMD to edit the note together, so every member can learn from each others by studying the note. You can find our technical note in [Notes for Group 11](https://hackmd.io/_tVdvtt7Q_GleFZ5sQNuZg?view).
## Evaluation
Our team designed three main methods to evaluate our application. First, we checked whether our final product achieved the objectives that we have proposed at the beginning. Second, we did the manual testing to inspect if every section in the application has met the design and well functioned. Finally, we asked users to give the feedback after they have used the application. There are several questions that users can respond to. 

### Meet the Objectives
There are six levels of critical thinking that we wanted to implement in our games. From low to high, they are remembering, understanding, applying, analyzing, evaluating, and creating. Fun Facts and Art Detective provide profound contents that users are able to remember and understand the key features of masterpieces. Particularly, different points between two paintings in Art Detective are critical spots that artists intended to embedding in their works. 

Our team suggests that users will be comfortable to show their knowledge of art history after learning from the application. Additionally, users can get minor abilities to apply and analyze the artworks. However, we regret that we did not put enough emphasis on evaluating and creating skills in our games. In general, the design of the application focuses more on the input abilities to our users, whereas output abilities are not introduced. The reason is because output training needs more interactions between the games and users. However, it will pose more technical difficulties to our team. 

There are four main objectives that we have proposed at the beginning of development. Based on the user feedback(see the User Feedback section), most users comment that our application is easy and intuitive to use. Also, they found that the games are interesting and entertaining. The level of critical thinking we have analyzed in the previous paragraph. Overall, we need to implement more interactive games which can enhance users’ output abilities. Finally, we built the application by using MEAN stack, which makes the different sections in the application more manageable and organized. Based on the cooperation between team members, we really benefit from how easy to extend and modify certain components under the Angular framework.

### Manual Testing
Due to the time limit, we did not design and implement unit testing for each part of the application. Our team decided to do manual testing for our application. In manual testing, team members will evaluate the styles and functionalities for each section to identify if the designs meet our plan and objectives. The following list shows the details of manual testing.

**Overall Structure**
- [x] Scrolling pages
- [x] Full page display for each part
- [x] Slide pages with left and right arrow button to move
- [ ] Scrolling button

Scrolling button has been removed because it will overlap with slide-to-right button. The opened [issue](https://github.com/yujenyu/Group11_Project/issues/11) has asked for team members opinions. However, a better solution might be adjust the position of scrolling button rather than remove it.

**Menu**
- [x] Accordion menu
- [x] Switch between different sections by clicking
- [x] Close the menu by clicking "X" or "Close"
- [ ] After clicking the menu, it will disappear automatically

Due to the time limit, we do not have time to implement the function. Users should manually close the menu after they have moved to the target section.

**Front Page**
- [x] Dynamic background image
- [x] Animated title (placing at center)
- [ ] Some indication that shows users can scroll down the page (e.g. point-down arrow or a mouse symbol)

We encoutered some difficulties when tried to put a scroll down button in the front page. We suspected that because we had used the animated background which multiple layers(with different CSS settings) had been added to the front page, making it becomes difficult to add the element to the page.

**Timeline**
- [x] Five panels in one page; two pages in total to contain ten different movements in art history
- [x] Users shall clearly see the description inside of each panel
- [x] A modal window shall pop-up when users click the "More" button
- [x] Users shall clearly see the description and image of each modal window
- [x] Description inside the modal window shall well structure and indent
- [x] Modal window shall be closed by clicking anywhere outside of it
- [ ] When the modal window is opened, the background section shall keep fixed even when users scrolling the page.

It is an obvious shortage of our application. We cannot make the backgrond fixed when modal window is opened and users try to scrolling the page. To fix the problem, we need to spending more time on understanding fullpage.js framework.

**Fun Facts**
- [x] Introduction page shall show sufficient information for users understanding the game.
- [x] User shall use the right arrow button to move to the next page.
- [x] Second page shall be a menu that includes ten movements in art history.
- [x] Users shall move to the corresponding page when they click on the button in the menu.
- [x] In each game page, the image shall be clear and the Explore button shall be shown.
- [x] Modal window shall pop-up when users click the "Explore" button.
- [x] Accordion list shall work correctly when users check different items in the list.
- [x] Modal window shall be closed by clicking anywhere outside of it.
- [x] Users can use the menu at the upper left corner to navigate back to the first page(introduction page) of Fun Facts.

**Art Detective**
- [x] Introduction page shall show sufficient information for users understanding the game.
- [x] User shall use the right arrow button to move to the next page.
- [x] Second page shall be a menu that includes ten movements in art history.
- [x] The game content shall display in the modal window when users click the button of the menu.
- [x] Two pictures shall appear in the modal window, which one picture will be the original version and another will be modified one.
- [x] Description shall show below of the pictures.
- [x] The red circles shall appear when users click on the differences of the modified picture.
- [x] The description that accompanies the difference shall display below after the red circle came out on the pictures.
- [x] Modal window shall be closed by clicking anywhere outside of it.

**About**
- [x] Different tabs shall be designed in About section.
- [x] Users can switch between tabs.
- [x] The links in the reference tab shall work.

### User Feedbacks
Questions for users:
1. Do you think it is easy to use the application? Is the operation reasonable and intuitive?
   If no, do you have any suggestion about it?
2. Do you have a deeper understanding of art history after using the app? Which story are you most interested in? 
   Do you have any insights from these stories?
4. Do you think the games are enjoyable? Which part is your favourite?
5. For future update, what function do you wish to be added to the app?

**User 1: Anika (female, 27 yo)**
1. I think the app is very easy to use. I particularly like the scrolling pages. It makes every part very clear and makes users easily navigate between sections.
1. I think I indeed learn something about art by using this app. The most impressive short story is about why Venus is not wearing the clothes. I cannot guess the answer why she is wearing nothing,  which because she was just borned.
1. I really like the Art Detective. The game is very challenging but interesting.
1. I would say that if you can include more games and content, this app will be more playable. The overall design of the app is nice and intuitive. If you can add more material, it will be more engaging to users.

## Conclusion

### Working practices

(TODO)

### Success of the project

(TODO)

### Impact of Covid
During the pandemic, it's tough for us to cooperate with each other virtually. It has a significant effect on us due to the lack of human interaction, some issues becoming hard to discuss and spent more time to help each other remotely. Therefore, some of our teammate tried to meet up at Uni end of this term to improve work efficiency, it speeded up the whole process and save times to debug in person. In this unusual year, we’ve learned a lot to solve problems and overcome difficulties in a innovate way that made us stronger.

### Social and Ethical implications
The aim of our web is to make user interest in art, giving them a path to entry the world of art. Due to educational resources decrease, arts subjects are being cut back in many schools, hence the fewer opportunities for people to be exposed to art. We hope user are inspired by the history of art, found that we’re surrounded by art in daily life by visiting our web. It’s not necessary to store user data on our web, therefore we have less issues in ethical implication part. 

### Future work
* Design
In our design of web, there’re some points could be improve in the future. In the beginning, we expect this web can be more interactive with user and record the score and rank in the game, making user have more motivation to play it. Unfortunately, we haven’t implemented this part on our web. However, we’ve made the web more elegant and simplicity for user that we expected. For example, some button is clear for user to follow, e.g. menu bar or scrolling. In contrast, the game page is not that intuitive for user to go back to home page. To improve this, it’s better to have a “back” button for user freedom and control.

* development

(TODO)

* evaluation

(TODO)