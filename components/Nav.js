import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/scss/nav.scss';


export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
  
	const handleClick = event => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};


	return (
		<div className="Navbar">
			<div className="snav">
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					Home
				</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					About
				</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					Events
				</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					Gallery
				</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					Team
				</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					Alumini
				</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="navitems">
					Contact us
				</Button>
			</div>	
		 
		</div>
	  );
	}