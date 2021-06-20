// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-red)
    `;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("this is license link"+license)
  if (license) {
    return `
    https://choosealicense.com/licenses/${license}`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("this is license section"+license)
  if (license) {
    return `
## license

The following link contains in depth information about license selected: ${renderLicenseLink(license)}`;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license)
  return `# ${data.title}

## description

${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
