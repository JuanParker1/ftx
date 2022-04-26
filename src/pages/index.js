import React from "react";
import Layout from "../common/Layout";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import HomeHero from "../common/HomeHero";
import AuthLogin from "../common/AuthLogin";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InvestmentCard from "../common/InvestmentCard";
import { CURRENCY_TYPE, INVESTMENT_PLAN } from "../utils/constant";

function Home() {
  const [openLoginDialog, setLoginDialog] = React.useState(false);

  const toggleLoginDialog = () => {
    setLoginDialog((prev) => !prev);
  };

  return (
    <Layout toggleLoginDialog={toggleLoginDialog}>
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
                {CURRENCY_TYPE.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <div className="text-center self-center col-span-4 lg:col-span-1">
                <IconButton className="text-white self-center col-span-4 lg:col-span-1">
                  <Icon>swap_horiz</Icon>
                </IconButton>
              </div>
              <TextField
                select
                label="To Coin"
                variant="filled"
                className="col-span-4 lg:col-span-1"
              >
                {CURRENCY_TYPE.map((option) => (
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
              <Button color="secondary">Convert</Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="text-white text-center my-4">
          <Typography className="underline underline-offset-4 font-extrabold">
            FEATURED SERVICES
          </Typography>
          <Typography className="font-bold">
            A Company that list wallets, exchanges and other crypto related
            infomation.
          </Typography>
        </div>
        <div className="text-white text-center my-4">
          <Typography className="underline underline-offset-4 font-extrabold">
            INVESTMENT PLAN
          </Typography>
          <Typography className="font-bold">
            We offer the best prices for you!
          </Typography>
          <Typography>
            Pricing is the process whereby a business sets the price at which it
            will sell its products and services, and may be part of the
            business’s marketing plan.
          </Typography>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-8">
          {INVESTMENT_PLAN.map((item, index) => (
            <InvestmentCard
              key={index}
              min={item.min}
              max={item.max}
              label={item.label}
              period={item.period}
              percent={item.percent}
            />
          ))}
        </div>
      </Container>
      <AuthLogin
        openLoginDialog={openLoginDialog}
        toggleLoginDialog={toggleLoginDialog}
      />
    </Layout>
  );
}

export default Home;
