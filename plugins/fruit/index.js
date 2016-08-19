var host = window.location.host,
    file = {
    "www.cbc.ca": "cbc.json",
    "www.bbc.com": "bbc.json",
    "www.theguardian.com": "guardian.json",
    "www.nytimes.com": "nytimes.json",
    "www.theatlantic.com": "atlantic.json",
    "www.npr.org": "npr.json",
    "www.slate.com": "slate.json"
},
fruit = ["watermelon",'banana',"pineapple","strawberries", 'kiwi', 'apples'];
if(host==="www.npr.org") { //since NPR renders new pages using AJAX and skips reloading the page.
    $('a').click(function(){
        window.location.reload();
    });
}
$.getJSON(chrome.extension.getURL('/elements/'+file[host]), function(s) {
    $(s.elements.join()).each(function(){
        var ref = $(this);
        if(isTrumpHere(ref.text())) {
            ref.html("<img style='width: 100%; height:100%;' src='"+chrome.extension.getURL('/img/'+fruit[Math.floor(Math.random()*fruit.length)]+'.jpg')+"'/>");
        }
    });
});
isTrumpHere = function(t) {
    return /\w*(Trump)\w*/.test(t);
};