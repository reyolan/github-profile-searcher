import { useEffect } from "react";
import { Input, createStyles, InputWrapper } from "@mantine/core";
import { Search } from "tabler-icons-react";
import postRequest from "../utils/api";

const useStyles = createStyles(theme => ({
  input: {
    maxWidth: "500px",
    margin: "8px auto",
    textAlign: "center",
  },
}));

function SearchBar() {
  const { classes } = useStyles();

  useEffect(() => {
    const req = postRequest("reyolan").then(res => console.log(res));
  }, []);
  return (
    <InputWrapper className={classes.input} error="User not found" size="md">
      <Input
        icon={<Search size={18} strokeWidth={2} color={"black"} />}
        placeholder="Search profile"
        radius="lg"
        size="lg"
      />
    </InputWrapper>
  );
}

export default SearchBar;
