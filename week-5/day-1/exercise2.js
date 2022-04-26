// @ts-check
// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works
function hello_world(lang) {
  if (lang === "en") {
    console.log("Hello World");
  } else if (lang === "es") {
    console.log("Holla Mundo");
  } else if (lang === "de") {
    console.log("Hallo Welt");
  }
}
hello_world("es");
