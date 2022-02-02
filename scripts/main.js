import { currentParkGuests } from "./guests.js"
import { yyy } from "./ccc.js"
import { zzz } from "./ddd.js"
import { aaa } from "./ssss.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h3>Current Park Guests</h3>
<article class="main_guests_tile">
    <section class="main_guests_tile">
        ${currentParkGuests()}
    </section>

    <section class="detail--column list details__cities">
        <h2>Park Attractions</h2>
        ${attractions()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
