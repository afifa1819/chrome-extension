  const bookmarks=[
    { url: "https://www.google.com", importance:3},
    { url: "https://www.github.com", importance:2},
    { url: "https://www.youtube.com", importance:1}
  ];
 
chrome.storage.local.set({bookmarks}, function(){
console.log("Bookmarks stored.");
});

chrome.storage.local.get("bookmarks" , function(data){
  const bookmarks = data.bookmarks || [];
  console.log("Retrieved bookmarks:" , bookmarks);
});
