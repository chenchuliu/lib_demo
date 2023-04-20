function add(...nums: number[]): number{
  return nums.reduce((prev, current)=>{
    return prev + current
  })
}

export default add