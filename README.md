<h1>Marvel Characters App <span>🦸‍♂️🦸‍♀️</span></h1>
  <p>This is a full-stack application that allows users to view, create, edit, and delete Marvel characters. The app is built with:</p>
  <ul>
    <li><strong>Frontend:</strong> React <span>⚛️</span></li>
    <li><strong>Backend:</strong> Flask <span>🐍</span></li>
    <li><strong>Database:</strong> MySQL <span>🗄️</span></li>
  </ul>
  
<h2>Features <span>✨</span></h2>
  <ul>
    <li><strong>View all characters:</strong> Displays a list of all Marvel characters.</li>
    <li><strong>View character details:</strong> Click on a character to view detailed information.</li>
    <li><strong>Create character:</strong> Add a new character to the database.</li>
    <li><strong>Edit character:</strong> Edit an existing character's details.</li>
    <li><strong>Delete character:</strong> Remove a character from the database.</li>
  </ul>

  <h2>Getting Started <span>🚀</span></h2>

  <h3>Prerequisites <span>🛠️</span></h3>
  <p>Before running the app, make sure you have the following installed:</p>
  <ul>
    <li><strong>Node.js</strong> (for running the React app) <span>🌐</span></li>
    <li><strong>Python</strong> (for running the Flask backend) <span>🐍</span></li>
    <li><strong>MySQL</strong> (for the database) <span>🔑</span></li>
  </ul>

  <h3>Setting Up the Backend (Flask API) <span>🔥</span></h3>
  <ol>
    <li><strong>Navigate to the backend folder:</strong> Open a terminal and go to the folder where the backend files are located.</li>
    <li><strong>Create and activate a virtual environment:</strong>
      <pre><code>python3 -m venv venv  # Create virtual environment
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate  # On Windows</code></pre>
    </li>
    <li><strong>Install required dependencies:</strong>
      <pre><code>pip install -r requirements.txt</code></pre>
    </li>
    <li><strong>Set up MySQL:</strong> 
      <pre><code>CREATE DATABASE marvel;</code></pre>
    </li>
    <li><strong>Run the Flask server:</strong>
      <pre><code>python server.py</code></pre>
      <p>The Flask API will now be running at <strong>http://127.0.0.1:5000</strong>.</p>
    </li>
  </ol>

  <h3>Setting Up the Frontend (React App) <span>🎨</span></h3>
  <ol>
    <li><strong>Navigate to the frontend folder:</strong> Open a terminal and go to the folder where the frontend (React app) is located.</li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the React app:</strong>
      <pre><code>npm start</code></pre>
      <p>The React app will now be running at <strong>http://localhost:3000</strong>.</p>
    </li>
  </ol>

  <h2>Testing the App <span>🔍</span></h2>
  <ol>
    <li>Open your browser and go to <strong>http://localhost:3000</strong>.</li>
    <li>The app will load with a list of Marvel characters fetched from the backend.</li>
    <li>You can:
      <ul>
        <li><strong>Create</strong> a new character by clicking on the "Create Character" link.</li>
        <li><strong>Edit</strong> an existing character by clicking the "Edit" button on a character card.</li>
        <li><strong>Delete</strong> a character by clicking the "Delete" button.</li>
        <li><strong>View</strong> character details by clicking on a character’s name.</li>
      </ul>
    </li>
  </ol>

  <h2>Endpoints (Backend API) <span>🌐</span></h2>
  <p>Here are the API endpoints used by the backend:</p>
  <ul>
    <li><strong>GET /characters</strong> - Fetches all characters in the database.</li>
    <li><strong>GET /characters/:id</strong> - Fetches a specific character by ID.</li>
    <li><strong>POST /characters</strong> - Creates a new character. Example request body:
      <pre><code>{
  "name": "Spider-Man",
  "alias": "Peter Parker",
  "alignment": "hero",
  "powers": "Web-shooting, wall-crawling",
  "image_url": "https://example.com/spider-man.jpg"
}</code></pre>
    </li>
    <li><strong>PUT /characters/:id</strong> - Updates an existing character by ID.</li>
    <li><strong>DELETE /characters/:id</strong> - Deletes a character by ID.</li>
  </ul>

  <h2>Notes <span>💡</span></h2>
  <ul>
    <li>The <strong>backend</strong> uses <strong>Flask</strong> and connects to a <strong>MySQL database</strong> to store character data.</li>
    <li>The <strong>frontend</strong> is built with <strong>React</strong> and makes API calls to the backend to fetch, create, update, and delete characters.</li>
    <li><strong>CORS</strong> is enabled in the Flask backend to allow requests from the React frontend running on a different port.</li>
  </ul>

  <h2>Troubleshooting <span>⚠️</span></h2>
  <ul>
    <li><strong>Backend API not working:</strong> Ensure the Flask server is running and check for any errors in the terminal.</li>
    <li><strong>Frontend not loading:</strong> Ensure <code>npm start</code> is running without errors. Check the browser’s developer tools for any console errors or network issues.</li>
  </ul>

  
