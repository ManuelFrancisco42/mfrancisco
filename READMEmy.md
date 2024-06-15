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
              a. git add .
              b.  git commit -m "Initial commit"
              c.  git push origin main
          4. Deploy to GitHub Pages:
                 a. npm run deploy

## --Step 5: Configure GitHub Repository
             a. Go to your repository on GitHub.
             b.  Navigate to the "Settings" tab.
             c.  Scroll down to the "GitHub Pages" section.
             d.  Under "Source," select gh-pages branch.
## --To commit changes to your GitHub repository and deploy them to GitHub Pages, follow these steps:
             a. git add .
             b. git commit -m "Your commit message"
             c. git push origin main
             d. npm run deploy
