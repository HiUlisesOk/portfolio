import React from 'react'
import { ImageStyles } from './styles'
const Image3d = (props) => {
	return (
		<div><ImageStyles {...props} src={props.image} ></ImageStyles></div>
	)
}

export default Image3d