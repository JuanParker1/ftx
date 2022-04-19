import React from "react";
import Layout from "../common/Layout";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import HomeHero from "../common/HomeHero";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

function Home() {
  return (
    <Layout>
      <HomeHero />
      <div className="flex flex-col my-8 px-2">
        <Button size="large" className="block lg:hidden font-bold ">
          Create Free Account
        </Button>
      </div>
      <div className="bg-[#1C2230] mb-9">
        <Container maxWidth="xl">
          <div className="flex flex-col items-center py-7">
            <div className="grid grid-cols-4 gap-3 my-7 justify-center">
              <TextField
                select
                label="From Coin"
                variant="filled"
                className="col-span-4 lg:col-span-1"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <IconButton className="text-white self-center col-span-4 lg:col-span-1">
                <Icon>swap_horiz</Icon>
              </IconButton>
              <TextField
                select
                label="To Coin"
                variant="filled"
                className="col-span-4 lg:col-span-1"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                type="number"
                label="Quantity"
                variant="filled"
                className="col-span-4 lg:col-span-1"
              />
            </div>
            <div className="flex gap-2">
              <Button>Login</Button>
              <Button>Convert</Button>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Home;

const currencies = [{ label: "USD(USD)", value: "USD" }];
