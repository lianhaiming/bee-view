export function getData(data, url) {
    axios({
        method: 'get',
        url: url,
        data: data,
        headers: {
            'X-LC-Id': '7cJ55lgvs2dtGXVFNer8FBC7-gzGzoHsz',
            'X-LC-Key': 'iuSaVf4EWIfibgzxt2iG45QL',
        }
    }).then(function(data) {
        console.log(data);
    })
 }