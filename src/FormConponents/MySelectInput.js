import React from "react";
import { useField } from "formik";

import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputError from "./InputError";
import { ListSubheader } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const MySelectInput = ({ label, labelId, ...props }) => {
  const [field, meta] = useField({ ...props, type: "select" });

  return (
    <>
      <Box sx={{ minWidth: 300 }}>
        <FormControl style={{m: 1, width: 300 }}>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select multiple {...field} {...props}
          // input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          >
            <ListSubheader>Manufacturing</ListSubheader>
            <MenuItem value="Construction materials">Construction materials</MenuItem>
            <MenuItem value="Electronics and Optics">Electronics and Optics</MenuItem>
            <ListSubheader>Food and Beverage</ListSubheader>
            <MenuItem value="Bakery and confectionery products">
              Bakery & confectionery products
            </MenuItem>
            <MenuItem value="Beverages">
              Beverages
            </MenuItem>
            <MenuItem value="Fish and fish products">
              Fish & fish products
            </MenuItem>
            <MenuItem value="Meat and meat products">
              Meat & meat products
            </MenuItem>
            <MenuItem value="Milk and dairy products">
              Milk & dairy products
            </MenuItem>
            <MenuItem value="Other">
              Other
            </MenuItem>
            <MenuItem value="Sweets and snack food">
              Sweets & snack food
            </MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Bathroom or sauna">
              Bathroom/sauna
            </MenuItem>
            <MenuItem value="Bedroom">
              Bedroom
            </MenuItem>
            <MenuItem value="Childrens room">
              Childrens room
            </MenuItem>
            <MenuItem value="Kitchen">
              Kitchen
            </MenuItem>
            <MenuItem value="Living room">
              Living room
            </MenuItem>
            <MenuItem value="Office">
              Office
            </MenuItem>
            <MenuItem value="Other (Furniture)">
              Other (Furniture)
            </MenuItem>
            <MenuItem value="Outdoor">
              Outdoor
            </MenuItem>
            <MenuItem value="Project furniture">
              Project furniture
            </MenuItem>
            <MenuItem value="Machinery">Machinery</MenuItem>
            <ListSubheader>
              Machinery components
            </ListSubheader>
            <MenuItem value="Machinery equipment/tools">
              Machinery equipment/tools
            </MenuItem>
            <MenuItem value="Manufacture of machinery">
              Manufacture of machinery
            </MenuItem>
            <ListSubheader>
              Maritime
            </ListSubheader>
            <MenuItem value="Aluminium and steel workboats">
              Aluminium and steel workboats
            </MenuItem>
            <MenuItem value="Boat/Yacht building">
              Boat/Yacht building
            </MenuItem>
            <MenuItem value="Ship repair and conversion">
              Ship repair and conversion
            </MenuItem>
            <MenuItem value="Metal structures">
              Metal structures
            </MenuItem>
            <MenuItem value="Other">
              Other
            </MenuItem>
            <MenuItem value="Repair and maintenance service">
              Repair and maintenance service
            </MenuItem>
            <ListSubheader>Metalworking</ListSubheader>
            <MenuItem value="Construction of metal structures">
              Construction of metal structures
            </MenuItem>
            <MenuItem value="Houses and buildings">
              Houses and buildings
            </MenuItem>
            <MenuItem value="Metal products">
              Metal products
            </MenuItem>
            <ListSubheader>
              Metal works
            </ListSubheader>
            <MenuItem value="CNC-machining">
              CNC-machining
            </MenuItem>
            <MenuItem value="Forgings, Fasteners">
              Forgings, Fasteners
            </MenuItem>
            <MenuItem value="Gas, Plasma, Laser cutting">
              Gas, Plasma, Laser cutting
            </MenuItem>
            <MenuItem value="MIG, TIG, Aluminum welding">
              MIG, TIG, Aluminum welding
            </MenuItem>
            <ListSubheader>
              Plastic and Rubber
            </ListSubheader>
            <MenuItem value="Packaging">
              Packaging
            </MenuItem>
            <MenuItem value="556">
              Plastic goods
            </MenuItem>
            <ListSubheader>
              Plastic processing technology
            </ListSubheader>
            <MenuItem value="Blowing">
              Blowing
            </MenuItem>
            <MenuItem value="Moulding">
              Moulding
            </MenuItem>
            <MenuItem value="Plastics welding and processing">
              Plastics welding and processing
            </MenuItem>
            <MenuItem value="Plastic profiles">
              Plastic profiles
            </MenuItem>
            <ListSubheader>Printing </ListSubheader>
            <MenuItem value="Advertising">
              Advertising
            </MenuItem>
            <MenuItem value="Book/Periodicals printing">
              Book/Periodicals printing
            </MenuItem>
            <MenuItem value="Labelling and packaging printing">
              Labelling and packaging printing
            </MenuItem>
            <ListSubheader>
              Textile and Clothing
            </ListSubheader>
            <MenuItem value="Clothing">
              Clothing
            </MenuItem>
            <MenuItem value="Textile">
              Textile
            </MenuItem>
            <ListSubheader>Wood</ListSubheader>
            <MenuItem value="Other (Wood)">
              Other (Wood)
            </MenuItem>
            <MenuItem value="Wooden building materials">
              Wooden building materials
            </MenuItem>
            <MenuItem value="Wooden houses">
              Wooden houses
            </MenuItem>
            <ListSubheader>Other</ListSubheader>
            <MenuItem value="Creative industries">
              Creative industries
            </MenuItem>
            <MenuItem value="Energy technology">
              Energy technology
            </MenuItem>
            <MenuItem value="Environment">Environment</MenuItem>
            <ListSubheader>Service</ListSubheader>
            <MenuItem value="Business services">
              Business services
            </MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <ListSubheader>
              Information Technology and Telecommunications
            </ListSubheader>
            <MenuItem value="Data processing, Web portals, E-marketing">
              Data processing, Web portals, E-marketing
            </MenuItem>
            <MenuItem value="Programming, Consultancy">
              Programming, Consultancy
            </MenuItem>
            <MenuItem value="Software, Hardware">
              Software, Hardware
            </MenuItem>
            <MenuItem value="Telecommunications">
              Telecommunications
            </MenuItem>
            <MenuItem value="Tourism">Tourism</MenuItem>
            <MenuItem value="Translation services">
              Translation services
            </MenuItem>
            <ListSubheader>
              Transport and Logistics
            </ListSubheader>
            <MenuItem value="Air">
              Air
            </MenuItem>
            <MenuItem value="Rail">
              Rail
            </MenuItem>
            <MenuItem value="Road">
              Road
            </MenuItem>
            <MenuItem value="Water">
              Water
            </MenuItem>
          </Select>
        </FormControl>

        {meta.touched && meta.error && <InputError error={meta.error} />}
      </Box>
    </>
  );
};

export default MySelectInput;
