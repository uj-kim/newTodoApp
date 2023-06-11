<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=a39bd2&height=300&section=header&text=⭐Todo%20Start%20Page⭐&fontSize=55&fontColor=fffacd&desc=This%20is%20for%20Chrome%20start%20page&descSize=15" />
</div>
<!-- index -->

<!-- 웹 서비스 소개  -->
<h2>About the Project</h2>
<br /><br />
<div align="center">
<img src="https://github.com/uj-kim/newTodoApp/assets/67899735/81a137c4-343e-4046-b2c9-0dd7526b6d3b" height="500" />
<br />
<br />
<br />
</div>
<!-- This project is designed to serve as a Chrome start page, built using React, fullcalendar, and my own to-do app.  -->
As someone who primarily works online, I wanted a convenient way to effortlessly keep track of my daily tasks and deadlines while browsing the internet. 
<br /><br />
It offers the following features:
<br /><br />
<ul>
<li> Task management with calendar </li>
<li> Shortcuts(maximum 5)</li>
<li> Real-time weather & Air quality updates</li>
<li> Memo functionality for jotting down personal notes and reminders</li>
</ul>
<br />
Stay organized, save time, and stay informed throughout your day, all from the convenience of your start page.
<br /><br />
<h3>Built with</h3>
<div>
<a href="https://reactjs.org">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
</a>
<a href="https://fullcalendar.io/">
  <img src="https://img.shields.io/badge/FullCalendar-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
</a>
<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=339933" />
</a>
<a href="https://www.mysql.com/">
  <img src="https://img.shields.io/badge/mysql-20232A?style=for-the-badge&logo=mysql&logoColor=4479A1" />
</a>
<a href="https://openweathermap.org/api">
  <img src="https://img.shields.io/badge/openweathermapapi-20232A?style=for-the-badge" />
</a>
</div>
<br /><br />

<!-- 설치 방법 -->
<h2>Getting Started</h2>
<br />
<h3>Client Installation</h3>
<ol>
  <li> Install NPM packages
    <pre><code> npm i </code></pre>
  </li>
  <li> Update OpenWeatherMap API Location in <code>Weather.jsx</code>
    <ul>
      <li> Get your own API key. </li>
      <li> You may need geocode of your location. 👉 "https://openweathermap.org/api/geocoding-api" </li>
    </ul>
  </li>
 </ol>
 <br />
 <h3>Server Installation</h3>
  <ol>
    <li> Install NPM packages
        <pre><code> npm i </code></pre>
    </li>
    <li> Install MySQL on your localmachine. 👉 "https://www.mysql.com/" </li><br />
    <li> Once MySQL is installed, start the MySQL server. </li><br />
    <li> Create a new database for the project. The SQL statements for table creation are provided in the <code>todo.sql</code> file. </li><br />
    <li> Configuration (This project requires a configuration file in order to function properly.)
      <ul>
        <li>In the root directory of the project, create a file named <code>config.json</code>. </li>
        <li> Open the <code>config.json</code> and enter the required configuration settings. </li>
        <li> Save the <code>config.json</code> file.</li>
      </ul>
    </li>
   </ol>
  <br />
  <h3> How To Run </h3>
  <ol>
  <li> <b>Client</b>
       <ul>
         <li> In the 'client' directory, run the following command : 
           <pre><code> npm start </code></pre>
         </li>
         <li> You can also reate a production build of the client, run the following command:
           <ol>
             <li><pre><code> npm run build </code></pre></li>
             <li><pre><code> serve -s build </code></pre</li>
           </ol>
          </li>
         </ul>
   </li>
   <li> <b>Server</b>
         <ul>
           <li> In the 'server' directory, run the following command :
             <pre><code> node app.js </pre></code>
           </li>
         </ul>
       </li>
  <li><b> To ensure continuous usage of this program, both the client and server need to be running in the background <br />
         (additional steps are required).
  </b></li><br />
  <li> <b>Setting as a Chrome Start Page </b>
         <ul>
           <li> Open Chrome and go to Settings > "On Startup" section > "Open a specific page or set of pages"</li>
           <li> Click on "Add a new page" and enter the URL where the project is running.<br />
             For example, <a>"http://localhost:3000" </a>
          </ul>
  </li>
  </ol>
  <br />
<!--  Contact  -->
<h2>Contact</h2>
<img src="https://github.com/uj-kim/newTodoApp/assets/67899735/40c95479-1202-4bc1-a241-e42de46b2655" width="200" height="200"/>
<div>
<a href="https://github.com/uj-kim">
  <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white" />
</a>
<a>
  <img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white" />
</a>
<a href="https://www.notion.so/uorez/33acf2e45174409abf9e4915c88452df?pvs=4">
  <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white" />
</a>
</div>

 
