const http = require('http');

const url = 'http://blogpost.us-3.evennode.com/blog';

http.get(url, response => {
  let data = '';

  response.on('data', chunk => {
    data += chunk;
  });

  response.on('end', () => {
    console.log('Response data:', data);
  });
})
.on('error', error => {
  console.error('Error:', error);
});
