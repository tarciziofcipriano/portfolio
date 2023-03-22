import React from "react";

import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import i18n from "i18next";

import { getLanguage, languages } from "../translations/languages";

interface RowProps {
  language: {
    code: string;
    label: string;
  };
  isMenu?: boolean;
}

const Row = ({ language, isMenu = false }: RowProps) => {
  const { code, label } = language;

  return (
    <>
      <img
        loading="lazy"
        width="20"
        src={`/images/${code}.png`}
        alt={`Flag of ${label}`}
        style={{ marginRight: isMenu ? 0 : 8 }}
      />
      {label}
    </>
  );
};

interface LanguageSelectorProps {
  isMenu?: boolean;
}

const LanguageSelector = ({ isMenu }: LanguageSelectorProps) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(getLanguage());
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    localStorage.setItem("lang", currentLanguage.code);
  }, [currentLanguage.code]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: isMenu ? 12 : 13, fontWeight: "bold", pr: 0, pl: 0 }}
      >
        <img
          loading="lazy"
          width="20"
          src={`/images/${currentLanguage.code}.png`}
          alt={`Flag of ${currentLanguage.label}`}
          style={{ marginRight: isMenu ? 0 : 8 }}
        />
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => {
              i18n.changeLanguage(language.code);
              setCurrentLanguage(language);
              handleClose();
            }}
          >
            <Row language={language} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
