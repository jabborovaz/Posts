export const getPostsApi = async () => {
    return  await fetch(process.env.REACT_APP_API_URL + "/post")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error; 
      });
  };