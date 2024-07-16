import ResponsiveAppBar from "../components/Appbar";
import IconBreadcrumbs from "../components/breadcrumbs";
import { Box } from "@mui/system";

import GridContainer from "../components/grid";

function LandingPage() {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <ResponsiveAppBar />
      </Box>
      <Box sx={{ px: 2, py: 1, display: "flex", justifyContent: "center" }}>
        <IconBreadcrumbs />
      </Box>
      <Box sx={{ px: 2, py: 1, display: "flex", justifyContent: "center" }}>
        <GridContainer />
      </Box>
    </Box>
  );
}

export default LandingPage;
