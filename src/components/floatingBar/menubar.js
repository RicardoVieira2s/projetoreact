import React from 'react'
import { COLOR_RICH_BLACK, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE } from '../utils/color'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import Tabs from '@mui/material/Tabs';
import { BORDER_RADIUS_10PX } from '../utils/border'
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: COLOR_BDAZZLED_BLUE,    
    color: COLOR_SHADOW_BLUE,
  },
  floatBar: {
    position: 'relative',
    background: COLOR_RICH_BLACK,
    borderRadius: BORDER_RADIUS_10PX,
    marginTop: '65px',
    display: 'table',
    margin: '0 auto',    
    color: COLOR_SHADOW_BLUE,
  },
  tabsConfig: {
    color: COLOR_SHADOW_BLUE,
    ':hover': {
      color: COLOR_SHADOW_BLUE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&.Mui-selected': {
      color: COLOR_SHADOW_BLUE,
      ':hover': {
        color: COLOR_SHADOW_BLUE,
      },
    },

  },
}));

export default function MenuBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (

    <TabContext value={value}>
      <Tabs className={classes.floatBar}
        onChange={handleChange}
        TabIndicatorProps={{ className: classes.indicator }}
      >
        <Link to="/">
          <Tab
            label="A tua loja"
            value={0}
            className={classes.tabsConfig}
          />
        </Link>
        <Link to="/news">
          <Tab
            label="Novidades"
            value={1}
            className={classes.tabsConfig}
          />
        </Link>
        <Link to="/featured">
          <Tab
            label="Destaques"
            value={2}
            className={classes.tabsConfig}
          />
        </Link>
        <Link to="/statistics">
          <Tab
            label="Estatísticas"
            value={3}
            className={classes.tabsConfig}
          />
        </Link>
      </Tabs>
    </TabContext >
  )
}