
import {test} from "@playwright/test"

test.beforeAll(async()=>{
console.log("Before All---Conect to DB");

})

test.beforeEach(async()=>{
console.log("Before Each----login to app");

})

test.afterAll(async()=>{
console.log("After All---disconnect to DB");

})

test.afterEach(async()=>{
console.log("After each----logout from app");

})


test("test title",()=>{
    console.log("Title of application");
    
})

test("search tproduct",()=>{
    console.log("search product");
    
})

test("cart test",()=>{
    console.log("product added to cart");
    
})

