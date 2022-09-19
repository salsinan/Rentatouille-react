const apiRequest = async (url='', optionsObj=null, errMsg=null) => {
  try {
    const response = await fetch(url, optionsObj)
    if (!response) throw Error('Please reload the page')
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest
