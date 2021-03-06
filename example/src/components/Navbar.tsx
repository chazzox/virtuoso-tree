import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';

const NavWrapper = styled.div`
	background-color: ${props => props.theme.secondaryAccentBackground};
	display: flex;
	margin: 20px auto;
	width: fit-content;
	height: fit-content;
	padding: 8px;
	border-radius: 8px;
`;

const StyledNav = styled(NavLink)``;

const NavItem = styled.div`
	margin-right: 8px;
	padding: 8px 11px;
	text-transform: capitalize;
	flex-grow: 1;
	flex-basis: 0;
	width: 150px;
	position: relative;
	text-align: center;
	border-radius: 8px;
	color: ${props => props.theme.secondaryFont};
	&:hover {
		font-weight: 600;
		background-color: ${props => props.theme.primaryFont};
		color: ${props => props.theme.secondaryBackground};
	}
	${StyledNav}.active & {
		font-weight: 600;
		background-color: ${props => props.theme.primaryAccentBackground};
		color: ${props => props.theme.secondaryBackground};
	}
`;

const Navbar = () => {
	return (
		<NavWrapper>
			<StyledNav exact to="/">
				<NavItem>virtuoso-tree</NavItem>
			</StyledNav>
			<StyledNav to="/demo">
				<NavItem>demo</NavItem>
			</StyledNav>
			<StyledNav to="/docs">
				<NavItem>docs</NavItem>
			</StyledNav>
			<StyledNav to="/about">
				<NavItem>about</NavItem>
			</StyledNav>
			<NavItem style={{ cursor: 'pointer' }}>
				toggle theme
				<ThemeSelector />
			</NavItem>
		</NavWrapper>
	);
};

export default Navbar;
