// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== choices) {
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Public domain') {
    return `!['public domain license'](https://img.shields.io/badge/license-Public%20Domain-blue)`
  }
  if (license === 'Permissive') {
    return `!['public domain license'](https://img.shields.io/badge/license-Permissive-yellow)`
  }
  if (license === 'LGPL') {
    return `!['public domain license'](https://img.shields.io/badge/license-LGPL-blue)`
  }
  if (license === 'Copyleft') {
    return `!['public domain license'](https://img.shields.io/badge/license-Copyleft-orange)`
  }
  if (license === 'Proprietary') {
    return `!['public domain license'](https://img.shields.io/badge/license-Proprietary-blueviolet)`
  } else {
    return " "
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === choices) {
    return `# ${license.choices}`
  } else {
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.desc}
  # ${data.install}
  # ${data.info}
  # ${data.contri}
  # ${data.test}
  # ${data.license}
  # ${data.user}
  # ${data.profile}
  # ${data.email}
  # ${data.contact}
`;
}

module.exports = generateMarkdown;
