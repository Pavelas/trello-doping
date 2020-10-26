# Trello Doping

Trello doping allows us to extract and update original Trello electron app. Basically you can just fork this repository and add your own changes.

At the moment, I just append a few lines of CSS in order to turn off the *"Recently Viewed"* boards portion of the Boards screen.

## Requirements

* npm
* npx
* asar

## Installation

Trello doping works by extracing and updating the source code of the original Trello electron app.

Install **npx** and **asar** globally
```
npm install npx asar -g
```

Clone **trello-doping** and run the script
```
git clone git@github.com:Pavelas/trello-doping.git
cd trello-doping
```

Run the script with specified Trello directory
```
sudo node dope.js /Applications/Trello.app/Contents/Resources
```

- You must use **sudo** because Trello.app is write-protected.
- You must specify **Trello directory** where app.asar file is located.

For macOS users: `/Applications/Trello.app/Contents/Resources`
