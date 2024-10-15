const enum CommonErrorMessage {
  Required = 'Required field'
}


export function getErrorMessage(error:any, field: string) {
  if(error[field]) {
    if(error[field].message) {return error[field].message}
    if(error[field] && !error[field].message) {return CommonErrorMessage.Required}
    return ''
  }
}

export function hasError(error:any, field: string): boolean {
  if(error[field] && error[field].message) {return true}
  else if(error[field] && error[field].type) {return true}
  return false
}