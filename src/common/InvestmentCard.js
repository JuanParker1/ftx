import React from "react";
import clsx from "clsx";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function InvestmentCard({ label, period, percent, min, max, className }) {
  return (
    <Card className={clsx("col-span-4 sm:col-span-1", { className })}>
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
