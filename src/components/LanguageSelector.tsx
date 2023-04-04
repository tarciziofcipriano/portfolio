import React from "react";

import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem, Tooltip } from "@mui/material";
import i18n from "i18next";

import { getLanguage, languages } from "../translations/languages";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      <Tooltip title={t("TEXT.LANGUAGES")}>
        <Button
          id="language-button"
          aria-controls={open ? "language-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ fontSize: isMenu ? 12 : 13, pr: 0, pl: 0 }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <img
            loading="lazy"
            width="20"
            src={`/images/${currentLanguage.code}.png`}
            alt={`Flag of ${currentLanguage.label}`}
            style={{
              marginRight: isMenu ? 0 : 8,
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
          />
        </Button>
      </Tooltip>
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
