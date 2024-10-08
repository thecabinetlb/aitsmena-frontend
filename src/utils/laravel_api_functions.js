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

// Resources APIS
export async function getBlogs(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/blog-posts', {
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
export async function getSuccessStories(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/success-stories', {
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
export async function getWhitepapers(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/whitepapers', {
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
export async function getPressReleases(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/press-releases', {
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
export async function getIndustryInsights(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/industry-insights', {
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

export async function getAllResources() {
  try {
    const allResources = await Promise.all([
      getBlogs(),
      getIndustryInsights(),
      getSuccessStories(),
      getPressReleases()
    ]);

    // Flatten the array of arrays into a single array
    const flatResources = allResources.flat();
    console.log("res", flatResources)

    // Sort resources by 'published_at' date
    return flatResources.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
}



// Careers APIS
export async function getJobs(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/jobs', {
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
export async function getInternships(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/internships', {
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
export async function getGraduateProgramJobs(){
  let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/graduate-program-jobs', {
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