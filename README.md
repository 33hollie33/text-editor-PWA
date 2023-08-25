# text-editor-PWA
Progressive Web Applications (PWA): Text Editor
[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

  ## Description
  This application is a single-page application that meets the PWA criteria. It is text editor that runs in the browser. A variety of data persistence techniques to ensure redundancy in case one of the options isn't supported by the browser. The application is able to work offline as well. To construct the text editor, an existing application was taken and integrating techniques for obtaining and preserving data within an IndexedDB database. The implementation utilised a package known as idb, a streamlined enclosure for the IndexedDB API. This package encompasses a range of practical methods for data storage and retrieval, and has been adopted by enterprises such as Google and Mozilla.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```md

  ## Table of Content
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Tools](#Tools)
  - (https://www.gnu.org/licenses/gpl-3.0)
  - [Questions](#Questions)

  ## Installation
  webpack: A potent module bundler merging JavaScript files, assets, and assorted resources into a unified package.


  ## Tools
  JavaScript, NodeJS, ExpressJS, babel-loader, css-loader, mini-css-extract-plugin, html-webpack-plugin, webpack, work-webpack-plugin.

  ## License 
  ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
This project is licensed under the terms of GPL3.0.  (https://www.gnu.org/licenses/gpl-3.0)

  ## Questions
  For any Questions Contact me at: 
  Github: https://github.com/33hollie33 

  ## Heroku

  