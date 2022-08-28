const ageDiff = (nameOne, bdayOne, nameTwo, bdayTwo) => {
  if(!nameOne || !bdayOne || !nameTwo || !bdayTwo){
    return ''
  }
  
	const date = new Date().getFullYear()
	const olderBirth = Number(bdayOne < bdayTwo ? bdayOne : bdayTwo)
	const youngerBirth = Number(bdayOne > bdayTwo ? bdayOne : bdayTwo)
	const olderName = bdayOne < bdayTwo ? nameOne : nameTwo
	const youngerName = bdayOne > bdayTwo ? nameOne : nameTwo
	const diff = Number(youngerBirth - olderBirth)
	const year = diff * 2 + olderBirth
	const olderAge = year - olderBirth
	const youngerAge = year - youngerBirth
	const word =
		date > year
			? `
  In ${year} ${youngerName} was ${youngerAge} and ${olderName} was double their age at ${olderAge}`
			: `In ${year} ${youngerName} will be ${youngerAge} and ${olderName} will be double their age at ${olderAge}`
	return word
}

export default ageDiff
