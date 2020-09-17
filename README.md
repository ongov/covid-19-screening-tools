# COVID-19 Courthouse and School Screening Tools

**NOTE:** This tool is not intended to provide medical advice. If you have medical questions, consult your local health authority.

This application consists of screening tools that take the public through a series of questions to determine whether they should be attending court or school in Ontario. It is based on the covid-19 Self-Assessment Tool Codebase.

There are four folders in `src/pages` directory corresponding to English and French versions of the two screeners. Similarly, templates for the screeners are located in the `src/templates` folder. The ones in that folder are shared and then templates specific to each tool are contained in their own folders.

Logic for the screeners is contained in `src/shared/logic.js` and is maintained separately for each screener as they have unique questions relevant to their environments.

Metadata is contained in `gatsby-config.js` file and is separated by screener type and then by the language.

## RUNNING

**NOTE:** You need to have an up-to-date version of NodeJS installed to run this. I used 13.3.0 for development but any version higher than 12.0.0 should work. You will need to install `yarn` globally using `npm i -g yarn` before being able to run this project.

To run during development, simply use `yarn develop` command.

To build production version, use `yarn build`. Production build can be served locally using `yarn serve`.
