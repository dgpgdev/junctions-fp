const addSlashes = str => {
  str = str.replace(/\\/g, '\\\\')
  str = str.replace(/\'/g, "\\'")
  str = str.replace(/\"/g, '\\"')
  str = str.replace(/\0/g, '\\0')
  return str
}

export default addSlashes
