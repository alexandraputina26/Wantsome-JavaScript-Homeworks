import { myFetch } from "./module1.js"

myFetch
.then(res => {
    return res.filter(resultsFiltered => resultsFiltered.id > 5).map(results => results.name + ',' + results.address.city)
})
.then(filteredResults => {
    console.log(filteredResults)
})
