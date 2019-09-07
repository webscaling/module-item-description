# Front End Capstone - Shazamazon

The goal of this project is to build a full-stack application as a team.  Our seven-person team was tasked with making an Amazon clone which we called "Shazamazon" and we focused on selling magic-related items.  Our team worked in two-day sprints with daily standups and we managed our workload using a Trello board, keeping with Agile workflow protocol.  We utilized git branches and peer-reviewed merge requests, and we also held periodic code share meetings.

This is a front-end heavy project, as we only had to manage a database of 105 items.  Each team member developed a specific module and I was in charge of the item description.  I used React and vanilla CSS on the front end, and Node, Express and MongoDB Atlas to manage the data. Shamazon utilizes service-oriented architecture.  Each of us deployed our component separately and the components are displayed together on a proxy server.  Each component is hosted on a AWS/EC2 server.  Our components all came together on an AWS EC2 hosted proxy server.


## My Work

My Proxy Server - https://github.com/shazamazon/proxy-item-description

Link - http://ec2-13-58-218-116.us-east-2.compute.amazonaws.com/

Item Description - https://github.com/shazamazon/module-item-description

Link - http://ec2-18-220-131-48.us-east-2.compute.amazonaws.com/


## Related Projects

Nav & Search Bar - https://github.com/shazamazon/module-nav-search-bar
Price, Fulfillment, Add To Cart, etc.. - https://github.com/shazamazon/module-cart
Related Items Carousel - https://github.com/shazamazon/module-the-best-carousel
Browsing History Carousel - https://github.com/shazamazon/module-browsing-history-carousel
Photo Gallery - https://github.com/shazamazon/module-photo-gallery
Q&A - https://github.com/shazamazon/modules-qa
Footer - https://github.com/shazamazon/module-footer

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Git clone to your local drive

2. From within the root directory:
  npm i

3. From within the root directory:
  npm start

4. Navigate to http://localhost:1337 in your browser.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Axios 0.19.0
- Body-Parser 1.19.0
- Express 4.17.1
- Mongoose 5.6.11

### Installing Dependencies

From within the root directory:
npm install


