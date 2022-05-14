
async function Advance(diff, id) {
    console.log(diff, id)
    fetchData('/card/study', { id: id, diff: diff }, 'PUT')

}
