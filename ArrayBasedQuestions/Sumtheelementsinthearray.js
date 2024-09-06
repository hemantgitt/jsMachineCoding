const arr = [ 1,2,3,4,5,6,7]

function processarray(){
    if(arr.length < 6){
        throw new Error("invalid array")
    }
    
    const SumofFirstThreeelemnet = arr.slice(0,3).reduce((acc , cur)=>{
          return acc + cur
    },0)
    
    const SumofSecondthreeElements = arr.slice(3,6).reduce((acc , cur)=>{
        return acc + cur 
    }, 0)
    
    const result = [SumofFirstThreeelemnet , SumofSecondthreeElements , ...arr.slice(6) ]
    
    return result;
}

const res = processarray(arr)

console.log(res)