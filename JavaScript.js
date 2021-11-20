import React, {useState} from 'react'
import SomeComponent from './src/components'
import {getCurrentData as workingwithDates} from 'src/utils'
import * as workingWithDates from 'src/dates'
import './styles.css'
//Dymnamic import, please don't use it
const getUser = import('/users/getAllUsers')
///
//export

const SomeComponent = ()=>{}
export default SomeComponent
import SomeComponent from 'src/components/SomeComponent'

export const getCurrentDate = ()=>{}
export const getYestarday = ()=>{}

import {getCurrentDate} from 'src/utils/workWithDates'

//Iterators
function iterationsExample(array) {
    let iterationIndex = 0
    return {
        next: function () {
            return iterationIndex < array.length ?
                { value: array[iterationIndex++], done: false } :
                { done: true }
        }
    }
}

const tryOne = iterationsExample(['one','two'])
console.log(tryOne.next())
console.log(tryOne.next())
console.log(tryOne.next())

//Symbol
const symbol1 = Symbol('one')
const symbol2 = Symbol('one')
console.log(symbol1===symbol2)
console.log(Symbol().length)

let iterationObject = {
    from: 1,
    to: 5
}
iterationObject[Symbol.iterator] = function () {
    let current = this.from
    let last = this.to
    return {
        next() {
            if (current <= last) {
                return { done: false, value: current++ }
            } else {
                return {
                    done: true
                };
            }
        }
    }
}

for (let item of iterationObject) {
    console.log(item)
}

function* someFuncGEnerator() {
    let count = 0
    while (true) {
        yield count++
    }
}
const doSomeGen = someFuncGEnerator()
console.log(doSomeGen.next())
console.log(doSomeGen.next())
console.log(doSomeGen.next())
console.log(doSomeGen.next())

function* getNewGenerators(){
	yield 1
  yield 2
    yield 3
}
const doSomthing = getNewGenerators()
console.log(doSomthing.next())
console.log(doSomthing.next())
console.log(doSomthing.next())
console.log(doSomthing.next())

function* someGenerator(){
	yield 1
  return 2
  yield 3
}

const dosome = someGenerator()
console.log(dosome.next())
console.log(dosome.next())
console.log(dosome.next())

function* someGenerator(){
yield 2
console.log(yield)
console.log(yield)
console.log(yield)
}

const dosome = someGenerator()
console.log(dosome.next())
console.log(dosome.next(2))
console.log(dosome.next(3))


