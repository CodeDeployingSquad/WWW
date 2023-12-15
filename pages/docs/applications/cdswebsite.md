---
title: CDS Website
description: Docs for www.codedeployingsquad.tech 📜
---

<p align="center">
  <a href="https://cdsorg.vercel.app/">
    <img alt="CDS" title="CDS" src="/assets/website/cdsglobe.png" width="200">
  </a>
</p> 
<h1 align="center"> CDS Website </h1> 
<h4 align="center">Website for the largest community of tomorrow's open source developers.</h4>

<br>

<div style="display: flex; justify-content: center; align-items: center;">
<a href="https://github.com/CodeDeployingSquad/graphs/contributors" style="margin: 0 5px;">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/CodeDeployingSquad/cds-website?label=Contributors&color=blue">
</a>
<a href="https://github.com/CodeDeployingSquad/graphs/commit-activity" style="margin: 0 5px;">
    <img alt="Commits" src="https://img.shields.io/github/commit-activity/t/CodeDeployingSquad/cds-website?label=Commits&color=orange">
</a>
<a href="https://github.com/CodeDeployingSquad/pulls" style="margin: 0 5px;">
    <img alt="PRs Open" src="https://img.shields.io/github/issues-pr-raw/CodeDeployingSquad/cds-website?label=PRs%20Open&color=brightgreen">
</a>
<a href="https://github.com/CodeDeployingSquad/issues" style="margin: 0 5px;">
    <img alt="Issues Open" src="https://img.shields.io/github/issues-raw/CodeDeployingSquad/cds-website?label=Issues%20Open&color=red">
</a>
<a href="https://github.com/CodeDeployingSquad/network/members" style="margin: 0 5px;">
    <img alt="Forks" src="https://img.shields.io/github/forks/CodeDeployingSquad/cds-website?label=Forks&color=lightgrey">
</a>
<a href="https://github.com/CodeDeployingSquad/stargazers" style="margin: 0 5px;">
    <img alt="Stars" src="https://img.shields.io/github/stars/CodeDeployingSquad/cds-website?label=Stars&color=yellow">
</a>
</div>

<br>
<br>
<div align="center">
  <img alt="CDS" title="CDS" src="/assets/website/ss.png" width="100%" style="border: 1px solid gray; border-radius: 5px; display: block; margin: 0 auto;">
</div>
<br>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [ Getting Started ](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

<!-- ## <span id="project-structure">Project Structure</span> -->

## <span id="-getting-started-"> Getting Started </span>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

List any software or dependencies that need to be installed before setting up the project.

### Installation

A step-by-step guide on how to get the development environment running.

```bash
# Clone the repository
git clone https://github.com/CodeDeployingSquad/cds-website.git

# Navigate to the project folder
cd cds-website

# Install dependencies
pnpm install
```

## <span id="folder-structure">Folder Structure</span>

- `components` - dir for all the essential components
- `content` - dir for all the constant content data
- `pages` - dir for all the pages 
  - `api` - dir for all the essential apis including opengraph api
  - `blog` - dir for all the blogs
    - `_meta.json` - file for configuring site and page structure
  - `docs` - dir for all the documentation pages
    - `_meta.json` - file for configuring site and page structure
- `public` -dir for all the serve static files
- `theme.config.tsx` - file for configuring Nextra Docs theme

## <span id="scripts">Scripts</span>

```bash
# Run the development server
pnpm run dev

# Build the project for production
pnpm run build

# Start the production server
pnpm start
```

## <span id="built-with">Built With</span>

- https://nextra.site
- https://reactjs.org
- https://nextjs.org
- https://mdxjs.com
- https://pnpm.io
- https://tailwindcss.com

## <span id="contributing">Contributing</span>

>For contributing checkout our [Contributing Guide](https://www.codedeployingsquad.tech/docs/guide/contributingguide)

>For more guidance checkout [All Guides](https://www.codedeployingsquad.tech/docs/guide)

## <span id="contributors">Contributors</span>

<a href="https://github.com/CodeDeployingSquad/cds-website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CodeDeployingSquad/cds-website" />
</a>

## <span id="license">License</span>

This project is licensed under the [MIT License](https://opensource.org/license/mit/) - see the [LICENSE.md](/LICENSE.md) file for details.

## <span id="acknowledgments">Acknowledgments</span>

- https://github.com/pacocoursey/next-themes
- https://github.com/garmeeh/next-seo
- https://github.com/hashicorp/next-mdx-remote
- https://github.com/shikijs/shiki
- https://github.com/nextapps-de/flexsearch
- https://github.com/atomiks/rehype-pretty-code
- https://github.com/Brooooooklyn/simple-git
- https://github.com/francoismassart/eslint-plugin-tailwindcss