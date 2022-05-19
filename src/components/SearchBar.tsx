import { Dispatch, SetStateAction, ChangeEvent, KeyboardEvent } from "react";
import { Input, createStyles, InputWrapper } from "@mantine/core";
import { Search } from "tabler-icons-react";

const useStyles = createStyles(theme => ({
  inputWrapper: {
    maxWidth: "500px",
    margin: "32px auto",
    textAlign: "center",
  },
}));

type SearchBarProps = {
  setSearchInput: Dispatch<SetStateAction<string>>;
  onSubmit: (e: KeyboardEvent<HTMLInputElement>) => void;
  searchError: string;
};

function SearchBar({
  setSearchInput,
  onSubmit,
  searchError,
}: SearchBarProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <InputWrapper
      className={classes.inputWrapper}
      error={searchError}
      size="md"
    >
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
