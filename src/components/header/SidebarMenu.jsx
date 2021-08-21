import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BiMenuAltRight } from "react-icons/bi";
import styles from './header.module.scss'
import Link from 'next/link'

const useStyles = makeStyles({
  list: {
    width: 250,
    background: 'grey',
    fontWeight: 600,
  },

  fullList: {
    width: 250,
    height: 800,
    background: 'grey',
  },
});



export function SidebarMenu() {

  const classes = useStyles();
  const [state, setState] = React.useState({
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    // className={clsx(classes.list, {
    //   [classes.fullList]: anchor === 'right' || anchor === 'bottom',
    // })}
    >
      <List className={styles.sideBarMenu}>
        {/* <span>Menu</span> */}
        <ListItem button key={"Inbox"} >
          <ListItemText className={styles.listItem}>
            <Link href="#about">
              <span><a>Sobre nós</a></span>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button key={"teste"}>
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText className={styles.listItem}>
          <Link href="#services">
              <span><a>Serviços</a></span>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button key={"teste"}>
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText className={styles.listItem}>
          <Link href="#portifolio">
              <span><a>Portifólio</a></span>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button key={"Inbox"}>
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText className={styles.listItem}>
          <Link href="#contact">
              <span><a>Contato</a></span>
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><BiMenuAltRight size={34} /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}