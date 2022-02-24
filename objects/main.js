//create objects
//literal notation

let user = {
    name: 'crystal',
    age: 30,
    email: 'email@g.com',
    blogs: [
        {
            title: 'Russian Ukrain',
            content: 'Why Russia invaded Ukrain',
            likes: 30  },
        {
            title: 'Economy',
            content: 'How the Europes economy will be affected',
            likes: 25
        }
        ],
    login: function () {
        console.log("User logged in")
    },
    logBlogs: function () {
        this.blogs.forEach((item) => {
            console.log(item.title, item.likes)

        })
    }
}

// console.log(user.blog)
// accessing properties you can use the . or []
// user['email'] = "new email"
// user.age = 35;
// console.log(user['email'])
// user.login()
user.logBlogs()
