function encode_password(n, k, str) {
  let temp
  if (str.length !== n) {
    console.log("the password length is not correct")
  }
  else{
    for (let j = 0; j < k; j++) {
      let arr1 = []
      let arr = str.split('')
      let m = arr.pop()
      arr.unshift(m)
      str = arr.join('')
      for (let i = 0; i <= n-1; i++) {
        let ascicode = str.charCodeAt(i)
        if (ascicode === 122) {
          ascicode = 97
          arr1.push(String.fromCharCode(ascicode))
        } else {
          ascicode = ascicode + 1
          arr1.push(String.fromCharCode(ascicode))
        }
      }
      temp = arr1.join('')
      str = temp
    }
    console.log(temp)
  }
}
encode_password(3, 1, "abz")
encode_password(7,2,"aab")
