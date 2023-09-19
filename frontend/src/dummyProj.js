let projects = null;

const obj = {
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA4MGM1MjZjZDk1NzE0ODQ0NmI5MGQiLCJpYXQiOjE2OTUxNDY1OTYsImV4cCI6MTY5NTIzMjk5Nn0.Nfl5otcc81u5-COs8xACatQwB9v4-hLsCVrdxdhtGFI",
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
