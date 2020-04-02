document.addEventListener('DOMContentLoaded', function() {
    let params = coDesExtract()
    let value = params['key']
    console.log(value)
    let value2 = params['pi']
    let db = coDesConnect('http://codes2.firebaseio.com/')

    db.download('/', function(data) {
        context = data
        console.log(context)
        // coDesReplace('.cat-content', context)
        
        coDesReplace('.menu-list', context)

        context = data['portfolio'][value2]['projetos'][value]
        coDesReplace('.title', context)
        coDesReplace('title', context)
        coDesReplace('.proj-text-block', context)
        coDesReplace('.proj-content', context)
        
    })
})