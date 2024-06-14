## --Install npx create-react-app .
## --Deploy to github remote repository 
        1. git remote add origin https://github.com/ManuelFrancisco42/mfrancisco.git
        2. git branch -M main
        3. git push -u origin main

## --Deploy a React app to GitHub Pages, follow these steps:  
         1. Install:    npm install gh-pages --save-dev
         2. Configure:  "package.json"
             a. Add the homepage field to package.json:
                "homepage": "https://your-username.github.io/your-repo-name"
             b. add:          
                 "predeploy": "npm run build",
                 "deploy": "gh-pages -d build",   
          3.  Commit your changes:  
                 git add .
                 git commit -m "Initial commit"
                 git push origin main
    