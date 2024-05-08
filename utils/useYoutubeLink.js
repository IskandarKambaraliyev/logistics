export default function (url) {  
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length == 11) {
    return `https://youtube.com/embed/${match[7]}?rel=0&modestbranding=1`;
  } else {
    return "error";
  }
}