import { getActivities } from "./database.js"
const activities = getActivities()


// create and export a fn that will 
// iterate through each activity

export const activitiesListing = () => {
    const activityReturn
    for (activity of activities) {
        

    }
    return activityReturn
}




/*
Algorithmic Thinking Reminder
This project is more complex than either DeShawn's Dog Walking 
    or Brewed Awakenings, and you are not provided with any 
    initial, boilerplate code.

It is crucial, therefore, that you work on 
    designing the algorithm before you write any code.

What are the main resources (i.e. tables)? 
    TABLES: activities, attractions, currentGuests, areas, additionalFeatures
    js MODULES: database, activities, attractions, main, guests 
    style MODULES: main.css, detail.css
    html MODULE: index.html
    Design your ERD first.


What are the properties of each resource?
    activities.id
    activities.name

    attractions.id
    attractions.name
    attractions.restrictions
    attractions.activityId

    currentGuests.id
    currentGuests.name
    currentGuests.email
    currentGuests.phone

    areas.id
    areas.name
    areas.geo

    additionalFeatures.id
    additionalFeatures.name

What is the relationship between the resources? 
If it's many-to-many, what additional data 
    must you design in your ERD?
    Which modules should you create?
        js MODULES: database, activities, attractions, main, guests 
        style MODULES: main.css, detail.css
        html MODULE: index.html


What is the responsibility of each module?
        DATABASE: will hold all table data and provide
        export copies of each table's data
        ACTIVITIES:
        ATTRACTIONS: 
        MAIN: will provide the HTML to fill index.html
        GUESTS: will iterate through the database of
        current guests for display on index.html
    

What functions should be in which modules?
        DATABASE: one fn for each table to export a
        copy of each table's data for use in other modules

        ACTIVITIES: 

        ATTRACTIONS: 
            1.  Iterate through each attraction.
                Return a list of attractions to include their
                name and what activities are available there.
                a. check if restriction = TRUE...if so,
                add <p> message that it is a restricted area
                and only activities X, Y, and Z are permitted
                b. check if additional features = TRUE...if so,
                add <p> message that this attraction offers
                additional features of A, B, and C

        MAIN: will provide the HTML to fill index.html

        GUESTS: fn to iterate through each guest, place
        them in an <ul>, and return the HTML for use by main.js

What is the responsibility of each function?
        SEE PREVIOUS QUESTION

What should each function return?
        SEE ABOVE

What is the spcific algorithm for each function? 
    Does the function need parameters? 
        Should it return something?

Do all of this before you write a single line of code, 
    or you could end up wasting hours of time writing code 
        only to find that you need to throw it all away 
        because you didn't design the algorithm first.

*/