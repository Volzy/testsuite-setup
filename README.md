# Testsuite setup

This is a test / proof-of-concept repository to check out various types of tests and how they could serve well in a client project.

## Installation
Clone repo
Run `npm install`

## Currently included
- Unit tests (with Jest)
- End 2 end tests (with Nightwatch / Selenium)
- Visual tests (with BackstopJS)

## Commands
- npm test:unit to run Unit/integration tests
- npm test:e2e to run Selenium tests
- npm test:visual to run Backstop tests
- npm test:visual approve --filters to approve changes to Backstop tests
- npm test:all to run all of them together

## Where are tests located

### Unit tests
Unit tests are located next to the code they test. It is done so, because we want to be very alert that tests are connected to that specific code, so a new developer safely can assume that he has to run tests when making changes to this code.

### End 2 end tests
End 2 end tests are located in a /tests folder in thr project root. Though we want the tests to be as close to the source files as possible, an end 2 end test may test a lot of functionality and may even run across pages. Therefore we simply cannot box it with the source files.

### Visual tests
If we only had visual tests for specific modules they should definetely be located within that module. However Backstop (visual test framework) is simply too cumbersome when only targeting specific selectors - at least in large scale applications. Image that it had to not only generate 1000 selector screenshots, it also had to compare each and any one of them -  obviously compare them in 2-3 media queries as well.

Therefore visual tests are usually run against a page where modules are located (e.g. an "Atoms" overview page in an Atomic Design styleguide or another type of modular overview page).

## Reports
Reports for test runs are available on the command line - primarily for the developer's ease of use.
Reports are also available from the tests/reports folder, if needed for visual representation to Product Owner, Project Manager or simply put on a screen next to the development team.

## Config files
Config files are available for each provider in the root folder. They can be provided as a sample file and altered base on a project to project context.

## Why even run tests?
How would we be able to be calm and confident telling the client that we fixed a bug, if we did not have the test suite to back this up.

### When to run tests?
Unit tests should run fast and run on every code change.
Visual and end 2 end tests should at least be run before creating a Pull Request to the main development branch.

Also end 2 end tests should run against a test environment against Browserstack in Teamcity, VSTS or similar.