function initialize(jsURL, integrity = "", crossO = "") {
  var jsTag = document.createElement("script");
  jsTag.async = false;
  jsTag.defer = false;
  jsTag.src = jsURL;
  if (integrity != "") {
    jsTag.integrity = integrity;
  }
  if (crossO != "") {
    jsTag.crossOrigin = crossO;
  }
  document.getElementsByTagName("body")[0].append(jsTag);
}
initialize("https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js");
initialize(
  "https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"
);
initialize(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
  "sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe",
  "anonymous"
);
initialize("scripts/placeholders.js");
initialize("scripts/navigation.js");
initialize("scripts/history.js");
initialize("scripts/topButton.js")
