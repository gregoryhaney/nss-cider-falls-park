/*
    This module contains all of the data, or state, for the
    application. It exports functions that allow other
    modules to get copies of the state.
*/

const database = {

attractions = [
    { id: 1, name: 'The Lodge', restrictions: false, extraFeature: true, activityId: []},
    { id: 2, name: 'Lost Wolf Hiking Trail', restrictions: false, extraFeature: false, activityId: []},
    { id: 3, name: 'Chamfort River', restrictions: false, extraFeature: false, activityId: []},
    { id: 4, name: 'Ganger River Nature Preserve', restrictions: true, extraFeature: false, activityId: []},
    { id: 5, name: 'Campgrounds', restrictions: false, extraFeature: true, activityId: []},
    { id: 6, name: 'Pine Bluffs Trail', restrictions: false, extraFeature: false, activityId: []}
],

currentGuests = [
    { id: 1, name: 'Bob and Mary Ann Roberson', email: 'bma@aol.com', phone: 9313773788},
    { id: 2, name: 'Sheldon L. Cooper', email: 'iamtheone@slc.com', phone: 2024599999},
    { id: 3, name: 'Leo and Penny Hoffsteader', email: 'shefinallysaidyes@caltech.edu', phone: 2023390898},
    { id: 4, name: 'Howard and Bernie Wollowitz', email: 'flymetothemoon@protonmail.com', phone: 2021900568},
    { id: 5, name: 'The Scientist, formerly known as Raj', email: 'me@thescientist.net', phone: 2025369921},
    { id: 6, name: 'John, Sue, and Little Billy Jones', email: 'try.to.keep.up.with.us@jonesfamily.co', phone: 4783897472},
    { id: 7, name: 'Adam West', email: 'i.am.batman@superheroes.net', phone: 2125551999},
    { id: 8, name: 'Bruce Banner', email: 'donotmakemeangry@superheroes.net', phone: 6152245582},
    { id: 9, name: 'Tony Stark', email: 'smalldude@starkenterprises.com', phone: 3052295401},
    { id: 10, name: 'Wade Wilson', email: 'bigred@xmen.com', phone: 2073369504},
    { id: 11, name: 'Peter and Lois Griffin', email: 'welovequagmire@spoonerstreet.net', phone: 2053325993},
    { id: 12, name: 'Peter Parker', email: 'iloveflies@superheroes.com', phone: 4094435582}
],

activities = [
    { id: 1, name: 'Hiking'},
    { id: 2, name: 'Rock Climbing'},
    { id: 3, name: 'Rafting'},
    { id: 4, name: 'Canoeing'},
    { id: 5, name: 'Picnicking'},
    { id: 6, name: 'Fishing'},
    { id: 7, name: 'Information'},
    { id: 8, name: 'Lodging'},
    { id: 9, name: 'Parking'},
    { id: 10, name: 'Zip Lines'}
],
 
additionalFeatures = [
    { id: 1, name: 'Child Play Areas'},
    { id: 2, name: 'Park Office'},
    { id: 3, name: 'Hotel'},
    { id: 4, name: 'Restaurant'}
],

areas = [
    { id: 1, name: 'Northwest Section', geo: 'NW'},
    { id: 2, name: 'Northern Section', geo: 'N'},
    { id: 3, name: 'Northeast Section', geo: 'NE'},
    { id: 4, name: 'Southwest Section', geo: 'SW'},
    { id: 5, name: 'Southern Section', geo: 'S'},
    { id: 6, name: 'Southeast Section', geo: 'SE'}
]
}




// fn to make a copy of 'attractions'
// it has properties of: id, name, restrictions, extraFeature, 
// and the array activityId
// the array activityId holds the activities.id of each activity
// available in the attraction
export const getAttractions = () => {
    return database.attractions.map(attraction => ({...attraction}))
}


// fn to make a copy of 'currentGuests'
// it has properties of: id, name, email, phone
export const getGuests = () => {
    return database.currentGuest.map(guest => ({...guest}))
}

// fn to make a copy of 'activities'
// it has properties of: id, name
export const getActivities = () => {
    return database.activities.map(activity => ({...activity}))
}

// fn to make a copy of 'areas'
// it has properties of: id, name, geo
export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

// fn to make a copy of 'additionalFeatures'
// it has properties of: id, name
export const getAdditionalFeatures = () => {
    return database.additionalFeatures.map(additionalFeature => ({...additionalFeature}))
}