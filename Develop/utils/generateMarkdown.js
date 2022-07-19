// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Public domain') {
    return `Public Domain License Badge(https://img.shields.io/badge/license-Public%20Domain-blue)`
  }
  // if (license === 'Permissive') {
  //   return `![Permissive License Badge](https://img.shields.io/badge/license-Permissive-yellow)`
  // }
  // if (license === 'LGPL') {
  //   return `![LGPL License Badge](https://img.shields.io/badge/license-LGPL-blue)`
  // }
  // if (license === 'Copyleft') {
  //   return `![Copyleft License Badge](https://img.shields.io/badge/license-Copyleft-orange)`
  // }
  // if (license === 'Proprietary') {
  //   return `![Proprietary License Badge](https://img.shields.io/badge/license-Proprietary-blueviolet)`
  // } else {
  //   return " "
  // } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Public domain') {
    return `![Public Domain License Badge](https://img.shields.io/badge/license-Public%20Domain-blue)`
    // return `[Public Domain](https://wiki.creativecommons.org/wiki/public_domain)`
  }
//   if (license === 'Permissive') {
//     return `[Permissive License](https://img.shields.io/badge/license-Permissive-yellow)`
// //   }
//   if (license === 'LGPL') {
//     return `!['public domain license'](https://img.shields.io/badge/license-LGPL-blue)`
//   }
//   if (license === 'Copyleft') {
//     return `!['public domain license'](https://img.shields.io/badge/license-Copyleft-orange)`
//   }
//   if (license === 'Proprietary') {
//     return `!['public domain license'](https://img.shields.io/badge/license-Proprietary-blueviolet)`
//   } else {
//     return " "
//   } 
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Public domain' ||  'Permissive' || 'LGPL' || 'Copyleft' || 'Proprietary') {
    appendChild.renderLicenseBadge(renderLicenseLink)
  } else {
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Project Description
  ${data.desc}
  ## Installation Instructions  
  ${data.install}
  ## Usage Information
  ${data.usage}
  ## Contribution Guidelines
  ${data.contribution}
  ## Test Instructions
  ${data.test}

  ## GitHub Username 
  ${data.user}
  ## GitHub Profile 
  ${data.profile}
  ## Email
  ${data.email}
  ## Other Contact Information 
  ${data.contact} 
`;
}
// ## Licensing 
// ${data.license}
module.exports = generateMarkdown;
