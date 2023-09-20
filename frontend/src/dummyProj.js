let projects = null;

const obj = {
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA4N2ZkYjNiYWU4NThhNDViMzgxNzAiLCJpYXQiOjE2OTUxOTA1NzQsImV4cCI6MTY5NTI3Njk3NH0.RL5se4FyMlqsB4xf80hl9g0Qt7da_ej1piSNimMddaU",
  },
};

const fetchData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3400/dashboard", {
      method: "GET",
      headers: obj.headers,
    });

    if (res.ok) {
      projects = await res.json();
      return projects;
    } else {
      console.log("Error:", res.statusText);
      projects = null;
      return projects;
    }
  } catch (err) {
    console.error(err);
    projects = null;
    return projects;
  }
};

projects = await fetchData();
console.log(projects.data);
export default projects.data;
