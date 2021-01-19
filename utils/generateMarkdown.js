// function to generate markdown for README
const translator = {
  Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  BSD: '[![Lisence](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
}
const lisenceLinks = {
  Apache: '[Apache](https://opensource.org/licenses/Apache-2.0)',
  BSD: '[BSD](https://opensource.org/licenses/BSD-3-Clause)',
  MIT: '[MIT](https://opensource.org/licenses/MIT)',
  GNU: '[GNU](https://www.gnu.org/licenses/gpl-3.0)',
}
function generateMarkdown(data) {
  return `${translator[data.lisence]}
  # ${data.title}
  ## Table of contents
  ---
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Tests](#tests)\n
  [Contributing](#contributing)\n
  [Questions](#questions)\n
  [Lisence](#lisence)\n
  ## Description
  ${data.description}
  ## Installation
  To install this application open an integrated terminal and enter the following into the command line:\n
  \`${data.installation}\`
  ## Usage
  \`${data.usage}\`\n
  [Usage Video](${data.video})
  ## Tests
  \`${data.test}\`
  ## Contributing
  ${data.contribution}
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
  ## Questions
  [GitHub Repository](https://github.com/${data.gitHub}/${data.repository})\n
  For further questions please feel free to email the developers:\n
  ${data.email}
  ## Lisence
  Use of this software is regulated under the following lisence:\n
  ${lisenceLinks[data.lisence]}

  




`;
}

module.exports = generateMarkdown;
