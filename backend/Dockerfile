# Use the official Node.js image as the base image
FROM node:20-alpine

# Install build dependencies
RUN apk add --no-cache --virtual .gyp \
    python3 \
    make \
    g++

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Clean up build dependencies
RUN apk del .gyp

# Expose the port your application will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
