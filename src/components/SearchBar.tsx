import { Dispatch, SetStateAction, ChangeEvent, KeyboardEvent } from "react";
import { Input, createStyles, InputWrapper } from "@mantine/core";
import { Search } from "tabler-icons-react";

const useStyles = createStyles(theme => ({
  input: {
    maxWidth: "500px",
    margin: "8px auto",
    textAlign: "center",
  },
}));

type SearchBarProps = {
  setSearchInput: Dispatch<SetStateAction<string>>;
  onSubmit: (e: KeyboardEvent<HTMLInputElement>) => void;
};

function SearchBar({ setSearchInput, onSubmit }: SearchBarProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <InputWrapper className={classes.input} error="User not found" size="md">
      <Input
        icon={<Search size={18} strokeWidth={2} color={"black"} />}
        placeholder="Search profile"
        radius="lg"
        size="lg"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
        onKeyDown={onSubmit}
      />
    </InputWrapper>
  );
}

export default SearchBar;
