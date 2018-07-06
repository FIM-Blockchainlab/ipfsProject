gnome-terminal -x sh -c "ganache-cli"
echo "wait 10s";
sleep 10;
gnome-terminal -x sh -c "cd server; cd truffle; truffle migrate --reset"
echo "wait 10s";
sleep 10;
gnome-terminal -x sh -c "cd server; node server.js"
gnome-terminal -x sh -c "cd printerManagement; ng serve --open"
