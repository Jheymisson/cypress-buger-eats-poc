# Template Functional Web Test Automation #

New self-accreditation functional test automation

### Settings ###

* Clone this project
* Install all dependencies using: **yarn install**

### Running Project ###

* Run all tests in the Chrome browser engine: **yarn cy:run**
* Run in headless mode: **yarn cy:run:headless**
* Run using Cypress Studio: **yarn cy:open**
* Run the tests tagged with @main_flow: **yarn cy:run:main**
* Run the tests tagged with @alternative_flow: **yarn cy:run:alternative**
* Run the tests tagged with @exception_flow: **yarn cy:run:exception**
* Run all test in the Firefox browser engine: **yarn cy:run:firefox**
* Run all test and create/send the report to online storage: **yarn cy:run:record**
* Prepare the Husky tools enabling _git hooks_: **yarn husky:prepare**
* Execute the static analysis using Lint tools: **yarn lint**
* Execute the code formatting using Prettier: **yarn pretty**

Include **--env ENV=\<environment\>** to execute for specific environment. \<environment\> options:
* stage

If necessary run _cypress_ with different Tag combination, use:

```
# Run only exception_flow scenarios
cypress run --browser chrome --config video=false --env "TAGS=not @ignore and @exception_flow"

# Run only alternative_flow scenarios
cypress run --browser chrome --config video=false --env "TAGS=not @ignore and @alternative_flow"
```

### Running project scenarios in parallel ###
To setting the number of execution thread, just update the parameter **-t 4** in the script...
```
"cy:parallel:chrome": "yarn solidarity && rm -fR cucumber-report/*.json && cypress-parallel -s cy:run:chrome -t 4 -m false -d 'cypress/e2e/features' && yarn report:html"
```

Then execute:
```
yarn cy:parallel:chrome
```

### Report Cucumber ###

* After execute the project the report is genereted in folder **cucumber-report** 

* To generate HTML report manually after the end of test automation execution: **yarn report:html** 

### Project Structure ###

* 1º **e2e** => Centralize the features described in Gherkin and if necessary, the fixtures created;
* 2º **support** => Centralizes all implementations made in JS such as Steps, PageObjects and mapping of screen elements
  - **elements** => Folder with the classes with the mapping definition of the screen elements
  - **pageobjects** => Folder with the classes that implements PageObject pattern and the actions executed for each page
  - **step_definitions** => Folder with the functions used to execute expression created to describe actions in the **.feature** file
* 3º **screenshots** => Folder used to store the collected screenshots
* 4º **plugins** => Folder used to store the settings of external plugins used
* 5º **config** => Folder used to store the config files for different profiles
* 6º **repository** => Folder with the classes used to access MongoDB database
* 7º **tasks** => Folder with the classes used to define the tasks to be processed by Cypress
* 8º **videos** => Folder used to store the videos created by Cypress
* 9º **videos** => Folder used to store the files downloaded during the test scenarios execution