import React from 'react'
import logo from '../LogoMrERIcon2.png'
import logoMobile from '../LogoMrERIcon2.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "3%", 
        ['@media (max-width:25px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "5%", 
        display: "none", 
        ['@media (max-width:25px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
	const classes = styles()
return (
		<Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
			<img src={logo} alt={"Testing"} className={classes.logo}/>
			<img src={logoMobile} alt={"Testing2"} className={classes.logoMobile}/>
			<Typography variant="h6" className={classes.menuItem}>
				About Me
			</Typography>
			<Typography variant="h6" className={classes.menuItem}>
				VFX
			</Typography>
			<Typography variant="h6" className={classes.menuItem}>
				Photography
			</Typography>
			<Typography variant="h6" className={classes.menuItem}>
				NFT
			</Typography>
			
		</Toolbar>
	)

}

export default NavBar