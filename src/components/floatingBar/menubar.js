import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import Tabs from '@mui/material/Tabs';
import { BORDER_RADIUS_2 } from '../utils/border'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: COLOR_BDAZZLED_BLUE,
  },
  floatBar: {
    position: 'relative',
    background: COLOR_RICH_BLACK,
    borderRadius: BORDER_RADIUS_2,
    marginTop: '65px',
    display: 'table',
    margin: '0 auto',
  }

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
        <Tab
          label="A tua loja"
          value={0}
          sx={{
            color: COLOR_BDAZZLED_BLUE,
            ':hover': {
              color: COLOR_SHADOW_BLUE,
              alignItems: 'center',
              justifyContent: 'center',
            },
            '&.Mui-selected': {
              color: COLOR_BDAZZLED_BLUE,
              ':hover': {
                color: COLOR_SHADOW_BLUE,
              },
            },
          }}
        />
        <Tab
          label="Novidades"
          value={1}
          sx={{
            color: COLOR_BDAZZLED_BLUE,
            ':hover': {
              color: COLOR_SHADOW_BLUE,
            },
            '&.Mui-selected': {
              color: COLOR_BDAZZLED_BLUE,
              ':hover': {
                color: COLOR_SHADOW_BLUE,
              },
            },
          }}
        />
        <Tab
          label="Destaques"
          value={2}
          sx={{
            color: COLOR_BDAZZLED_BLUE,
            ':hover': {
              color: COLOR_SHADOW_BLUE,
            },
            '&.Mui-selected': {
              color: COLOR_BDAZZLED_BLUE,
              ':hover': {
                color: COLOR_SHADOW_BLUE,
              },
            },
          }}
        />
        <Tab
          label="Estatísticas"
          value={3}
          sx={{
            color: COLOR_BDAZZLED_BLUE,
            ':hover': {
              color: COLOR_SHADOW_BLUE,
            },
            '&.Mui-selected': {
              color: COLOR_BDAZZLED_BLUE,
              ':hover': {
                color: COLOR_SHADOW_BLUE,
              },
            },
          }}
        />
      </Tabs>

    </TabContext >
  )
}