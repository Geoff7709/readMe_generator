// function to generate markdown for README
const translator = {
  Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  BSD: '[![Lisence](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}
function generateMarkdown(data) {
  return `${translator[data.lisence]}
  # ${data.title}
  ## ${data.email}
  ## [${data.gitHub}](https://github.com/${data.gitHub})
  ## [${data.repository}](https://github.com/${data.gitHub}/${data.repository})
  ## ${data.description}

`;
}

module.exports = generateMarkdown;
