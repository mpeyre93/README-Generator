// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  #Table of Contents


  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Questions](#questions)
  -[Contact](#email,#username)

  ## Description:
    ${response.license}
    ${response.description}

  ##Installation:
    ${response.installation}

  ##Usage
    ${response.usage}

  ##License
    ${response.license}

  ##Contribution
    ${response.contribution}

  ##Test
    ${response.test}

  ##Questions - For questions about this README generator, you can visit my GitHub page using the following link:
  
    -[GitHub Profile](https://github.com/${response.username})

    For additional questions feel free to contact me via email at : ${response.email}.
`;
}

module.exports = generateMarkdown;
