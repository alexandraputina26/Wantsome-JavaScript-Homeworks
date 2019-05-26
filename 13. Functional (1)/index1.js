/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
},{
    name: 'Geoff Newell',
    active: true
},{
    name: 'Peter Newnham',
    active: true
},{
    name: 'James Walker',
    active: false
}];

const newData = arr => {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      const data = arr[i];
      if (data.active === true) {
        results.push(data);
      }
    }
    return results;
  };
console.log(newData(myData))


/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
  ]

const mileDistances = distances.map(distances => distances.distance * 0.621371);
const smallDistance = mileDistances.filter(mileDistances => mileDistances < 5000)
const totalDistance = distances.reduce((accumulator, distances) => accumulator + distances.distance, 0);

console.log(mileDistances)
console.log(smallDistance)
console.log(totalDistance)


	
// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 

const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];


const idTitleArray = arr => {
  return releases.map((releases) => releases.id + ' ' + releases.title)
}
console.log(idTitleArray())


// // Returnati id-urile videourilor care au rating 5.0

const ratingArray = arr => {
  const rating1 = releases.filter(releases => releases.rating >= 5)
  return rating1.map((rating1) => rating1.id)
  }
console.log(ratingArray())


// Vreau la final sa am o lista de video ids

const movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

const newMovieLists = arr => {
  const list1 = movieLists.map((movieLists) => movieLists.videos)
  const list2 = list1[0].map((list1) => list1.id)
  const list3 = list1[1].map((list1) => list1.id)
  return finalList = list2 + ',' + list3
}
console.log(newMovieLists())