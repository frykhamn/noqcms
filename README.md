Certainly! Below is a sample README file for your project:

---

# NoQ CMS

## Setting up the Project

1. **Clone the Repository:**
   - Download the repository to your local machine.
     ```bash
     git clone https://github.com/frykhamn/noqcms
     ```

2. **API Key Configuration:**
   - Obtain the API key with Firebase configurations from a co-worker.
   - For security reasons, store the API key in a file named `.env.local` in the project folder (outside of the `src` folder).
   - Copy and paste the API key information into the `.env.local` file.

     **Example `.env.local` file:**
     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

3. **Install Dependencies:**
   - Run the following command to install project dependencies.
     ```bash
     npm install
     ```

4. **Start the Project Locally:**
   - Run the following command to start the project locally.
     ```bash
     npm run dev
     ```

## Deploying with Firebase Hosting

**Note:** Due to deployment issues, the current procedure is to build the project before deploying.

1. **Build the Project:**
   - Run the following command to build the project.
     ```bash
     npm run build
     ```

2. **Deploy with Firebase:**
   - Run the following command to deploy the project to Firebase hosting.
     ```bash
     npm run firebase-deploy
     ```

## Additional Commands

For other commands, refer to the `package.json` file and look under the `scripts` section.

---
