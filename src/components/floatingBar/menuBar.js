import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Divider from '@mui/material/Divider';
import { BORDER_RADIUS_2 } from '../utils/border'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: COLOR_BDAZZLED_BLUE,
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
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <TabList
          onChange={handleChange}
          centered
          sx={{
            background: COLOR_RICH_BLACK,
            borderRadius: BORDER_RADIUS_2,
            width: '950px',
            height: '70px',
            alignItems: 'center',
          }}
          TabIndicatorProps={{ className: classes.indicator }}
        >
          <Tab
            label="A tua loja"
            value={0}
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginTop: 1, marginBottom: 1, background: COLOR_PLATINIUM }}
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginTop: 1, marginBottom: 1, background: COLOR_PLATINIUM }}
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginTop: 1, marginBottom: 1, background: COLOR_PLATINIUM }}
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
        </TabList>
      </Box>

      <TabPanel
        value={0}
      >
        <p>dasdas</p>
      </TabPanel>
      <TabPanel
        value={1}
      >
        <p>dasdas</p>
      </TabPanel>
      <TabPanel
        value={2}
      >
        <p>dasdas</p>
      </TabPanel>
      <TabPanel
        value={3}
      >
        <p>dasdas</p>
      </TabPanel>
    </TabContext>
  )
}
