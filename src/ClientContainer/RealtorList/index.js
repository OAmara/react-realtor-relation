import React, { useEffect, useState } from 'react'

export default function RealtorList(props) {

	const [realtors, setRealtors] = useState({})

	const getRealtors = async () => {
		try{
			const realtorsResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/realtors/list', {

			})
			console.log('realtorsResponse: ', realtorsResponse);
			const realtorsJson = await realtorsResponse.json()
			console.log('\nrealtorsJson: ', realtorsJson);
			if(realtorsResponse.status === 200) {
				setRealtors(realtorsJson.data)
			}

		} catch(err) {
			console.error(err)
		}

	}

	useEffect(
		() => {
			getRealtors()	
		},
		// empty array tells useEffect to only execute on mount. Adding item/state specifies which one to update on, even after mount. i.e.[realtors]
		[]
	)

	console.log(realtors);
	return(
		<React.Fragment>
			{
				(realtors.length>0)
				?
				<p>{realtors[0].username}</p>
				:
				null
			}
			<p>A Realtor</p>
			<p>A Realtor</p>
			<p>A Realtor</p>
			<p>A Realtor</p>
		</React.Fragment>
	)
}