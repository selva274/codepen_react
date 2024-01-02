import React, { useEffect, useState } from 'react'
const NAME="-code-pen"
export default function useLocalStorage(key,initialValue) {
        const codekey=key+NAME;
        const [value,setValue]=useState(()=>{
            const jsonValue=localStorage.getItem(codekey)
            if(jsonValue!=null){
                return JSON.parse(jsonValue);
            }
            if(typeof initialValue==='function'){
                return initialValue()
            }else{
                return initialValue
            }
        })
        useEffect(()=>{
            localStorage.setItem(codekey,JSON.stringify(value))
        },[codekey,value])
        return [value,setValue]
}
