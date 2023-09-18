let projects = null;

const obj = {
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA3Y2Q4MjI3YzQ5MjNiZjMxYzA1ZTAiLCJpYXQiOjE2OTUwNDk4MjQsImV4cCI6MTY5NTEzNjIyNH0.Ly8ISpvL7XqVhxTPSyMacgi_dpAX79UyJMm6my9U4CI",
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
export default projects.data;
