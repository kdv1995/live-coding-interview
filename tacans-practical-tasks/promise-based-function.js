// Write a Promise-based function to simulate fetching data from an API and handle both success and error cases.

async function fetchData() {
  return new Promise((resolve, reject) => {
    const data = {
      name: "John Doe",
      age: 30,
      email: "",
    };

    if (data) {
      resolve(data);
    } else {
      reject("Error: Unable to fetch data");
    }
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Request completed.");
  });
