import React from "react";
import clsx from "clsx";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function InvestmentCard({ label, period, percent, min, max, index }) {
  return (
    <Card
      className={clsx("col-span-4 md:w-[300px]", {
        ["md:col-span-2 bg-cyan-600 text-white"]: index === 2,
        ["md:col-span-1"]: index <= 1 || index >= 3,
        ["md:place-self-start"]: index === 1 || index === 4,
        ["md:place-self-end"]: index === 0 || index === 3,
      })}
    >
      <CardContent className="flex flex-col justify-center items-center gap-1">
        <Typography>{label}</Typography>
        <Typography>{percent}</Typography>
        <Typography>{period}</Typography>
        <Typography>Min Deposit: {min}$</Typography>
        <Typography>Max Deposit: {max}$</Typography>
        <Button>Let's Go</Button>
      </CardContent>
    </Card>
  );
}

export default InvestmentCard;
