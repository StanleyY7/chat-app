# Use a Node.js base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json 
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

EXPOSE 8080

# Set the command to start the application in development mode
CMD ["npm", "run", "dev"]
