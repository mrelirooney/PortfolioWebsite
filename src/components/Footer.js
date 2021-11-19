import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
	return (
		<BottomNavigation>
			<BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}}/>} />
			<BottomNavigationAction label="Twitter" icon={<TwitterIcon style={{fill: "#3b5998"}}/>} />
			<BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#3b5998"}}/>} />
			<BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{fill: "#3b5998"}}/>} />
		</BottomNavigation>
	)
}

export default Footer