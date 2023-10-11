# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /client
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Start the React app
CMD ["npm", "start"]
