# The old rover 🚀🚙

🚧 Work in progress

## To beagle and beyond!

## Setup
To run please ensure you have git and npm installed, clone the repo `git clone https://github.com/lanoid/red-mars.git` and  use `npm i` then `npm run testOnce` - this code will not get an interface…

## Decisions
- Provide a class that can interpret and execute every command.
- Use test runner to provide ordered input,
- Test methods that have less ambiguous side effects directly.


## Hardest Problem
- Naming my methods.
- Forgetting to reset the rover for 30 minutes, this broke the third command 🤪.

## The future
- Provide an interface, perhaps a grid highlighting the position of the rover.
- It’s hard to say whether an interface would be necessary, this application appears to be intended to remotely operate the rover - feedback from the rover (on mars) is likely to be highly asynchronous.
- One interface could allow a path to be selected for a given rover, then display the location of the rover as and when the rover moves to your desired location, this could be achieved by the rover sending it’s current reference after completing a movement.
- Parse the instructions as originally given - with a managing function.
- Get the X & Y axis right the first time (I have had to constantly 👉 for Left and Right).