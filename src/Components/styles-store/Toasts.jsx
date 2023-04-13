import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ErrorToast() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert sx={{fontFamily:"poppins"}} variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
    </Stack>
  );
}

export function WarningToast() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert sx={{fontFamily:"poppins"}} variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
    </Stack>
  );
}

export function InfoToast() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert sx={{fontFamily:"poppins"}} variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
    </Stack>
  );
}

export function SuccessToast() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert sx={{fontFamily:"poppins"}} variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
