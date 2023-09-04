const fs = require("fs")

// Recursive function to get files
function getFolderFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    files.push(name);
  }
  return files;
}


function getUploadFileName(name, dir, alreadyUploaded) {
  const dirFiles = getFolderFiles(dir)
  const copiesLength = dirFiles.filter(f => f.match(name)).length
  if (!copiesLength) return name
  if (copiesLength === 1 && alreadyUploaded) return name
  if (alreadyUploaded) {
    return `${copiesLength - 1}${name}`
  }
  return `${copiesLength}${name}`

}


module.exports = {
  getUploadFileName
}