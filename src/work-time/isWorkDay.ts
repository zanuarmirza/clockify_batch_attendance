export const isWorkDay = (date:Date) =>{
    const day = date.getDay()
    if(day == 0 || day == 6){return false}
    return true
}