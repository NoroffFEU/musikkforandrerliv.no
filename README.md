# musikkforandrerliv.no

![img_3078](https://github.com/NoroffFEU/musikkforandrerliv.no/assets/152280051/bc5bf665-65b6-49ed-a267-758b3fc21cb3)

# Description:

Noroff Frontend Developer students are building a web application for the non profit organization Musikk Forandrer Liv (MMF).

This project aim to build a web application:

- with multipple language support (English, Norwegian and Malagasy)
- that allows people to support MMF via donations
- that allows the client, MMF, to update and post content on their page via CMS
- that allows people visiting the page to sign up for newsletter

# Built with:

- Tailwind
- Decap CMS

# Getting started:

## Installation:

1. Clone the repo: https://github.com/NoroffFEU/musikkforandrerliv.no
2. Run `npm install`

# Acknowledgments:

2022-2023 Noroff fulltime Frontend development students
2023-2024 Noroff fulltime Frontend development students

## Decap CMS

### Running locally

The below instructions rely on `local_backend: true` being in `admin/config.yml`.

- Run `npx decap-server` from the root directory in a different terminal if you are already running `npm run dev` for Tailwind
- Start the local development server
- Open http://localhost:<port>/admin

Official docs: https://decapcms.org/docs/working-with-a-local-git-repository/

## 11ty (static page generating)

Run `npm run start`

## Tailwind

Run `npm run tw:dev` when developing.

Run `npm run tw:build` when deploying.
