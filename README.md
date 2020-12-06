# stockC
A demo project that displays the stock trading details.

# Requirements

- [Create React App](https://github.com/facebook/create-react-app)
- [Node.js](https://nodejs.org/en/)
- React
- Firebase

# Setting up the project

1.After downloading node.js executable files,test the installation using

```
$node -v
$npm -v
```

2.Install react using the given command and create a new directory

```
$sudo npm install -g create-react-app
$create-react-app stockc
$cd ./stockc
```

3.Install the dependencies of node.js 

```
$npm install
```

4.Install firebase

```
$npm install --save firebase
```

5.Setup the firebase database and make changes in the configuration of the src/Firebase.js file

6.To run the project,use the following command and follow the url localhost:3000

```
$npm start
```

# Demo of the work till now :

1. Home page and the database with the manually added stock information (displaying only one company)

<p float="left">
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i1.png" width="450" height="400" />
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i2.png" width="450" height="400" />
</p>

2. Adding stock manually and clicking 'Submit'.The corresponding change is displayed on the home page

<p float="left">
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i3.png" width="450" height="400" />
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i4.png" width="450" height="400" />
</p>

3. The company is added automatically to the database.You can also see that the user list is currently empty

<p float="left">
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i5.png" width="450" height="400" />
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i6.png" width="450" height="400" />
</p>

4. Sign up a new user,suppose 'example' and see the change  in the database

<p float="left">
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i7.png" width="450" height="400" />
<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i8.png" width="450" height="400" />
</p>
5. To go to the corresponding watchlist,click on 'Go to my watchlist!' on the home page.A Sign In page will open as follows

<img src="https://github.com/rsrkpatwari1234/stockC/blob/main/demo_images/i9.png" width="700" height="400" />

# References 

- [Tutorial](https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application)
- [Git support](https://github.com/didinj/reactjs-firebase-firestore-crud)
