//even numbers code

let ev=[1,2,3,4,5,6,7,8,9,10]
function even(){
    for(i=0;i<=ev.length+1;i++){
        if (ev[i]%2==0){
            console.log(ev[i])
        }
    }
}
even(ev)


//Array Methods :-

//Push:-It is used to add the elements

let arr=[1,2,[1,2],3]

arr.push(4)
// arr.push("{1,2,3}",true)
arr.push("Tirumala")
console.log(arr)

//pop :-It is used to remove the last element
arr.pop()
console.log(arr)

//unshift:- it is used to add elements infront of arr.
arr.unshift(2,[6,7])
arr.unshift("Tiru","syam")
// arr.unshift({"tiru":2})
console.log(arr)

//shift :-It is used to remove the first element in arr
arr.shift()
console.log(arr)

//Length:-To know the length of array
let size=arr.length
console.log(size)

// Arr at() :- It shows index values at that position
let arr1=arr.at(2)
console.log(arr1)

//join:- It is used to join the elemnts between the elements
//flat:-It is used to display the elements in sigle array without sub array.
let ar=[2,6,3,[1,2],[3,4,5],6]
let ar_=ar.flat(2)
console.log(ar_) // gives elements in one array

let jn_=[2,4,5,6,7,9]
console.log(jn_.join("*")) // gives the elements by join * B/W them

let arr2=arr.flat(2)
console.log(arr2)
let jn=arr2.join("*")
console.log(jn)

// splice :- It is used to insert and delete an elements from array

arr.splice(0,1,"triu")
arr.splice(2,1,"syam")
arr.splice(2,0,"abhi")
console.log(arr)

// sort:- it is used to sort the elemnets in the array 

let  sr=[4,2,6,77,5,3,1]
console.log(sr.sort())  // asc order
let sr1=[1,2,22,56,34,77,897,111,6,70]
sr1.sort()  // (asc order)
sr1.reverse() //It is used reverse the elements in array-(Desc)
console.log(sr1)

// to string:- It is used to change the elements into strings 
let str=["apple","Ball","cat"]
console.log(str.toString())

// Concat:- It is used to merge to arrays 
let a1=[1,2,3,3,4]
let a2=[4,5,6]
console.log(a1.concat(a2))
let a3=["tiru",true]
let a4=["syam",false]
console.log(a3.concat(a4))

// indexof and lastIndexof :-
console.log(a1.indexOf(3))  //o/p:-2
console.log(a1.lastIndexOf(3)) //o/p:-3

// includes:- it checks the element present in arr or not 

let arr3=[1,2,3,4,5,6]
console.log(arr3.includes(4)) //o/p:-true
console.log(arr3.includes(7)) //o/p:-false

// delete:- IT is used to delete the elements in arr remains the undefined value
delete arr3[1]
console.log(arr3)

// copywithin() :- it is used to copy the element. again like a repeat,
// it replace the elements in the array an again repeat the copy elements 

let arr4=["Tiru","syam","abhi","jani","omesh","chinna","omesh"]
console.log(arr4.copyWithin(3,0)) // here 3 elem will repeat and not occupies the place 4th elem will print after contin
let arr5=["Tiru","syam","abhi","jani","omesh","chinna","jani"]
console.log(arr5.copyWithin(2,0,2))
let a5=[1,2,3,4,5,6,7,8]
console.log(a5.copyWithin(3,0,3)) // first three num will ocupies the next 3 places after 7th will continue here