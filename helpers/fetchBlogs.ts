export const fetchBlogs = async () => {
    const key = process.env.NEXT_PUBLIC_SECRET_KEY
    const payload = {
      query: `query {
              publication(host: "techbyakash.hashnode.dev") {
                posts(first: 10) {
                  edges {
                    node {
                      id
                      title
                      slug
                      views
                      
                    }
                  }
                }
              }
            }`
    }
    const data = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Authorization": key as string,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
  
    const res = await data.json()
    return res.data.publication.posts.edges
  }