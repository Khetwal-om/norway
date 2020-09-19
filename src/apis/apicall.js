import axios from 'axios'
export default axios.create({

    baseURL: "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/",
}) 











//baseURL:'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e7996446a2ac4fac89a2d10c0d6f659a'
// baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e7996446a2ac4fac89a2d10c0d6f659a'

// import axios from 'axios'

// const instance=axios.create({
//     baseURL: "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3",
// })

// export default instance