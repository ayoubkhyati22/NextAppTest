import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VehiculeTab from './VehiculeTab';
import ClientTab from './ClientTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsMenu = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
  return (
    <>
    <h2>Criteres de recherche</h2>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Recherche par vehicule" {...a11yProps(0)} />
    <Tab label="Recherche par beneficiaire" {...a11yProps(1)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0}>
  <VehiculeTab/>
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  <ClientTab/>
</CustomTabPanel>

    </>
  )
}

export default TabsMenu