
# Check if you have Node 5
node -v

# If version is not 5 install correct version using Homebrew:
brew remove node --force
brew tap homebrew/versions
brew install homebrew/versions/node5

# CD in to root of project then install
npm install

# Start serving
npm start

...browse to http://localhost:3000/
