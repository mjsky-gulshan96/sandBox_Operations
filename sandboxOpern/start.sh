CLIENT_ID=ce6c74b2-9062-4243-9dac-c6a6c0e1d3b1
CLIENT_SECRET=GdwxuTfTM9@utT
SANDBOX_ID=578e2f43-6948-4b4d-a9e2-c7983dda6e38

# auth login
./sfcc-ci/cli.js client:auth $CLIENT_ID $CLIENT_SECRET

# start sandbox
./sfcc-ci/cli.js sandbox:start --sandbox $SANDBOX_ID

#auth logout
./sfcc-ci/cli.js auth:logout