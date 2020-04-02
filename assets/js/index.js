document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('http://codes2.firebaseio.com/')

    db.download('/', function(data) {
        context = data
        console.log(context)
        coDesReplace('.menu-list', context)
        coDesReplace('.index-categories', context)
    })
})