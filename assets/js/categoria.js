document.addEventListener('DOMContentLoaded', function() {
    let params = coDesExtract()
    let value = params['key']
    console.log(value)
    let value2 = document.querySelector('.link')
    console.log(value2)
    value2.href = 'projetos.html?pi=' + value + '&key={{@key}}'
    
    let db = coDesConnect('http://codes2.firebaseio.com/')

    db.download('/', function(data) {
        context = data
        console.log(context)
        coDesReplace('.menu-list', context)
        context = data['portfolio'][value]
        coDesReplace('.cat-content', context)
        coDesReplace('title', context)
        coDesReplace('.title', context)
    })
})