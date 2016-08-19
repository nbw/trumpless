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
characters = ["jean-luc-1","jean-luc-2","data","riker","spock", "ds9ship", "ds9captain","enterprise","sulu","tuvok"];
if(host==="www.npr.org") { //since NPR renders new pages using AJAX and skips reloading the page.
    $('a').click(function(){
        window.location.reload();
    });
}
$.getJSON(chrome.extension.getURL('/elements/'+file[host]), function(s) {
    $(s.elements.join()).each(function(){
        var ref = $(this);
        if(isTrumpHere(ref.text())) {
            ref.html("<img style='width: 100%; height:100%;' src='"+chrome.extension.getURL('/img/'+characters[Math.floor(Math.random()*characters.length)]+'.jpg')+"'/>");
        }
    });
});
isTrumpHere = function(t) {
    return /\w*(Trump)\w*/.test(t);
};