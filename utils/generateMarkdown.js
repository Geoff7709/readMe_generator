// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.email}
  ## ${data.gitHub}
  ## ${data.repository}
  ## ${data.description}

`;
}

module.exports = generateMarkdown;
