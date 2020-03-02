import React, { useEffect } from 'react'

export default function RealtorList(props) {


	const getRealtors = async () => {
		try{
			const realtorsResponse = await fetch(process.env.REACT_APP_MEN_API_URL + '/api/v1.0/realtors/list', {

			})
			console.log('realtorsResponse: ', realtorsResponse);
			const realtorsJson = await realtorsResponse.json()
			console.log('\nrealtorsJson: ', realtorsJson);

		} catch(err) {
			console.error(err)
		}

	}

	useEffect(() => {
		getRealtors()	
	})

	return(
		<React.Fragment>
			<p>A Realtor</p>
			<p>A Realtor</p>
			<p>A Realtor</p>
			<p>A Realtor</p>
		</React.Fragment>
	)
}