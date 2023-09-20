// const projectA = [
//     {
//         id:1,
//         pId:1,
//         sId:1,
//         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo, maiores ipsum explicabo voluptatibus eos nisi quod harum incidunt? Porro expedita iusto asperiores voluptatem, sit mollitia doloremque beatae, eligendi accusamus eum nisi esse! Magni, aliquid. Fugiat inventore mollitia harum quasi. Maiores omnis iste porro quod molestias eos assumenda corrupti excepturi alias rem, asperiores consequatur hic quo totam laboriosam ducimus iure. Sequi natus perspiciatis unde quae recusandae laboriosam ad distinctio magnam, ipsa porro ab pariatur at quibusdam odit corporis facilis.",
//         projectname:'Proccess Forensic1'
//     },
//     {
//         id:2,
//         pId:1,
//         sId:2,
//         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo, maiores ipsum explicabo voluptatibus eos nisi quod harum incidunt? Porro expedita iusto asperiores voluptatem, sit mollitia doloremque beatae, eligendi accusamus eum nisi esse! Magni, aliquid. Fugiat inventore mollitia harum quasi. Maiores omnis iste porro quod molestias eos assumenda corrupti excepturi alias rem, asperiores consequatur hic quo totam laboriosam ducimus iure. Sequi natus perspiciatis unde quae recusandae laboriosam ad distinctio magnam, ipsa porro ab pariatur at quibusdam odit corporis facilis.",
//         projectname:'Memory Forensic1'
//     },
//     {
//         id:3,
//         pId:2,
//         sId:3,
//         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo, maiores ipsum explicabo voluptatibus eos nisi quod harum incidunt? Porro expedita iusto asperiores voluptatem, sit mollitia doloremque beatae, eligendi accusamus eum nisi esse! Magni, aliquid. Fugiat inventore mollitia harum quasi. Maiores omnis iste porro quod molestias eos assumenda corrupti excepturi alias rem, asperiores consequatur hic quo totam laboriosam ducimus iure. Sequi natus perspiciatis unde quae recusandae laboriosam ad distinctio magnam, ipsa porro ab pariatur at quibusdam odit corporis facilis.",
//         projectname:'Statistics1'
//     },
//     {
//         id:4,
//         pId:3,
//         sId:4,
//         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo, maiores ipsum explicabo voluptatibus eos nisi quod harum incidunt? Porro expedita iusto asperiores voluptatem, sit mollitia doloremque beatae, eligendi accusamus eum nisi esse! Magni, aliquid. Fugiat inventore mollitia harum quasi. Maiores omnis iste porro quod molestias eos assumenda corrupti excepturi alias rem, asperiores consequatur hic quo totam laboriosam ducimus iure. Sequi natus perspiciatis unde quae recusandae laboriosam ad distinctio magnam, ipsa porro ab pariatur at quibusdam odit corporis facilis.",
//         projectname:'Mathematics1'
//     },
//     {
//         id:5,
//         pId:3,
//         sId:1,
//         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo, maiores ipsum explicabo voluptatibus eos nisi quod harum incidunt? Porro expedita iusto asperiores voluptatem, sit mollitia doloremque beatae, eligendi accusamus eum nisi esse! Magni, aliquid. Fugiat inventore mollitia harum quasi. Maiores omnis iste porro quod molestias eos assumenda corrupti excepturi alias rem, asperiores consequatur hic quo totam laboriosam ducimus iure. Sequi natus perspiciatis unde quae recusandae laboriosam ad distinctio magnam, ipsa porro ab pariatur at quibusdam odit corporis facilis.",
//         projectname:'DLD1'
//     },
// ]

// export default projectA;

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
export default projects.data;
