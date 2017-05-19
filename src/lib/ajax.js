export function getData(data, url) {
     axios({
        method: 'get',
        url: url,
    }).then(function(data) {
        console.log(data);
    })
 }