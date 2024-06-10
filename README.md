### Prerequisites
1. **Node.js and npm**: Ensure you have Node.js and npm installed. Download from [nodejs.org](https://nodejs.org/).
2. **Git**: Ensure you have Git installed. Download from [git-scm.com](https://git-scm.com/).
3. **Visual Studio Code**: Ensure you have Visual Studio Code installed. Download from [code.visualstudio.com](https://code.visualstudio.com/).

### Steps

1. **Open Visual Studio Code**:
   Open Visual Studio Code from your start menu or by searching for "Visual Studio Code" in your system's search bar.

2. **Open Terminal in Visual Studio Code**:
   - Open the integrated terminal in VS Code by pressing `Ctrl + \`` or navigating to `View` > `Terminal`.

3. **Clone the Repository**:
   In the terminal, navigate to the directory where you want to clone the repository. Use the `git clone` command followed by the repository URL.
   ```sh
   git clone https://github.com/username/repo-name.git
   ```
   Replace `https://github.com/username/repo-name.git` with the actual URL of the repository you want to clone.

4. **Open the Project in VS Code**:
   After cloning the repository, open the project directory in VS Code. You can do this by:
   - Clicking on `File` > `Open Folder...` and selecting the cloned repository folder.
   - Or, use the terminal:
     ```sh
     cd repo-name
     code .
     ```
   Replace `repo-name` with the actual name of your repository.

5. **Install Dependencies**:
   In the terminal, make sure you are in the root directory of the project where the `package.json` file is located. Then, run:
   ```sh
   npm install
   ```

6. **Run the Development Server**:
   Start the Vite development server using npm:
   ```sh
   npm run dev
   ```
   This command will start the development server and you should see output similar to this:
   ```sh
   VITE v2.x.x  ready in xx ms

   ➜  Local:   http://localhost:3000/
   ➜  Network: use `--host` to expose
   ```

7. **Open the Application in Your Browser**:
   Open your web browser and go to `http://localhost:3000/` (or the URL provided by Vite) to see your React app running.
