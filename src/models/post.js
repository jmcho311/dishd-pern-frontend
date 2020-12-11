const url = `http://localhost:4000/api/v1/post`

class PostModel {
    static all = () => {
        return fetch(`${ url }/`).then(res => res.json())
    }

    static show = (category) => {
        return fetch(`${ url }/category/${ category }`).then(res => res.json())
    }

    static showLocation = (locationName) => {
        return fetch(`${ url }/location/${ locationName }`).then(res => res.json())
    }

    static showPost = (userId) => {
        return fetch(`${ url }/${ userId }`).then(res => res.json())
    }

    static update = (postId) => {
        console.log(postId)
        let updateInfo = {
            locationName: postId.locationName,
            city: postId.city,
            state: postId.state,
            category: postId.category,
            dishName: postId.dishName,
            body: postId.body
        }
        return fetch(`${ url }/${ postId }`, {
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

    static create = (postData) => {
        return fetch(`${ url }/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        }).then(res => res.json())
    }

}

export default PostModel