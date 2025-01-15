## Getting Started

To run this project please follow the steps stated below.

### Prerequisites

Make sure you have docker installed along with npm. Start docker before following the installation steps.

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/kirex0/dreamface.git
   ```
2. Navigate to the source directory
    ```sh
    cd .\dreamface\
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file in the johnny-backend directory and enter the correct `MONGO_URI=`
   ```
   mongodb://mongo:27017/johnny-db
   ```
   note: if this was a real mongo URI not for a docker container running locally, this would not be uploaded here!

5. Navigate to the source directory in a terminal and run the following commands:
    ```
    docker-compose build
    docker-compose up
   ```

## Usage

### Basic Usage
To use the application once running, navigate on a browser of choice to `localhost:80`. Once there a list of robots pulled from the database should be displayed. From there clicking on a robot's row, will navigate to the details of the robot. To navigate back, click the `Back To Home Page` in the header.

### Filtering/Sorting
Filtering  can be done in a few different ways. To search for a robot, enter the name in the search box. To filter by the robot's status, click the drop-down-menu `Select a status` and select a status to filter by. 

To sort the data, select the column head in the table to sort by that field. These fields include: Name, Status, and the Date of the last update. 

## My approach and challenges faced:

After thoroughly reading through the requirements of this project, I started working on what I knew how to do first. I created a NodeJS, ExpressJS, Mongoose application along with a MongoDB docker container. From there I created a schema to match the one provided in the instructions. I created a folder to hold all my API files and split up the API files into three main files: the model, controller, and the routes. After getting those working and testing the routes with Postman, I moved on to learn Angular. I found online material that helped me understand the basics and how to create an Angular application.

After following the online material and learning about various aspects of Angular, I created a home component and set that as the main entry point to the application. From there I created a details component that would host the information of the robot. After getting my structure set up, I created a service to make API calls to the NodeJS backend. I ran into an issue here while running these projects in docker containers. When trying to make an API call to the backend I ran into an error message that said, "has been blocked by CORS policy: No 'Access-Control-Allow-Origin'". I fixed this issue by installing the CORS package in NodeJS, configured CORS to allow GET requests (since the application only needed access to GET), and then used CORS as middleware to allow the requests to be made.

Starting on building the application, I created the table first. Using HTML and SCSS, I mocked up a table and then added a search box. I created a custom pipe to allow filtering based on the name and what the user was typing into the search box. From here I found Angular Material and included this package to create a nice-looking drop-down menu to select a status. The drop-down menu is implemented by another custom pipe filtering through the robots based on the status.

After getting the home component working, I moved on to the robot details page. I found a card in Angular Material that created a nice UI card to view information in. This information is populated by the robot data from an API call. The robot ID is passed as a parameter in the URL making the route `/robotdetails?id=*insert id*`. This allowed the new page to receive the robot ID, make the API call, and have the data to display to the user.

Following finishing the details page, I wanted a nice and clean way to get back to the list page/home component. The header only said, "Johnny Robot List" and after receiving feedback from friends, I made the text update to say, "Back To Home Page". This allows a clean and easy-to-understand way to navigate back. After finishing the main functionality, I moved on to styling the project. I formatted the table to look nice and fill most of the page. The table has everything centered to the left and evenly spaced boxes so the UI does not change when filtering to data with shorter text fields. The project still looked plain, so I sourced the color used on Dreamface's website to create a linear background like the homepage. Adding some more color by changing the text color of the robot's status based on the status made the table look less "plain" as well.

Finally, the last touches. I moved the color of the robot status to be a service to reuse code across different components. With some more feedback, a friend mentioned sorting the data based on the table's head and I added that. I went through the project and reviewed the code to make sure everything worked as planned. This was achieved by adding comments and readable code.

If I had more time to work on this project, I would have liked to add a way to perform the rest of the CRUD (create, update, delete) operations to manage the robot data. Another improvement I would make is to select all the "outdated" robots and perform an "update" with a single click of a button. Another nice-to-have would be to hover over the status "Error" and see an error message from the robot to help the user receive more information. With more time I could have added several types of data modeling including a list of robot-details for every robot or a selected few.
