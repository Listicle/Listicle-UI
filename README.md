# Listicle

## Table of Contents

- [Abstract](#Abstract)
- [Technologies](#Technologies)
- [Code Architecture](#Code-Architecture)
- [Install and Set Up](#Install-and-Set-Up)
- [Illustrations](#Illustrations)
- [Wins](#Wins)
- [Challenges](#Challenges)
- [Contributors](#Contributors)
- [Project Specs](#Project-Specs)

## Abstract

Web application that allows the user to create project boards with 3 stages and nested activities and task lists. The user is also able to create and delete activities, tasks and projects. The user can mark a task as completed.

## Technologies

- SvelteKit
- TailwindCSS
- Houdini
- GraphQL
- Ruby on Rails
- Cypress
- TravisCI


## Install and Set Up

To run Cypress tests:

1. Clone down the Readme repo
2. Cd into `Listicle-UI`
3. Run `npm install`
4. Run `npm start`
5. Your browser will open the website.
6. In a separate terminal, run `npx cypress open`
7. Cypress browser will load, choose a test and see the results


## Code Architecture

We structured our architecture with 3 reusable components and 4 route components with 2 stores to access and modify data across the application

If you're interested on seeing the planning and execution of this project you can take a look to the wire frame, architecture diagram and project board:

- [Wire Frame](https://www.figma.com/file/bEiYiYnbuYbC5psuMOPsFD/Wire-Frame-UI?node-id=2%3A2)
- [Project Board](https://github.com/orgs/Listicle/projects/1)
- [Architecture Diagram](https://www.figma.com/file/v3BdfBM5zH3W7K2ZU5ep1N/Listicle-UI-Architecture?node-id=0%3A1)

## Illustrations
![listicle](https://user-images.githubusercontent.com/81398850/146427176-14106d58-40f6-40f1-b432-f6b99affaeb1.gif)

![Screen Shot 2021-12-15 at 8 27 35 PM](https://user-images.githubusercontent.com/81398850/146427216-a6c0c01a-ed7b-4f4c-b859-edbf6940f257.png)

## Wins

- Learned and implemented Svelte, SvelteKit, TailwindCSS and Houdini GraphQL Client
- We worked with  backend team to create a fullstack application
- We figure out how to integrate SvelteKit and Houdini GraphQL Client with limited resources for being very new technologies

## Challenges

- We had challenges configuring our Vite compiler to work smoothly with all of the packages
- We tried using Apollo client with SvelteKit and it didn't work smoothly
- We had challenges using Houdini GraphQL Client to communicate with our GraphQL server

## Future Features

- Create functionality to allow the user to add notes to the activities/missions
- Create functionality to allow the user to create independent to do lists
- Create functionality to allow the user to create independent notes

## Contributors

- Carlos Gomez [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />](https://github.com/karmacarlos)|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/carlos-agomez/)
- Erin Quinn [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />](https://github.com/equinn125)|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/erin-quinn-a53a8b172/)
- Samantha Peterson [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />](https://github.com/sami-p)|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/samantha-peterson-15b18220b/)
- Kevin Nguyen [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />](https://github.com/denverdevelopments)|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/kevin-nguyen-59510520a/)
- Paul Chambers [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />](https://github.com/PaulTimothyChambers)|[<img src= "https://img.shields.io/badge/in-LinkedIn-blue" />](https://www.linkedin.com/in/paultimothychambers/)

## Project Specs

- The project spec & rubric can be found [here](https://mod4.turing.edu/projects/capstone/)
