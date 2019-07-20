# Maintenance Manager

Maintenance Manager is a ReactJS app that allows users to create and review maintenance requests. 

![Logo](https://user-images.githubusercontent.com/46382684/61578721-c3ff9980-aac8-11e9-98b4-864968778ea7.JPG)


## Using Maintenance Manager

First, a new user must click the `Register` button and sign up using their email and a unique password. If the user already has an account, they can click `Sign In`. Passwords are handled securely using `PassportJS`. Users who register do not need to sign in again during their first session.

![snip4](https://user-images.githubusercontent.com/46382684/61578794-fe1d6b00-aac9-11e9-87d0-7ac390a2aece.JPG)

The three main windows show `New Requests`, `Scheduled` tasks and `Completed` tasks. The severity of the task is indicated by shade of red on the maintenance request cards. All other information about the request, including any additional notes by the original poster are shown as text within the card. 

Completed tasks are marked green.

![Tasks](https://user-images.githubusercontent.com/46382684/61578747-2193e600-aac9-11e9-89f2-09d48c7f1eb5.JPG)

Below the task windows is a button that will open the first set of buttons that allow the user to submit a new maintenance request. One choice per additional row of buttons. Notes are set to a character limit of 30.

![snip1](https://user-images.githubusercontent.com/46382684/61578775-b860a280-aac9-11e9-8d8b-ef595a6ad989.JPG)

An email is sent automatically to the administrator when a new task is created.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing

Clone Maintenance Manager to your machine.

Install node packages.

```
npm install
```

To start local server, go to your terminal, cd to the project file, and run server locally.

```
npm start
```

Local Mongo database can be managed using Robo3T.


## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds


## Authors

Built by: `Ankit Baraskar`, `Josh Eshleman`, `Paige Lieski`, `Taylor McGlothlin` & `Will Woods`.

See also the list on Github of [contributors](https://github.com/paigelieske/Project-3/graphs/contributors) who participated in this project.


## License

This project is licensed under the MIT License.


## Acknowledgments

We would like to acknowledge the effort put in by all on previous iterations of this project.