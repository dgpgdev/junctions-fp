const stripSlashes = str => {
  str = str.replace(/\\'/g, "'")
  str = str.replace(/\\"/g, '"')
  str = str.replace(/\\0/g, '\0')
  str = str.replace(/\\\\/g, '\\')
  return str
}

export default stripSlashes
