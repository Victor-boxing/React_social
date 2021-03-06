import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Navbar.module.css'


export const Navbar = (props) => {

	return (
		<nav className={css.nav}>

			{props.all.isAuth
				? <div className={css.li}><NavLink to='/profile' activeClassName={css.activeLink}>Profile</NavLink></div>
				: null
			}

			{props.all.isAuth
				? <div className={css.li}><NavLink to='/dialogs' activeClassName={css.activeLink}>Dialogs</NavLink></div>
				: null
			}

			<div className={css.li}>
				<NavLink to='/users' activeClassName={css.activeLink}>Users</NavLink>
			</div>


			<div className={css.li}>
				<NavLink to='#'>News</NavLink>
			</div>
			<div className={css.li}>
				<a href='#'>Music</a>
			</div>
			<div className={css.settings}>
				<a href='#'>Settings</a>
			</div>
		</nav>
	)
}
