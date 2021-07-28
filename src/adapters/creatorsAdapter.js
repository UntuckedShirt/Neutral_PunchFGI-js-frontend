class CreatorsAdapter {
    constructor() {
      this.baseUrl = "http://localhost:3000/creators"
    }
  
    async getCreators() {
      const res = await fetch(this.baseUrl)
        return await res.json()
    }
  
    async createCreator(body) {
      const creatorCreateParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ body })
      }
      const res = await fetch(this.baseUrl, creatorCreateParams)
        return await res.json()
    }
  
    async deleteCreator(creatorId) {
      const creatorDeleteParams = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
      const res = await fetch(`${this.baseUrl}/${noteId}`, creatorDeleteParams)
        return await res.json()
    }
  }