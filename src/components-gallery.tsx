import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import FilterChipsCase from "./filter-chips-case";

function ComponentCard({ children, title }: { title: string, children: React.ReactNode }) {
  return (<Box my={2} >
    <Paper elevation={3}>
      <Box p={2}>
        <Typography variant='h4'>{title}</Typography>
        <Box mt={2}>
          {children}
        </Box>
      </Box>
    </Paper>
  </Box>)
}

export function ComponentsGallery() {
  return (<>
    <Typography variant='h3'>Components Gallery</Typography>
    <ComponentCard title="Filter Chips">
      <FilterChipsCase />
    </ComponentCard>
  </>);
}