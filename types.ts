let user = {name: "Azeez", age: 28}

console.log(user.name)

let greetings: string= "Hello World"
console.log(greetings)

let userId = 34465665;

let isLoggedin:boolean= true

function addTwo(num:number){
    return num +2
}

 function signUp(name:string, email:string, isPaid:boolean=false) {}
    
 signUp("5","6@jk.com" )

 const getHello = (s: string): string => {
    return ""
 }

 function consoleerror(errmsg: string){
    console.log(errmsg)
 }

addTwo(5)

const User = {
    name: "Azeez",
    email: "azeez@gmail.com",
    isActive: true
}

function createUser({name:string, isPaid:boolean}){}
let newUser = {name: "Azeez", isPaid: "True", email: "azeez@GiMailShirt.com"}

createUser(newUser)

function createCourse():{}{
    return {}
}

type User = {
    name: string,
    isActive: boolean
}

//Arrays
let myUser: User = {
    name: "Azeez",
    isActive: true 
}

const superHeros:User[] = []
const heroPower: number[] = []

superHeros.push({name: "", isActive: false})
heroPower.push(2)

let score: number | string = 33

score = 44
score = "53"

type Users = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

// Union Types
let hayzed: Users | Admin = {
    name: "Azeez", id: 256 
}

hayzed = {username: "Zizzle", id: 546}

function getDbId(id: number | string){
    console.log(`DB id is: ${id}`)
}

getDbId(5)
getDbId("10")

const data: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ["1","2", "3", "4", "5"]
const data3: (string | number | boolean)[] = [1,2,4,"5", "azeez"]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "middle"

// Tuples

let myUsers: [string, number, boolean] = ["1", 1, false]

type myUser = [number, string]

const newUsers: myUser = [1, "azeez"]

// Enums
const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 3,
    Fourth

}

const hcSeat = SeatChoice.AISLE

//Interface

interface user {
    readonly dbId: number,
     email: string,
     userId: number,
     googleId?: string,
     startTrail(): string,
     getCoupon(couponname:string, value:number): number

}

interface user {
    githubToken: string
}

interface admin extends user {
    role: "admin" | "ta" |"learner"
}
 
const azeez: admin = {dbId: 22, userId: 20, email: "azeez@gmail.com",startTrail: ()=>{
    return "trail started"
}, getCoupon:(name:"Azeez", off:10 )=>{
    return 10
},githubToken: "myName", role: "admin"}

export{}