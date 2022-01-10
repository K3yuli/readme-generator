function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.title}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.description}

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [Tests](#tests)
- [Contribution](#contribution)
- [License](#license)
- [Questions](#questions)

## <a name="usage"></a>Usage
${answers.usage}

## <a name ="installation"></a>Installation
${answers.installation}

## Tests
${answers.tests}

## Contribution
${answers.contribute}

## <a name="license"></a>License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgree)


## <a name="questions"></a>Questions
- My [GitHub](${answers.username})
- My [Email](${answers.email})

`
}

module.exports = generateMarkdown;
