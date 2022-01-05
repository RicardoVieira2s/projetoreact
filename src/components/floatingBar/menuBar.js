import React from 'react'
import { COLOR_RICH_BLACK, COLOR_OXFORD_BLUE, COLOR_BDAZZLED_BLUE, COLOR_SHADOW_BLUE, COLOR_PLATINIUM } from '../utils/color'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

// const Tab = styled(TabUnstyled)`
//     color: ${COLOR_PLATINIUM};
//     cursor: pointer;
//     font-size: 20px;
//     background-color: transparent;
//     width: 100%;
//     padding: 12px 16px;
//     margin: 6px 6px;
//     border: none;
//     border-radius: 5px;
//     display: center;
//     justify-content: center;

//     &:hover {
//       background-color: ${COLOR_OXFORD_BLUE};
//     }

//     &.${buttonUnstyledClasses.focusVisible} {
//       color: #fff;
//       outline: none;
//       background-color: ${COLOR_BDAZZLED_BLUE};
//     }

//     &.${tabUnstyledClasses.selected} {
//       background-color: ${COLOR_RICH_BLACK};
//       color: ${COLOR_SHADOW_BLUE};
//     }

//     &.${buttonUnstyledClasses.disabled} {
//       opacity: 0.5;
//       cursor: not-allowed;
//     }
//   `;

// const TabPanel = styled(TabPanelUnstyled)`
//     width: 100%;
//   `;

// const TabsList = styled(TabsListUnstyled)`
//     min-width: 320px;
//     Width: 900px;
//     background-color: ${COLOR_RICH_BLACK};
//     border-radius: 10px;
//     margin-bottom: 16px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     align-content: space-between;
//     centered;
//   `;

export default function MenuBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ width: '100%' }}>
        <TabList
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"
        >
          <Tab label="A tua loja" value={0} />
          <Tab label="Novidades" value={1} />
          <Tab label="Destaques" value={2} />
          <Tab label="Estatísticas" value={3} />
        </TabList>
      </Box>
      <TabPanel
        value={0}
      >
        <h1>dasdas</h1>
      </TabPanel>
      <TabPanel
        value={1}
      >
        <h1>dasdas</h1>
      </TabPanel>
      <TabPanel
        value={2}
      >
        <h1>dasdas</h1>
      </TabPanel>
      <TabPanel
        value={3}
      >
        <h1>dasdas</h1>
      </TabPanel>
    </TabContext>
  )
}