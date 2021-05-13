## Evaluation
Our team designed three main methods to evaluate our application. First, we checked whether our final product achieved the objectives that we have proposed at the beginning. Second, we did a unit tesing for the backend API, and the manual testing to inspect if every section in the application has met the design and well functioned. Finally, we asked users to give the feedback after they have used the application. There are several questions that users can respond to. 

### Meet the Objectives
There are six levels of critical thinking that we wanted to implement in our games. From low to high, they are remembering, understanding, applying, analyzing, evaluating, and creating. Fun Facts and Art Detective provide profound contents that users are able to remember and understand the key features of masterpieces. Particularly, different points between two paintings in Art Detective are critical spots that artists intended to embedding in their works. 

Our team suggests that users will be comfortable to show their knowledge of art history after learning from the application. Additionally, users can get minor abilities to apply and analyze the artworks. However, we regret that we did not put enough emphasis on evaluating and creating skills in our games. In general, the design of the application focuses more on the input abilities to our users, whereas output abilities are not introduced. The reason is because output training needs more interactions between the games and users. However, it will pose more technical difficulties to our team. 

There are four main objectives that we have proposed at the beginning of development. Based on the user feedback(see the User Feedback section), most users comment that our application is easy and intuitive to use. Also, they found that the games are interesting and entertaining. The level of critical thinking we have analyzed in the previous paragraph. Overall, we need to implement more interactive games which can enhance users’ output abilities. Finally, we built the application by using MEAN stack, which makes the different sections in the application more manageable and organized. Based on the cooperation between team members, we really benefit from how easy to extend and modify certain components under the Angular framework.

### Unit Testing (Backend API)
As mentioned above, we separated the frontend and backend development, so before we combined the two, we used [Postman](https://www.postman.com) to test the backend API to check it worked properly. Postman is a Web API client service that allows us to test the API's functionality for handling requests from various clients in a very intuitive manner. (The current API use of our app is relatively simple, so we used only a small part of Postman's functionality for testing) Specifically, we tested that the API sent back all the right data in the right format in response to the predetermined request-URIs. The following are actual images of the test result. We were able to perform effective unit tests on the backend API with this superior GUI.

![](https://github.com/yujenyu/Group11_Project/blob/54c1423f83e45b485cd564592f154e933e7fefd3/documentation/diagrams/api-testing.png?raw=true?raw=true)


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
- [x] After clicking the menu, it will disappear automatically

Due to the time limit, we do not have time to implement the function. Users should manually close the menu after they have moved to the target section.

**Front Page**
- [x] Dynamic background image
- [x] Animated title (placing at center)
- [x] Some indication that shows users can scroll down the page (e.g. point-down arrow or a mouse symbol)

We encountered some difficulties when tried to put a scroll down button in the front page. We suspected that because we had used the animated background which multiple layers(with different CSS settings) had been added to the front page, making it becomes difficult to add the element to the page.

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
3.  Do you have any insights from these stories?
4. Do you think the games are enjoyable? Which part is your favourite?
5. For future update, what function do you wish to be added to the app?

**User 1: Anika (female, 27 yr)**
1. I think the app is very easy to use. I particularly like the scrolling pages. It makes every part very clear and makes users easily navigate between sections.
2. I think I indeed learn something about art by using this app. The most impressive short story is about why Venus is not wearing the clothes. I cannot guess the answer why she is wearing nothing, which because she was just borned.
3. I really like the Art Detective. The game is very challenging but interesting.
4. I would say that if you can include more games and content, this app will be more playable. The overall design of the app is nice and intuitive. If you can add more material, it will be more engaging to users.

**User 2: Keisuke (male, 23 yr)**
1. The UI and UX of this app were terrific. I could use it intuitively without checking how to use each feature. If I'm forced to say something about improvement, it will become much better if it allows users to move between pages by flicking like when scrolling up/down. 
2. The app has a lot of intriguing information about art history as well as an individual masterpiece. The number of contents is still limited but the app serves well to attract people as an excellent introduction to art history.
3. I don't have formal knowledge about art but I could learn a lot by playing the app. 
4. I like Art-Detective game. It's enjoyable even as the game of finding the difference so it became much better with some exciting stories.
5. For the Art-Detective game, it would be more playable if you could add the functionality to zoom up the picture of the paintings.

**User 3: Henry (male, 30 yr)**
1. Overall, I love the interface of this web, especially timeline page.  It’s instinctive, easy to use. However, on the Fun Facts page, when I play the last part of game, it’s a bit hard to go back to the home page. In my opinion, its better to add a “Go back” button on each of Fun Facts.
2. Through this web, it made me learned the outline of art history, this’s like a guidebook for art. Although the stories are not in detail, it still clear to introduce the history and make me easy to get the point.
3. I have no idea about art before visiting this web, it inspire me to explore the world of art. 
4. Art Detective is delightful, when I found the differences, it popped up the info of the detail, I could be learning through play.
5. From my perspective, if could add a scoreboard and or ranking board would be better motivation for user who is competitive. 

**User 4: Yukki (female, 19 yr)**
1. When the first time I saw this webpage, I was really shocked that the galaxy flowing on the homepage was so beautiful. But this also caused me not to notice the menu bar button in the upper left corner, so I didn't know how to jump to other pages at first. I think it would be better to make it more visible.
2. Yes, I have always been interested in art, but I still learned something different through this app. I like La danse, I have seen this painting before, but I don’t know the story behind it very well, now I learned a lot through this website.
3. Some stories are quiet interesting, it is a good way to combine stories and artworks.
4. I like fun facts. This game is like a bunch of small cards. When I play this game, I can learn a lot of stories behind the paintings.
5. I think it would be better to add the ability to categorize paintings by author, so that people can view the works of their favorite authors.
