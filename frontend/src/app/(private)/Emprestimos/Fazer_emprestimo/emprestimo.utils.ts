
export const getDateAfter10Days = ()=> {
    const dateNow = new Date()

    dateNow.setDate(dateNow.getDate() + 10)

    return String(dateNow.toLocaleDateString("PT-BR"));
}