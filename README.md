## **Website Usecases**
<!-- usecase picture -->
![usecase](https://github.com/FatmaGuidara/EVAX/blob/master/UseCaseDiagram.png)
---
## **3 usecases are implemented**
- The Q & A 
<!-- FAQ video -->
- Ministry Dashboard
<!-- dashboard picture -->
![dashboard](https://github.com/FatmaGuidara/EVAX/blob/master/Dashboard.png)
- Drugstores' form
<!-- drugstore video -->

https://drive.google.com/file/d/1PN1wL2UzOp9Mwp9682egl-LzSa4OwWRO/view?usp=sharing



---
## **To run the project** 
1. *Run the back-end*
```bash
    $ cd evax-back
    $ npm install
    $ npm run start
```
2. *Then run the front-end*

```bash
    $ cd evax-front-web
    $ npm install
    $ ng serve --open
```
---
## **Architecture**
We are using the 3-tier architecture.

The application architecture for EVAX will have a RESTful API backend and a model-view-controller (MVC) frontend.

MVC is known as an architectural pattern, which embodies three parts Model, View and Controller, or to be more exact it divides the application into three logical parts: the model part, the view and the controller. It was used for desktop graphical user interfaces but nowadays is used in designing mobile apps and web apps.

![MVC](https://www.freecodecamp.org/news/content/images/2021/04/MVC3.png)

### **Model**
It is known as the lowest level which means it is responsible for maintaining data. Handle data logically so it basically deals with data. The model is actually connected to the database so anything you do with data. Adding or retrieving data is done in the model component. It responds to the controller requests because the controller never talks to the database by itself. The model talks to the database back and forth and then it gives the needed data to the controller. Note: the model never communicated with the view directly.

### **View**
Data representation is done by the view component. It actually generates UI or user interface for the user. So at web applications when you think of the view component just think the Html/CSS part. Views are created by the data which is collected by the model component but these data aren’t taken directly but through the controller, so the view only speaks to the controller.
### **Controller**
It’s known as the main man because the controller is the component that enables the interconnection between the views and the model so it acts as an intermediary. The controller doesn’t have to worry about handling data logic, it just tells the model what to do. After receiving data from the model it processes it and then it takes all that information it sends it to the view and explains how to represent to the user. Note: Views and models can not talk directly.


### **Advantages of MVC**
- MVC architecture will separate the user interface from business logic and business logic
- Components are reusable.
- Easy o maintain.
- Different components of the application in MVC can be independently deployed and maintained.
- This architecture helpt to test components independently.

### **Disadvantages of MVC**
- The complexity is high.
- Not suitable for small applications.
- The inefficiency of data access in view.