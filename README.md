# README-Generator
## Node.js and ES6+ 

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

This is a command-line application that dynamically generates a professional README.md for a new project from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).
The application will be invoked with the following command:

```
node index.js
```

Because this is a command-line application that won’t be deployed, you’ll also find a link to a walkthrough video that demonstrates the functionality of the application.

## Criteria

```md
This is a command-line application that accepts user input.
The user is prompted for information about their application repository, then a quality, professional README.md is generated with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
The user will enter the project title, this is displayed as the title of the README.
The user then enters a description, installation instructions, usage information, contribution guidelines, and test instructions.
This information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
Then the user will choose a license for the application from a list of options.
A badge for that license is added to the top of the README and a notice is added to the section of the README entitled License, that explains which license the application is covered under.
The user then enters their GitHub username. This is added to the section of the README entitled Questions, with a link to the GitHub profile.
TH user then enters their email address, which this is added to the section of the README entitled Questions, with instructions on how to reach the user with additional questions.
When the user clicks on the links in the Table of Contents they are taken to the corresponding section of the README.
```

* This generated README includes the following sections: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.


## Submission Requirements

Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include a video showing us that you got the app working with no bugs. You should include a link to the video in your application's `README.md` file.


* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

![README.md terminal screenshots](/Images/terminalScreenshot.png?raw=true)

Sample README.md file is located in the contents folder.