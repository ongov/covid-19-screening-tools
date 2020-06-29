# COVID-19 Courthouse Screening Tool

**NOTE:** This tool is not intended to provide medical advice. If you have medical questions, consult your local health authority.

The tool takes the public through a series of questions to determine whether they should be attending court in an Ontario courthouse. It is based on the covid-19 Self-Assessment Tool Codebase.

## RUNNING

**NOTE:** You need to have an up-to-date version of NodeJS installed to run this. I used 13.3.0 for development but any version higher than 12.0.0 should work. You will need to install `yarn` globally using `npm i -g yarn` before being able to run this project.

To run during development, simply use `yarn develop` command.

To build production version, use `yarn build`. Production build can be served locally using `yarn serve`.
