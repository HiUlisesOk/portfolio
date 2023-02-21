import React from 'react'
import Trello from '../images/Assets/left skills/icon _trello_.png'
import Auth0 from '../images/Assets/left skills/icon _auth0_.png'
import Jquery from '../images/Assets/left skills/icon _jquery_.png'
import Jest from '../images/Assets/left skills/icon _jest_.png'
import MaterialUi from '../images/Assets/left skills/icon _material ui_.png'
import Npm from '../images/Assets/left skills/icon _npm_.png'
import Figma from '../images/Assets/left skills/icon _figma_.png'
import Canva from '../images/Assets/left skills/icon _canva_.png'
import Ps from '../images/Assets/left skills/icon _adobephotoshop_.png'
import Lr from '../images/Assets/left skills/icon _adobelightroomcc_.png'

import Premiere from '../images/Assets/right skills/icon _adobepremierepro_.png'
import Notion from '../images/Assets/right skills/icon _amazonaws_.png'
import Slack from '../images/Assets/right skills/icon _bootstrap_.png'
import Aws from '../images/Assets/right skills/icon _slack_.png'
import Windows from '../images/Assets/right skills/icon _notion_.png'
import Bootstrap from '../images/Assets/right skills/icon _insomnia_.png'
import Jira from '../images/Assets/right skills/icon _jira_.png'
import Obs from '../images/Assets/right skills/icon _obsstudio_.png'
import Insomnia from '../images/Assets/right skills/icon _visualstudiocode_.png'
import VisualStudio from '../images/Assets/right skills/icon _windows_.png'

const left = [Trello, Auth0, Jquery, Jest, MaterialUi, Npm, Figma, Canva, Ps, Lr]
const Right = [Premiere, Notion, Slack, Aws, Windows, Bootstrap, Jira, Obs, Insomnia, VisualStudio]

const SkillsColumn = ({ direction }) => {
	return (
		<div>{direction ? left.map((skill, index) => <div key={skill + index}><img src={skill} /></div>) : Right.map((skill, index) => <div key={skill + index}><img src={skill} /></div>)}</div>
	)
}

export default SkillsColumn