import { getAttractions, getActivities, getAdditionalFeatures  } from "./database.js"
const attractionsList = getAttractions()
const activitiesList = getActivities()
const additionalFeaturesList = getAdditionalFeatures

// create and export a fn that will produce of list
// the attractions
/*
Iterate through each attraction.
Return a list of attractions to include their
name and what activities are available there.
    a. check if restriction = TRUE...if so,
    add <p> message that it is a restricted area
    and only activities X, Y, and Z are permitted
    b. check if additional features = TRUE...if so,
    add <p> message that this attraction offers
    additional features of A, B, and C
*/

export const currentAttractions = (attractionsList, activitiesList, additionalFeaturesList) => {

    for (attraction of attractionsList) {

            // variable to hold restriction notice
        const restrictNotice = "This attraction is restricted. The ONLY activities permitted here at listed below."
        if (attraction.restrictions) {
            // display restriction notice
            restrictNotice
        }


                // variable to hold add feat notice
        const addedFeatures = "This attraction has additional features that other park attractions do not. They are listed below."
        if (attraction.additionalFeatures) {
            
                    // var to hold add feats
            let displayingFeatures = ""
            for (feature of additionalFeatures) {

                // append features avail and display
                displayingFeatures += `${feature.name}`
            }

            addedFeatures
        }

        for (activity of activitiesList) {

        }









    }
}