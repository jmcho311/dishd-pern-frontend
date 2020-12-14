const url = `http://localhost:4000/api/v1/post`

class PostModel {
    static all = () => {
        return fetch(`${ url }/`).then(res => res.json())
    }

    static show = (category) => {
        // console.log(category)
        return fetch(`${ url }/category/${ category }`).then(res => res.json())
    }

    static showLocation = (locationName) => {
        return fetch(`${ url }/location/${ locationName }`).then(res => res.json())
    }

    static showDish = (dishName) => {
        return fetch(`${ url }/dish/${ dishName }`).then(res => res.json())
    }

    static showPost = (userId) => {
        return fetch(`${ url }/${ userId }`).then(res => res.json())
    }

    static update = (postData) => {
        console.log(postData)
        let updateInfo = {
            dishName: postData.dishName,
            body: postData.body
        }
        return fetch(`${ url }/${ postData.postId }`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
    }

    static delete = (postId) => {
        return fetch(`${ url }/${ postId }`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    static create = (data) => {
        console.log(data)
        return fetch(`${ url }/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

}

export default PostModel