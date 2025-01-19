

// This class creates a wrestler, only requires a name.
class Wrestler {
    constructor(name){
        this.name = name;
    }
}

//Creates a show the Wrestlers can join, Wrestlers added via an array.
class Show {
    constructor(name){
        this.name = name;
        this.roster = [];
    }

    // adds a Wrestler to the roster array of the selected show.
    addSuperstar(wrestler){
        if (wrestler instanceof Wrestler){
            this.roster.push(wrestler);
        } else {
            throw new Error(`You can only add an instance of Wrestler, Argument is not a wrestler: ${wrestler}`);
        }
    }
}

// This does all the Menu stuff! (detailed below)
class Menu {
    // creates a blank array to store Show names, sets selectedShow to null to keep things tidy
    constructor(){
        this.shows = [];
        this.selectedShow = null;
    }

    // Starts the menu up, displays the main options
    start(){
        let selection = this.showMainMenuOptions;
        while (selection != 0){
            switch (selection){
                case '1':
                    this.createShow();
                    break;
                case '2':
                    this.viewShow();
                    break;
                case '3':
                    this.deleteShow();
                    break;
                case '4':
                    this.displayShows();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert `See you later!`;
    }

    // all the menu options in one spot
    showMainMenuOptions() {
        return prompt(`
            1) Create New Show
            2) View Show
            3) Delete Show
            4) Display All Shows
            0) Exit
        `);
    }

    viewShowMenuOptions(teamInfo) {
        return prompt(`
            1) Add Wrestler
            2) Remove Wrestler
            0) Back
            -------------
            ${teamInfo}
            `);
    }
    
    // Method used to display all shows that have been created.
    displayShows() {
        let showString = '';
        for (let i = 0; i < this.shows.length; i++) {
            showString += i + ') ' + this.shows[i].name + '\n';
        }
        alert(showString);
    }

    // Creates a new show with input for a name.
    createShow() {
        let name = prompt('Enter name for the new show:')
        this.shows.push(new Show(name));
    }

    // Views the contents of a particular show, based on the index value put in
    viewShow() {
        let index = prompt('Which show would you like to view?')
        // don't forget to validate user input oh yeah
        if (index > -1 && index < this.shows.length) {
            this.selectedShow = this.shows[index];
            let description = 'Show Name: ' + this.selectedShow.name + '\n';

            for (let i = 0; i < this.selectedShow.roster.length; i++){
                description += i + ') ' + this.selectedShow.roster[i].name + '\n';
            }

            let selection = this.viewShowMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addWrestler();
                    break;
                case '2':
                    this.removeWrestler();
            }
        }
    }   

    // Deletes show, based on index value put in
    deleteShow() {
        let index = prompt(`Which show would you like to delete?
        DISCLAIMER: DELETING A SHOW DELETES ITS ROSTER AS WELL.`);
        if (index > -1 && index < this.shows.length){
            this.shows.splice(index, 1);
        }
    }

    // Adds a wrestler to the selected show!
    addWrestler() {
        let name = prompt('Enter name for Wrestler:');
        this.selectedShow.roster.push(new Wrestler(name));
    }

    // Removes a wrestler from the selected show, based on index value put in
    removeWrestler() {
        let index = prompt('Enter index of wrestler you would like to remove:');
        if (index > -1 && index < this.selectedShow.roster.length){
            this.selectedShow.roster.splice(index, 1);
        }
    }
}

// creates and calls the new menu, starts everything up :]
let menu = new Menu;
menu.start();