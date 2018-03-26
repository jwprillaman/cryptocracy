package main

import (
	"fmt"
	"net/http"
	"os"
	//"github.com/ethereum/go-ethereum"
)

func main() {

    var electionMaster string

    for i := 1; i < len(os.Args); i += 2 {
        switch os.Args[i] {
        case "-e":
                electionMaster = os.Args[i+1]
        default:
            panic("unrecognized argument")
        }
    }

    fmt.Printf("Starting server on port 8080")
    fmt.Printf("Election Master : %v\n", electionMaster)
    http.Handle("/contracts/", http.StripPrefix("/contracts/", http.FileServer(http.Dir("./truffle/build/contracts"))))
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.ListenAndServe(":8080", nil)
}
