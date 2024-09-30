export async function getIndustries(){
    let data = []
      const axios = (await import("axios")).default;
      await axios.get('http://localhost:8000/api/v1/industries', {
        headers: {
          'Cache-Control': 'max-age=3600', // Cache for 1 hour
        },
      })
      .then(res => {
        console.log("res", res)
        data = res.data;
      })
      .catch((error) => {
        console.log(error)
        data=[]
      })
    return data;
  }