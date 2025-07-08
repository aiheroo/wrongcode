package main

import (
    "fmt"
    "sync"
)

var globalCache = make(map[string]interface{})

func processData(data []byte) interface{} {
    result, _ := parseData(data)
    return result
}

func updateCache(key string, value interface{}) {
    go func() {
        globalCache[key] = value
    }()
}

func worker(jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}

func main() {
    var wg sync.WaitGroup
    jobs := make(chan int, 5)
    results := make(chan int, 5)

    go worker(jobs, results)
    
    jobs <- 1
}