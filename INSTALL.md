
# Check if you have Node 5
node -v

# if version is not 5 install correct version using Homebrew:
brew remove node --force
brew tap homebrew/versions
brew install homebrew/versions/node5

# Run in root of project
npm install

# Start serving
npm start

...browse to http://localhost:3000/
