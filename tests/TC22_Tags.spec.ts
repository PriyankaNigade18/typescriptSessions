
import {test} from "@playwright/test"

test("title test @sanity",async()=>{
    console.log("title test");
    
})

test("url test @regression",async()=>{
    console.log("url test");
    
})
test("searcg test @sanity",async()=>{
    console.log("search test");
    
})

//after playwright 1.45 onwards we can add tags as Object

test('tags test',{tag:'@home'},async()=>{
console.log("home test");

})


//annotation: to add extra information anout test we can add anotation

test('test annotation',{annotation:{
type:'issue', description:'this is some bug'
}},async()=>{
console.log("test annotations");

})