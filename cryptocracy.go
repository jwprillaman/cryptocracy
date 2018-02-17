package main

import (
	//"io"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static/html")))
	http.Handle("/js", http.FileServer(http.Dir("./static/js")))
	http.ListenAndServe(":8080", nil)
}
