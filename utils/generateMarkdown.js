// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.email}
  ## [${data.gitHub}](https://github.com/${data.gitHub})
  ## [${data.repository}](https://github.com/${data.gitHub}/${data.repository})
  ## ${data.description}

`;
}

module.exports = generateMarkdown;
