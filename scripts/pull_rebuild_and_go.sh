#!/bin/bash 
# Run the whole process of pulling the repo down, install new packages, rebuild static files, and put them in place
# The nodemon process should handle the changed node files automatically

if [ "$1" == "develop" ]; then
	BRANCH="develop"
else
	BRANCH="master"
fi

date
echo "Found rebuild file. Deleting it!"
rm /var/www/rebuild/fir-now

# Prep environment
cd ~/prod/
. ~/.githubrc

echo "Checking out branch $BRANCH!"
git checkout $BRANCH

#echo "Sleeping for 5 seconds!"
#sleep 5

echo "Fetching repo!"
git fetch

echo "Pulling repo!"
git pull

echo "Running npm install!"
npm install

echo "Running yarn build!"
yarn build

echo "Copying static files and linking to public!"
if [ -d ~/prod/dist/ ]; then
	rm -rf ~/dist/*
	cp -Ppr ~/prod/dist/* ~/dist/
	ln -s ../prod/public/ ~/dist/public
fi

echo "Restarting nodemon service!"
sudo /bin/systemctl restart fir_nodemon

echo "Done!"
date
echo ""

# EOF
