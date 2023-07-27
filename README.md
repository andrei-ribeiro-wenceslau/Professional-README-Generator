# README Generator

## Description

Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project.

## Usage

![CLI](https://github.com/andrei-ribeiro-wenceslau/Professional-README-Generator/blob/main/images/readme-generator.png "CLI")

When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts. The README will also include badges for your GitHub repo.

Finally, fs.writeFile is used to generate your project's README.md file.

[Demo video link ](https://drive.google.com/file/d/1xTP510niSzsUU5U6nqq1LERP9fHYo6ln/viewLinks to an external site.)

## Credits

N/A

## License

MIT License
