// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  try {
    const swiggyUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    const response = await axios.get(swiggyUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0', // Important for Swiggy API to work
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Something went wrong");
  }
});

app.get('/api/menu/:resId', async (req, res) => {
  const { resId } = req.params;
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${resId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      }
    });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Failed to fetch menu");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



/**
 * 
 *                      code to fetch data from swiggy and save it to backend
const fs = require('fs');
const axios = require('axios');

async function fetchSwiggyData() {
  try {
    const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    fs.writeFileSync('swiggy-data.json', JSON.stringify(response.data, null, 2));
    console.log('✅ Data saved to swiggy-data.json');
  } catch (err) {
    console.error('❌ Error fetching Swiggy data:', err.message);
  }
}

fetchSwiggyData();




Then run:
bash
Copy
Edit
node fetchAndSave.js
This will create a file called swiggy-data.json in your backend folder.

📦 2. Move swiggy-data.json to your frontend's public/ folder
This allows React (or any frontend app) to access it as a static file.

For example:

bash
Copy
Edit
/client
  ├── /public
  │    └── swiggy-data.json  ← paste it here
  └── /src
       └── App.js, etc.
💻 3. Fetch it from your frontend
Example in App.js or Body.js:
js
Copy
Edit
useEffect(() => {
  fetch('/swiggy-data.json')
    .then(res => res.json())
    .then(data => {
      console.log("🍽 Swiggy data from local JSON:", data);
      // Set state or render data here
    })
    .catch(err => console.error('Error loading JSON:', err));
}, []);
🚀 Why This Works Well
✅ No CORS issues (the file is served from the same domain as your React app)

✅ Fast loading

✅ Perfect for practice, building components, filtering data, etc.

✅ Works offline after first fetch

🧠 Optional: Refresh the JSON later
If you want new data from Swiggy, just run this again:

bash
Copy
Edit
node fetchAndSave.js
It will overwrite the old swiggy-data.json with fresh data.


 */