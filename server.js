const https = require('https');

function makeHttpsRequest(url, method, data) {
    return new Promise((resolve, reject) => {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const req = https.request(url, options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                resolve(responseData);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

const url = 'https://api.incompetent.dev/v1/fivem/resources/ping?resource=snotify';

makeHttpsRequest(url, 'GET')
    .then(async response => {
        const jsonResponse = JSON.parse(response);

        const date = new Date(jsonResponse.commit.date);

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        const lines = [
            "\x1b[32m _            \x1b[0m",
            "\x1b[32m(_)_ __   ___ \x1b[0m",
            "\x1b[32m| | '_ \\ / __|\x1b[0m",
            "\x1b[32m| | | | | (__ \x1b[0m",
            "\x1b[32m|_|_| |_|\\___|\x1b[0m",
            "               "
        ];
        
        function logLines(lines) {
            lines.forEach(line => console.log(line));

            console.log("\x1b[32m", '✔', "\x1b[0m", `Delivered usage ping`);
            console.log("\x1b[36m", '🛈', "\x1b[0m", `Last updated ${formattedDate}`);
            console.log("\x1b[33m", '⧉', "\x1b[0m", `${jsonResponse.url}`);
        
            if (jsonResponse.logMessage) {
                console.log("\x1b[35m", '✉', "\x1b[0m", `"${jsonResponse.logMessage}"`);
            }
        }
        
        logLines(lines);
        
    })
    .catch(error => {
        console.error('Error:', error);
    });

