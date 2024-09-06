document.addEventListener("DOMContentLoaded", () => {
  const userinfo = document.getElementById("user-info");
  const loading = document.getElementById("loading");
  const errorDiv = document.getElementById("error"); 

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Invalid API call");
      const data = await response.json();
      return data[0]; 
    } catch (error) {
      throw error;
    }
  };

  const displayeduserdata = (user) => {
    userinfo.innerHTML = `
        <p>${user.title}</p>
        <p>${user.body}</p>
        `;
  };

  const fetchedData = async () => {
    try {
      const user = await fetchUserData();
      displayeduserdata(user);
      loading.classList.add("hidden");
    } catch (error) {
      console.log(error);
      errorDiv.classList.remove("hidden"); 
      loading.classList.add("hidden");
    }
  };

  fetchedData();
});
