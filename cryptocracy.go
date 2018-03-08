package main

import (
	"fmt"
	"net/http"
)

func main() {
    fmt.Printf("Starting server on port 8080")
    http.Handle("/contracts/", http.StripPrefix("/contracts/", http.FileServer(http.Dir("./truffle/build/contracts"))))
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.ListenAndServe(":8080", nil)
}
