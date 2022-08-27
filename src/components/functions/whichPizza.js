const whichPizza = (quanL, sizeL,
    quanS, sizeS) => {

    const largeArea = Math.pow(
     sizeL / 2, 2) * (quanL * Math
     .PI)
    const smallArea = Math.pow(
     sizeS / 2, 2) * (quanS * Math
     .PI)
     
     const percentL = Math.floor(((
      largeArea -
      smallArea) / smallArea) * 100)
      
      const percentS = Math.floor(((smallArea -
      largeArea) / largeArea) * 100)

      console.log({
        largeArea: largeArea,
        smallArea: smallArea,
        percentL: percentL,
        percentS: percentS
      })
      
    if (largeArea > smallArea) {
     return `${quanL} x ${sizeL}" ${quanL > 1 ? 'pizzas' : 'pizza'} would give you ${percentL}% more pizza. That's an extra ${Math.round(8 * (percentL / 100))} slices!`
    } else {
      return `${quanS} x ${sizeS}" ${quanS > 1 ? 'pizzas' : 'pizza'} would give you ${percentS}% more pizza. That's an extra ${Math.round(8 * (percentS / 100))} slices!`
   
    }
   }

export default whichPizza