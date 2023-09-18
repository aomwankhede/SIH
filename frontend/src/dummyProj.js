let projects = null;

const obj = {
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA4MGM1MjZjZDk1NzE0ODQ0NmI5MGQiLCJpYXQiOjE2OTUwNDIzNDAsImV4cCI6MTY5NTEyODc0MH0.of-Ji0o2YKT2LT3CIruJdEXSNTtCO5gGxePs1lMBfEs",
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
