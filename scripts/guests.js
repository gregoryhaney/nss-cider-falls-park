import { getGuests } from "./database.js"
const currentGuests = getGuests()

// this module will iterate through the database of
 //       "Current Park Guests" for import by main.js

export const currentParkGuests = (currentGuests) => {
    let guestsHTML = "<ul>"
                // iterate through guests and
                // add each to the guestsHTML variable
        for (const guest of currentGuests) {
            guestsHTML += `
                        <li>
                        ${guest.name}
                        </li>`
        }
    guestsHTML += "</ul>"
    return guestsHTML
}