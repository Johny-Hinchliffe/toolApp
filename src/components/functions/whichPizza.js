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

      const slicesL = Math.round(8 * (percentL / 100))
      const slicesS = Math.round(8 * (percentS / 100))
    
    if (quanL === quanS && sizeL === sizeS){
      return 'Obviously they yield the same amount of pizza'
    }
    else if (percentL === 0 || percentS === 0){
      return `They pretty much give you a the same amount of pizza but the bigger one would have less crust`
    }
    else if (largeArea > smallArea) {
     return `${quanL} x ${sizeL}" ${quanL > 1 ? 'pizzas' : 'pizza'} would give you ${percentL}% more pizza. That's basically ${slicesL} extra ${slicesL > 1 ? 'slices' : 'slice'}!`
    } else {
      return `${quanS} x ${sizeS}" ${quanS > 1 ? 'pizzas' : 'pizza'} would give you ${percentS}% more pizza.  That's basically ${slicesS} extra ${slicesS > 1 ? 'slices' : 'slice'}!`
   
    }
   }

export default whichPizza